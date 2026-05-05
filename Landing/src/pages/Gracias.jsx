import { useEffect, useState } from "react";

// ============================================================
// PALETTE & TOKENS (consistent with Pequeños Felices branding)
// ============================================================
const C = {
  naranja: "#E8A020",
  naranjaOscuro: "#C8860A",
  verde: "#2A7D5F",
  verdeClaro: "#E8F5F0",
  crema: "#FDF6EC",
  cremaOscuro: "#F5EDD8",
  texto: "#2D2D2D",
  textoSuave: "#666666",
  blanco: "#FFFFFF",
  teal: "#3A9E85",
};

// ============================================================
// ANIMATIONS (CSS injected once)
// ============================================================
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { background: ${C.crema}; font-family: 'Nunito', sans-serif; color: ${C.texto}; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes popIn {
    0%   { opacity: 0; transform: scale(0.7); }
    70%  { transform: scale(1.08); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes confettiFall {
    0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.04); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .fade-up-1 { animation: fadeUp 0.6s ease both; animation-delay: 0.1s; }
  .fade-up-2 { animation: fadeUp 0.6s ease both; animation-delay: 0.25s; }
  .fade-up-3 { animation: fadeUp 0.6s ease both; animation-delay: 0.4s; }
  .fade-up-4 { animation: fadeUp 0.6s ease both; animation-delay: 0.55s; }
  .fade-up-5 { animation: fadeUp 0.6s ease both; animation-delay: 0.7s; }
  .fade-up-6 { animation: fadeUp 0.6s ease both; animation-delay: 0.85s; }

  .pop-in { animation: popIn 0.5s cubic-bezier(.36,.07,.19,.97) both; animation-delay: 0.2s; }

  .btn-primary {
    background: ${C.naranja};
    color: ${C.blanco};
    border: none;
    border-radius: 50px;
    padding: 18px 40px;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 6px 20px rgba(232,160,32,0.4);
    transition: transform 0.15s, box-shadow 0.15s;
    text-decoration: none;
    animation: pulse 2.5s ease-in-out infinite;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(232,160,32,0.5);
    animation: none;
  }

  .confetti-piece {
    position: fixed;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    animation: confettiFall linear forwards;
    pointer-events: none;
    z-index: 999;
  }

  .step-card {
    background: ${C.blanco};
    border-radius: 16px;
    padding: 20px 24px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .step-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  }

  .guarantee-badge {
    background: ${C.verdeClaro};
    border: 2px solid ${C.verde};
    border-radius: 16px;
    padding: 20px 28px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

// ============================================================
// CONFETTI
// ============================================================
const CONFETTI_COLORS = [C.naranja, C.verde, C.teal, "#F7C948", "#FF8C69", "#A8E6CF"];

function Confetti() {
  const pieces = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    duration: `${1.8 + Math.random() * 2}s`,
    delay: `${Math.random() * 1.2}s`,
    size: `${8 + Math.random() * 8}px`,
    borderRadius: Math.random() > 0.5 ? "50%" : "2px",
  }));

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            top: "-20px",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.borderRadius,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
}

// ============================================================
// STEP CARD
// ============================================================
function StepCard({ number, emoji, title, desc, delay }) {
  return (
    <div className={`step-card fade-up-${delay}`}>
      <div
        style={{
          minWidth: 44,
          height: 44,
          borderRadius: "50%",
          background: C.naranja,
          color: C.blanco,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 18,
          fontFamily: "Fraunces, serif",
        }}
      >
        {number}
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.texto, marginBottom: 4 }}>
          {emoji} {title}
        </div>
        <div style={{ fontSize: 14, color: C.textoSuave, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function Gracias() {
  const [showConfetti, setShowConfetti] = useState(true);

  // Meta Pixel Purchase event (reemplazá con tu pixel ID real)
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", { value: 12000, currency: "ARS" });
    }
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // URL de tu carpeta de Drive — reemplazá con el link real
  const DRIVE_URL = "https://drive.google.com/tu-carpeta-aqui";

  return (
    <>
      <style>{css}</style>
      {showConfetti && <Confetti />}

      <div style={{ minHeight: "100vh", background: C.crema }}>

        {/* ── HEADER ── */}
        <header
          style={{
            background: C.blanco,
            borderBottom: `3px solid ${C.naranja}`,
            padding: "16px 24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* REEMPLAZÁ ESTO CON TU LOGO */}
          <div
            style={{
              width: 140,
              height: 44,
              background: C.cremaOscuro,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              color: C.textoSuave,
              border: `1px dashed ${C.naranja}`,
            }}
          >
            [ Tu logo acá ]
          </div>
        </header>

        {/* ── HERO ── */}
        <section
          style={{
            background: `linear-gradient(135deg, ${C.verde} 0%, ${C.teal} 100%)`,
            padding: "56px 24px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* decorative circles */}
          <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", bottom: -60, left: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

          <div className="pop-in" style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>

          <h1
            className="fade-up-1"
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "clamp(28px, 6vw, 44px)",
              color: C.blanco,
              lineHeight: 1.2,
              marginBottom: 14,
              maxWidth: 600,
              margin: "0 auto 14px",
            }}
          >
            ¡Tu kit ya está listo!
          </h1>

          <p
            className="fade-up-2"
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 480,
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            Gracias por confiar en <strong>Pequeños Felices</strong>.<br />
            Tu hijo empieza a aprender hoy mismo. 💛
          </p>

          <div className="fade-up-3">
            <a
              href={DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 20, padding: "20px 48px" }}
            >
              📥 Acceder a mi kit ahora
            </a>
          </div>

          <p
            className="fade-up-4"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 14 }}
          >
            🔒 Acceso inmediato · Imprimís las veces que necesites
          </p>
        </section>

        {/* ── PASOS ── */}
        <section style={{ maxWidth: 640, margin: "0 auto", padding: "48px 24px 0" }}>
          <h2
            className="fade-up-3"
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: 26,
              textAlign: "center",
              color: C.texto,
              marginBottom: 8,
            }}
          >
            ¿Cómo empezar?
          </h2>
          <p
            className="fade-up-3"
            style={{ textAlign: "center", color: C.textoSuave, marginBottom: 28, fontSize: 15 }}
          >
            Tres pasos y tu hijo empieza hoy
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <StepCard
              number="1" delay={3}
              emoji="📂"
              title='Abrí el archivo "Empezá por acá"'
              desc="Dentro de la carpeta encontrás un PDF de bienvenida que te explica todo el contenido y cómo usarlo."
            />
            <StepCard
              number="2" delay={4}
              emoji="🖨️"
              title="Imprimí las actividades"
              desc="Llevá el kit a cualquier imprenta o imprimí desde casa. Podés hacerlo en color para mejores resultados."
            />
            <StepCard
              number="3" delay={5}
              emoji="🚀"
              title="¡A jugar y aprender!"
              desc="Solo 10 minutos al día son suficientes. Seguí el instructivo y acompañá a tu hijo a su ritmo."
            />
          </div>
        </section>

        {/* ── CTA SECUNDARIO ── */}
        <section style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px 0", textAlign: "center" }}>
          <div className="fade-up-5">
            <a
              href={DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              📥 Ir a mi carpeta
            </a>
          </div>
        </section>

        {/* ── GARANTÍA ── */}
        <section style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px 0" }}>
          <div className="guarantee-badge fade-up-5">
            <div style={{ fontSize: 40 }}>🛡️</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: C.verde, marginBottom: 4 }}>
                Garantía de 7 días
              </div>
              <div style={{ fontSize: 14, color: C.textoSuave, lineHeight: 1.5 }}>
                Si por cualquier motivo no quedás conforme, te devolvemos el 100% de tu dinero. Sin preguntas, sin vueltas.
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section
          className="fade-up-6"
          style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px 64px", textAlign: "center" }}
        >
          <p style={{ fontSize: 15, color: C.textoSuave, lineHeight: 1.7 }}>
            ¿Tenés alguna duda o consulta?<br />
            Escribinos a{" "}
            <a
              href="mailto:xxxx@gmail.com"
              style={{ color: C.naranjaOscuro, fontWeight: 700, textDecoration: "none" }}
            >
              xxxx@gmail.com
            </a>{" "}
            — estamos para acompañarlos en cada paso. 💛
          </p>
        </section>

      </div>
    </>
  );
}

