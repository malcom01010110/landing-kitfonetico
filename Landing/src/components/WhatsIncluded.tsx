import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Printer, PlayCircle } from 'lucide-react';
export function WhatsIncluded() {
  return (
    <section className="py-16 px-4 bg-white pt-[20px] pb-[20px]">
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
          
          <h2 className="text-3xl md:text-4xl font-heading font-black text-dark mb-4">
            Todo lo que recibís con Nuestro kit:
          </h2>
        </motion.div>

        {/* Core Kit */}
        <motion.div
          className="bg-lightTeal rounded-3xl p-8 md:p-10 shadow-sm mb-16 pt-[10px] pb-[10px]"
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
            duration: 0.6,
            delay: 0.2
          }}>
          
          <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">
            Kit Principal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm pt-[10px] pb-[10px]">
              <span className="text-3xl">📘</span>
              <span className="font-medium text-body">
                Actividades Nivel 1 — Palabras de 2 sílabas
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm pt-[10px] pb-[10px]">
              <span className="text-3xl">📗</span>
              <span className="font-medium text-body">
                Actividades Nivel 2 — Palabras de 3 sílabas
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm pt-[10px] pb-[10px]">
              <span className="text-3xl">📙</span>
              <span className="font-medium text-body">
                Actividades Nivel 3 — Palabras de 4 sílabas
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm pt-[10px] pb-[10px]">
              <span className="text-3xl">✏️</span>
              <span className="font-medium text-body">
                Ejercicios en letra cursiva e imprenta
              </span>
            </div>
            <div className="md:col-span-2 flex items-center justify-center gap-4 bg-primary text-white p-4 rounded-xl shadow-md mt-2 pt-[10px] pb-[10px]">
              <span className="text-2xl">➕</span>
              <span className="font-bold text-lg">
                Más de 90 actividades en total
              </span>
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          className="mt-16"
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
          
          <h3 className="text-2xl font-heading font-bold text-dark mb-8 text-center">
            Cómo funciona:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <p className="font-medium text-body">
                Comprás y recibís el acceso en tu email al instante
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="w-8 h-8 text-primary" />
              </div>
              <p className="font-medium text-body">
                Imprimís las veces que necesites, el acceso es de por vida
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlayCircle className="w-8 h-8 text-success" />
              </div>
              <p className="font-medium text-body">
                ¡Tu hijo empieza hoy mismo!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}