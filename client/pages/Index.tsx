import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import PageBackground3D from "@/components/PageBackground3D";
import SectionBackground3D from "@/components/SectionBackground3D";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      <PageBackground3D />
      <Navigation />
      <HeroSection />

      {/* Why Choose For Gates Section */}
      <section id="about" className="py-20 bg-gray-50 relative">
        <SectionBackground3D variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4 lg:mb-6">
              Kenapa Memilih For Gates?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kami memahami kebutuhan Anda dalam dunia digital dan
              pendidikan. For Gates menghadirkan solusi teknologi modern
              dan layanan les privat yang terpercaya semua dalam satu
              tempat.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Card 1: Fast & On Time */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                <svg
                  className="w-8 h-8 text-brand-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Cepat & Tepat Waktu
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proyek digital diselesaikan sesuai timeline, dan jadwal
                les fleksibel sesuai kebutuhan.
              </p>
            </div>

            {/* Card 2: Custom & Flexible Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy/20 transition-colors">
                <svg
                  className="w-8 h-8 text-brand-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Solusi Kustom & Fleksibel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Setiap bisnis unik. Kami menciptakan solusi yang disesuaikan
                dengan kebutuhan spesifik Anda.
              </p>
            </div>

            {/* Card 3: Expert Team */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Tim Ahli Berpengalaman
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Didukung oleh developer, designer, dan teknisi AI berpengalaman
                dengan track record terbukti.
              </p>
            </div>

            {/* Card 4: 24/7 Support */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Dukungan Penuh 24/7
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kami siap membantu kapan saja. Tim support kami responsif untuk
                menjaga sistem Anda tetap optimal.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={() => navigate('/layanan')}
              className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Lihat Layanan Lengkap
              <svg
                className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white to-gray-50/30 relative"
      >
        <SectionBackground3D variant="accent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                Tentang For Gates
              </h2>

              {/* Introduction Paragraph */}
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Kami adalah duo developer berpengalaman yang terdiri dari
                  spesialis frontend dan backend. Bersama-sama, kami membangun
                  solusi digital cerdas — mulai dari website responsif, aplikasi
                  mobile, desain UI/UX yang intuitif, hingga sistem berbasis AI
                  yang inovatif.
                </p>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Dengan kombinasi keahlian teknis yang mendalam dan pemahaman
                  bisnis yang kuat, kami berkomitmen menghadirkan solusi
                  teknologi yang tidak hanya canggih, tetapi juga memberikan
                  nilai nyata bagi pertumbuhan bisnis Anda.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-brand-navy/5 rounded-2xl">
                <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-brand-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-brand-navy mb-2">
                  Kolaborasi Solid
                </h3>
                <p className="text-sm text-gray-600">
                  Frontend & Backend yang harmonis
                </p>
              </div>

              <div className="text-center p-6 bg-brand-accent/5 rounded-2xl">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-brand-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-brand-navy mb-2">
                  Teknologi Terkini
                </h3>
                <p className="text-sm text-gray-600">
                  Menggunakan tools modern & AI
                </p>
              </div>

              <div className="text-center p-6 bg-blue-500/5 rounded-2xl">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-brand-navy mb-2">
                  Fokus Pada Nilai
                </h3>
                <p className="text-sm text-gray-600">
                  Solusi yang menguntungkan bisnis
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button
                onClick={() => navigate('/tentang')}
                className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Pelajari Lebih Lanjut
                <svg
                  className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-50 relative">
        <SectionBackground3D variant="dark" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Proyek Terbaru Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Berikut adalah beberapa karya digital terbaru yang telah kami
              kembangkan. Setiap proyek menunjukkan dedikasi kami dalam
              menghadirkan solusi teknologi yang inovatif dan berdampak.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 - E-commerce Platform */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://images.pexels.com/photos/6214474/pexels-photo-6214474.jpeg"
                    alt="Toko Online Modern"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium drop-shadow-lg">
                        E-Commerce Platform
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                    Website
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  Toko Online Modern
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Platform e-commerce lengkap dengan sistem pembayaran
                  terintegrasi dan dashboard admin yang responsif.
                </p>
                <button
                  onClick={() => navigate('/portofolio')}
                  className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white"
                >
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Project 2 - Corporate Landing */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
                    alt="Corporate Landing Page"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 4H20C20.55 4 21 4.45 21 5V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V5C3 4.45 3.45 4 4 4ZM5 6V18H19V6H5Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium drop-shadow-lg">
                        Corporate Website
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-slate-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                    Corporate
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  Corporate Landing Page
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Website perusahaan yang profesional dengan desain modern,
                  optimasi SEO, dan integrasi konten CMS.
                </p>
                <button
                  onClick={() => navigate('/portofolio')}
                  className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white"
                >
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Project 3 - Creative Portfolio */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://images.pexels.com/photos/7792404/pexels-photo-7792404.jpeg"
                    alt="Portfolio Kreatif"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium drop-shadow-lg">
                        Creative Portfolio
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                    Portfolio
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  Portfolio Kreatif
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Website portfolio untuk creative agency dengan animasi
                  interaktif dan showcase project yang menarik.
                </p>
                <button
                  onClick={() => navigate('/portofolio')}
                  className="w-full bg-brand-navy/5 hover:bg-brand-navy hover:text-white text-brand-navy font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:bg-brand-navy group-hover:text-white"
                >
                  Lihat Detail
                </button>
              </div>
            </div>


          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={() => navigate('/portofolio')}
              className="bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Lihat Semua Portofolio
              <svg
                className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
