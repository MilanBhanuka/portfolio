import { Project, Service, Testimonial, BlogPost, Certificate } from '../types';
import { Code, Brush, MonitorSmartphone, Lightbulb, LineChart, Globe } from 'lucide-react';
import React from 'react';
import caLogo from '../Asstets/c&a.jpeg';
import eatzon from '../Asstets/eatzon.jpeg';
import metanet from '../Asstets/metanet.jpeg';
import drowsiness from '../Asstets/drowsiness_detection_alert.jpg';
import salon from '../Asstets/salon.png';
import restaurent from '../Asstets/restaurent.png';


// Projects data
export const projects: Project[] = [

  {
    id: 7,
    title: "POS System",
    description: " scalable, multi-store Point of Sale (POS) backend system built with Spring Boot. POS supports stores, branches, cashiers, inventory, subscriptions, analytics, and payments, designed for real-world retail use cases.",
    image: "",
    tags: ["Spring Boot", "React", "Tailwind CSS", "MySQL ", "Redux", "MUI", "JWT",],
    githubUrl: ["https://github.com/MilanBhanuka/POS"]
  },
  {
    id: 5,
    title: "Salon Booking System ",
    description: "This full-stack Salon Booking System was designed to simplify the salon experience for both users and owners — combining powerful backend logic, sleek UI, and real-time updates into one seamless platform.",
    image: salon, 
    tags: ["Spring Boot", "React", "Keycloak", "JWT", "RabbitMQ", "MySQL", "WebSocket", "Stripe", "Tailwind CSS", "Redux", "MUI","Micro Service"],
    githubUrl: ["https://github.com/MilanBhanuka/Salon-Management-System-Backend","https://github.com/MilanBhanuka/salon-management-system-frontend"]
  },
  {
    id: 6,
    title: "Full-Stack Food Delivery Web Application",
    description: "Built a modern, scalable, and secure food delivery platform with role-based access control for Customers and Restaurant Owners. The application enables seamless restaurant management, food ordering, and real-time event handling.",
    image: restaurent,
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
    tags: ["PHP","HTML", "CSS", "Javascript",  "MySQL","MVC"],
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

// Awards data
export const awards = [
  {
    id: 1,
    title: "Champions (Team) - IdeaForge",
    issuer: "Computer Science Students' Association - University of Kelaniya",
    date: "Jul 2024",
    description: "We won the ideathon organized by Computer Science Students' Association in University of Kelaniya, where around 80+ teams participated",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQEAoS3v41qouw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723700387845?e=1752570000&v=beta&t=ESyw2GhOX-fHTXiSQozCL9bk0MgXHwUD4o2JW3c90TU"
  },
  {
    id: 2,
    title: "Semi Finalist - Dialog Innovation Challenge",
    issuer: "Dialog",
    date: "Jun 2024",
    description: "Our idea and implementation were selected among the top 50 ideas out of 1200 island wide teams",
    image: "https://media.licdn.com/dms/image/v2/D562DAQF08QspngVoJQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723741876885?e=1752570000&v=beta&t=E-jNwVR8U_x6eJC_dZlnzhmvHJiaq_q2pbSxdFbYLfA"
  },
  {
    id: 3,
    title: "Winner(Team) - MADHack 3.0",
    issuer: "IEEE Student Branch of UCSC",
    date: "Jun 2024",
    description: "We won mobile application development Hackathon organized by IEEE Student Branch of UCSC,where around 65 teams paricipated",
    image: "https://media.licdn.com/dms/image/v2/D562DAQH2AwLDhRCB2g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723632393564?e=1752573600&v=beta&t=KpilosyDxHHiYRnR7KRbHXyFtBSh8Dmkiu5-RQX1yeY"
  }
];

// Certificates data
export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Frontend Development (React)",
    issuer: "HackerRank",
    issueDate: "Sep 2024",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/34ce98d472d9",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
  },
  {
    id: 2,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    issueDate: "Nov 2023",
    credentialUrl: "https://api.badgr.io/public/assertions/C-Z08e2SQieMFm5wB5aCwQ",
    image: "https://avatars.slack-edge.com/2024-04-05/6934042159649_ac803d1cddbcbef8f110_512.png"
  },
  {
    id: 3,
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    issueDate: "Nov 2023",
    credentialUrl: "https://www.credly.com/badges/fb16672b-09e9-4b8c-8c20-1bfc2a3687c1/linked_in_profile",
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQEkiQ8pB1hYow/company-logo_100_100/B4DZcSgOD1HMAU-/0/1748362125886/cisco_networking_academy1_logo?e=1756944000&v=beta&t=uaC4hnQo6mxc3UnnTJS2mpXmJN82qN7B1RLofDVuqHU"
  },
  {
    id: 2,
    title: "Principles of UX/UI Design",
    issuer: "Meta",
    issueDate: "Dec 2023",
    credentialUrl: "https://coursera.org/verify/XVX8DGDRFPLJ",
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_100_100/company-logo_100_100/0/1636138754252/facebook_logo?e=1756944000&v=beta&t=Ff1Rcp0lzgs_48mEMb-RhuaxuGZA9CcwB_2-bPFuO0A"
  },
  {
    id: 4,
    title: "LambdaTest Software Testing Professional Certificate",
    issuer: "LambdaTest",
    issueDate: "Aug 2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/6f34e732ee9ec0441a38d88370ccf9e657d51a55c797d644fab0de20a078e4fd",
    image: "data:image/png;base64,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"
  }
];