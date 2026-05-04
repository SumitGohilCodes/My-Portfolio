/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Testimonial, SkillGroup, TechnicalSkill } from './types';

export const PERSONAL_INFO = {
  name: "Sumit Gohil",
  role: "WordPress | Frontend | PHP Developer",
  specialization: "MailChimp Template Specialist",
  location: "Ahmedabad, Gujarat, India",
  email: "SumitOnNet85@gmail.com",
  linkedin: "linkedin.com/in/sumitgohil",
  github: "github.com/SumitGohilCodes",
  twitter: "twitter.com/sumitgohil",
  summary: "Versatile and reliable freelance developer with over 12 years of experience in PHP development and 7+ years specializing in MailChimp custom email templates and landing pages. Consistently praised for meticulous accuracy and delivering polished, fully functional work on time.",
  values: [
    { title: "Meticulous Accuracy", description: "Pixel-perfect translations from design to code with zero compromise on quality." },
    { title: "Reliability", description: "Consistently meeting tight deadlines and accommodating last-minute shifts in requirements." },
    { title: "Technical Versatility", description: "Bridging the gap between legacy PHP systems and modern React interfaces." }
  ]
};

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "MailChimp Email Development", skills: "7+ years – custom HTML templates, campaigns, automation" },
  { category: "WordPress Development", skills: "CMS setup, theme customization, plugin integration, WooCommerce" },
  { category: "Frontend Development", skills: "HTML5, CSS3, JavaScript, jQuery, GSAP, Three.js" },
  { category: "React & Modern JS", skills: "React.js, Redux, Next.js, Tailwind CSS" },
  { category: "PHP Development", skills: "Core PHP, custom back-end scripting" },
  { category: "Design to Code", skills: "PSD / Figma to HTML - pixel-perfect, responsive" },
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  { name: "React / Redux", level: 90, category: "frontend", description: "Expertise in building scalable SPAs with complex state management." },
  { name: "GSAP / Framer Motion", level: 95, category: "frontend", description: "Crafting immersive motion experiences and scroll-driven interactions." },
  { name: "JavaScript (ES6+)", level: 92, category: "frontend", description: "Deep understanding of core JS, closures, and async patterns." },
  { name: "Tailwind CSS", level: 95, category: "frontend", description: "Rapid styling with utility-first architecture and design systems." },
  { name: "PHP / WordPress", level: 98, category: "backend", description: "12+ years of custom theme and plugin development." },
  { name: "WooCommerce", level: 90, category: "backend", description: "Extending e-commerce capabilities with custom functional layers." },
  { name: "Node.js", level: 75, category: "backend", description: "Server-side integration for headless CMS and real-time features." },
  { name: "MailChimp Coding", level: 100, category: "specialized", description: "Industry-leading expertise in high-fidelity email template systems." },
  { name: "Klaviyo", level: 85, category: "specialized", description: "Advanced lifecycle marketing automation and template logic." },
  { name: "Figma to HTML", level: 98, category: "specialized", description: "Pixel-perfect translations of complex designs into fluid code." },
  { name: "Three.js", level: 80, category: "frontend", description: "Integrating 3D environments and WebGL shaders into web interfaces." },
];

