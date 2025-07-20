import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground3D from "@/components/PageBackground3D";
import SectionBackground3D from "@/components/SectionBackground3D";

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  process: string[];
  pricing: string;
  timeline: string;
  portfolio: string[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  website: {
    id: "website",
    title: "Website Development",
    description:
      "Membangun website modern yang responsif dan optimized untuk semua perangkat dengan teknologi terdepan. Kami fokus pada performa, SEO, dan user experience yang superior.",
    features: [
      "Responsive Design untuk semua perangkat",
      "SEO Optimization untuk ranking Google",
      "Performance Optimization (PageSpeed 90+)",
      "CMS Integration (WordPress, Strapi, dll)",
      "E-commerce Integration",
      "Analytics & Tracking Setup",
      "SSL Certificate & Security",
      "Cross-browser Compatibility",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Vercel/Netlify",
    ],
    process: [
      "Requirements Analysis & Planning",
      "UI/UX Design & Prototyping",
      "Frontend Development",
      "Backend Development & Database",
      "Testing & Quality Assurance",
      "Deployment & Go-Live",
      "Training & Handover",
    ],
    pricing: "Mulai dari Rp 15.000.000 - Rp 100.000.000",
    timeline: "2-8 minggu tergantung kompleksitas",
    portfolio: [
      "Corporate Website",
      "E-commerce Platform",
      "Landing Page",
      "Portfolio Website",
    ],
  },
  mobile: {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Mengembangkan aplikasi mobile native dan cross-platform yang memberikan pengalaman pengguna luar biasa dengan performa optimal di iOS dan Android.",
    features: [
      "Cross-platform Development (iOS & Android)",
      "Native Performance & Feel",
      "Push Notifications System",
      "Offline Capability",
      "Real-time Data Synchronization",
      "In-App Purchases Integration",
      "Social Media Integration",
      "App Store Submission Support",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Firebase",
      "Redux",
      "TypeScript",
      "Native APIs",
      "Google Play Console",
    ],
    process: [
      "Market Research & Strategy",
      "UX/UI Design & Prototyping",
      "App Development & Testing",
      "Beta Testing & Feedback",
      "App Store Optimization",
      "Launch & Marketing Support",
      "Post-launch Support & Updates",
    ],
    pricing: "Mulai dari Rp 30.000.000 - Rp 200.000.000",
    timeline: "3-6 bulan tergantung fitur",
    portfolio: [
      "E-commerce App",
      "Social Media App",
      "Productivity App",
      "Educational App",
    ],
  },
  uiux: {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Menciptakan desain antarmuka yang indah dan pengalaman pengguna yang intuitif untuk meningkatkan engagement dan konversi bisnis Anda.",
    features: [
      "User Research & Persona Development",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Design System Creation",
      "Responsive Design Guidelines",
      "Developer Handoff Documentation",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Principle",
      "Zeplin",
      "Storybook",
      "Abstract",
    ],
    process: [
      "Discovery & Research Phase",
      "User Journey Mapping",
      "Wireframing & Information Architecture",
      "Visual Design & Style Guide",
      "Prototyping & Interaction Design",
      "Usability Testing & Iteration",
      "Final Design & Asset Delivery",
    ],
    pricing: "Mulai dari Rp 10.000.000 - Rp 75.000.000",
    timeline: "2-6 minggu tergantung scope",
    portfolio: [
      "Mobile App Design",
      "Web Application UI",
      "Dashboard Design",
      "E-commerce Design",
    ],
  },
  ai: {
    id: "ai",
    title: "AI Solutions",
    description:
      "Implementasi kecerdasan buatan untuk otomatisasi bisnis, analitik prediktif, dan chatbot yang membantu meningkatkan efisiensi operasional.",
    features: [
      "Machine Learning Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "Chatbot & Virtual Assistant",
      "Predictive Analytics",
      "Recommendation Systems",
      "AI-powered Automation",
      "Data Mining & Analysis",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "Dialogflow",
      "AWS AI Services",
      "Google AI Platform",
    ],
    process: [
      "Problem Definition & Data Assessment",
      "Data Collection & Preprocessing",
      "Model Development & Training",
      "Model Validation & Testing",
      "Integration & Deployment",
      "Performance Monitoring",
      "Continuous Improvement",
    ],
    pricing: "Mulai dari Rp 25.000.000 - Rp 300.000.000",
    timeline: "4-12 minggu tergantung kompleksitas",
    portfolio: [
      "Customer Service Chatbot",
      "Sales Prediction Model",
      "Image Recognition System",
      "Recommendation Engine",
    ],
  },
  ecommerce: {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description:
      "Platform jual beli online yang lengkap dengan sistem pembayaran terintegrasi, manajemen inventory, dan analytics untuk mengoptimalkan penjualan.",
    features: [
      "Multi-vendor Marketplace",
      "Payment Gateway Integration",
      "Inventory Management System",
      "Order Management & Tracking",
      "Customer Management (CRM)",
      "Analytics & Reporting Dashboard",
      "SEO & Marketing Tools",
      "Mobile-responsive Design",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Stripe/Midtrans",
      "Redis",
      "AWS S3",
      "Docker",
      "Elasticsearch",
    ],
    process: [
      "Business Requirements Analysis",
      "Platform Architecture Design",
      "Core Features Development",
      "Payment & Security Integration",
      "Testing & Quality Assurance",
      "Go-live & Migration Support",
      "Training & Documentation",
    ],
    pricing: "Mulai dari Rp 40.000.000 - Rp 500.000.000",
    timeline: "6-16 minggu tergantung fitur",
    portfolio: [
      "Fashion E-commerce",
      "Electronics Marketplace",
      "Food Delivery Platform",
      "B2B Trading Platform",
    ],
  },
  cloud: {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Deployment dan manajemen infrastruktur cloud untuk skalabilitas, keamanan, dan efisiensi maksimal dengan monitoring dan automation.",
    features: [
      "Cloud Architecture Design",
      "Container Orchestration (Docker/Kubernetes)",
      "CI/CD Pipeline Setup",
      "Infrastructure as Code (IaC)",
      "Monitoring & Logging Solutions",
      "Security & Compliance",
      "Auto-scaling Configuration",
      "Disaster Recovery Planning",
    ],
    technologies: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],
    process: [
      "Infrastructure Assessment & Planning",
      "Migration Strategy Development",
      "Environment Setup & Configuration",
      "CI/CD Pipeline Implementation",
      "Security & Monitoring Setup",
      "Performance Optimization",
      "Documentation & Training",
    ],
    pricing: "Mulai dari Rp 20.000.000 - Rp 150.000.000",
    timeline: "3-8 minggu tergantung kompleksitas",
    portfolio: [
      "Microservices Architecture",
      "Auto-scaling Web App",
      "Data Pipeline Setup",
      "Multi-region Deployment",
    ],
  },
};

