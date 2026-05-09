import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';

export default function Privacy() {
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
        <h1 className="text-3xl md:text-4xl font-heading font-black mb-8 text-primary">Política de Privacidad</h1>
        
        <div className="space-y-6 text-body leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Información que Recolectamos</h2>
            <p>Al realizar una compra, recolectamos información básica como su nombre y correo electrónico necesaria para la entrega del producto digital. El procesamiento de pagos se realiza a través de plataformas seguras como MercadoPago o Tiendanube, por lo que nosotros no almacenamos sus datos de tarjeta de crédito.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Uso de la Información</h2>
            <p>Utilizamos su correo electrónico exclusivamente para enviarle el acceso al producto adquirido y, ocasionalmente, información relevante sobre actualizaciones del kit o nuevos recursos educativos que puedan ser de su interés.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Cookies y Tecnologías de Seguimiento</h2>
            <p>Este sitio utiliza cookies y el Píxel de Meta para entender mejor cómo los usuarios interactúan con nuestra página y mejorar nuestras campañas de marketing. Puede configurar su navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Protección de Datos</h2>
            <p>Nos comprometemos a no vender, alquilar ni compartir su información personal con terceros bajo ninguna circunstancia, excepto cuando sea requerido por ley.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Derechos del Usuario</h2>
            <p>Usted tiene derecho a solicitar la actualización o eliminación de sus datos de nuestra base de datos en cualquier momento enviando un correo a pequesfelicesok@gmail.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Enlaces a Terceros</h2>
            <p>Nuestra web puede contener enlaces a otros sitios de interés. Una vez que usted abandone nuestra página, no tenemos control sobre el sitio al que es redirigido y no somos responsables de la privacidad de sus datos en esos sitios.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