export const PROJECTS: Project[] = [
  {
    title: "Exoape Clone",
    description: "High-end motion and design clone featuring advanced GSAP and React state management.",
    url: "https://sumitgohil-exoape.vercel.app",
    type: "frontend",
    tech: ["React", "GSAP", "Motion"]
  },
  {
    title: "Obys Agency Clone",
    description: "Creative agency portfolio clone showcasing complex scroll effects and layout transitions.",
    url: "https://sumitgohil-obys.vercel.app",
    type: "frontend",
    tech: ["React", "GSAP", "Tailwind"]
  },
  {
    title: "3D Planets",
    description: "Interactive 3D solar system visualization using Three.js and custom shaders.",
    url: "https://sumitgohil-3dplanets.vercel.app",
    type: "frontend",
    tech: ["Three.js", "WebGL", "React"]
  },
  {
    title: "React Frame",
    description: "A framework demonstration focusing on grid layouts and responsive typography.",
    url: "https://sumitgohil-reactframe.vercel.app/",
    type: "frontend",
    tech: ["React", "Tailwind", "Motion"]
  },
  {
    title: "Movie DB",
    description: "Movie exploration app consuming TMDB API with complex search and filtering.",
    url: "https://sumitgohil-moviedb.vercel.app",
    type: "frontend",
    tech: ["React", "API", "Lucide"]
  },
  {
    title: "Winterfold Primary School",
    description: "Responsive WordPress site for educational institutions with custom theme development.",
    url: "https://winterfoldps.wa.edu.au",
    type: "wordpress",
    tech: ["WordPress", "PHP", "CSS3"]
  },
  {
    title: "Outback Splash",
    description: "Large scale entertainment venue website with complex bookings and integration.",
    url: "https://outbacksplash.com.au",
    type: "wordpress",
    tech: ["WordPress", "WooCommerce", "PHP"]
  },
  {
    title: "Wanneroo Botanic Gardens",
    description: "Multi-venue garden and golf course website with custom booking integrations.",
    url: "https://wanneroobotanicgardens.com.au",
    type: "wordpress",
    tech: ["WordPress", "PHP", "Elementor"]
  },
  {
    title: "Funday Group",
    description: "Corporate group website with multiple landing pages and custom post types.",
    url: "https://fundaygroup.com.au",
    type: "wordpress",
    tech: ["WordPress", "Clean-UI", "PHP"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "MailChimp Custom Template Developer",
    company: "Hanro USA Inc",
    period: "Apr 2016 – Apr 2023",
    location: "Freelance · Remote",
    points: [
      "Coded custom MailChimp email templates and landing pages tailored to brand guidelines.",
      "Reliable extension of the eCommerce team, meeting shifting deadlines and last-minute changes.",
      "Ensured pixel-perfect, fully functional campaigns on time.",
      "Supported digital marketing operations for a leading luxury apparel brand."
    ]
  },
  {
    role: "PHP Developer",
    company: "Freelancing",
    period: "Apr 2012 – Present",
    location: "Ahmedabad, India",
    points: [
      "Delivered end-to-end PHP solutions across retail, nonprofit, and professional sectors.",
      "Developed and customized WordPress websites and plugins for small businesses.",
      "Built responsive landing pages and high-accuracy HTML email templates.",
      "Maintained strong long-term client relationships through meticulous attention to detail."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marianna Satanas",
    role: "President, HANRO USA",
    text: "Sumit is a pleasure to work with and have as an extension of the Ecommerce team. Very reliable, flexible with deadlines and moving parts of the business."
  },
    {
    name: "Meredith Torine",
    role: "Owner, Popped Off Bottles",
    text: "Sumit is an excellent resource for all of your IT needs. He is meticulous with his work. Sumit and I worked together for many years and I would recommend him over and over again."
  },
  {
    name: "Ellen C. Vargo",
    role: "Production & Quality Manager, TELFAR",
    text: "Over the several years I worked with Sumit, he was nothing short of exceptional. He was able to create landing pages, emails, and more with a high level of accuracy. Even if the project had a short deadline or a last second change, Sumit was always able to accommodate and ensure the finished project was delivered on time and functioning exactly as intended."
  },

  {
    name: "Katherine diMonda",
    role: "Creative Director, Buunch",
    text: "Sumit is, quite simply, the best at what he does. Always courteous and pleasant to work with, he can act quickly and efficiently to solve any technical problem with finesse!"
  },
  {
    name: "Douglas Lim",
    role: "Software Consultant",
    text: "Sumit fixed a Wordpress plugin for our church website. He was quick and efficient and the work was done really well. I have no hesitation in recommending Sumit for any Wordpress and technical requirements."
  },
  {
    name: "Matt Wilson",
    role: "SEO Lead",
    text: "In the time I've been doing business with Sumit I've found him to be helpful, responsive and well priced. I would not hesitate to recommend Sumit to others."
  }
];
