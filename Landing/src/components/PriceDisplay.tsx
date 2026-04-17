import React from 'react';

interface PriceDisplayProps {
  amount: number;
  className?: string;
  showCurrencyCode?: boolean;
}

export function PriceDisplay({
  amount,
  className = '',
  showCurrencyCode = false
}: PriceDisplayProps) {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);

  return (
    <span className={className}>
      {formattedPrice} {showCurrencyCode ? 'ARS' : ''}
    </span>
  );
}
