import React from 'react';
import { motion } from 'framer-motion';
export function RootCauseSection() {
  return (
    <section className="py-16 px-4 pt-[38px] pb-[38px]">
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
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6
        }}>
        
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-8 border-primary pt-[5px] pb-[5px]">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-6">
            ¿Sabías que el problema casi nunca es el niño?
          </h2>
          <p className="text-lg text-body leading-relaxed">
            Lo que frena la lectura en la mayoría de los casos es la falta de
            estimulación fonética en el momento justo. Y no es tu culpa.
            simplemente nadie te enseñó cómo hacerlo de una manera simple y
            efectiva desde casa.
          </p>
        </div>
      </motion.div>
    </section>);

}