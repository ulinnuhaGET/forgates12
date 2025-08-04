import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground3D from "@/components/PageBackground3D";
import SectionBackground3D from "@/components/SectionBackground3D";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Berapa lama waktu pengerjaan project?",
    answer:
      "Timeline bervariasi tergantung kompleksitas project. Website sederhana bisa selesai dalam 2-4 minggu, sementara aplikasi kompleks membutuhkan 3-6 bulan. Kami akan memberikan estimasi timeline yang detail setelah konsultasi.",
  },
  {
    id: 2,
    question: "Apakah ada garansi untuk project yang dikerjakan?",
    answer:
      "Ya, kami memberikan garansi 6 bulan untuk bug fixing dan support teknis. Selain itu, kami juga menyediakan maintenance plan untuk update dan pengembangan lanjutan.",
  },
  {
    id: 3,
    question: "Bagaimana sistem pembayaran yang berlaku?",
    answer:
      "Kami menggunakan sistem pembayaran bertahap: 30% down payment, 40% saat milestone tertentu tercapai, dan 30% sisanya saat project selesai. Payment method yang kami terima adalah bank transfer dan e-wallet.",
  },
  {
    id: 4,
    question: "Apakah bisa revisi jika hasil tidak sesuai ekspektasi?",
    answer:
      "Tentu saja! Kami memberikan 3x minor revision gratis selama masih dalam scope project. Untuk revision major, akan didiskusikan terlebih dahulu terkait timeline dan biaya tambahan jika diperlukan.",
  },
  {
    id: 5,
    question: "Bisakah bekerja dengan klien di luar Indonesia?",
    answer:
      "Absolutely! Kami sudah berpengalaman menangani klien internasional. Komunikasi via video call, email, dan project management tools untuk memastikan kolaborasi yang efektif meskipun berbeda timezone.",
  },
  {
    id: 6,
    question: "Apakah sumber kode akan diserahkan sepenuhnya?",
    answer:
      "Ya, setelah project selesai dan pelunasan, semua source code akan diserahkan kepada klien beserta dokumentasi teknis. Kami juga memberikan tutorial untuk maintenance dasar.",
  },
  {
    id: 7,
    question: "Bagaimana proses komunikasi selama pengerjaan project?",
    answer:
      "Kami menggunakan berbagai channel komunikasi seperti WhatsApp untuk update harian, Slack/Discord untuk diskusi teknis, dan video call mingguan untuk review progress. Klien juga mendapat akses ke project management dashboard.",
  },
  {
    id: 8,
    question: "Apakah ada support setelah project selesai?",
    answer:
      "Tentu! Kami menyediakan support gratis 6 bulan pertama, kemudian bisa dilanjutkan dengan maintenance plan bulanan atau tahunan. Support mencakup bug fixing, minor updates, dan konsultasi teknis.",
  },
];

function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-gray-600">
            Jawaban untuk pertanyaan yang sering diajukan oleh klien. Klik
            pertanyaan untuk melihat jawaban lengkapnya.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in-up"
                style={{ animationDelay: `${item.id * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-brand-navy pr-4">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <svg
                      className="w-5 h-5 text-brand-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-brand-navy/5 to-brand-accent/5 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-brand-navy mb-3">
              Tidak menemukan jawaban yang Anda cari?
            </h3>
            <p className="text-gray-600 mb-6">
              Tim kami siap membantu menjawab pertanyaan spesifik Anda. Jangan
              ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                💬 Chat WhatsApp
              </button>
              <button className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                📧 Kirim Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Kontak() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 relative">
      <PageBackground3D />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-in-up">
              Hubungi <span className="text-brand-accent">Kami</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Mari diskusikan project impian Anda. Kami siap membantu
              mewujudkannya menjadi kenyataan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative">
        <SectionBackground3D variant="light" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 animate-slide-in-left">
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-6">
                Kirim Pesan
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nama Depan *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nama Belakang *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                    placeholder="PT. Contoh Indonesia"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih layanan...</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="ai">AI Solutions</option>
                    <option value="ecommerce">E-commerce Solutions</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="custom">Solusi Custom</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Estimasi Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih range budget...</option>
                    <option value="under-50m">Di bawah Rp 50 Juta</option>
                    <option value="50m-100m">Rp 50 - 100 Juta</option>
                    <option value="100m-250m">Rp 100 - 250 Juta</option>
                    <option value="above-250m">Di atas Rp 250 Juta</option>
                    <option value="discuss">Mari diskusikan</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                    placeholder="Ceritakan tentang project yang ingin Anda kembangkan..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-brand-accent border-gray-300 rounded focus:ring-brand-accent"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Saya setuju dengan{" "}
                    <a
                      href="#"
                      className="text-brand-accent hover:text-brand-accent/80 underline"
                    >
                      kebijakan privasi
                    </a>{" "}
                    dan{" "}
                    <a
                      href="#"
                      className="text-brand-accent hover:text-brand-accent/80 underline"
                    >
                      syarat & ketentuan
                    </a>{" "}
                    yang berlaku.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-navy mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Kami sangat antusias mendengar tentang project Anda. Jangan
                  ragu untuk menghubungi kami melalui berbagai channel yang
                  tersedia. Tim kami siap memberikan konsultasi gratis dan
                  membantu mewujudkan visi digital Anda.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      contact@forgates.dev
                      <br />
                      project@forgates.dev
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Respon dalam 24 jam
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600">
                      +62 812 3456 7890
                      <br />
                      +62 812 3456 7891
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Konsultasi gratis langsung
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">
                      Lokasi
                    </h3>
                    <p className="text-gray-600">
                      Jakarta, Indonesia
                      <br />
                      Remote collaboration worldwide
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Meeting via video call atau in-person
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">
                      Jam Kerja
                    </h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 09:00 - 18:00 WIB
                      <br />
                      Sabtu: 09:00 - 15:00 WIB
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Emergency support 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-4">
                  Ikuti Kami
                </h3>
                <p className="text-gray-600 mb-6">
                  Dapatkan update terbaru tentang teknologi, tips development,
                  dan showcase project kami.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <FAQSection />

      <Footer />
    </div>
  );
}
