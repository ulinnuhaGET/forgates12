import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground3D from "@/components/PageBackground3D";
import SectionBackground3D from "@/components/SectionBackground3D";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  gradient: string;
  icon: string;
  badge: string;
  badgeColor: string;
  demoUrl: string;
  githubUrl?: string;
}

const categories = [
  { id: "all", name: "Semua Project", icon: "🔥" },
  { id: "website", name: "Website", icon: "🌐" },
  { id: "mobile", name: "Mobile App", icon: "📱" },
  { id: "ai", name: "AI & ML", icon: "🤖" },
  { id: "enterprise", name: "Enterprise", icon: "🏢" },
  { id: "uiux", name: "UI/UX Design", icon: "🎨" },
  { id: "iot", name: "IoT Solutions", icon: "🔧" },
];

const projects: Project[] = [
  // Website Category (5 projects)
  {
    id: 1,
    title: "Toko Online Modern",
    description:
      "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi, manajemen inventory real-time, dan dashboard admin yang komprehensif untuk mengelola seluruh operasional toko online.",
    category: "website",
    tags: ["React.js", "Node.js", "PostgreSQL", "Payment Gateway"],
    gradient: "from-blue-500 to-purple-600",
        icon: "M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z",
    badge: "Website",
    badgeColor: "bg-blue-500",
    demoUrl: "https://toko-online-demo.vercel.app",
    githubUrl: "https://github.com/forgates/toko-online-modern",
  },
  {
    id: 2,
    title: "Corporate Landing Page",
    description:
      "Website perusahaan yang profesional dengan desain modern, optimasi SEO, dan integrasi konten CMS untuk memudahkan update konten secara berkala.",
    category: "website",
    tags: ["Next.js", "Tailwind CSS", "Strapi CMS", "SEO"],
    gradient: "from-slate-500 to-blue-500",
        icon: "M4 4H20C20.55 4 21 4.45 21 5V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V5C3 4.45 3.45 4 4 4ZM5 6V18H19V6H5Z",
    badge: "Corporate",
    badgeColor: "bg-slate-500",
    demoUrl: "https://corporate-landing-demo.netlify.app",
    githubUrl: "https://github.com/forgates/corporate-landing",
  },
  {
    id: 3,
    title: "Portfolio Kreatif",
    description:
      "Website portfolio untuk creative agency dengan animasi interaktif, galeri multimedia, dan showcase project yang menarik untuk memikat klien potensial.",
    category: "website",
    tags: ["React.js", "Framer Motion", "GSAP", "Responsive"],
    gradient: "from-pink-500 to-rose-500",
        icon: "M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z",
    badge: "Portfolio",
    badgeColor: "bg-pink-500",
    demoUrl: "https://portfolio-kreatif-demo.surge.sh",
    githubUrl: "https://github.com/forgates/portfolio-kreatif",
  },
  {
    id: 4,
    title: "Platform Edukasi Online",
    description:
      "Learning management system dengan fitur video streaming, quiz interaktif, progress tracking, dan sertifikat digital untuk pengalaman belajar yang komprehensif.",
    category: "website",
    tags: ["Vue.js", "Laravel", "MySQL", "Video Streaming"],
    gradient: "from-green-500 to-emerald-500",
        icon: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z",
    badge: "Education",
    badgeColor: "bg-green-500",
    demoUrl: "https://platform-edukasi-demo.vercel.app",
    githubUrl: "https://github.com/forgates/platform-edukasi",
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    description:
      "Platform jual beli properti dengan pencarian advanced, virtual tour 360°, sistem booking viewing, dan integrasi maps untuk memberikan pengalaman properti digital yang lengkap.",
    category: "website",
    tags: ["React.js", "Node.js", "MongoDB", "Maps API"],
    gradient: "from-orange-500 to-amber-500",
        icon: "M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z",
    badge: "Real Estate",
    badgeColor: "bg-orange-500",
    demoUrl: "https://real-estate-marketplace-demo.netlify.app",
    githubUrl: "https://github.com/forgates/real-estate-marketplace",
  },

  // Mobile Category (5 projects)
  {
    id: 6,
    title: "Aplikasi Produktivitas",
    description:
      "Aplikasi mobile cross-platform untuk manajemen tugas dengan fitur sinkronisasi real-time, notifikasi cerdas, dan analitik produktivitas yang membantu pengguna mencapai target mereka.",
    category: "mobile",
    tags: ["React Native", "Firebase", "Push Notifications", "Real-time Sync"],
    gradient: "from-green-500 to-teal-600",
    icon: "M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z",
    badge: "Mobile App",
    badgeColor: "bg-green-500",
  },
  {
    id: 7,
    title: "Food Delivery App",
    description:
      "Aplikasi delivery makanan dengan fitur tracking real-time, payment gateway, rating sistem, dan notification push untuk pengalaman pesan-antar yang sempurna.",
    category: "mobile",
    tags: ["Flutter", "Google Maps", "Payment API", "Real-time Tracking"],
    gradient: "from-red-500 to-pink-500",
    icon: "M18.06 22.99H1.94C1.28 22.99 0.740005 22.45 0.740005 21.79V2.21C0.740005 1.55 1.28 1.01 1.94 1.01H18.06C18.72 1.01 19.26 1.55 19.26 2.21V21.79C19.26 22.45 18.72 22.99 18.06 22.99ZM1.94 2.01V21.99H18.06V2.01H1.94Z",
    badge: "Food App",
    badgeColor: "bg-red-500",
  },
  {
    id: 8,
    title: "Fitness Tracking App",
    description:
      "Aplikasi fitness dengan workout tracker, nutrition planner, progress analytics, dan social features untuk memotivasi pengguna mencapai goal kesehatan mereka.",
    category: "mobile",
    tags: ["React Native", "HealthKit", "Social Features", "Analytics"],
    gradient: "from-blue-500 to-cyan-500",
    icon: "M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z",
    badge: "Fitness",
    badgeColor: "bg-blue-500",
  },
  {
    id: 9,
    title: "E-wallet & Banking",
    description:
      "Aplikasi financial technology dengan fitur transfer, payment, investment tracking, budgeting tools, dan security berlapis untuk transaksi digital yang aman.",
    category: "mobile",
    tags: ["Flutter", "Blockchain", "Security", "Biometric Auth"],
    gradient: "from-purple-500 to-indigo-500",
    icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z",
    badge: "Fintech",
    badgeColor: "bg-purple-500",
  },
  {
    id: 10,
    title: "Social Media App",
    description:
      "Platform media sosial dengan fitur story, live streaming, chat grup, content sharing, dan algoritma AI untuk personalized feed yang engaging bagi pengguna.",
    category: "mobile",
    tags: ["React Native", "WebRTC", "AI Algorithm", "Real-time Chat"],
    gradient: "from-emerald-500 to-teal-500",
    icon: "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H5V18L14,9L16,11L20,7L18,5Z",
    badge: "Social",
    badgeColor: "bg-emerald-500",
  },

  // AI Category (5 projects)
  {
    id: 11,
    title: "Dashboard AI Analytics",
    description:
      "Platform analitik berbasis AI untuk prediksi bisnis dengan visualisasi data yang interaktif, machine learning untuk forecasting, dan insights real-time yang actionable.",
    category: "ai",
    tags: ["Python", "TensorFlow", "D3.js", "Machine Learning"],
    gradient: "from-brand-accent to-orange-500",
    icon: "M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z",
    badge: "AI Platform",
    badgeColor: "bg-brand-accent",
  },
  {
    id: 12,
    title: "Chatbot Customer Service",
    description:
      "AI chatbot dengan natural language processing untuk customer support otomatis, integrasi multi-platform, dan machine learning yang terus belajar dari interaksi.",
    category: "ai",
    tags: ["Python", "NLP", "DialogFlow", "Webhook Integration"],
    gradient: "from-blue-500 to-purple-500",
    icon: "M12,2A2,2 0 0,1 14,4V8A2,2 0 0,1 12,10A2,2 0 0,1 10,8V4A2,2 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",
    badge: "Chatbot",
    badgeColor: "bg-blue-500",
  },
  {
    id: 13,
    title: "Computer Vision System",
    description:
      "Sistem computer vision untuk object detection, face recognition, dan image analysis dengan akurasi tinggi untuk keperluan security dan automation industry.",
    category: "ai",
    tags: ["OpenCV", "PyTorch", "YOLO", "Image Processing"],
    gradient: "from-gray-500 to-slate-500",
    icon: "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",
    badge: "Vision AI",
    badgeColor: "bg-gray-500",
  },
  {
    id: 14,
    title: "Recommendation Engine",
    description:
      "Sistem rekomendasi cerdas menggunakan collaborative filtering dan content-based filtering untuk e-commerce, streaming platform, dan content discovery.",
    category: "ai",
    tags: [
      "Python",
      "Scikit-learn",
      "Collaborative Filtering",
      "Deep Learning",
    ],
    gradient: "from-indigo-500 to-purple-500",
    icon: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",
    badge: "Recommendation",
    badgeColor: "bg-indigo-500",
  },
  {
    id: 15,
    title: "Predictive Maintenance AI",
    description:
      "Sistem AI untuk prediksi maintenance peralatan industri menggunakan sensor data, pattern recognition, dan machine learning untuk mencegah downtime.",
    category: "ai",
    tags: ["Python", "Time Series", "Prophet", "Industrial IoT"],
    gradient: "from-green-500 to-emerald-500",
    icon: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
    badge: "Predictive AI",
    badgeColor: "bg-green-500",
  },

  // Enterprise Category (5 projects)
  {
    id: 16,
    title: "Platform SaaS B2B",
    description:
      "Solusi enterprise untuk manajemen bisnis dengan fitur multi-tenant, analitik mendalam, sistem billing otomatis, dan integrasi API yang komprehensif untuk skalabilitas tinggi.",
    category: "enterprise",
    tags: ["Next.js", "Node.js", "AWS", "Microservices"],
    gradient: "from-indigo-500 to-blue-600",
    icon: "M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z",
    badge: "Enterprise",
    badgeColor: "bg-indigo-500",
  },
  {
    id: 17,
    title: "Sistem CRM Terintegrasi",
    description:
      "Platform manajemen hubungan pelanggan dengan otomatisasi marketing, sales pipeline, dan customer support yang efisien.",
    category: "enterprise",
    tags: ["Vue.js", "Laravel", "MySQL", "Email Automation"],
    gradient: "from-emerald-500 to-green-600",
    icon: "M16,4C18.11,4 19.8,5.69 19.8,7.8C19.8,9.91 18.11,11.6 16,11.6C13.89,11.6 12.2,9.91 12.2,7.8C12.2,5.69 13.89,4 16,4M16,5.9C15.12,5.9 14.4,6.62 14.4,7.5C14.4,8.38 15.12,9.1 16,9.1C16.88,9.1 17.6,8.38 17.6,7.5C17.6,6.62 16.88,5.9 16,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M11.5,14V17.5H15V15.5H13.5V14H11.5M16.5,14V17.5H20V15.5H18.5V14H16.5Z",
    badge: "Business",
    badgeColor: "bg-emerald-500",
  },
  {
    id: 18,
    title: "ERP Manufacturing System",
    description:
      "Enterprise Resource Planning untuk industri manufaktur dengan modul inventory, production planning, quality control, dan supply chain management yang terintegrasi.",
    category: "enterprise",
    tags: ["React.js", "Spring Boot", "Oracle", "SAP Integration"],
    gradient: "from-red-500 to-orange-500",
    icon: "M12,2L13.09,8.26L20,9L13.09,9.74L12,16L10.91,9.74L4,9L10.91,8.26L12,2M6.5,2L7.5,5.5L11,6.5L7.5,7.5L6.5,11L5.5,7.5L2,6.5L5.5,5.5L6.5,2M17.5,13L18.5,16.5L22,17.5L18.5,18.5L17.5,22L16.5,18.5L13,17.5L16.5,16.5L17.5,13Z",
    badge: "ERP",
    badgeColor: "bg-red-500",
  },
  {
    id: 19,
    title: "HR Management Platform",
    description:
      "Sistem manajemen SDM komprehensif dengan fitur recruitment, payroll, performance review, attendance tracking, dan employee self-service portal.",
    category: "enterprise",
    tags: ["Angular", "NestJS", "PostgreSQL", "Redis"],
    gradient: "from-purple-500 to-pink-500",
    icon: "M16,4C18.11,4 19.8,5.69 19.8,7.8C19.8,9.91 18.11,11.6 16,11.6C13.89,11.6 12.2,9.91 12.2,7.8C12.2,5.69 13.89,4 16,4M16,5.9C15.12,5.9 14.4,6.62 14.4,7.5C14.4,8.38 15.12,9.1 16,9.1C16.88,9.1 17.6,8.38 17.6,7.5C17.6,6.62 16.88,5.9 16,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M11.5,14V17.5H15V15.5H13.5V14H11.5M16.5,14V17.5H20V15.5H18.5V14H16.5Z",
    badge: "HR System",
    badgeColor: "bg-purple-500",
  },
  {
    id: 20,
    title: "Supply Chain Management",
    description:
      "Platform manajemen supply chain end-to-end dengan tracking shipment, vendor management, procurement automation, dan analytics untuk optimasi logistik.",
    category: "enterprise",
    tags: ["React.js", "Django", "Docker", "Kubernetes"],
    gradient: "from-cyan-500 to-blue-500",
    icon: "M4,15V9H12V4.16L19.84,12H15V17.84L7.16,10H4M2,10H5V14H2V10M22,10V14H19V10H22M10,2H14V5H10V2M10,19H14V22H10V19Z",
    badge: "Supply Chain",
    badgeColor: "bg-cyan-500",
  },

  // UI/UX Category (5 projects)
  {
    id: 21,
    title: "Design System Modern",
    description:
      "Komponen UI yang konsisten dan reusable untuk membangun pengalaman pengguna yang seamless dan scalable.",
    category: "uiux",
    tags: ["Figma", "Storybook", "Design Tokens", "Component Library"],
    gradient: "from-purple-500 to-pink-600",
    icon: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z",
    badge: "UI/UX",
    badgeColor: "bg-purple-500",
  },
  {
    id: 22,
    title: "Mobile Banking UI Design",
    description:
      "Desain antarmuka aplikasi mobile banking yang user-friendly dengan fokus pada security, accessibility, dan user experience yang intuitif untuk semua kalangan.",
    category: "uiux",
    tags: ["Figma", "User Research", "Prototyping", "Accessibility"],
    gradient: "from-blue-500 to-indigo-500",
    icon: "M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5H5.21L4.27,3H1M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z",
    badge: "Banking UI",
    badgeColor: "bg-blue-500",
  },
  {
    id: 23,
    title: "E-commerce Dashboard Design",
    description:
      "Dashboard admin e-commerce dengan data visualization yang informatif, workflow yang efisien, dan interface yang mudah digunakan untuk mengelola toko online.",
    category: "uiux",
    tags: ["Sketch", "InVision", "Dashboard Design", "Data Visualization"],
    gradient: "from-green-500 to-emerald-500",
    icon: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z",
    badge: "Dashboard",
    badgeColor: "bg-green-500",
  },
  {
    id: 24,
    title: "Healthcare App UI/UX",
    description:
      "Desain aplikasi kesehatan dengan appointment booking, medical records, telemedicine interface, dan user experience yang mendukung patient care yang optimal.",
    category: "uiux",
    tags: ["Adobe XD", "User Journey", "Healthcare UX", "Telemedicine"],
    gradient: "from-red-500 to-pink-500",
    icon: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H13V17H11V13H7V11H11V7H13V11H17V13Z",
    badge: "Healthcare",
    badgeColor: "bg-red-500",
  },
  {
    id: 25,
    title: "Travel App Interface",
    description:
      "Desain aplikasi travel dengan booking system, itinerary planner, reviews & ratings, dan discovery features yang membuat planning perjalanan menjadi menyenangkan.",
    category: "uiux",
    tags: ["Figma", "Material Design", "Travel UX", "Booking Flow"],
    gradient: "from-yellow-500 to-orange-500",
    icon: "M2.5,19C2.5,20.11 3.39,21 4.5,21H19.5C20.61,21 21.5,20.11 21.5,19V12H2.5V19M6.5,16H17.5V18H6.5V16M21.5,4H19.5V2H17.5V4H6.5V2H4.5V4H2.5C1.39,4 0.5,4.89 0.5,6V10H23.5V6C23.5,4.89 22.61,4 21.5,4Z",
    badge: "Travel App",
    badgeColor: "bg-yellow-500",
  },

  // IoT Category (5 projects)
  {
    id: 26,
    title: "IoT Monitoring System",
    description:
      "Dashboard monitoring perangkat IoT dengan prediksi maintenance berbasis machine learning dan alert system real-time.",
    category: "iot",
    tags: ["Arduino", "MQTT", "InfluxDB", "Grafana"],
    gradient: "from-teal-500 to-cyan-600",
    icon: "M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",
    badge: "IoT",
    badgeColor: "bg-teal-500",
  },
  {
    id: 27,
    title: "Smart Home Automation",
    description:
      "Sistem otomasi rumah pintar dengan kontrol lighting, security, climate control, dan energy monitoring melalui aplikasi mobile dan voice commands.",
    category: "iot",
    tags: ["Raspberry Pi", "Home Assistant", "Zigbee", "Voice Control"],
    gradient: "from-blue-500 to-purple-500",
    icon: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
    badge: "Smart Home",
    badgeColor: "bg-blue-500",
  },
  {
    id: 28,
    title: "Agriculture IoT Solution",
    description:
      "Sistem monitoring pertanian pintar dengan sensor kelembaban tanah, cuaca, dan otomasi irigasi untuk meningkatkan hasil panen dan efisiensi air.",
    category: "iot",
    tags: ["ESP32", "Soil Sensors", "Weather API", "Automated Irrigation"],
    gradient: "from-green-500 to-lime-500",
    icon: "M17,6H22V8H20V16H18V8H17V6M16,8H14L12,5L10,8H8L5.5,12L8,16H16L18.5,12L16,8Z",
    badge: "AgriTech",
    badgeColor: "bg-green-500",
  },
  {
    id: 29,
    title: "Industrial IoT Platform",
    description:
      "Platform monitoring industri dengan sensor vibration, temperature, pressure, dan predictive maintenance untuk mencegah equipment failure dan downtime.",
    category: "iot",
    tags: ["LoRaWAN", "Industrial Sensors", "Edge Computing", "SCADA"],
    gradient: "from-gray-500 to-slate-600",
    icon: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
    badge: "Industrial",
    badgeColor: "bg-gray-500",
  },
  {
    id: 30,
    title: "Vehicle Tracking System",
    description:
      "Sistem tracking kendaraan dengan GPS monitoring, fuel consumption tracking, driver behavior analysis, dan fleet management untuk optimasi operasional transportasi.",
    category: "iot",
    tags: ["GPS Module", "GSM", "Fleet Management", "Geofencing"],
    gradient: "from-red-500 to-orange-500",
    icon: "M5,11L6.5,6.5H17.5L19,11H5M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z",
    badge: "Vehicle IoT",
    badgeColor: "bg-red-500",
  },
];

