import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="pt-14 pb-10 px-5 md:pt-32 md:pb-24 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-4"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}>
          
          <div className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm mb-2 border border-gray-100 gap-1">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-4 h-4 fill-current" />
              )}
            </div>
            <span className="text-xs font-bold text-dark ml-2">
              Más de 500 padres satisfechos
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-dark leading-tight">
            Descubrí el método que está ayudando a miles de niños en
            Latinoamérica a aprender a leer hasta 5 veces más rápido ¡y de forma
            completamente natural!
          </h1>

          <p className="text-lg md:text-xl font-medium text-body">
            Solo 10 minutos al día. Desde casa. Sin presión. Sin frustración.
          </p>

          <ul className="space-y-3 text-left inline-block md:block">
            {[
            'Para niños de 2 a 12 años, a su propio ritmo',
            'Funciona aunque todavía no reconozca letras ni sonidos',
            'También para niños con TDAH, autismo o dificultades de atención'].
            map((bullet, idx) =>
            <li
              key={idx}
              className="flex items-start gap-3 text-body font-medium">
              
                <CheckCircle className="w-6 h-6 text-success shrink-0" />
                <span>{bullet}</span>
              </li>
            )}
          </ul>

          <motion.a
            href="https://pequesfelicesok.myshopify.com/cart/51935759466798:1"
            onClick={() => (window as any).fbq("track", "AddToCart")}
            className="inline-block w-full md:w-auto bg-accent hover:bg-yellow-500 text-dark font-heading font-bold text-lg md:text-xl py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 text-center pt-[16px] pb-[16px]"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}>
            
            👉 Quiero que mi hijo aprenda a leer rápido
          </motion.a>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          className="flex-1 w-full"
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}>
          
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/image.png_202604062021.jpg"
              alt="Niña aprendiendo a leer con el kit de lectura"
              className="w-full h-full object-cover" />
            
          </div>
        </motion.div>
      </div>
    </section>);

}
