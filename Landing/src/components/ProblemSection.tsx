import React from 'react';
import { motion } from 'framer-motion';
export function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-[#FDF6E3] space-y-[24px] pt-[24px] pb-[24px]">
      <motion.div
        className="max-w-3xl mx-auto pt-[0px] pb-[0px] space-y-[24px]"
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
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark text-center mb-10 leading-snug">
          Muchas mamás y papás creen que "cada niño tiene su tiempo"... hasta
          que empiezan a notar estas señales:
        </h2>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-red-100 mb-8 pt-[20px] pb-[20px] pl-[24px] pr-[24px] space-y-[24px]">
          <ul className="space-y-6">
            {[
            'Las tareas de lectura se convierten en un momento de llanto y frustración',
            'Las calificaciones no acompañan, por más que se esfuerce',
            'Tu hijo empieza a decir "yo no puedo" o "soy malo para leer"'].
            map((bullet, idx) =>
            <li key={idx} className="flex items-start gap-4">
                <span className="text-2xl shrink-0">😔</span>
                <span className="text-lg text-body font-medium pt-1">
                  {bullet}
                </span>
              </li>
            )}
          </ul>
        </div>

        <p className="text-center text-lg md:text-xl text-danger font-medium italic px-4">
          Y lo más doloroso es verlo compararse con sus compañeros y sentirse
          menos capaz, cuando vos sabés perfectamente que es un nene brillante.
        </p>
      </motion.div>
    </section>);

}