export default function Portofolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

    const handleViewDetail = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleGithubView = (project: Project) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Source code untuk ${project.title} tidak tersedia untuk umum.`);
    }
  };

    const handleLiveDemo = (project: Project) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Demo untuk ${project.title} sedang dalam pengembangan.`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-100 relative">
      <PageBackground3D />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Portofolio <span className="text-brand-accent">Kami</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Koleksi karya digital yang telah kami kembangkan dengan dedikasi
              dan keahlian tinggi
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-8">
              Filter by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === category.id
                      ? "bg-brand-navy text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  <span className="text-sm">{category.icon}</span>
                  <span>{category.name}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-white text-gray-500"
                    }`}
                  >
                    {category.id === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === category.id)
                          .length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Count & Filter Info */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Menampilkan{" "}
              <span className="font-semibold text-brand-navy">
                {filteredProjects.length}
              </span>{" "}
              project
              {activeCategory !== "all" && (
                <span>
                  {" "}
                  dalam kategori{" "}
                  <span className="font-semibold text-brand-navy">
                    {categories.find((c) => c.id === activeCategory)?.name}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Projects Grid - Large Projects */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {filteredProjects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div
                    className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <div className="text-white text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-10 h-10"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={project.icon} />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold">
                        {project.title.split(" ").slice(0, 2).join(" ")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span
                      className={`${project.badgeColor} text-white text-sm font-semibold px-4 py-2 rounded-full`}
                    >
                      {project.badge}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleViewDetail(project)}
                      className="flex-1 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                    >
                      Lihat Detail
                    </button>
                    <button
                      onClick={() => handleLiveDemo(project)}
                      className="flex-1 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Smaller Projects Grid */}
          {filteredProjects.length > 4 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.slice(4).map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <div
                      className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                    >
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d={project.icon} />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">
                          {project.title.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`${project.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                      >
                        {project.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description.substring(0, 120)}...
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleViewDetail(project)}
                        className="flex-1 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 text-sm"
                      >
                        Lihat Detail
                      </button>
                      <button
                        onClick={() => handleLiveDemo(project)}
                        className="flex-1 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 text-sm"
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Belum Ada Project
              </h3>
              <p className="text-gray-600">
                Project dalam kategori ini sedang dalam pengembangan
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Teknologi yang Kami Kuasai
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stack teknologi modern yang kami gunakan untuk membangun solusi
              digital yang robust dan scalable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-brand-navy mb-4">
                Frontend
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">React.js & Next.js</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">Vue.js & Nuxt.js</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">TypeScript</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-brand-navy mb-4">
                Backend
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">Node.js & Express</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">Python & Django</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">PHP & Laravel</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">GraphQL & REST API</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-brand-navy mb-4">
                Database
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">PostgreSQL</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">MongoDB</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">Redis</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">Firebase</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-brand-navy mb-4">
                Cloud & DevOps
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">AWS & GCP</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">Docker & Kubernetes</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">CI/CD Pipeline</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-gray-700">Monitoring & Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Project Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl font-display font-bold text-brand-navy mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        className={`${selectedProject.badgeColor} text-white border-none`}
                      >
                        {selectedProject.badge}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {
                          categories.find(
                            (c) => c.id === selectedProject.category,
                          )?.name
                        }
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Visual */}
                <div className="mb-6">
                  <div
                    className={`h-48 bg-gradient-to-br ${selectedProject.gradient} rounded-xl flex items-center justify-center`}
                  >
                    <div className="text-white text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-10 h-10"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={selectedProject.icon} />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold">
                        {selectedProject.title}
                      </span>
                    </div>
                  </div>
                </div>

                <DialogDescription className="text-base text-gray-700 leading-relaxed mb-6">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* Technologies Used */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">
                  Teknologi yang Digunakan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">
                  Fitur Utama
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-gray-700">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-gray-700">Modern UI/UX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-gray-700">High Performance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-gray-700">Security Focused</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-gray-700">Scalable Architecture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-gray-700">
                      Cross-platform Support
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">
                  Statistik Project
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-brand-navy">
                      3-6
                    </div>
                    <div className="text-sm text-gray-600">
                      Bulan Pengembangan
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-brand-navy">
                      5-8
                    </div>
                    <div className="text-sm text-gray-600">Developer Team</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-brand-navy">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>

              <DialogFooter className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={closeModal}
                  className="flex-1"
                >
                  Tutup
                </Button>
                <Button
                  onClick={() => handleLiveDemo(selectedProject)}
                  className="flex-1 bg-brand-navy hover:bg-brand-navy/90"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
