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
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              🎓 <span className="text-brand-accent">Les Privat</span> SD–SMA
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              Guru Ramah & Berpengalaman Siap Datang ke Rumah atau Online
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Dapatkan pembelajaran yang personal, sabar, dan sesuai dengan kebutuhan anak.
            </p>
            <button
              onClick={openModal}
              className="bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
            >
              📅 Jadwalkan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Tentang Pengajar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
            
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                <div className="w-80 h-80 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl ring-8 ring-pink-100/50 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Mata Pelajaran yang Tersedia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pembelajaran berkualitas untuk semua jenjang pendidikan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SD */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                SD (Sekolah Dasar)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Matematika</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Bahasa Indonesia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">IPA</span>
                </li>
              </ul>
            </div>

            {/* SMP */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎒</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                SMP (Sekolah Menengah Pertama)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Matematika</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Bahasa Inggris</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">IPA</span>
                </li>
              </ul>
            </div>

            {/* SMA */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                SMA (Sekolah Menengah Atas)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Matematika</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Fisika</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Kimia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Bahasa Inggris</span>
                </li>
              </ul>
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

      {/* Testimoni Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Testimoni Orang Tua
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kepuasan dan kepercayaan orang tua adalah prioritas kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">👩</div>
                <div>
                  <p className="text-gray-700 italic mb-4">
                    "Bu guru sangat sabar dan telaten. Anak saya jadi lebih percaya diri!"
                  </p>
                  <p className="font-semibold text-brand-navy">– Ibu Rina</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">👨</div>
                <div>
                  <p className="text-gray-700 italic mb-4">
                    "Cara mengajarnya mudah dipahami. Anak saya sekarang semangat belajar."
                  </p>
                  <p className="font-semibold text-brand-navy">– Pak Dani</p>
                </div>
              </div>
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

      {/* Formulir Pendaftaran Section */}
      <section id="daftar" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Formulir Pendaftaran Cepat
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Isi formulir di bawah ini untuk memulai pembelajaran
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="namaOrangTua" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Orang Tua *
                  </label>
                  <input
                    type="text"
                    id="namaOrangTua"
                    name="namaOrangTua"
                    value={formData.namaOrangTua}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="Masukkan nama orang tua"
                  />
                </div>

                <div>
                  <label htmlFor="namaSiswa" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Siswa *
                  </label>
                  <input
                    type="text"
                    id="namaSiswa"
                    name="namaSiswa"
                    value={formData.namaSiswa}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="Masukkan nama siswa"
                  />
                </div>

                <div>
                  <label htmlFor="jenjang" className="block text-sm font-medium text-gray-700 mb-2">
                    Jenjang *
                  </label>
                  <select
                    id="jenjang"
                    name="jenjang"
                    value={formData.jenjang}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                  >
                    <option value="">Pilih jenjang</option>
                    <option value="SD">SD (Sekolah Dasar)</option>
                    <option value="SMP">SMP (Sekolah Menengah Pertama)</option>
                    <option value="SMA">SMA (Sekolah Menengah Atas)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lokasi" className="block text-sm font-medium text-gray-700 mb-2">
                    Lokasi *
                  </label>
                  <input
                    type="text"
                    id="lokasi"
                    name="lokasi"
                    value={formData.lokasi}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="Contoh: Bekasi Timur, Jakarta Timur"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="nomorWhatsApp" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="nomorWhatsApp"
                    name="nomorWhatsApp"
                    value={formData.nomorWhatsApp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="Contoh: 08123456789"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  Kirim Permintaan
                </button>
                <button
                  type="button"
                  onClick={whatsappContact}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  📱 Hubungi via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

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
            onClick={() => document.getElementById('daftar')?.scrollIntoView({ behavior: 'smooth' })}
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
