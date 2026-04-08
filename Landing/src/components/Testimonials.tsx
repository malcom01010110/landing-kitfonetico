import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
export function Testimonials() {
  const testimonials = [
  {
    quote:
    'Mi hija empezó a formar palabras en apenas dos semanas. No lo podía creer.',
    name: 'Ana',
    role: 'Mamá de 3 hijos'
  },
  {
    quote:
    'Es fácil de usar incluso para nosotros que no tenemos experiencia en enseñanza. Ver a mi hijo leer sus primeras palabras fue emocionante.',
    name: 'Bruno',
    role: 'Papá primerizo'
  },
  {
    quote:
    'Algo tan simple que marca tanta diferencia. Estoy muy contenta con la compra.',
    name: 'Camila',
    role: 'Mamá'
  }];

  return (
    <section className="py-20 px-4 bg-[#FDF6E3]">
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
          
          <h2 className="text-3xl md:text-4xl font-heading font-black text-dark mb-4">
            Esto es lo que dicen las familias que ya lo usaron:
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) =>
          <motion.div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col h-full"
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
              delay: idx * 0.2
            }}>
            
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-5 h-5 fill-current" />
              )}
              </div>

              <p className="text-body text-lg italic mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-lightTeal rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}