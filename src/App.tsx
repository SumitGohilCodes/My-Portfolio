/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Globe, 
  Cpu, 
  Palette, 
  Layout, 
  Briefcase,
  Quote,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Twitter,
  Sun,
  Moon
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, EXPERIENCE, TESTIMONIALS, TECHNICAL_SKILLS } from './constants';

const Navbar = () => {
  const [isLight, setIsLight] = React.useState(false);

  React.useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isLight;
    setIsLight(newMode);
    if (newMode) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-8 bg-surface/80 backdrop-blur-md border-b border-border-subtle"
    >
      <div className="text-[11px] tracking-[0.4em] uppercase font-bold text-primary">Portfolio 2026</div>
      <div className="hidden md:flex gap-10 text-[11px] tracking-[0.2em] uppercase opacity-60">
        {['Selected Works', 'Expertise', 'Skills', 'Experience', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:opacity-100 hover:text-primary transition-all">
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-text-main/5 transition-colors text-text-dim hover:text-primary"
          aria-label="Toggle theme"
        >
          {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
        <a 
          href="#contact"
          className="text-[11px] tracking-widest uppercase border-b border-primary text-text-main/90 pb-0.5 hover:text-primary transition-colors hover:border-text-main transition-all"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-12 overflow-hidden bg-surface">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end"
    >
      <div className="md:col-span-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[1px] w-12 bg-primary"></span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary">Available for new opportunities</span>
        </div>
        
        <h1 className="text-[72px] md:text-[110px] leading-[0.9] font-serif italic text-text-main mb-8 tracking-tighter">
          Sumit <br /> Gohil.
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-text-main/80 leading-relaxed max-w-xl">
          {PERSONAL_INFO.role}. Specialty in high-end digital aesthetics and template architectural systems.
        </p>
      </div>

      <div className="md:col-span-4 flex flex-col gap-6 text-[11px] tracking-widest uppercase opacity-40 md:text-right">
        <span>Based in Ahmedabad, GJ</span>
        <span>12+ Years Experience</span>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-12 left-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] opacity-30"
    >
      <div className="w-12 h-[1px] bg-text-main/20" />
      <span>Scroll to explore</span>
    </motion.div>
  </section>
);

const SectionHeading = ({ children, id, category }: { children: React.ReactNode, id: string, category: string }) => (
  <div id={id} className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-8">
    <div className="space-y-2">
      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-primary">{category}</span>
      <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight">{children}</h2>
    </div>
    <div className="text-[10px] uppercase tracking-widest opacity-20 hidden md:block">Section / {id.split('-')[0]}</div>
  </div>
);

const Expertise = () => (
  <section id="expertise" className="py-32 px-12 max-w-7xl mx-auto">
    <SectionHeading id="expertise-heading" category="Capabilities">Expertise</SectionHeading>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {SKILL_GROUPS.map((skill, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group border-l border-border-subtle pl-8 py-4"
        >
          <div className="text-[10px] font-serif italic text-primary mb-4">0{index + 1}</div>
          <h3 className="text-xl font-medium mb-4 tracking-tight group-hover:text-primary transition-colors">{skill.category}</h3>
          <p className="text-text-dim text-sm leading-relaxed max-w-xs">{skill.skills}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const TechnicalSkills = () => {
  const [hoveredSkill, setHoveredSkill] = React.useState<number | null>(null);

  return (
    <section id="skills" className="py-32 px-12 max-w-7xl mx-auto">
      <SectionHeading id="skills-heading" category="Proficiency">Technical Skills</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
        {TECHNICAL_SKILLS.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="space-y-4 relative group"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium tracking-wide group-hover:text-primary transition-colors">{skill.name}</span>
              <span className="text-[10px] font-mono text-primary opacity-60 italic">{skill.level}%</span>
            </div>
            <div className="h-[2px] w-full bg-text-main/5 relative cursor-help">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_rgba(10,132,255,0.3)]"
              />
            </div>

            <AnimatePresence>
              {hoveredSkill === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  className="absolute z-20 top-full left-0 mt-4 p-4 glass-card border-primary/20 max-w-xs shadow-2xl"
                >
                  <p className="text-xs text-text-main/70 leading-relaxed font-light">
                    {skill.description}
                  </p>
                  <div className="absolute top-[-6px] left-6 w-3 h-3 bg-surface-dim border-l border-t border-border-subtle rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SelectedWorks = () => (
  <section id="selected-works" className="py-32 px-12 max-w-7xl mx-auto">
    <SectionHeading id="works-heading" category="Archive">Selected Work</SectionHeading>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {PROJECTS.map((project, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
          className="group cursor-pointer"
        >
          <div className="aspect-[16/10] bg-text-main/[0.03] border border-border-subtle mb-6 relative overflow-hidden flex items-center justify-center group shadow-2xl shadow-transparent hover:shadow-primary/5 transition-all duration-500 rounded-sm">
             <span className="text-[60px] font-serif italic opacity-5 group-hover:opacity-0 transition-opacity">0{index + 1}</span>
             
             {/* Info Overlay */}
             <div className="absolute inset-x-8 bottom-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <p className="text-sm text-white/80 font-light leading-relaxed mb-4">{project.description}</p>
               <div className="flex flex-wrap gap-2">
                 {project.tech.map(t => (
                   <span key={t} className="text-[9px] uppercase tracking-widest font-mono text-primary/80 border border-primary/20 px-2 py-0.5 rounded-sm">
                     {t}
                   </span>
                 ))}
               </div>
             </div>

             <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
               <ExternalLink className="w-4 h-4" />
             </div>
          </div>
          
          <div className="flex justify-between items-end px-2">
            <div className="space-y-1">
              <h3 className="text-2xl font-serif italic tracking-tight">{project.title}</h3>
              <p className="text-[10px] uppercase opacity-40 tracking-[0.2em] font-medium">{project.type}</p>
            </div>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noreferrer"
              className="text-primary text-sm hover:translate-x-1 transition-transform p-2"
            >
              ↗
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-32 px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
    <div className="md:col-span-4">
      <SectionHeading id="exp-heading" category="Resume">History</SectionHeading>
      <p className="text-text-dim text-sm leading-relaxed max-w-xs mt-[-2rem]">
        A career built on technical discipline and architectural clarity. Over 12 years of delivering refined solutions.
      </p>
    </div>
    
    <div className="md:col-span-8 space-y-20 border-l border-border-subtle pl-12">
      {EXPERIENCE.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-2">
            <h3 className="text-2xl font-medium tracking-tight text-text-main">{exp.role}</h3>
            <span className="text-[10px] uppercase tracking-widest opacity-30 font-mono">{exp.period}</span>
          </div>
          
          <div className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-primary mb-6">
            <Briefcase className="w-3 h-3" />
            <span>{exp.company}</span>
            <span className="opacity-20">•</span>
            <span>{exp.location}</span>
          </div>
          
          <ul className="space-y-4">
            {exp.points.map((point, idx) => (
              <li key={idx} className="text-text-main/60 text-sm leading-relaxed max-w-2xl font-light">
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

const Testimonials = () => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const next = React.useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = React.useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-32 border-y border-border-subtle bg-surface relative overflow-hidden">
      <div className="px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
        <div>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 block mb-4">Peer Review</span>
          <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight">Testimonials</h2>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-text-dim hover:border-primary hover:text-primary transition-all group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 group-active:scale-90 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-text-dim hover:border-primary hover:text-primary transition-all group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 group-active:scale-90 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="px-12 max-w-7xl mx-auto relative h-[350px] md:h-[280px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute inset-0"
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <Quote className="w-12 h-12 text-primary/20 mb-8" />
                <p className="text-2xl md:text-3xl text-text-main/90 italic font-serif leading-relaxed">
                  "{TESTIMONIALS[index].text}"
                </p>
              </div>
              
              <div className="space-y-4 pt-12 md:pt-24 border-l border-border-subtle pl-12">
                <h4 className="text-sm uppercase tracking-widest font-bold text-text-main">{TESTIMONIALS[index].name}</h4>
                <p className="text-[11px] text-primary uppercase tracking-[0.2em] font-medium">{TESTIMONIALS[index].role}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-primary" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-12 max-w-7xl mx-auto mt-12 flex gap-4">
        {TESTIMONIALS.map((_, i) => (
          <div 
            key={i} 
            className={`h-[1px] transition-all duration-500 ${i === index ? 'w-12 bg-primary' : 'w-4 bg-border-subtle'}`} 
          />
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="about" className="py-24 px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 items-end">
      <div className="md:col-span-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[90px] font-serif italic leading-[0.85] text-text-main mb-12 tracking-tighter"
        >
          Available for new projects
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12 md:items-center">
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="text-2xl md:text-3xl font-light hover:text-primary transition-colors border-b border-border-subtle pb-2"
            >
              {PERSONAL_INFO.email}
            </motion.a>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex gap-8 flex-wrap"
            >
              {[
                { href: PERSONAL_INFO.linkedin, label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" /> },
                { href: PERSONAL_INFO.github, label: 'GitHub', icon: <Github className="w-4 h-4" /> },
                { href: PERSONAL_INFO.twitter, label: 'Twitter', icon: <Twitter className="w-4 h-4" /> },
                { href: PERSONAL_INFO.dribbble, label: 'Dribbble', icon: <Globe className="w-4 h-4" /> },
                { href: PERSONAL_INFO.behance, label: 'Behance', icon: <Globe className="w-4 h-4" /> }
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -2 }}
                  href={`https://${link.href}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[11px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                >
                  {link.icon}
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
        </div>
      </div>
      
      <div className="md:col-span-4 space-y-12 text-right hidden md:block">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <h4 className="text-[10px] font-mono tracking-[0.4em] opacity-40 uppercase mb-4">Location</h4>
          <p className="text-sm font-light">{PERSONAL_INFO.location}</p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <h4 className="text-[10px] font-mono tracking-[0.4em] opacity-40 uppercase mb-4">Local Time</h4>
          <p className="text-sm font-light">17:31 GMT+5:30</p>
        </motion.div>
      </div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] tracking-[0.3em] uppercase font-mono"
    >
      <p>© {new Date().getFullYear()} Sumit Gohil Studio</p>
      <div className="flex gap-12">
        <span className="hover:text-primary transition-colors cursor-default">Architectural Quality</span>
        <span className="hover:text-primary transition-colors cursor-default">Meticulous Execution</span>
      </div>
    </motion.div>
  </footer>
);

const AboutMe = () => (
  <section id="about" className="py-32 px-12 max-w-7xl mx-auto border-t border-border-subtle">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
      <div className="md:col-span-5">
        <SectionHeading id="about-heading" category="Profile">About Me</SectionHeading>
        <div className="space-y-12">
          {PERSONAL_INFO.values.map((value, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all" />
                <h4 className="text-sm font-bold uppercase tracking-widest">{value.title}</h4>
              </div>
              <p className="text-text-dim text-sm leading-relaxed max-w-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-7 pt-12 md:pt-24 md:border-l border-border-subtle md:pl-16">
        <h3 className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight text-text-main/90">
          Crafting functional <br /> beauty through logic.
        </h3>
        <p className="text-lg md:text-xl text-text-main/60 font-light leading-relaxed mb-12 max-w-2xl">
          {PERSONAL_INFO.summary}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 text-primary group"
          >
            <span className="text-sm font-bold uppercase tracking-widest border-b border-primary/30 group-hover:border-primary transition-all pb-1">Start a conversation</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-32 px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 border-t border-border-subtle">
      <div className="md:w-1/3">
        <SectionHeading id="contact-heading" category="Inquiry">Get in Touch</SectionHeading>
        <p className="text-text-dim text-sm leading-relaxed max-w-xs mt-[-2rem]">
          Looking for a partner to build your next digital product? Fill out the form and I'll respond within 24 hours.
        </p>
      </div>
      
      <div className="md:w-2/3">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Your Name</label>
              <input 
                required
                type="text" 
                name="name" 
                id="name"
                className="w-full bg-transparent border-b border-border-subtle py-4 focus:border-primary outline-none transition-colors font-light text-xl text-text-main"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Email Address</label>
              <input 
                required
                type="email" 
                name="email" 
                id="email"
                className="w-full bg-transparent border-b border-border-subtle py-4 focus:border-primary outline-none transition-colors font-light text-xl text-text-main"
                placeholder="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Your Message</label>
            <textarea 
              required
              name="message" 
              id="message" 
              rows={4}
              className="w-full bg-transparent border-b border-border-subtle py-4 focus:border-primary outline-none transition-colors font-light text-xl resize-none text-text-main"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <div className="flex items-center gap-8">
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-primary text-black px-12 py-4 rounded-full font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            
            <AnimatePresence>
              {message && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}
                >
                  {message}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-surface text-text-main overflow-x-hidden selection:bg-primary/30 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <TechnicalSkills />
        <SelectedWorks />
        <Experience />
        <Testimonials />
        <AboutMe />
        <ContactForm />
      </main>
      <Footer />
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); }
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: var(--color-surface);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--color-text-dim);
          border-radius: 10px;
          border: 2px solid var(--color-surface);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--color-primary);
        }
      `}</style>
    </div>
  );
}
