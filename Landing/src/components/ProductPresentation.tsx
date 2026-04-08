import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
export function ProductPresentation() {
  return (
    <section className="py-20 px-4 bg-lightTeal pt-[20px] pb-[20px] space-y-[20px]">
      <div className="max-w-5xl mx-auto">
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
          
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-4">
            Por eso creamos este Super Kit
          </h2>
          <p className="text-lg md:text-xl text-body max-w-3xl mx-auto font-medium">
            Un kit de actividades basado en el método americano de
            alfabetización, diseñado para despertar la lectura en tu hijo de
            forma divertida, a su ritmo, y con resultados que vas a notar en
            pocos días.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Mockup Placeholder */}
          <motion.div
            className="flex-1 w-full"
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
              duration: 0.6,
              delay: 0.2
            }}>
            
            <div className="aspect-square rounded-3xl shadow-xl overflow-hidden">
              <img
                src="/mockup_landing.jpg"
                alt="Kit de Grafismo Fonético - Pequeños Felices"
                className="w-full h-full object-cover" />
              
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="flex-1"
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}>
            
            <ul className="space-y-5">
              {[
              'Desarrolla la motricidad fina mientras juega',
              'Estimula la atención y la creatividad naturalmente',
              'Fortalece las conexiones cerebrales clave para la lectura',
              'Despierta el amor por las palabras y los sonidos',
              'Todo en minutos al día, sin necesidad de ser maestra ni experta'].
              map((benefit, idx) =>
              <li
                key={idx}
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm pt-[10px] pb-[10px]">
                
                  <CheckCircle className="w-6 h-6 text-success shrink-0 mt-0.5" />
                  <span className="text-body font-medium text-lg">
                    {benefit}
                  </span>
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}