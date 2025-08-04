import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground3D from "@/components/PageBackground3D";

export default function LesPrivat() {
  const [formData, setFormData] = useState({
    namaOrangTua: "",
    namaSiswa: "",
    jenjang: "",
    lokasi: "",
    nomorWhatsApp: "",
  });

  const [showNotification, setShowNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const openSubjectModal = (subject: any) => {
    setSelectedSubject(subject);
    setIsSubjectModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSubjectModal = () => {
    setIsSubjectModalOpen(false);
    setSelectedSubject(null);
    document.body.style.overflow = "unset";
  };

  // Subject details data
  const subjectDetails = {
    SD: {
      title: "SD (Sekolah Dasar)",
      grade: "Kelas 1-6",
      subjects: [
        {
          name: "Matematika",
          icon: "📊",
          description: "Pembelajaran matematika dasar yang menyenangkan dengan pendekatan visual dan praktis",
          topics: ["Penjumlahan & Pengurangan", "Perkalian & Pembagian", "Pecahan Sederhana", "Bangun Datar", "Pengukuran Waktu", "Operasi Hitung Campuran"],
          duration: "60 menit",
          price: "Rp 100.000"
        },
        {
          name: "Bahasa Indonesia",
          icon: "📝",
          description: "Mengembangkan kemampuan membaca, menulis, dan berbicara dengan baik dan benar",
          topics: ["Membaca Pemahaman", "Menulis Karangan", "Tata Bahasa Dasar", "Puisi & Pantun", "Dongeng & Cerita", "Kosakata & Ejaan"],
          duration: "60 menit",
          price: "Rp 100.000"
        },
        {
          name: "IPA",
          icon: "🔬",
          description: "Mengenal alam sekitar melalui eksperimen sederhana dan pengamatan langsung",
          topics: ["Tubuh Manusia", "Hewan & Tumbuhan", "Benda & Sifatnya", "Energi & Gerak", "Cuaca & Iklim", "Eksperimen Sederhana"],
          duration: "60 menit",
          price: "Rp 100.000"
        }
      ]
    },
    SMP: {
      title: "SMP (Sekolah Menengah Pertama)",
      grade: "Kelas 7-9",
      subjects: [
        {
          name: "Matematika",
          icon: "📊",
          description: "Matematika tingkat menengah dengan konsep aljabar, geometri, dan statistik",
          topics: ["Aljabar Linear", "Persamaan & Pertidaksamaan", "Geometri & Teorema", "Statistika Dasar", "Peluang", "Fungsi Linear"],
          duration: "90 menit",
          price: "Rp 125.000"
        },
        {
          name: "Bahasa Inggris",
          icon: "🌍",
          description: "Pembelajaran bahasa Inggris fokus pada conversation, grammar, dan vocabulary",
          topics: ["Basic Grammar", "Conversation Practice", "Reading Comprehension", "Writing Skills", "Listening Practice", "Vocabulary Building"],
          duration: "90 menit",
          price: "Rp 125.000"
        },
        {
          name: "IPA",
          icon: "🔬",
          description: "Fisika, kimia, dan biologi tingkat menengah dengan praktikum sederhana",
          topics: ["Fisika Dasar", "Kimia Unsur", "Biologi Sel", "Ekosistem", "Listrik & Magnet", "Reaksi Kimia"],
          duration: "90 menit",
          price: "Rp 125.000"
        }
      ]
    },
    SMA: {
      title: "SMA (Sekolah Menengah Atas)",
      grade: "Kelas 10-12",
      subjects: [
        {
          name: "Matematika",
          icon: "📊",
          description: "Matematika lanjutan meliputi kalkulus, trigonometri, dan matematika diskrit",
          topics: ["Kalkulus Diferensial", "Integral", "Trigonometri Lanjut", "Matriks & Determinan", "Barisan & Deret", "Peluang Lanjut"],
          duration: "90 menit",
          price: "Rp 150.000"
        },
        {
          name: "Fisika",
          icon: "⚡",
          description: "Fisika konseptual dan hitungan untuk persiapan universitas dan ujian masuk",
          topics: ["Mekanika", "Termodinamika", "Gelombang & Optik", "Listrik & Magnetisme", "Fisika Modern", "Relativitas"],
          duration: "90 menit",
          price: "Rp 150.000"
        },
        {
          name: "Kimia",
          icon: "🧪",
          description: "Kimia organik, anorganik, dan fisika kimia dengan pendekatan eksperimental",
          topics: ["Kimia Organik", "Kimia Anorganik", "Termokimia", "Kesetimbangan Kimia", "Elektrokimia", "Kimia Larutan"],
          duration: "90 menit",
          price: "Rp 150.000"
        },
        {
          name: "Bahasa Inggris",
          icon: "🌍",
          description: "Bahasa Inggris akademik untuk persiapan TOEFL, IELTS, dan ujian masuk PTN",
          topics: ["Advanced Grammar", "Academic Writing", "TOEFL Preparation", "Literature Analysis", "Business English", "Critical Reading"],
          duration: "90 menit",
          price: "Rp 150.000"
        }
      ]
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowNotification(true);
    closeModal();
    setTimeout(() => setShowNotification(false), 3000);

    // Clear form
    setFormData({
      namaOrangTua: "",
      namaSiswa: "",
      jenjang: "",
      lokasi: "",
      nomorWhatsApp: "",
    });
  };

  const whatsappContact = () => {
    const message = `Halo! Saya tertarik dengan les privat untuk anak saya. 
    
Nama Orang Tua: ${formData.namaOrangTua}
Nama Siswa: ${formData.namaSiswa}
Jenjang: ${formData.jenjang}
Lokasi: ${formData.lokasi}
No. WhatsApp: ${formData.nomorWhatsApp}

Mohon informasi lebih lanjut. Terima kasih!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      <PageBackground3D />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-blue-900 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-brand-accent/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-blue-400/20 rounded-full animate-float"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-slide-in-left">
                🎓 <span className="text-brand-accent">Les Privat</span> SD–SMA
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4 animate-slide-in-left animation-delay-200">
                Guru Ramah & Berpengalaman Siap Datang ke Rumah atau Online
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-slide-in-left animation-delay-400">
                Dapatkan pembelajaran yang personal, sabar, dan sesuai dengan kebutuhan anak.
              </p>
            </div>

            {/* Image Side */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                {/* Main Image */}
                <div className="w-80 h-80 rounded-3xl shadow-2xl ring-8 ring-white/20 relative overflow-hidden animate-float">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Anak belajar dengan guru les privat"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-indigo-600/20"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-ping"></div>
                  <div className="absolute top-1/3 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-70 animate-bounce"></div>
                </div>

                {/* Floating Subject Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg px-3 py-2 shadow-lg animate-float-delay-1 backdrop-blur-sm bg-white/90">
                  <span className="text-sm font-semibold text-blue-600">📊 Matematika</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-3 py-2 shadow-lg animate-float-delay-2 backdrop-blur-sm bg-white/90">
                  <span className="text-sm font-semibold text-green-600">🧪 Fisika</span>
                </div>
                <div className="absolute top-1/2 -right-8 bg-white rounded-lg px-3 py-2 shadow-lg animate-float backdrop-blur-sm bg-white/90">
                  <span className="text-sm font-semibold text-purple-600">🌍 English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Pengajar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                Tentang Pengajar
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Saya <strong className="text-brand-navy">Putri Aulia</strong>, pengajar les privat dengan pengalaman lebih dari 
                  <strong className="text-brand-accent"> 4 tahun</strong> mendampingi siswa dari SD hingga SMA.
                </p>
                <p className="text-lg">
                  Saya mengutamakan pendekatan yang <strong className="text-brand-navy">sabar, fleksibel, dan menyesuaikan gaya belajar</strong> setiap anak. 
                  Dengan latar belakang pendidikan Informatika, saya memahami cara membuat pembelajaran menjadi mudah dipahami dan menyenangkan.
                </p>
                <p className="text-lg">
                  Motto saya: <em className="text-brand-accent">"Setiap anak memiliki cara belajar yang unik, tugas saya adalah menemukan cara terbaik untuk mereka."</em>
                </p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="text-center">
                <div className="w-80 h-80 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl ring-8 ring-pink-100/50 relative overflow-hidden animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
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
                  <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
                  <div className="absolute top-1/3 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-70"></div>
                </div>
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  👩‍🏫 Putri Aulia - Guru Les Privat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mata Pelajaran Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Mata Pelajaran yang Tersedia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pembelajaran berkualitas untuk semua jenjang pendidikan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SD */}
            <div
              onClick={() => openSubjectModal(subjectDetails.SD)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group cursor-pointer">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                  SD (Sekolah Dasar)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs">📊</span>
                    </div>
                    <span className="text-gray-700 font-medium">Matematika</span>
                  </li>
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs">📝</span>
                    </div>
                    <span className="text-gray-700 font-medium">Bahasa Indonesia</span>
                  </li>
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs">🔬</span>
                    </div>
                    <span className="text-gray-700 font-medium">IPA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SMP */}
            <div
              onClick={() => openSubjectModal(subjectDetails.SMP)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group cursor-pointer">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce">
                  <span className="text-2xl">🎒</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                  SMP (Sekolah Menengah Pertama)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">📊</span>
                    </div>
                    <span className="text-gray-700 font-medium">Matematika</span>
                  </li>
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">🌍</span>
                    </div>
                    <span className="text-gray-700 font-medium">Bahasa Inggris</span>
                  </li>
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">🔬</span>
                    </div>
                    <span className="text-gray-700 font-medium">IPA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SMA */}
            <div
              onClick={() => openSubjectModal(subjectDetails.SMA)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group cursor-pointer">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                  SMA (Sekolah Menengah Atas)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xs">📊</span>
                    </div>
                    <span className="text-gray-700 font-medium">Matematika</span>
                  </li>
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xs">⚡</span>
                    </div>
                    <span className="text-gray-700 font-medium">Fisika</span>
                  </li>
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xs">🧪</span>
                    </div>
                    <span className="text-gray-700 font-medium">Kimia</span>
                  </li>
                  <li className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xs">🌍</span>
                    </div>
                    <span className="text-gray-700 font-medium">Bahasa Inggris</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metode Belajar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Metode Belajar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fleksibilitas dalam pembelajaran sesuai kebutuhan siswa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="font-semibold text-brand-navy mb-2">Les Tatap Muka</h3>
              <p className="text-sm text-gray-600">Guru datang ke rumah</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="font-semibold text-brand-navy mb-2">Les Online</h3>
              <p className="text-sm text-gray-600">Zoom/Google Meet</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-semibold text-brand-navy mb-2">Fokus Pemahaman</h3>
              <p className="text-sm text-gray-600">Bukan hafalan</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-semibold text-brand-navy mb-2">Laporan Progress</h3>
              <p className="text-sm text-gray-600">Untuk orang tua</p>
            </div>
          </div>
        </div>
      </section>

      {/* Area Layanan Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Area Layanan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                <span className="text-2xl mr-3">🚗</span>
                Les Tatap Muka
              </h3>
              <p className="text-gray-700">
                Les tatap muka tersedia untuk wilayah: <strong>Bekasi, Jakarta Timur, dan sekitarnya</strong>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                <span className="text-2xl mr-3">🌍</span>
                Les Online
              </h3>
              <p className="text-gray-700">
                Les online untuk <strong>seluruh Indonesia</strong>
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Harga dan Durasi Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Harga dan Durasi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Investasi terjangkau untuk masa depan anak yang cerah
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-brand-navy text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Jenjang</th>
                      <th className="px-6 py-4 text-left font-semibold">Durasi</th>
                      <th className="px-6 py-4 text-left font-semibold">Harga</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">SD</td>
                      <td className="px-6 py-4 text-gray-700">60 menit</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Rp100.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">SMP</td>
                      <td className="px-6 py-4 text-gray-700">90 menit</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Rp125.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">SMA</td>
                      <td className="px-6 py-4 text-gray-700">90 menit</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Rp150.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 z-[9998] transition-opacity duration-300 bg-black bg-opacity-75 backdrop-blur-sm animate-fade-in"
              onClick={closeModal}
            ></div>

            {/* Modal positioning */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>

            {/* Modal content */}
            <div className="relative inline-block w-full max-w-5xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-3xl shadow-2xl sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full sm:p-6 z-[9999] animate-scale-in">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Modal header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-2">
                    📝 Daftar Les Privat
                  </h3>
                  <p className="text-lg text-gray-600">
                    Isi formulir untuk memulai pembelajaran yang efektif
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-3 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 hover:rotate-90 transition-transform duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Illustration */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-lg animate-bounce-slow">
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  {/* Floating elements around illustration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -left-4 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Modal body */}
              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <label htmlFor="namaOrangTua" className="block text-sm font-semibold text-brand-navy mb-2">
                        👤 Nama Orang Tua *
                      </label>
                      <input
                        type="text"
                        id="namaOrangTua"
                        name="namaOrangTua"
                        value={formData.namaOrangTua}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200 hover:border-pink-300"
                        placeholder="Masukkan nama orang tua"
                      />
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-105">
                      <label htmlFor="namaSiswa" className="block text-sm font-semibold text-brand-navy mb-2">
                        🎓 Nama Siswa *
                      </label>
                      <input
                        type="text"
                        id="namaSiswa"
                        name="namaSiswa"
                        value={formData.namaSiswa}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200 hover:border-pink-300"
                        placeholder="Masukkan nama siswa"
                      />
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-105">
                      <label htmlFor="jenjang" className="block text-sm font-semibold text-brand-navy mb-2">
                        📚 Jenjang Pendidikan *
                      </label>
                      <select
                        id="jenjang"
                        name="jenjang"
                        value={formData.jenjang}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200 hover:border-pink-300"
                      >
                        <option value="">Pilih jenjang pendidikan</option>
                        <option value="SD">📖 SD (Sekolah Dasar)</option>
                        <option value="SMP">�� SMP (Sekolah Menengah Pertama)</option>
                        <option value="SMA">🎯 SMA (Sekolah Menengah Atas)</option>
                      </select>
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-105">
                      <label htmlFor="lokasi" className="block text-sm font-semibold text-brand-navy mb-2">
                        📍 Lokasi *
                      </label>
                      <input
                        type="text"
                        id="lokasi"
                        name="lokasi"
                        value={formData.lokasi}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200 hover:border-pink-300"
                        placeholder="Contoh: Bekasi Timur, Jakarta Timur"
                      />
                    </div>

                    <div className="md:col-span-2 transform transition-all duration-300 hover:scale-105">
                      <label htmlFor="nomorWhatsApp" className="block text-sm font-semibold text-brand-navy mb-2">
                        �� Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="nomorWhatsApp"
                        name="nomorWhatsApp"
                        value={formData.nomorWhatsApp}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200 hover:border-pink-300"
                        placeholder="Contoh: 08123456789"
                      />
                    </div>
                  </div>

                  {/* Modal footer */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105"
                    >
                      ❌ Batal
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      ✨ Kirim Permintaan
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        whatsappContact();
                        closeModal();
                      }}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      💬 WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Siap bantu anak Anda sukses belajar!
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Jangan tunggu lagi, mulai pembelajaran yang efektif dan menyenangkan bersama kami
          </p>
          <button
            onClick={openModal}
            className="bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            👉 Hubungi Kami Sekarang
          </button>
        </div>
      </section>

      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-[10000] animate-slide-in-right">
          <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold">Terima kasih!</p>
              <p className="text-sm opacity-90">Tim kami akan menghubungi Anda segera</p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="ml-4 text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
