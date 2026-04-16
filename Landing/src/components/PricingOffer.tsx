import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock } from 'lucide-react';
import { PriceDisplay } from './PriceDisplay';
export function PricingOffer() {
  return (
    <section className="py-20 px-4 bg-white pt-[50px] pb-[50px]" id="pricing">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
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
            Todo esto, por una fracción de lo que vale:
          </h2>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl border-4 border-accent overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side: Value Stack */}
            <div className="flex-1 bg-cream p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="text-xl font-heading font-bold text-dark mb-6 text-center md:text-left">
                Resumen de tu pedido:
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-body font-medium">
                  <span>Kit principal</span>
                  <span>$15.000</span>
                </div>
                <div className="flex justify-between items-center text-body font-medium">
                  <span>6 Bonos Exclusivos</span>
                  <span>$58.000</span>
                </div>
                <div className="h-px bg-gray-300 w-full my-2"></div>
                <div className="flex justify-between items-center text-dark font-bold text-lg">
                  <span>Valor Total Real</span>
                  <span className="line-through text-danger">$73.000</span>
                </div>
              </div>

              <div className="relative w-full aspect-video bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-4">
                <div className="absolute -top-3 -right-3 bg-danger text-white font-bold px-3 py-1 rounded-full transform rotate-12 shadow-md">
                  -87% OFF
                </div>
                <span className="text-4xl">📚 + 🎁</span>
              </div>
            </div>

            {/* Right side: The Offer */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center items-center text-center">
              <p className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">
                Precio Hoy
              </p>

              <div className="text-6xl md:text-7xl font-heading font-black text-dark mb-4 flex items-start justify-center">
                <PriceDisplay amount={12.000} />
              </div>

              <p className="text-sm text-body font-medium mb-8 bg-gray-100 py-2 px-4 rounded-full">
                Pago único · En la moneda de tu país · Acceso de por vida
              </p>

              <motion.a
                href="https://pequesfelicesok.myshopify.com/cart/T10490522566958:1?checkout"
                onClick={() => (window as any).fbq("track", "AddToCart")}
                className="w-full bg-accent hover:bg-yellow-500 text-dark font-heading font-black text-xl py-5 px-8 rounded-2xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 mb-6"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}>
                
                <Lock className="w-6 h-6" />
                Quiero asegurar mi acceso ahora
              </motion.a>

              {/* Trust Elements */}
              <div className="w-full flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-success font-medium text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Pago 100% Seguro y Encriptado</span>
                </div>

                <div className="flex gap-3 opacity-60">
                  {/* Payment Method Placeholders */}
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">
                    VISA
                  </div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">
                    MC
                  </div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">
                    AMEX
                  </div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold">
                    PayPal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
