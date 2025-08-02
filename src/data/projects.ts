import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Job Portal",
    description: "A comprehensive job portal with advanced search, filtering, and application management features. Built with modern web technologies for seamless user experience.",
    image: "/Assets/jobportal-free-template.jpg.avif",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    githubUrl: "https://github.com/kamleshthink/job-portal",
    liveUrl: "https://job-portal-demo.vercel.app",
    category: "web"
  },
  {
    id: 2,
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency tracking application with price alerts, portfolio management, and detailed analytics. Features interactive charts and market data.",
    image: "/Assets/crypto.png",
    technologies: ["React", "TypeScript", "Chart.js", "CoinGecko API", "Tailwind CSS"],
    githubUrl: "https://github.com/kamleshthink/crypto-tracker",
    liveUrl: "https://crypto-tracker-demo.vercel.app",
    category: "web"
  },
  {
    id: 3,
    title: "Bluetooth Controlled Car",
    description: "IoT project featuring a Bluetooth-controlled car with mobile app interface. Includes real-time control, sensor data monitoring, and autonomous features.",
    image: "/Assets/bluetooth controlled car.jpg",
    technologies: ["Arduino", "Bluetooth HC-05", "Android App", "C++", "IoT"],
    githubUrl: "https://github.com/kamleshthink/bluetooth-car",
    category: "other"
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description: "Advanced AI-powered chat assistant using OpenAI's GPT model. Features natural language processing, context awareness, and multi-language support.",
    image: "/Assets/ChatGPT Image May 20, 2025, 02_13_05 AM.jpg",
    technologies: ["Python", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/kamleshthink/ai-chat-assistant",
    liveUrl: "https://ai-chat-demo.vercel.app",
    category: "ml"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing skills, projects, and experience. Features smooth animations, dark mode, and optimized performance.",
    image: "/Assets/ChatGPT Image Apr 21, 2025, 12_47_14 PM.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/kamleshthink/portfolio",
    liveUrl: "https://kamlesh-portfolio.vercel.app",
    category: "web"
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard. Built with scalability and security in mind.",
    image: "/Assets/original-4dda20100e081e52c6d5afd4b8255b38.webp",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/kamleshthink/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    category: "web"
  }
]; 