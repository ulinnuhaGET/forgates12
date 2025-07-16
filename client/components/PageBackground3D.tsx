import { useEffect, useState } from "react";

interface PageBackground3DProps {
  className?: string;
}

export default function PageBackground3D({
  className = "",
}: PageBackground3DProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Page-level 3D background with large geometric shapes */}
      <div className="relative w-full h-full">
        {/* Large floating geometric shapes for page background */}
        <div className="absolute top-20 left-20 w-64 h-64 border border-blue-200/30 rounded-full animate-spin-very-slow transform-gpu"></div>
        <div className="absolute top-40 right-32 w-48 h-48 border border-purple-200/25 rotate-45 animate-float-slow transform-gpu"></div>
        <div className="absolute bottom-32 left-40 w-56 h-56 border border-green-200/20 rounded-full animate-pulse-slow transform-gpu"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-amber-200/35 rotate-12 animate-sway-slow transform-gpu"></div>

        {/* Large hexagons for geometric feel */}
        <div className="absolute top-1/3 left-1/2 w-32 h-32 transform -translate-x-1/2">
          <div
            className="w-full h-full border border-cyan-200/20 rotate-30 animate-rotate-slow transform-gpu"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        {/* Scattered small particles for depth */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-slate-300/40 rounded-full animate-float-${(i % 3) + 1} transform-gpu`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Large gradient overlays for atmospheric depth */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-blue-100/15 via-blue-50/10 to-transparent rounded-full blur-3xl animate-pulse-very-slow transform-gpu"></div>
        <div
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-radial from-purple-100/12 via-purple-50/8 to-transparent rounded-full blur-2xl animate-pulse-very-slow transform-gpu"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-slate-100/8 via-slate-50/4 to-transparent rounded-full blur-3xl animate-pulse-very-slow transform-gpu"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <style>{`
        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-very-slow {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.1);
          }
        }

        @keyframes sway-slow {
          0%,
          100% {
            transform: translateX(0px) rotate(12deg);
          }
          50% {
            transform: translateX(15px) rotate(12deg);
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(30deg);
          }
          to {
            transform: rotate(390deg);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(15px, -15px);
          }
          66% {
            transform: translate(-10px, 10px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-12px, -18px);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(-18px, 12px);
          }
          66% {
            transform: translate(8px, -8px);
          }
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 40s linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-very-slow {
          animation: pulse-very-slow 12s ease-in-out infinite;
        }

        .animate-sway-slow {
          animation: sway-slow 10s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 9s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 10s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .rotate-30 {
          transform: rotate(30deg);
        }
      `}</style>
    </div>
  );
}
