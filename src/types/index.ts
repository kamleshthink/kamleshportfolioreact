export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'ml' | 'other';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'ml' | 'tools';
  icon: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Theme {
  mode: 'light' | 'dark';
} 