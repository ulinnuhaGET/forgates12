import { useEffect, useState } from "react";

interface SectionBackground3DProps {
  className?: string;
  variant?: "light" | "dark" | "accent";
}

export default function SectionBackground3D({
  className = "",
  variant = "light",
}: SectionBackground3DProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Different color schemes for different section types
  const colorSchemes = {
    light: {
      shapes: ["slate-300/20", "gray-300/15", "blue-300/10"],
      particles: "slate-400/30",
      gradients: ["slate-200/8", "gray-200/6", "blue-200/4"],
    },
    dark: {
      shapes: ["slate-600/25", "gray-600/20", "slate-700/15"],
      particles: "slate-500/35",
      gradients: ["slate-600/10", "gray-600/8", "slate-700/6"],
    },
    accent: {
      shapes: ["blue-400/20", "purple-400/15", "indigo-400/12"],
      particles: "indigo-500/40",
      gradients: ["blue-300/8", "purple-300/6", "indigo-300/5"],
    },
  };

  const colors = colorSchemes[variant];

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      {/* Section-level 3D background with smaller, more subtle shapes */}
      <div className="relative w-full h-full">
        {/* Medium geometric shapes for section backgrounds */}
        <div
          className={`absolute top-8 right-8 w-24 h-24 border border-${colors.shapes[0]} rounded-full animate-orbit transform-gpu`}
        ></div>
        <div
          className={`absolute bottom-12 left-12 w-20 h-20 border border-${colors.shapes[1]} rotate-45 animate-wiggle transform-gpu`}
        ></div>
        <div
          className={`absolute top-1/2 right-16 w-16 h-16 border border-${colors.shapes[2]} animate-breathe transform-gpu`}
        ></div>

        {/* Small triangular shapes */}
        <div
          className={`absolute top-16 left-1/3 w-8 h-8 border-l-8 border-r-8 border-b-8 border-transparent border-b-${colors.shapes[0]} animate-spin-gentle transform-gpu`}
        ></div>
        <div
          className={`absolute bottom-20 right-1/3 w-6 h-6 border-l-6 border-r-6 border-b-6 border-transparent border-b-${colors.shapes[1]} animate-float-gentle transform-gpu`}
        ></div>

        {/* Diamond shapes */}
        <div
          className={`absolute top-1/4 left-8 w-12 h-12 border border-${colors.shapes[2]} rotate-45 animate-pulse-gentle transform-gpu`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-10 h-10 border border-${colors.shapes[0]} rotate-45 animate-sway-gentle transform-gpu`}
        ></div>

        {/* Small floating particles specifically for sections */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-${colors.particles} rounded-full animate-drift-${(i % 2) + 1} transform-gpu`}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Subtle gradient overlays for section depth */}
        <div
          className={`absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-${colors.gradients[0]} to-transparent rounded-full blur-2xl animate-pulse-gentle transform-gpu`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-48 h-48 bg-gradient-radial from-${colors.gradients[1]} to-transparent rounded-full blur-xl animate-pulse-gentle transform-gpu`}
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-radial from-${colors.gradients[2]} to-transparent rounded-full blur-lg animate-pulse-gentle transform-gpu`}
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(30px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(45deg);
          }
          25% {
            transform: rotate(50deg);
          }
          75% {
            transform: rotate(40deg);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.12;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.2;
          }
        }

        @keyframes spin-gentle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes sway-gentle {
          0%,
          100% {
            transform: translateX(0px) rotate(45deg);
          }
          50% {
            transform: translateX(8px) rotate(45deg);
          }
        }

        @keyframes drift-1 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(8px, -8px);
          }
          66% {
            transform: translate(-6px, 6px);
          }
        }

        @keyframes drift-2 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-6px, -10px);
          }
        }

        .animate-orbit {
          animation: orbit 25s linear infinite;
        }

        .animate-wiggle {
          animation: wiggle 4s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 5s ease-in-out infinite;
        }

        .animate-spin-gentle {
          animation: spin-gentle 15s linear infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }

        .animate-sway-gentle {
          animation: sway-gentle 6s ease-in-out infinite;
        }

        .animate-drift-1 {
          animation: drift-1 7s ease-in-out infinite;
        }

        .animate-drift-2 {
          animation: drift-2 8s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
