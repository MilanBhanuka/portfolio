export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  url: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  image?: string;
}

export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  image?: string;
}