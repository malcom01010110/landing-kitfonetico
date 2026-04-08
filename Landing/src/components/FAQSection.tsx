import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function FAQSection() {
  const faqs = [
  {
    question: '¿Cómo recibo el material?',
    answer:
    'Al completar tu compra recibís un email con acceso a la plataforma donde podés descargar todo en PDF de forma inmediata.'
  },
  {
    question: '¿Puedo imprimirlo más de una vez?',
    answer:
    'Sí, el acceso es de por vida. Podés imprimirlo todas las veces que necesites.'
  },
  {
    question: '¿Puedo pagar en mi moneda local?',
    answer:
    'Sí. El precio se convierte automáticamente a la moneda de tu país al momento de pagar.'
  },
  {
    question: '¿Para qué edad está pensado?',
    answer:
    'Para niños de 2 a 12 años. Las actividades están diseñadas para respetar el ritmo de cada etapa.'
  },
  {
    question: '¿Funciona si mi hijo tiene TDAH o dificultades de atención?',
    answer:
    'Sí. El enfoque lúdico y progresivo hace que sea especialmente efectivo para niños que necesitan un aprendizaje más visual y dinámico.'
  },
  {
    question: '¿Qué pasa si no me gusta?',
    answer:
    'Tenés 7 días para pedir el reembolso completo, sin ninguna condición.'
  }];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
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
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) =>
          <motion.div
            key={idx}
            className="border border-gray-200 rounded-xl overflow-hidden"
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1
            }}>
            
              <button
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(idx)}
              aria-expanded={openIndex === idx}>
              
                <span className="font-heading font-bold text-lg text-dark pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} />
              
              </button>

              <AnimatePresence>
                {openIndex === idx &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                    <div className="px-6 pb-4 pt-2 text-body bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}