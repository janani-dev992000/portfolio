import { Project, Skill, Experience, ContactInfo } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI and payment integration',
    longDescription: 'A comprehensive e-commerce platform built with Next.js, featuring user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard. Includes real-time inventory management and order tracking.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    longDescription: 'A modern task management application with real-time collaboration features, drag-and-drop functionality, team management, and project tracking. Built with React and Socket.io for real-time updates.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://taskmanager-demo.netlify.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location-based forecasts',
    longDescription: 'A responsive weather dashboard that provides current weather conditions and 7-day forecasts. Features location-based weather, interactive maps, and beautiful animations.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weather-demo.herokuapp.com',
    featured: false,
  },
  {
    id: '4',
    title: 'Blog CMS',
    description: 'Headless CMS for content creators',
    longDescription: 'A headless content management system built with Strapi, featuring rich text editing, media management, user roles, and API endpoints for frontend consumption.',
    image: '/api/placeholder/600/400',
    technologies: ['Strapi', 'React', 'Node.js', 'PostgreSQL', 'AWS S3'],
    githubUrl: 'https://github.com/username/blog-cms',
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'frontend', level: 5 },
  { id: '2', name: 'Next.js', category: 'frontend', level: 5 },
  { id: '3', name: 'TypeScript', category: 'frontend', level: 4 },
  { id: '4', name: 'Vue.js', category: 'frontend', level: 4 },
  { id: '5', name: 'Tailwind CSS', category: 'frontend', level: 5 },
  { id: '6', name: 'CSS3', category: 'frontend', level: 5 },
  { id: '7', name: 'JavaScript', category: 'frontend', level: 5 },
  
  // Backend
  { id: '8', name: 'Node.js', category: 'backend', level: 4 },
  { id: '9', name: 'Express', category: 'backend', level: 4 },
  { id: '10', name: 'Python', category: 'backend', level: 3 },
  { id: '11', name: 'PostgreSQL', category: 'backend', level: 4 },
  { id: '12', name: 'MongoDB', category: 'backend', level: 4 },
  { id: '13', name: 'Prisma', category: 'backend', level: 4 },
  
  // Tools
  { id: '14', name: 'Git', category: 'tools', level: 5 },
  { id: '15', name: 'Docker', category: 'tools', level: 3 },
  { id: '16', name: 'AWS', category: 'tools', level: 3 },
  { id: '17', name: 'Vercel', category: 'tools', level: 4 },
  { id: '18', name: 'Figma', category: 'tools', level: 4 },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Full-Stack Developer',
    duration: '2022 - Present',
    description: 'Led development of multiple web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
  },
  {
    id: '2',
    company: 'Digital Agency Co.',
    position: 'Frontend Developer',
    duration: '2020 - 2022',
    description: 'Developed responsive web applications for various clients, collaborated with design teams, and ensured cross-browser compatibility.',
    technologies: ['React', 'Vue.js', 'CSS3', 'JavaScript', 'Figma'],
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Junior Developer',
    duration: '2019 - 2020',
    description: 'Built and maintained web applications, learned modern development practices, and contributed to team projects.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'],
  },
];

export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    website: 'https://yourwebsite.com',
  },
};

export const personalInfo = {
  name: 'Janani M',
  title: 'Full-Stack Developer',
  bio: 'Passionate full-stack developer with 3+ years of experience building modern web applications. I love creating user-friendly interfaces and robust backend systems that solve real-world problems.',
  avatar: 'https://png.pngtree.com/png-clipart/20230915/original/pngtree-editable-purple-user-icon-in-circle-design-element-thin-contour-vector-png-image_12176937.png',
};
