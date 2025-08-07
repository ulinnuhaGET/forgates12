import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-b from-white to-gray-50/50 min-h-screen relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full animate-scale-in hover:scale-105 transition-transform duration-300">
              <span className="text-xs sm:text-sm font-medium text-brand-navy">
                🚀 Tim Inovator Digital Masa Kini
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-navy leading-tight animate-fade-in-up">
                Teknologi & Edukasi{" "}
                <span className="text-brand-accent inline-block animate-float">
                  Dalam Satu
                </span>{" "}
                <br className="hidden sm:block" />
                Genggaman
              </h1>

              {/* Subheadline */}
              <p
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Kami adalah For Gates, tim pengembang yang membangun website,
                aplikasi, desain antarmuka, dan sistem cerdas berbasis
                teknologi.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={() => navigate('/layanan')}
                className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <span className="text-sm sm:text-base">Lihat Layanan</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/kontak')}
                className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 group hover:scale-105"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base hidden sm:inline">
                  Bangun Proyek Bersama Kami
                </span>
                <span className="text-sm sm:text-base sm:hidden">
                  Mulai Proyek
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy group-hover:text-brand-accent transition-colors duration-300">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Proyek Tuntas
                </div>
              </div>
              <div className="text-center group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy group-hover:text-brand-accent transition-colors duration-300">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Pelayanan Maksimal
                </div>
              </div>
              <div className="text-center group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy group-hover:text-brand-accent transition-colors duration-300">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Layanan Aktif
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Developer Workspace Image */}
          <div className="relative animate-slide-up order-1 lg:order-2">
            <div className="relative z-10 group">
              {/* Developer Workspace Image */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-brand-navy/5 to-brand-accent/5 shadow-xl lg:shadow-2xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="aspect-w-16 aspect-h-12 lg:aspect-h-10">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F33b54069fb054982a7cabf611068c5e0%2Fe66b99d86b0d44e497db8db68fb5d4a2?format=webp&width=800"
                    alt="Developer workspace showing two programmers working on computers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay gradient for better mobile readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating elements on image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-brand-navy">
                      Online
                    </span>
                  </div>
                </div>

                <div
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-brand-navy">
                      ✨ For Gates
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-6 lg:top-10 right-6 lg:right-10 w-12 h-12 lg:w-20 lg:h-20 bg-brand-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 w-20 h-20 lg:w-32 lg:h-32 bg-brand-navy/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-1/2 left-0 w-8 h-8 lg:w-16 lg:h-16 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
              <div
                className="absolute top-0 right-0 w-16 h-16 lg:w-24 lg:h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Additional mobile-friendly decorative elements */}
              <div
                className="absolute top-1/4 right-1/4 w-6 h-6 bg-brand-accent/30 rounded-full blur-md animate-float"
                style={{ animationDelay: "3s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-brand-navy/20 rounded-full blur-lg animate-float"
                style={{ animationDelay: "4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-6 lg:pb-8">
        <div
          className="animate-bounce cursor-pointer group"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-300 group-hover:border-brand-accent rounded-full flex justify-center transition-colors duration-300">
            <div className="w-1 h-2 lg:h-3 bg-gray-300 group-hover:bg-brand-accent rounded-full mt-2 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-brand-accent/10 to-brand-navy/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-brand-navy/5 to-brand-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
