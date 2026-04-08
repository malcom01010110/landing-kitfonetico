import React from 'react';
import { motion } from 'framer-motion';
export function ExpectedResults() {
  return (
    <section className="py-16 px-4 bg-cream pt-[20px] pb-[20px]">
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
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark text-center mb-10">
          En pocos días vas a notar la diferencia:
        </h2>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-md pt-[2px] pb-[2px] space-y-[24px]">
          <ul className="space-y-6">
            {[
            'Va a reconocer sílabas y sonidos con mucha más facilidad',
            'Va a sentirse más seguro al enfrentarse a palabras nuevas',
            'Va a mostrar más interés por los libros y las historias',
            'Va a aprender a su ritmo, sin frustración ni presión',
            'Y lo mejor: el momento de lectura en casa va a pasar de ser un drama a ser algo que los dos disfrutan'].
            map((result, idx) =>
            <li key={idx} className="flex items-start gap-4">
                <span className="text-2xl shrink-0">🌟</span>
                <span className="text-lg text-body font-medium pt-1">
                  {result}
                </span>
              </li>
            )}
          </ul>
        </div>
      </motion.div>
    </section>);

}