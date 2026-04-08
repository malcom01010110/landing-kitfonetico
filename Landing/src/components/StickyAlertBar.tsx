import React from 'react';
import { Zap } from 'lucide-react';
export function StickyAlertBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-accent text-dark py-2 px-4 shadow-md pt-[8px] pb-[8px]">
      <div className="max-w-4xl mx-auto flex items-center justify-center text-center text-sm md:text-base font-bold font-heading">
        <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2 animate-pulse" />
        <span>
          ⚡ Oferta especial por tiempo limitado ¡Acceso de por vida por solo
          $9.99!
        </span>
      </div>
    </div>);

}