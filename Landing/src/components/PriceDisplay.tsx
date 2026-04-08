import React, { useEffect, useState } from 'react';
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
  const [currencySymbol, setCurrencySymbol] = useState('U$');
  useEffect(() => {
    // Detect browser locale to set the appropriate currency symbol
    const locale = navigator.language || 'es-AR';
    if (
    locale.includes('es-ES') ||
    locale.includes('eu') ||
    locale.includes('ca'))
    {
      setCurrencySymbol('€');
    } else if (locale.includes('en-GB')) {
      setCurrencySymbol('£');
    } else if (locale.includes('en-US')) {
      setCurrencySymbol('$');
    } else {
      // Default for Latin America
      setCurrencySymbol('U$');
    }
  }, []);
  return (
    <span className={className}>
      {currencySymbol}
      {amount.toFixed(2)}{' '}
      {showCurrencyCode && currencySymbol === 'U$' ? 'USD' : ''}
    </span>);

}