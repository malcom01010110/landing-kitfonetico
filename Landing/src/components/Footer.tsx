import React from 'react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-2xl font-heading font-black text-white">
            Pequeños felices<span className="text-accent">.</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {currentYear} Todos los derechos reservados. Este sitio no es
          parte del sitio web de Facebook ni de Facebook Inc. Además, este sitio
          NO está respaldado por Facebook de ninguna manera. FACEBOOK es una
          marca registrada de FACEBOOK, Inc.
        </p>
      </div>
    </footer>);

}