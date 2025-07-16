export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 animate-fade-in-up">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 group cursor-pointer">
                <span className="opacity-70">&lt;/&gt;</span> For Gates
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                Partner terpercaya untuk transformasi digital bisnis Anda dengan
                solusi teknologi inovatif dan berkualitas tinggi — website
                responsif, aplikasi mobile, desain UI/UX yang intuitif, dan
                sistem berbasis AI.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-brand-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                </svg>
                <a
                  href="mailto:contact@forgates.dev"
                  className="text-sm sm:text-base text-gray-300 hover:text-brand-accent transition-all duration-300 hover:translate-x-1"
                >
                  contact@forgates.dev
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-brand-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z" />
                </svg>
                <span className="text-sm sm:text-base text-gray-300">
                  Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm sm:text-base text-gray-300 hover:text-brand-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/tentang"
                  className="text-sm sm:text-base text-gray-300 hover:text-brand-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  className="text-sm sm:text-base text-gray-300 hover:text-brand-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="/portofolio"
                  className="text-sm sm:text-base text-gray-300 hover:text-brand-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  className="text-sm sm:text-base text-gray-300 hover:text-brand-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Social */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
              Layanan
            </h4>
            <ul className="space-y-2 sm:space-y-3 mb-6">
              <li>
                <span className="text-sm sm:text-base text-gray-300">
                  Website Development
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base text-gray-300">
                  Mobile App Development
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base text-gray-300">
                  UI/UX Design
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base text-gray-300">
                  AI Solutions
                </span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">
                Ikuti Kami
              </h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-brand-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:text-brand-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  aria-label="Pinterest"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:text-brand-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="border-t border-gray-700 py-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 For Gates. All rights reserved.
            </p>

            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-brand-accent text-xs sm:text-sm transition-all duration-300 hover:translate-x-1"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-accent text-xs sm:text-sm transition-all duration-300 hover:translate-x-1"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </footer>
  );
}
