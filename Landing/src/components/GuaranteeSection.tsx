import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
export function GuaranteeSection() {
  return (
    <section className="py-16 px-4 bg-cream">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-primary/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-6">
            Tu tranquilidad está garantizada — literalmente.
          </h2>

          <p className="text-lg text-body leading-relaxed">
            Tenemos tanta confianza en que El super kit va a ayudar a tu hijo
            que te damos{' '}
            <strong className="text-dark">7 días de garantía total</strong>. Si
            por cualquier motivo sentís que no fue lo que esperabas, nos avisás
            y te devolvemos el 100% de tu dinero — sin preguntas, sin vueltas.
            Comprás hoy, lo probás con calma, y solo seguís si ves resultados.
          </p>
        </div>
      </motion.div>
    </section>);

}