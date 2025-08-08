import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground3D from "@/components/PageBackground3D";
import SectionBackground3D from "@/components/SectionBackground3D";
import { useNavigate } from "react-router-dom";

export default function Tentang() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100 relative">
      <PageBackground3D />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-in-up">
              Tentang <span className="text-brand-accent">For Gates</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Di For Gates, kami percaya teknologi dan edukasi adalah
              kunci kemajuan. Kami membangun solusi digital yang andal dan
              memberikan pembelajaran privat yang mudah dipahami, agar
              Anda siap menghadapi tantangan masa depan.
            </p>
          </div>
        </div>
      </section>

            {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
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
                      For Gates lahir dari pasangan suami istri: <strong className="text-brand-navy">Ulin Nuha</strong>, seorang fullstack developer
                      yang ahli di bidang teknologi, dan <strong className="text-brand-accent">Putri Aulia</strong>, seorang pengajar les privat
                      yang berpengalaman. Kami memadukan dua keahlian berbeda — pengembangan solusi digital dan pendidikan yang efektif — dalam satu brand.
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold text-brand-navy mb-3">
                      Mengapa "For Gates"?
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Nama ini melambangkan misi kami: <strong className="text-brand-accent">membuka gerbang menuju masa depan yang lebih baik</strong>.
                      Melalui teknologi, kami membantu bisnis bertumbuh; melalui edukasi, kami membantu individu berkembang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
                        <div className="relative lg:order-last animate-slide-in-right">
              <div className="bg-gradient-to-br from-brand-accent/10 to-brand-navy/10 rounded-3xl p-8 h-full min-h-[400px] flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-brand-navy to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-float">
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
              Meet The Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kenali tim profesional di balik For Gates - kombinasi expertise dalam development dan education
            </p>
          </div>

          <div className="space-y-20">
            {/* Ulin Nuha - Developer */}
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
                    <span className="text-gray-600"><p>Nama :</p></span>
                    <span className="font-medium text-gray-800">
                      <p>Muhammad Hibban Ulin Nuha</p>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600"><p>Tempat, tanggal lahir :</p></span>
                    <span className="font-medium text-gray-800">
                      <p>Lamongan, 12 Juli 2002</p>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600"><p>Usia :</p></span>
                    <span className="font-medium text-gray-800">
                      <p>23 Tahun</p>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600"><p>Pendidikan:</p></span>
                    <span className="font-medium text-gray-800">
                      S1 Informatika
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600"><p>Domisili :</p></span>
                    <span className="font-medium text-gray-800">
                      <p>Lamongan, Indonesia</p>
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
                  {/* Quick Contact */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-center text-brand-navy mb-4">
                      <p>Contact Person</p>
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          📧
                        </div>
                        <span className="text-gray-700"><p>ulinhaqi331@gmail.com</p></span>
                      </div>

                      <div className="flex items-center justify-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          📱
                        </div>
                        <span className="text-gray-700"><p>+62 8577-1695-193</p></span>
                      </div>

                      <div className="flex items-center justify-center space-x-3 text-sm">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          🌍
                        </div>
                        <span className="text-gray-700"><p>Lamongan, Indonesia</p></span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => navigate('/kontak')}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                    >
                      📩 Start a Project
                    </button>

                    <button
                      onClick={() => navigate('/portofolio')}
                      className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 transform hover:scale-105"
                    >
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

            {/* Putri Aulia - Instructor */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Profile Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="text-center">
                  {/* Large Profile Avatar */}
                  <div className="w-80 h-80 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl ring-8 ring-pink-100/50 relative overflow-hidden">
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
                  <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-8">
                    📚 Programming Instructor
                  </div>

                  {/* Contact & Status Info */}
                  <div className="space-y-6 max-w-sm">
                    {/* Quick Contact */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 space-y-4">
                      <h4 className="text-lg font-semibold text-center text-brand-navy mb-4">
                        Get In Touch
                      </h4>

                      <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-3 text-sm">
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                            📧
                          </div>
                          <span className="text-gray-700"><p>fatimahputriaulia@gmail.com</p></span>
                        </div>

                        <div className="flex items-center justify-center space-x-3 text-sm">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            ����
                          </div>
                          <span className="text-gray-700"><p>+62 83143122115</p></span>
                        </div>

                        <div className="flex items-center justify-center space-x-3 text-sm">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            🌍
                          </div>
                          <span className="text-gray-700">Lamongan, Indonesia</span>
                        </div>
                      </div>
                    </div>

                    {/* Fun Fact */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-center">
                        <div className="text-2xl mb-2">📖</div>
                        <p className="text-sm text-purple-800">
                          <strong>Teaching Style:</strong> Patient, practical, and focused on real-world applications!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Bio and Information */}
              <div className="space-y-6">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-display font-bold text-brand-navy mb-3">
                    Putri Aulia
                  </h3>
                  <p className="text-xl font-semibold text-pink-600 mb-2">
                    <p>Educator</p>
                  </p>
                  <p className="text-sm text-gray-500 italic mb-4">
                    Lead Instructor at For Gates
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Instructor berpengalaman yang passionate dalam mengajarkan programming
                    dengan metode yang mudah dipahami. Mengspecialisasi diri dalam fundamental
                    programming, web development, dan membantu siswa membangun portfolio yang kuat.
                  </p>
                </div>

                {/* Personal Details */}
                <div className="bg-pink-50/50 rounded-xl p-6 space-y-3">
                  <h4 className="text-lg font-semibold text-brand-navy mb-4">
                    Personal Profile
                  </h4>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600"><p>Nama :</p></span>
                      <span className="font-medium text-gray-800">
                        Putri Aulia
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600"><p>Tempat, tanggal lahir :</p></span>
                      <span className="font-medium text-gray-800">
                        <p>Sidoarjo, 03 April 2003</p>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600"><p>Usia :</p></span>
                      <span className="font-medium text-gray-800">
                        <p>22 tahun</p>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600"><p>Pendidikan :</p></span>
                      <span className="font-medium text-gray-800">
                        S1 Pendidikan Informatika
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600"><p>Domisili :</p></span>
                      <span className="font-medium text-gray-800">
                        Lamongan, Indonesia
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600"><p>Keahlian</p></span>
                      <span className="font-medium text-gray-800">
                        Beginner-Friendly Teaching
                      </span>
                    </div>
                  </div>
                </div>

                {/* Teaching Areas */}
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">
                    Teaching Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      HTML & CSS
                    </span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      JavaScript Fundamentals
                    </span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      React.js Basics
                    </span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      Programming Logic
                    </span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      Web Design
                    </span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      Career Guidance
                    </span>
                  </div>
                </div>

                {/* Teaching Stats */}
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">
                    Teaching Achievements
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">
                        4+
                      </div>
                      <div className="text-xs text-gray-600">Years Teaching</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">
                        200+
                      </div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-pink-600">
                        95%
                      </div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology & Education Excellence */}
                    <div className="mt-20">
            <div className="bg-gradient-to-r from-blue-500/10 via-brand-accent/10 to-purple-500/10 rounded-3xl p-12 text-center">
                            <h3 className="text-3xl font-display font-bold text-brand-navy mb-6">
                Ahli Teknologi & Edukasi
              </h3>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
                Dengan pengalaman di dua dunia — teknologi dan pendidikan — Ulin Nuha menangani pengembangan website, aplikasi, hingga sistem berbasis AI, sementara Putri Aulia menghadirkan layanan les privat yang personal dan efektif.
                <br />
                Bersama, kami menawarkan solusi lengkap: digital yang canggih sekaligus pendidikan yang membangun masa depan.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h4 className="font-bold text-blue-600 text-lg mb-2">Teknologi Modern</h4>
                  <p className="text-gray-700 text-sm">Website responsif, aplikasi mobile, dan sistem berbasis AI.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="font-bold text-pink-600 text-lg mb-2">Pengajaran Berkualitas</h4>
                  <p className="text-gray-700 text-sm">Les privat yang disesuaikan dengan kebutuhan siswa.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-bold text-purple-600 text-lg mb-2">Pendekatan Holistik</h4>
                  <p className="text-gray-700 text-sm">Menggabungkan teknologi untuk menunjang proses belajar.</p>
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
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
                Hasil kerja dan pembelajaran yang optimal.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
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
                Proyek maupun sesi belajar sesuai jadwal.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400">
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
                Mengikuti perkembangan teknologi dan metode mengajar terbaru.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-600">
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
                Mitra bisnis & pendidikan untuk jangka panjang.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
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
                Solusi unik untuk tantangan digital maupun belajar.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
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
                Komunikasi jelas di setiap langkah.
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
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="#61DAFB"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    React.js & Next.js Development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.302.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#3178C6"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    TypeScript & Modern JavaScript
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-accent"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664h6.664a3.333 3.333 0 0 0 0-6.664 3.333 3.333 0 0 0 0-6.665zM12 6.668a1.333 1.333 0 1 1 0-2.665 1.333 1.333 0 0 1 0 2.665zm-4 6.665a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666zm4 6.664a1.333 1.333 0 1 1 0-2.664 1.333 1.333 0 0 1 0 2.664z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    UI/UX Design & Prototyping
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-accent"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 3v18h2v-2h2V3H7zm2 16H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V9h2v2zm0-4H7V5h2v2zm12 0h-2v2h2V7zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm0-14V3h-2v2h2zm-4 14V5h-2v14h2zM3 3v18h2V3H3z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Responsive Design & PWA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-accent"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.26 10.5h2v1h-2v-1zm0 2h2v1h-2v-1zm-2 2h2v1h-2v-1zm-2-2h2v1h-2v-1zm0-2h2v1h-2v-1zm-2 2h2v1h-2v-1zm6-6h2v1h-2V6.5zm-2 0h2v1h-2V6.5zm-2 0h2v1h-2V6.5zm-2 0h2v1h-2V6.5zm8-3.5v15H3v-15h18m0-2H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/>
                      <path d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0-14c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z"/>
                      <path d="M12 8.5c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5z"/>
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
                      className="w-5 h-5 text-brand-navy"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Node.js & Express.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-navy"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Database Design & Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-navy"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14,12L10,8V11H2V13H10V16M20,12L16,8V11H14V13H16V16"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    API Development & Integration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-navy"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.61 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Cloud Services & DevOps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-navy/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-navy"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
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
