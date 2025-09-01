# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Next.js for optimal performance
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- 🛠️ **TypeScript**: Type-safe development experience
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 🎮 **3D Effects**: Interactive 3D elements powered by Three.js
- 🚀 **Performance Optimized**: Automatic performance detection and optimization

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal story, values, and statistics
- **Projects**: Showcase of featured and other projects
- **Skills**: Technical skills organized by category
- **Experience**: Professional work experience timeline
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Edit the data in `src/lib/data.ts` to customize:

- Personal information (name, title, bio, avatar)
- Projects (add your own projects with descriptions, technologies, links)
- Skills (update your technical skills and proficiency levels)
- Experience (add your work experience)
- Contact information (email, phone, location, social links)

### Styling

The portfolio uses Tailwind CSS for styling. You can:

- Modify colors in the components
- Update the global styles in `src/app/globals.css`
- Customize the Tailwind configuration in `tailwind.config.js`

### Images

Replace placeholder images with your own:

- Avatar image: Update the `avatar` field in `personalInfo`
- Project images: Update the `image` field in each project
- Use high-quality images for best results

### 3D Effects

The portfolio includes several 3D interactive elements:

- **Hero Background**: Animated particle system with floating geometries
- **Project Cards**: 3D hover effects with interactive elements
- **Skills Visualization**: Interactive 3D skill orbs with hover information
- **Stats Display**: Animated 3D statistics with floating particles
- **Navigation**: 3D mobile menu button with smooth animations

All 3D effects are performance-optimized and will automatically disable on low-end devices.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Adding a Headless CMS

To make the portfolio content dynamic, you can integrate with:

### Strapi
```bash
npx create-strapi-app@latest portfolio-cms --quickstart
```

### Sanity
```bash
npm create sanity@latest
```

### Contentful
- Sign up at [Contentful](https://contentful.com)
- Create content models for projects, skills, etc.
- Use their API to fetch content

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Work experience
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── lib/                # Utilities and data
│   └── data.ts         # Portfolio data
└── types/              # TypeScript types
    └── index.ts        # Type definitions
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation library
- **Next/Image** - Optimized images
- **Next/Font** - Font optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!