import React from 'react';
import { motion } from 'framer-motion';
export function BonusSection() {
  const bonuses = [
  {
    title: 'Cuaderno de Actividades con Imágenes',
    value: 10
  },
  {
    title: 'Cuaderno de Rompecabezas del Alfabeto',
    value: 11
  },
  {
    title: 'Cuaderno para Formar Palabras',
    value: 10
  },
  {
    title: 'Cuaderno del Alfabeto para vocalizar',
    value: 9
  },
  {
    title: 'Cuaderno de Los números con Trazado',
    value: 10
  },
  {
    title: 'Cuaderno de las Letras con Trazado',
    value: 10
  }];

  return (
    <section className="py-16 px-4 bg-warmGold border-y-4 border-gold pt-[50px] pb-[50px]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
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
          
          <div className="inline-block bg-gold text-white font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wider text-sm">
            Oferta Especial
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-dark">
            6 Bonos incluidos sin costo extra:
          </h2>
        </motion.div>

        <div className="space-y-6">
          {bonuses.map((bonus, idx) =>
          <motion.div
            key={idx}
            className="bg-white rounded-2xl p-4 md:p-6 shadow-md border-2 border-gold/20 flex flex-col md:flex-row items-center gap-6 pt-[10px] pb-[10px]"
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1
            }}>
            
              {/* Thumbnail Placeholder */}
              <div className="w-32 h-32 bg-cream rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                <span className="text-4xl">🎁</span>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-heading font-bold text-dark mb-2">
                  Bono #{idx + 1}: {bonus.title}
                </h4>
                <p className="text-body mb-3">
                  Complemento ideal para acelerar el aprendizaje de forma
                  divertida.
                </p>
                <div className="inline-block bg-green-50 text-success font-bold px-3 py-1 rounded-lg text-sm border border-green-200">
                  Valor:{' '}
                  <span className="line-through text-gray-400 mr-1">
                    U${bonus.value}
                  </span>{' '}
                  (GRATIS)
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
