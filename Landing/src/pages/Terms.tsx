import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-body text-dark">
      <nav className="p-6">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-heading font-black mb-8 text-primary">Términos y Condiciones</h1>
        
        <div className="space-y-6 text-body leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar este sitio web y adquirir el "Kit de Grafismo Fonético", usted acepta cumplir con estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice nuestros servicios.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Uso del Material</h2>
            <p>El contenido del Kit es para uso personal y familiar exclusivo. Queda estrictamente prohibida la reventa, redistribución o uso comercial del material sin el consentimiento expreso por escrito de Pequeños Felices.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Descargo de Responsabilidad</h2>
            <p>Pequeños Felices proporciona herramientas educativas diseñadas para apoyar el aprendizaje. Sin embargo, los resultados pueden variar según el ritmo individual de cada niño y el acompañamiento brindado. No garantizamos resultados específicos en plazos determinados.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Política de Reembolso</h2>
            <p>Ofrecemos una garantía de satisfacción de 7 días. Si el material no cumple con sus expectativas, puede solicitar un reembolso total dentro de este plazo contactándonos vía email.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Propiedad Intelectual</h2>
            <p>Todos los diseños, textos e ilustraciones contenidos en el Kit son propiedad intelectual de Pequeños Felices y están protegidos por las leyes de derechos de autor.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio web.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
