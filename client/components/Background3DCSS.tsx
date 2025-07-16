import { useEffect, useState } from "react";

interface Background3DCSSProps {
  className?: string;
}

export default function Background3DCSS({
  className = "",
}: Background3DCSSProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Animated geometric shapes */}
      <div className="relative w-full h-full">
        {/* Large floating circles - Made much more visible */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-400/80 rounded-full animate-spin-slow shadow-lg"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-green-400/70 rounded-full animate-reverse-spin shadow-lg"></div>
        <div className="absolute top-1/2 left-3/4 w-40 h-40 border-2 border-purple-400/60 rounded-full animate-pulse shadow-lg"></div>

        {/* Floating squares - More visible */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-amber-400/90 rotate-45 animate-bounce-slow shadow-md"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-cyan-400/80 rotate-12 animate-float shadow-md"></div>
        <div className="absolute top-2/3 right-2/3 w-20 h-20 border-2 border-red-400/70 -rotate-12 animate-sway shadow-md"></div>

        {/* Small particles - More visible */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-indigo-500/90 rounded-full animate-float-${(i % 3) + 1} shadow-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Additional visible shapes */}
        <div className="absolute top-10 right-10 w-8 h-8 bg-pink-500/80 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 bg-teal-500/90 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-20 w-10 h-10 border-2 border-orange-500/85 rotate-12 animate-pulse"></div>

        {/* Gradient overlays for depth - More visible */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-300/25 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-purple-300/20 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-radial from-green-300/22 to-transparent rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: translateX(0px) rotate(-12deg);
          }
          50% {
            transform: translateX(10px) rotate(-12deg);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(10px, -10px);
          }
          66% {
            transform: translate(-5px, 5px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-8px, -12px);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(-12px, 8px);
          }
          66% {
            transform: translate(6px, -6px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-sway {
          animation: sway 5s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 7s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 8s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
