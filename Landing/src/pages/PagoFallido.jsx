import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PagoFallido() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <XCircle className="w-20 h-20 text-danger mx-auto mb-6" />
        <h1 className="text-3xl font-heading font-black text-dark mb-4">
          Hubo un problema con tu pago
        </h1>
        <p className="text-body font-medium mb-8">
          No te preocupes, no se realizó ningún cobro. Podés intentarlo de nuevo
          o contactarnos si el problema persiste.
        </p>
        <Link
          to="/#pricing"
          className="inline-block bg-accent hover:bg-yellow-500 text-dark font-heading font-bold text-lg py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Volver e intentar de nuevo
        </Link>
      </motion.div>
    </div>
  );
}