export default function Layanan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );

  const openModal = (serviceId: string) => {
    setSelectedService(serviceDetails[serviceId]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-100 relative">
      <PageBackground3D />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Layanan <span className="text-brand-accent">Kami</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Solusi teknologi komprehensif untuk transformasi digital bisnis
              Anda
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {/* Website Development */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              {/* Background Illustration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-500">
                  <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
                  <path d="M21 1H3C1.9 1 1 1.9 1 3v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM3 21V3h18v18H3z"/>
                </svg>
              </div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 relative z-10">
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                Website Development
              </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                Website modern dan responsif yang dibangun dengan teknologi
                terdepan untuk performa optimal di semua perangkat.
              </p>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-blue-500"
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
                  <span className="text-sm text-gray-700">
                    Responsive Design
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-blue-500"
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
                  <span className="text-sm text-gray-700">SEO Optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-blue-500"
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
                  <span className="text-sm text-gray-700">Fast Loading</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-blue-500"
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
                  <span className="text-sm text-gray-700">CMS Integration</span>
                </div>
              </div>
                            <div className="mt-auto">
                <button
                  onClick={() => openModal("website")}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aplikasi mobile native dan cross-platform yang memberikan
                pengalaman pengguna yang luar biasa.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-500"
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
                  <span className="text-sm text-gray-700">iOS & Android</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-500"
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
                  <span className="text-sm text-gray-700">Cross-Platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-500"
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
                  <span className="text-sm text-gray-700">
                    Real-time Features
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-500"
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
                  <span className="text-sm text-gray-700">App Store Ready</span>
                </div>
              </div>
              <button
                onClick={() => openModal("mobile")}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* UI/UX Design */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                UI/UX Design
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desain antarmuka yang indah dan pengalaman pengguna yang
                intuitif untuk meningkatkan engagement.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-purple-500"
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
                  <span className="text-sm text-gray-700">User Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-purple-500"
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
                  <span className="text-sm text-gray-700">Wireframing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-purple-500"
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
                  <span className="text-sm text-gray-700">Prototyping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-purple-500"
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
                  <span className="text-sm text-gray-700">Design System</span>
                </div>
              </div>
              <button
                onClick={() => openModal("uiux")}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* AI Solutions */}
            <div className="bg-gradient-to-br from-brand-accent/10 to-orange-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                AI Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Implementasi kecerdasan buatan untuk otomatisasi bisnis dan
                analitik prediktif yang menguntungkan.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-brand-accent"
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
                  <span className="text-sm text-gray-700">
                    Machine Learning
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-brand-accent"
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
                  <span className="text-sm text-gray-700">Chatbot & NLP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-brand-accent"
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
                  <span className="text-sm text-gray-700">Data Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-brand-accent"
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
                  <span className="text-sm text-gray-700">Automation</span>
                </div>
              </div>
              <button
                onClick={() => openModal("ai")}
                className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* E-commerce Solutions */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M17 17a2 2 0 100 4 2 2 0 000-4zM9 17a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                E-commerce Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Platform jual beli online yang lengkap dengan sistem pembayaran
                dan manajemen inventory terintegrasi.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-indigo-500"
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
                  <span className="text-sm text-gray-700">Payment Gateway</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-indigo-500"
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
                  <span className="text-sm text-gray-700">
                    Inventory Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-indigo-500"
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
                  <span className="text-sm text-gray-700">Admin Dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-indigo-500"
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
                  <span className="text-sm text-gray-700">Multi-vendor</span>
                </div>
              </div>
              <button
                onClick={() => openModal("ecommerce")}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-teal-500"
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
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">
                Cloud & DevOps
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deployment dan manajemen infrastruktur cloud untuk skalabilitas
                dan keamanan maksimal.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-teal-500"
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
                  <span className="text-sm text-gray-700">AWS/GCP/Azure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-teal-500"
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
                  <span className="text-sm text-gray-700">CI/CD Pipeline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-teal-500"
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
                  <span className="text-sm text-gray-700">Auto Scaling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-teal-500"
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
                  <span className="text-sm text-gray-700">Monitoring</span>
                </div>
              </div>
              <button
                onClick={() => openModal("cloud")}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodologi yang telah terbukti untuk memastikan setiap project
              berjalan lancar dan sesuai ekspektasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                Konsultasi
              </h3>
              <p className="text-gray-600 text-sm">
                Memahami kebutuhan dan tujuan bisnis Anda secara mendalam
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy">2</span>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                Perencanaan
              </h3>
              <p className="text-gray-600 text-sm">
                Merancang solusi optimal dengan timeline dan budget yang jelas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                Pengembangan
              </h3>
              <p className="text-gray-600 text-sm">
                Implementasi dengan update progress berkala dan feedback loop
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                Deployment
              </h3>
              <p className="text-gray-600 text-sm">
                Peluncuran dan dukungan maintenance untuk operasional optimal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={closeModal}
            ></div>

            {/* Modal positioning */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>

            {/* Modal content */}
            <div className="inline-block w-full max-w-4xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
              {/* Modal header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                  {selectedService.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
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

              {/* Modal body */}
              <div className="max-h-96 overflow-y-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left column */}
                  <div>
                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-brand-navy mb-3">
                        Deskripsi
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedService.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-brand-navy mb-3">
                        Fitur Utama
                      </h4>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-brand-navy mb-3">
                        Teknologi
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div>
                    {/* Process */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-brand-navy mb-3">
                        Proses Kerja
                      </h4>
                      <ol className="space-y-2">
                        {selectedService.process.map((step, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <span className="flex-shrink-0 w-6 h-6 bg-brand-accent text-brand-navy text-xs font-bold rounded-full flex items-center justify-center">
                              {index + 1}
                            </span>
                            <span className="text-sm text-gray-700">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-brand-navy mb-2">
                          💰 Estimasi Harga
                        </h5>
                        <p className="text-sm text-gray-700">
                          {selectedService.pricing}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-brand-navy mb-2">
                          ⏱️ Timeline
                        </h5>
                        <p className="text-sm text-gray-700">
                          {selectedService.timeline}
                        </p>
                      </div>
                    </div>

                    {/* Portfolio Examples */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-brand-navy mb-3">
                        Contoh Portfolio
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedService.portfolio.map((item, index) => (
                          <div
                            key={index}
                            className="bg-brand-navy/5 rounded-lg p-3 text-center"
                          >
                            <span className="text-xs text-gray-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Tutup
                </button>
                <button className="flex-1 bg-brand-accent hover:bg-brand-accent/90 text-brand-navy font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                  Konsultasi Gratis
                </button>
                <button className="flex-1 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                  Minta Penawaran
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
