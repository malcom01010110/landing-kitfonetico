import { useState } from "react";

const SHOPIFY_CONFIG = {
  domain: "h0ygyx-ew.myshopify.com",
  storefrontAccessToken: "3c722f5bd45d436d8c8a825d99a208fc",
  variantId: "gid://shopify/ProductVariant/51935759466798",
};

export default function ShopifyBuyButton({ className, children, onClick }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (onClick) onClick();
    setLoading(true);

    try {
      // Crea un checkout via Storefront API
      const response = await fetch(
        `https://${SHOPIFY_CONFIG.domain}/api/2023-10/graphql.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token":
              SHOPIFY_CONFIG.storefrontAccessToken,
          },
          body: JSON.stringify({
            query: `
              mutation {
                checkoutCreate(input: {
                  lineItems: [{ variantId: "${SHOPIFY_CONFIG.variantId}", quantity: 1 }]
                }) {
                  checkout {
                    webUrl
                  }
                  checkoutUserErrors {
                    message
                  }
                }
              }
            `,
          }),
        }
      );

      const data = await response.json();
      const errors = data?.data?.checkoutCreate?.checkoutUserErrors;
      const checkoutUrl = data?.data?.checkoutCreate?.checkout?.webUrl;

      if (errors?.length > 0) {
        console.error("Error de Shopify:", errors);
        setLoading(false);
        return;
      }

      if (checkoutUrl) {
        // Abre el checkout en la misma pestaña
        window.location.href = checkoutUrl;
      }
    } catch (err) {
      console.error("Error al crear el checkout:", err);
      setLoading(false);
    }
  }

  return (
    <button onClick={handleClick} className={className} disabled={loading}>
      {loading ? "Cargando..." : children || "Comprar ahora"}
    </button>
  );
}

