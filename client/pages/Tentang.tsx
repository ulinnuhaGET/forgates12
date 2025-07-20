import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground3D from "@/components/PageBackground3D";
import SectionBackground3D from "@/components/SectionBackground3D";

export default function Tentang() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100 relative">
      <PageBackground3D />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Tentang <span className="text-brand-accent">For Gates</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Kenali Ulin dan Rizky - duo developer berpengalaman yang membantu
              transformasi digital bisnis Anda dengan solusi teknologi inovatif
              dan terpercaya
            </p>
          </div>
        </div>
      </section>

            {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-semibold text-brand-navy mb-3">
                      Siapa Kami?
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      For Gates adalah kolaborasi antara <strong className="text-brand-navy">Ulin</strong>{" "}
                      (Frontend Developer & UI/UX Designer) dan{" "}
                      <strong className="text-brand-navy">Rizky</strong> (Backend Developer & System Architect).
                      Bersama-sama, kami memiliki{" "}
                      <strong className="text-brand-accent">lebih dari 10 tahun</strong> gabungan experience di
                      industri teknologi untuk menciptakan solusi digital yang
                      powerful dan profitable.
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold text-brand-navy mb-3">
                      Mengapa "For Gates"?
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Nama "For Gates" melambangkan misi kami:{" "}
                      <strong className="text-brand-accent">membuka gerbang transformasi digital</strong> yang
                      sukses. Kami percaya bahwa teknologi yang tepat dapat membuka
                      peluang tak terbatas untuk bisnis Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-accent/10 to-brand-navy/10 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-navy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-brand-navy"
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
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                    Ulin & Rizky
                  </h3>
                  <p className="text-gray-600">
                    Frontend + Backend = Perfect Collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Meet The Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kenali duo developer di balik For Gates yang berdedikasi
              menghadirkan solusi teknologi terbaik
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ulin Profile */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                {/* Avatar */}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-2">
                  Ulin
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-4">
                  Frontend Developer & UI/UX Designer
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-center mb-6">
                  Spesialis dalam menciptakan pengalaman pengguna yang intuitif
                  dan menarik. Passionate tentang clean code dan beautiful
                  design yang memukau users.
                </p>

                {/* Personal Details */}
                <div className="bg-white/60 rounded-xl p-4 space-y-3 mb-4">
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">
                    Personal Profile
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Full Name:</span>
                      <span className="font-medium text-gray-800">
                        Ulin Nuha
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Born:</span>
                      <span className="font-medium text-gray-800">
                        Jakarta, 15 Maret 1995
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span className="font-medium text-gray-800">
                        29 Years Old
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Education:</span>
                      <span className="font-medium text-gray-800">
                        S1 Informatika
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Based in:</span>
                      <span className="font-medium text-gray-800">
                        Jakarta, Indonesia
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Favorite Tool:</span>
                      <span className="font-medium text-gray-800">
                        VS Code + Figma
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      React.js
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      Next.js
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      TypeScript
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      Tailwind CSS
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      Figma
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      UI/UX Design
                    </span>
                  </div>
                </div>

                {/* Years of Experience */}
                <div className="pt-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">5+</div>
                      <div className="text-sm text-gray-600">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">
                        Projects Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rizky Profile */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                {/* Avatar */}
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-2">
                  Rizky
                </h3>
                <p className="text-lg font-semibold text-green-600 mb-4">
                  Backend Developer & System Architect
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-center mb-6">
                  Ahli dalam membangun sistem backend yang robust dan scalable.
                  Problem solver sejati yang suka tantangan arsitektur kompleks.
                </p>

                {/* Personal Details */}
                <div className="bg-white/60 rounded-xl p-4 space-y-3 mb-4">
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">
                    Personal Profile
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Full Name:</span>
                      <span className="font-medium text-gray-800">
                        Rizky Pratama
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Born:</span>
                      <span className="font-medium text-gray-800">
                        Bandung, 8 September 1994
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span className="font-medium text-gray-800">
                        30 Years Old
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Education:</span>
                      <span className="font-medium text-gray-800">
                        S1 Sistem Informasi
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Based in:</span>
                      <span className="font-medium text-gray-800">
                        Bandung, Indonesia
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Favorite Tool:</span>
                      <span className="font-medium text-gray-800">
                        Docker + Postman
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Python
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      PostgreSQL
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      MongoDB
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Docker
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      AWS
                    </span>
                  </div>
                </div>

                {/* Career Highlights */}
                <div className="pt-2">
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">
                    Career Highlights
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        6+
                      </div>
                      <div className="text-xs text-gray-600">Years Exp</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        40+
                      </div>
                      <div className="text-xs text-gray-600">Systems</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        99.9%
                      </div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Highlight */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                Perfect Collaboration
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Kombinasi keahlian frontend Ulin dan backend Rizky menghasilkan
                solusi end-to-end yang sempurna. Dengan pengalaman lebih dari 5
                tahun masing-masing, kami telah berkolaborasi menghasilkan
                <strong className="text-brand-navy">
                  {" "}
                  90+ project sukses
                </strong>{" "}
                untuk berbagai klien.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <div className="flex items-center justify-center space-x-2 bg-white rounded-lg px-6 py-3 shadow-md">
                  <span className="text-blue-500">����</span>
                  <span className="font-semibold text-gray-700">
                    Creative Frontend
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <span>+</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white rounded-lg px-6 py-3 shadow-md">
                  <span className="text-green-500">⚡</span>
                  <span className="font-semibold text-gray-700">
                    Robust Backend
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <span>=</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-navy to-brand-accent text-white rounded-lg px-6 py-3 shadow-md">
                  <span>🚀</span>
                  <span className="font-semibold">Amazing Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai fundamental yang menjadi dasar setiap project dan
              kerjasama dengan klien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Kualitas Tinggi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Standar profesional tinggi dalam setiap aspek development. Clean
                code, optimal performance, dan user experience yang excellence.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Tepat Waktu
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Delivery tepat waktu sesuai timeline yang disepakati. Project
                planning yang matang dan komunikasi rutin memastikan progress
                sesuai jadwal.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Inovasi Berkelanjutan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mengadopsi teknologi terbaru dan best practices untuk memastikan
                solusi yang future-proof dan competitive advantage.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Hubungan Jangka Panjang
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Membangun partnership jangka panjang. Maintenance, support, dan
                pengembangan fitur berkelanjutan untuk kesuksesan bisnis Anda.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Kreativitas & Problem Solving
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pendekatan kreatif dalam menyelesaikan challenges teknis
                kompleks. Out-of-the-box thinking untuk solusi inovatif dan
                efektif.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                Transparansi Total
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Komunikasi terbuka di setiap tahap development. Regular updates,
                clear documentation, dan feedback loop yang efektif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Keahlian Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertise full-stack development dengan spesialisasi frontend dan
              backend untuk solusi end-to-end yang terintegrasi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Frontend Expertise */}
            <div className="bg-gradient-to-br from-brand-accent/5 to-orange-50 rounded-3xl p-8">
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">
                Frontend Development
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    React.js & Next.js Development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    TypeScript & Modern JavaScript
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    UI/UX Design & Prototyping
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Responsive Design & PWA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Performance Optimization
                  </span>
                </div>
              </div>
            </div>

            {/* Backend Expertise */}
            <div className="bg-gradient-to-br from-brand-navy/5 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">
                Backend Development
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-navy"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Node.js & Express.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-navy"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Database Design & Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-navy"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    API Development & Integration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-navy"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cloud Services & DevOps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-navy"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    AI & Machine Learning Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
