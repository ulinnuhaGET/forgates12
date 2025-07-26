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
              Kenali Ulin - fullstack developer berpengalaman yang membantu
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
                      For Gates adalah brainchild dari <strong className="text-brand-navy">Ulin</strong> - seorang fullstack developer
                      yang memiliki <strong className="text-brand-accent">lebih dari 6 tahun</strong> experience di
                      industri teknologi, mulai dari frontend development, UI/UX design, hingga backend architecture
                      untuk menciptakan solusi digital end-to-end yang powerful dan profitable.
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
                        <div className="relative lg:order-last">
              <div className="bg-gradient-to-br from-brand-accent/10 to-brand-navy/10 rounded-3xl p-8 h-full min-h-[400px] flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-brand-navy to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-3">
                    Ulin Nuha
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">
                    Fullstack Developer & Tech Architect
                  </p>
                  <div className="mt-6 flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-accent">6+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-navy">50+</div>
                      <div className="text-sm text-gray-600">Projects Done</div>
                    </div>
                  </div>
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
              Meet The Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kenali sosok di balik For Gates - seorang fullstack developer
              yang berdedikasi menghadirkan solusi teknologi terdepan
            </p>
          </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Bio and Information */}
            <div className="space-y-6">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-3xl font-display font-bold text-brand-navy mb-3">
                  Ulin Nuha
                </h3>
                <p className="text-xl font-semibold text-blue-600 mb-2">
                  Fullstack Developer & Tech Architect
                </p>
                <p className="text-sm text-gray-500 italic mb-4">
                  Founder & Lead Developer at For Gates
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Fullstack developer yang passionate tentang menciptakan solusi end-to-end
                  yang powerful. Dari beautiful frontend hingga robust backend architecture,
                  menguasai full development lifecycle dengan clean code dan best practices.
                </p>
              </div>

              {/* Personal Details */}
              <div className="bg-blue-50/50 rounded-xl p-6 space-y-3">
                <h4 className="text-lg font-semibold text-brand-navy mb-4">
                  Personal Profile
                </h4>
                <div className="grid grid-cols-1 gap-3 text-sm">
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
                    <span className="text-gray-600">Favorite Tools:</span>
                    <span className="font-medium text-gray-800">
                      VS Code + Docker
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
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
                    Node.js
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    PostgreSQL
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Docker
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    AWS
                  </span>
                </div>
              </div>

              {/* Career Highlights */}
              <div>
                <h4 className="text-lg font-semibold text-brand-navy mb-3">
                  Career Highlights
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">
                      6+
                    </div>
                    <div className="text-xs text-gray-600">Years Exp</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">
                      50+
                    </div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">
                      99%
                    </div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                {/* Large Profile Avatar */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl ring-8 ring-blue-100/50 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent">
                  </div>
                  <svg
                    className="w-32 h-32 text-white relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
                  <div className="absolute top-1/3 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-70"></div>
                </div>

                {/* Badge */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-8">
                  🚀 Fullstack Developer
                </div>

                {/* Contact & Status Info */}
                <div className="space-y-6 max-w-sm">
                  {/* Availability Status */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                      <span className="text-green-600 font-semibold text-sm">Available for Projects</span>
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                      Currently accepting new client projects and collaborations
                    </p>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-center text-brand-navy mb-4">
                      Let's Connect
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          📧
                        </div>
                        <span className="text-gray-700">ulin@forgates.com</span>
                      </div>

                      <div className="flex items-center justify-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          📱
                        </div>
                        <span className="text-gray-700">+62 812-3456-7890</span>
                      </div>

                      <div className="flex items-center justify-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          🌍
                        </div>
                        <span className="text-gray-700">Jakarta, Indonesia</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                      📩 Start a Project
                    </button>

                    <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 transform hover:scale-105">
                      💼 View Portfolio
                    </button>
                  </div>

                  {/* Fun Fact */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                    <div className="text-center">
                      <div className="text-2xl mb-2">☕</div>
                      <p className="text-sm text-amber-800">
                        <strong>Fun Fact:</strong> Powered by coffee and passion for clean code!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Fullstack Expertise Highlight */}
                    <div className="mt-20">
            <div className="bg-gradient-to-r from-blue-500/10 via-brand-accent/10 to-purple-500/10 rounded-3xl p-12 text-center">
                            <h3 className="text-3xl font-display font-bold text-brand-navy mb-6">
                Fullstack Excellence
              </h3>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
                Dengan keahlian fullstack yang komprehensif, Ulin mampu menangani
                seluruh aspek development - dari UI/UX design yang indah hingga
                backend architecture yang robust. Dengan pengalaman 6+ tahun,
                telah menghasilkan
                <strong className="text-brand-navy">
                  {" "}
                  50+ project sukses
                </strong>{" "}
                untuk berbagai klien.
              </p>

                            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <div className="flex items-center justify-center space-x-3 bg-white rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl">🎨</span>
                  <span className="font-bold text-blue-600 text-lg">
                    Frontend & UI/UX
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-2xl text-brand-accent font-bold">+</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl">⚡</span>
                  <span className="font-bold text-purple-600 text-lg">
                    Backend & DevOps
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-2xl text-brand-accent font-bold">=</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-brand-navy to-brand-accent text-white rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl">🚀</span>
                  <span className="font-bold text-lg">Complete Solutions</span>
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
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
              Expertise fullstack development dengan kemampuan menguasai seluruh
              teknologi stack untuk solusi end-to-end yang terintegrasi dan scalable
            </p>
          </div>

                    <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">
            {/* Frontend Expertise */}
            <div className="bg-gradient-to-br from-brand-accent/5 to-orange-50 rounded-3xl p-10 h-full">
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-8">
                Frontend & UI/UX
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

                        {/* Backend & DevOps Expertise */}
            <div className="bg-gradient-to-br from-brand-navy/5 to-blue-50 rounded-3xl p-10 h-full">
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-8">
                Backend & DevOps
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
