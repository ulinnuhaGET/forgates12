import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white backdrop-blur-md border-b border-gray-100 shadow-lg py-2"
            : "bg-white backdrop-blur-md border-b border-gray-100/50 shadow-sm py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? "h-14" : "h-16"
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <span
                  className={`font-display font-bold text-brand-navy transition-all duration-300 group-hover:text-brand-accent ${
                    isScrolled ? "text-xl" : "text-2xl"
                  }`}
                >
                  <span className="opacity-70">&lt;/&gt;</span> For Gates
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                      location.pathname === item.href
                        ? "text-brand-navy font-semibold"
                        : "text-gray-700 hover:text-brand-navy"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                    {/* Active indicator */}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent transform transition-transform duration-300 ${
                        location.pathname === item.href
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/les-privat">
                <Button
                  className={`bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isScrolled ? "px-4 py-2 text-sm" : "px-6 py-2"
                  }`}
                >
                  Les Privat
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:text-brand-navy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent transition-all duration-300 active:bg-gray-200"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
                type="button"
              >
                <div className="relative w-6 h-6">
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          {/* Mobile menu overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[60]">
            <div className="flex flex-col h-full">
              {/* Mobile header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="text-xl font-display font-bold text-brand-navy">
                  <span className="opacity-70">&lt;/&gt;</span> For Gates
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile navigation */}
              <div className="flex-1 px-6 py-8 overflow-y-auto">
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        location.pathname === item.href
                          ? "text-brand-navy bg-brand-accent/10 font-semibold"
                          : "text-gray-700 hover:text-brand-navy hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      {location.pathname === item.href && (
                        <div className="ml-auto w-2 h-2 bg-brand-accent rounded-full" />
                      )}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8">
                  <Button
                    className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gabung Sekarang
                  </Button>
                </div>

                {/* Additional mobile info */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="text-sm text-gray-500 space-y-2">
                    <p className="font-medium text-brand-navy">Kontak Cepat:</p>
                    <p>📧 hello@forgates.com</p>
                    <p>📱 +62 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
