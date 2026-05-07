import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PagoPendiente() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Clock className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-heading font-black text-dark mb-4">
          Tu pago está siendo procesado
        </h1>
        <p className="text-body font-medium mb-8">
          Estamos verificando tu pago. Cuando se acredite, recibirás un email
          con el acceso a tu Kit Fonético. Esto puede demorar unos minutos.
        </p>
        <Link
          to="/"
          className="inline-block bg-accent hover:bg-yellow-500 text-dark font-heading font-bold text-lg py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}
