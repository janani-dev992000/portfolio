import { Project, Skill, Experience, ContactInfo } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Conference Management system',
    description: 'The X-CD system allows one to perform all kinds of activities for managing,administering, and publishing, one or more "Conferences".  '   ,

    longDescription: 'The X-CD system allows one to perform all kinds of activities for managing,administering, and publishing, one or more "Conferences". A "Conference" is usually tied to the specific timing of an event and contains one or more modules.',
    image: 'https://www.shutterstock.com/image-photo/senior-female-ceo-multicultural-business-600nw-2021639270.jpg',
    technologies: ['React', 'React Native', 'Antd'],
    // githubUrl: 'https://github.com/username/ecommerce-platform',
    // liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },

  {
    id: '2',
    title: 'Book reader application',
    description: 'This application is the modern solution to traditional publishing problems.This  platform specializes in transforming your content into an interactive eBook. ',

    longDescription: 'This application is the modern solution to traditional publishing problems.This  platform specializes in transforming your content into an interactive eBook.',
    image: 'https://kitaboo.com/wp-content/uploads/2023/02/eBook-reader.png',
    technologies: ['Angular', 'Angualar JS', 'Primeng', 'Angular Material'],
    // githubUrl: 'https://github.com/username/task-manager',
    // liveUrl: 'https://taskmanager-demo.netlify.app',
    featured: true,
  },
  {
    id: '3',
    title: 'AI charting application',
    description: 'The Multimodality Charting Project focuses on generating complex data visualizations based on predefined criteria',
    longDescription: 'The Multimodality Charting Project focuses on generating complex data visualizations based on predefined criteria. Each task involves creating structured datasets, metadata, and visualizations using programming languages like Python or JavaScript',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b7/48/4d/b7484d26-5313-c14a-498d-64a0542ea092/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x600wa.png',
    technologies: [ 'Chart.js', 'HTML5', 'CSS3', 'JavaScript'],
    // githubUrl: 'https://github.com/username/weather-dashboard',
    // liveUrl: 'https://weather-demo.herokuapp.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Online condo management system',
    description: 'A condo (short for condominium) is an individually owned residential unit within a building',
    longDescription: 'A condo (short for condominium) is an individually owned residential unit within a building . This software platform is specifically designed for Florida condo associations. It simplifies compliance management by helping associations minimize risks, avoid fines, and stay up to date with regulations',
    image: 'https://vinteum.io/wp-content/uploads/2021/09/condo-management-software.webp',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Primeng', 'Angular Material'],
    // githubUrl: 'https://github.com/username/blog-cms',
    featured: true,
  },  

  {
    id: '5',
    title: 'Automated Campaign Management System',
    description: 'Marketing automation tool to manage and send campaigns (Email, WhatsApp) to contacts.',
    longDescription: 'Marketing automation tool to manage and send campaigns (Email, WhatsApp) to contacts.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnJ4LxAV_q15fckSgi8PcLGaMtcdKQosh-Q&s',
    technologies: ['Angular',  'Primeng', 'Angular Material'],
    // githubUrl: 'https://github.com/username/blog-cms',
    featured: true,
  }, 
  {
    id: '6',
    title: 'Automated Campaign Management System',
    description: 'Internal job portal developed to manage the end-to-end hiring lifecycle for multiple . It allows companies to register, upload candidate resumes, manage interviews, and utilize Artificial Intelligence (AI)',
    longDescription: 'This project  is an internal job portal developed to manage the end-to-end hiring lifecycle for multiple companies through a single, centralized platform. It allows companies to register, upload candidate resumes, manage interviews, and utilize Artificial Intelligence (AI) for resume scoring and interview analysis, offering a smarter, scalable hiring experience.',
    image: 'https://www.webmediatricks.com/uploaded_files/product/1703848338.jpg',
    technologies: ['NEXT JS',  'Tailwind CSS', 'Websocket'],
    // githubUrl: 'https://github.com/username/blog-cms',
    featured: true,
  }, 
    {
    id: '7',
    title: 'Solar Square game',
    description: 'Solar Square is a  game where players control a solar panel to collect sunlight and avoid obstacles. The game features multiple levels, power-ups, and increasing difficulty as players progress.',

    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1805110/header.jpg?t=1753774840',
    technologies: ['React',  'CSS', 'HTML'],
    githubUrl: 'https://github.com/janani-dev992000/solarsquare.git',
     liveUrl: 'https://janani-dev992000.github.io/solarsquare/',
    featured: true,
    },
    {
    id: '8',
    title: 'online food delivery application',
    description: 'This is a comprehensive food delivery application that allows users to browse restaurants, view menus, place orders, and track deliveries in real-time. The app features user authentication and an intuitive UI/UX design.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240402153713/Food-Delivery-Application-banner-copy.webp',
    technologies: ['React','Material-UI','Mongo db','Graph QL' , 'CSS', 'HTML'],
    githubUrl: 'https://github.com/janani-dev992000/customer_food_app.git',
     liveUrl: 'https://customer-food-app-frontend.vercel.app/',
    featured: true,
    }

];

