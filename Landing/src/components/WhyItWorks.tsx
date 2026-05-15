import React, { memo } from 'react';
import { motion } from 'framer-motion';
export function WhyItWorks() {
  return (
    <section className="py-16 px-4 bg-white pt-[20px] pb-[20px]">
      <motion.div
        className="max-w-3xl mx-auto text-center"
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

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-8">
          Antes de leer, el cerebro necesita prepararse. Y acá está el secreto.
        </h2>

        <div className="mb-10 w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center min-h-[250px]">
          {/* Cambia la ruta en 'src' por tu archivo de video, ej. '/mi-video.mp4' */}
          <video
            src="/Vid muestra.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <p className="text-lg text-body leading-relaxed text-left md:text-center">
          Las actividades de grafismo fonético trabajan la conciencia
          fonológica, la capacidad del cerebro de reconocer sonidos, sílabas y
          patrones, de manera lúdica y progresiva. Al trazar líneas, curvas y
          formas, tu hijo fortalece las conexiones neuronales que hacen que la
          lectura "haga clic" de forma natural, sin memorización forzada.
        </p>
      </motion.div>
    </section>);

}