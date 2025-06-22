import { Project, Service, Testimonial, BlogPost } from '../types';
import { Code, Brush, MonitorSmartphone, Lightbulb, LineChart, Globe } from 'lucide-react';
import React from 'react';
import caLogo from '../Asstets/c&a.jpeg';
import eatzon from '../Asstets/eatzon.jpeg';
import metanet from '../Asstets/metanet.jpeg';
import drowsiness from '../Asstets/drowsiness_detection_alert.jpg';


// Projects data
export const projects: Project[] = [
  {
    id: 5,
    title: "Salon Booking System ",
    description: "This full-stack Salon Booking System was designed to simplify the salon experience for both users and owners — combining powerful backend logic, sleek UI, and real-time updates into one seamless platform.",
    image: "https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-c1ac-61fb-814f-89c22dc0d9de/raw?se=2025-06-22T21%3A01%3A57Z&sp=r&sv=2024-08-04&sr=b&scid=7b15caa8-0d8f-575e-a871-5965cc7d589e&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-22T16%3A17%3A22Z&ske=2025-06-23T16%3A17%3A22Z&sks=b&skv=2024-08-04&sig=dcFSGVaSIsfodZDGLWV03oToPy0jLIYziGoW12DiESg%3D", 
    tags: ["Spring Boot", "React", "Keycloak", "JWT", "RabbitMQ", "MySQL", "WebSocket", "Stripe", "Tailwind CSS", "Redux", "MUI"],
    githubUrl: ["https://github.com/MilanBhanuka/Salon-Management-System-Backend"]
  },
  {
    id: 6,
    title: "Full-Stack Food Delivery Web Application",
    description: "Built a modern, scalable, and secure food delivery platform with role-based access control for Customers and Restaurant Owners. The application enables seamless restaurant management, food ordering, and real-time event handling.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    tags: ["Spring Boot", "React", "Tailwind CSS", "JWT", "Stripe", "Redux", "MUI", "MySQL", "RabbitMQ"],
    githubUrl: ["https://github.com/MilanBhanuka/online-food-ordering-frontend", "https://github.com/MilanBhanuka/Online-Food-Ordering"]
  },
 {
    id: 1,
    title: "MetaNet",
    description: "centralized web platform built to transform the XR (Extended Reality) content-sharing ecosystem to empower creators and users.",
    image: metanet,
    tags: ["Angular", "Nest.js", "Tailwind CSS", "PostgreSQ"],
    githubUrl: ["https://github.com/MetaNet9/MetaNet_Frontend"]
  },
  {
    id: 2,
    title: "EatzOn - Food Delivery Website",
    description: "A full-stack food delivery platform designed to streamline the online ordering experience for restaurants and their customers. ",
    image: eatzon,
    tags: ["React", "Node.js", "MongoDB","Tailwind CSS", "Express", "MERN"],
    githubUrl: ["https://github.com/MilanBhanuka/EatzOn"]
  },
   {
    id: 3,
    title: "C&A Indoor Cricket Net Company Management System & e-commerce platform",
    description: "A comprehensive system to support the business process of C&A Indoor Cricket Stadium by providing a robust reservation system and an e-commerce platform as a solution for the manually handled system. ",
    image: caLogo,
    tags: ["PHP","HTML", "CSS", "Javascript",  "MySQL"],
    githubUrl: ["https://github.com/MilanBhanuka/CA-Indoor-Project"]
  },
  {
    id:4,
    title: "Drowsy Driver Detection System",
    description: "a real-time drowsy driver detection system using Python. The system monitors the driver’s eye aspect ratio (EAR) to detect signs of drowsiness and sounds an alarm if the driver shows signs of fatigue.",
    image: drowsiness,
    tags: ["Python", "OpenCV", "Image Processing"],
    githubUrl: ["https://github.com/MilanBhanuka/Drowsiness-detection-with-OpenCV"]
  },
  // {
  //   id:4,
  //   title: "Drowsy Driver Detection System",
  //   description: "a real-time drowsy driver detection system using Python. The system monitors the driver’s eye aspect ratio (EAR) to detect signs of drowsiness and sounds an alarm if the driver shows signs of fatigue.",
  //   image: drowsiness,
  //   tags: ["Python", "OpenCV", "Image Processing"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/MilanBhanuka/EatzOn"
  // },
];

// Services data
export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive, performant websites and web applications using modern frameworks and best practices.",
    icon: React.createElement(Code, { size: 24 })
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Designing intuitive, aesthetically pleasing user interfaces with optimal user experience.",
    icon: React.createElement(Brush, { size: 24 })
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Building cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    icon: React.createElement(MonitorSmartphone, { size: 24 })
  },
  {
    id: 4,
    title: "Product Strategy",
    description: "Developing comprehensive product strategies to meet business goals and user needs.",
    icon: React.createElement(Lightbulb, { size: 24 })
  },
  {
    id: 5,
    title: "Performance Optimization",
    description: "Improving website and application performance through optimization and best practices.",
    icon: React.createElement(LineChart, { size: 24 })
  },
  {
    id: 6,
    title: "SEO Optimization",
    description: "Enhancing website visibility through search engine optimization techniques.",
    icon: React.createElement(Globe, { size: 24 })
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CTO at TechStart",
    content: "Working with this developer was a fantastic experience. They delivered our project on time and the code quality was exceptional.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Product Manager at DesignCo",
    content: "The attention to detail and understanding of our requirements was impressive. I highly recommend their services.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder at InnovateX",
    content: "Their technical expertise and problem-solving abilities helped us launch our platform ahead of schedule. Truly exceptional work!",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of React Development in 2025",
    excerpt: "Exploring upcoming trends and features in React development that will shape the future of web applications.",
    date: "March 15, 2025",
    category: "Development",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "#"
  },
  {
    id: 2,
    title: "Optimizing Performance in Modern Web Apps",
    excerpt: "Best practices and techniques for improving performance and user experience in web applications.",
    date: "February 28, 2025",
    category: "Performance",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "#"
  },
  {
    id: 3,
    title: "Designing Effective User Interfaces",
    excerpt: "Principles and approaches for creating user-friendly, accessible, and visually appealing interfaces.",
    date: "February 10, 2025",
    category: "Design",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "#"
  }
];