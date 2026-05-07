import { useState, useCallback } from 'react';

interface CheckoutOptions {
  /** Pass true to prefer sandbox_init_point when it's available (test mode). */
  preferSandbox?: boolean;
}

interface UseCheckoutResult {
  loading: boolean;
  error: string | null;
  initiateCheckout: () => Promise<void>;
}

/**
 * useCheckout
 *
 * Calls POST /api/create-preference and redirects the user to the
 * MercadoPago Checkout Pro flow. The access token is never exposed to
 * the browser — it lives only in the serverless function.
 */
export function useCheckout({ preferSandbox = true }: CheckoutOptions = {}): UseCheckoutResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initiateCheckout = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `Server error ${res.status}`);
      }

      const { init_point, sandbox_init_point } = await res.json();

      // In test mode, prefer sandbox_init_point if available
      const url = (preferSandbox && sandbox_init_point) ? sandbox_init_point : init_point;

      if (!url) {
        throw new Error('No checkout URL received from server.');
      }

      window.location.href = url;
    } catch (err: any) {
      console.error('[useCheckout] Error:', err);
      setError(err.message ?? 'Ocurrió un error. Intentá de nuevo.');
      setLoading(false);
    }
    // Note: we don't reset loading to false on success because we're redirecting away.
  }, [preferSandbox]);

  return { loading, error, initiateCheckout };
}