export const skills: Skill[] = [
  // Frontend
  { id: '7', name: 'JavaScript', category: 'frontend', level: 5 },
  { id: '1', name: 'React', category: 'frontend', level: 5 },
  { id: '4', name: 'Angular', category: 'frontend', level: 5 },
  { id: '2', name: 'Next.js', category: 'frontend', level: 4 },
  { id: '3', name: 'TypeScript', category: 'frontend', level: 4 },

  

  
  // Backend
  { id: '8', name: 'Node.js', category: 'backend', level: 4 },
  { id: '9', name: 'Express', category: 'backend', level: 4 },
  { id: '11', name: 'PostgreSQL', category: 'backend', level: 4 },
  { id: '12', name: 'MongoDB', category: 'backend', level: 4 },
  { id: '13', name: 'Prisma', category: 'backend', level: 4 },
  
  // Tools
  { id: '14', name: 'Git', category: 'tools', level: 5 },
  { id: '15', name: 'Docker', category: 'tools', level: 3 },
  { id: '17', name: 'Vercel', category: 'tools', level: 4 },
  { id: '18', name: 'Figma', category: 'tools', level: 4 },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'MitrahSoft solutions private limited',
    position: 'Full-Stack Developer',
    duration: '2022 - Present',
    description: 'Led development of multiple web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.',
    technologies: ['React','Angular','Next.js', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
  },
  // {
  //   id: '2',
  //   company: 'Digital Agency Co.',
  //   position: 'Frontend Developer',
  //   duration: '2020 - 2022',
  //   description: 'Developed responsive web applications for various clients, collaborated with design teams, and ensured cross-browser compatibility.',
  //   technologies: ['React', 'Vue.js', 'CSS3', 'JavaScript', 'Figma'],
  // },
  // {
  //   id: '3',
  //   company: 'StartupXYZ',
  //   position: 'Junior Developer',
  //   duration: '2019 - 2020',
  //   description: 'Built and maintained web applications, learned modern development practices, and contributed to team projects.',
  //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'],
  // },
];

export const contactInfo: ContactInfo = {
  email: 'jananidev992000@gmail.com',
  phone: '6380148372',
  location: 'Kovilpatti, Tamil Nadu, India',
  socialLinks: {
    github: 'https://github.com/janani-dev992000',
    linkedin: 'https://linkedin.com/in/yourusername',
    // twitter: 'https://twitter.com/yourusername',
    // website: 'https://yourwebsite.com',
  },
};
//hero.tsx
export const personalInfo = {
  name: 'Janani M',
  title: 'Full-Stack Developer',
  bio: 'Passionate full-stack developer with 3+ years of experience building modern web applications. I love creating user-friendly interfaces and robust backend systems that solve real-world problems.',
  avatar: 'https://png.pngtree.com/png-clipart/20230915/original/pngtree-editable-purple-user-icon-in-circle-design-element-thin-contour-vector-png-image_12176937.png',
};


// about me
export const aboutData = {
  story: {
    title: "My Story",
    paragraphs: [
      "I started my journey in web development 3 years ago and have been passionate about creating digital experiences that make a difference. I believe in clean code, user-centered design, and continuous learning.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
    ]
  },
  values: [
    {
      icon: "🎯",
      title: "Quality",
      description: "I believe in writing clean, maintainable code and delivering high-quality solutions.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Always exploring new technologies and approaches to solve problems creatively.",
      color: "from-violet-400 to-purple-500"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Working closely with teams and clients to achieve shared goals and success.",
      color: "from-purple-300 to-violet-400"
    }
  ]
};
