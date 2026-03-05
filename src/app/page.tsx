"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Bot,
  Brain,
  Building2,
  Cpu,
  Database,
  Heart,
  Mail,
  MapPin,
  Music,
  Rocket,
  Sparkles,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Palette,
  Trophy,
  Target,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Video,
  Image as ImageIcon,
  Code,
  Mic,
  Twitter,
  Linkedin,
  Instagram,
  FileText,
  Workflow,
  Puzzle,
  Timer,
  CheckCircle2,
  Layers3,
  Wallet,
  Binary,
  Wand2,
  BookOpen,
  Download,
  Headphones,
  FileCheck,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom Cursor Component
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isHidden ? 0 : 1,
          transition: "opacity 0.15s ease",
        }}
      >
        <div
          className="rounded-full bg-amber-500 flex items-center justify-center"
          style={{
            width: isPointer ? "60px" : "20px",
            height: isPointer ? "60px" : "20px",
            transition: "all 0.15s ease",
          }}
        >
          {isPointer && (
            <span className="text-black text-xs font-bold animate-pulse">
              DBG
            </span>
          )}
        </div>
      </div>
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isHidden ? 0 : 0.5,
        }}
      >
        <div
          className="rounded-full border-2 border-amber-500/50"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
      <style jsx global>{`
        * { cursor: none !important; }
        @media (max-width: 768px) { * { cursor: auto !important; } }
      `}</style>
    </>
  );
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// Section wrapper
function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section ref={ref} id={id} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className={`py-16 md:py-24 relative ${className}`}>
      {children}
    </motion.section>
  );
}

// Section title with animated underline
function SectionTitle({ subtitle, title, highlight, commentary }: { subtitle?: string; title: string; highlight?: string; commentary?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} variants={fadeInUp} className="mb-10 md:mb-14">
      {subtitle && (
        <motion.span className="text-amber-500 font-mono text-sm tracking-wider uppercase mb-3 block" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
          {subtitle}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white relative inline-block">
        {title}{" "}
        {highlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">{highlight}</span>}
        <motion.div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" initial={{ width: 0 }} animate={isInView ? { width: "60%" } : {}} transition={{ duration: 0.8, delay: 0.3 }} />
      </h2>
      {commentary && (
        <motion.p className="text-zinc-500 text-sm mt-4 italic" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          {commentary}
        </motion.p>
      )}
    </motion.div>
  );
}

// Metrics Carousel
function MetricsCarousel() {
  const metrics = [
    { value: "$4k+", label: "Annual Savings", icon: DollarSign, color: "from-green-500 to-emerald-600", commentary: "My boss loves me" },
    { value: "37", label: "Team Members Using ClapBot", icon: Users, color: "from-blue-500 to-cyan-600", commentary: "Free forever btw" },
    { value: "5+", label: "Tools Built from Scratch", icon: Cpu, color: "from-orange-500 to-red-600", commentary: "Zero CS degree required" },
    { value: "$280/mo", label: "Saved vs BambooHR", icon: Database, color: "from-pink-500 to-rose-600", commentary: "Notion is free, just saying" },
    { value: "16", label: "Years Dancing", icon: Music, color: "from-amber-500 to-orange-600", commentary: "HR by day, dance by night" },
    { value: "90%", label: "Onboarding Time Reduced", icon: Zap, color: "from-yellow-500 to-amber-600", commentary: "Automation baby" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % metrics.length), 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, metrics.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
              <motion.div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${metrics[currentIndex].color} flex items-center justify-center shrink-0`} whileHover={{ scale: 1.1, rotate: 5 }}>
                {(() => { const IconComponent = metrics[currentIndex].icon; return <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />; })()}
              </motion.div>
              <div className="text-center md:text-left flex-1">
                <motion.div className="text-4xl md:text-5xl font-bold text-white mb-1" key={metrics[currentIndex].value} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
                  {metrics[currentIndex].value}
                </motion.div>
                <div className="text-zinc-400 text-base md:text-lg mb-1">{metrics[currentIndex].label}</div>
                <div className="text-zinc-600 text-sm italic">"{metrics[currentIndex].commentary}"</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-4 mt-5">
        <motion.button onClick={() => { setIsAutoPlaying(false); setCurrentIndex((prev) => (prev - 1 + metrics.length) % metrics.length); }} className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
        <div className="flex gap-2">
          {metrics.map((_, index) => (
            <button key={index} onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index); }} className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-amber-500 w-5" : "bg-zinc-700 w-2 hover:bg-zinc-600"}`} />
          ))}
        </div>
        <motion.button onClick={() => { setIsAutoPlaying(false); setCurrentIndex((prev) => (prev + 1) % metrics.length); }} className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

// Capability card
function CapabilityCard({ title, description, icon: Icon, skills }: { title: string; description: string; icon: React.ElementType; skills: string[] }) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 md:p-6 hover:border-amber-500/50 transition-all duration-300 overflow-hidden">
        <motion.div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-2xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4" whileHover={{ rotate: 12, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Icon className="w-5 h-5 text-black" />
        </motion.div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={skill} className="px-2.5 py-1 text-xs border border-zinc-700 rounded-md text-zinc-300 group-hover:border-amber-500/50 group-hover:text-amber-400 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Project card
function ProjectCard({ title, description, stack, impact, icon: Icon, chaosTag }: { title: string; description: string; stack: string[]; impact: { icon: React.ElementType; value: string; label: string }[]; icon: React.ElementType; chaosTag?: string }) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 md:p-6 hover:border-amber-500/30 transition-all duration-300 overflow-hidden">
        {chaosTag && (
          <motion.div className="absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-xs font-bold text-black" animate={{ rotate: [3, 6, 3] }} transition={{ duration: 2, repeat: Infinity }}>
            {chaosTag}
          </motion.div>
        )}
        <div className="flex items-start justify-between mb-4">
          <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center" whileHover={{ scale: 1.1, rotate: 6 }} transition={{ type: "spring", stiffness: 300 }}>
            <Icon className="w-6 h-6 text-black" />
          </motion.div>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-row flex-wrap gap-2 mb-5">
          {stack.map((tech, i) => (
            <motion.span key={tech} className="px-3 py-1 bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-black text-xs font-medium rounded-full whitespace-nowrap" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05 }}>
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800">
          {impact.map((item, i) => (
            <div key={item.label} className="text-center">
              <item.icon className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <div className="text-base font-bold text-white">{item.value}</div>
              <div className="text-xs text-zinc-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Experience Card
function ExperienceCard({ role, company, period, commentary }: { role: string; company: string; period: string; commentary: string }) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ x: 5 }} className="group relative">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 md:p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-all duration-300">
        <div className="flex-1">
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">{role}</h3>
          <div className="text-amber-500 font-medium text-sm">{company}</div>
        </div>
        <div className="text-zinc-500 text-sm md:text-right shrink-0">{period}</div>
      </div>
      <div className="mt-1 px-4 text-zinc-600 text-xs italic opacity-0 group-hover:opacity-100 transition-opacity text-center md:text-right">
        ↳ {commentary}
      </div>
    </motion.div>
  );
}

// Bigger Tools Component - 5-6 visible
function ScrollingTools() {
  const tools = [
    { name: "Claude", icon: Sparkles },
    { name: "ChatGPT", icon: Brain },
    { name: "Gemini", icon: Sparkles },
    { name: "Grok", icon: Zap },
    { name: "Perplexity", icon: Brain },
    { name: "NotebookLM", icon: BookOpen },
    { name: "ComfyUI", icon: ImageIcon },
    { name: "Midjourney", icon: Palette },
    { name: "Kling AI", icon: Video },
    { name: "Runway ML", icon: Video },
    { name: "ElevenLabs", icon: Mic },
    { name: "FreePik", icon: ImageIcon },
    { name: "Fireflies", icon: Headphones },
    { name: "Fillout", icon: FileCheck },
    { name: "Notion", icon: FileText },
    { name: "Slack", icon: MessageSquare },
    { name: "Typebot", icon: Bot },
    { name: "Railway", icon: Rocket },
    { name: "Supabase", icon: Database },
    { name: "n8n", icon: Workflow },
    { name: "Zapier", icon: Zap },
    { name: "Airtable", icon: Database },
    { name: "Manus", icon: Puzzle },
    { name: "Node.js", icon: Code },
    { name: "Python", icon: Code },
    { name: "VS Code", icon: Code },
    { name: "LinkedIn", icon: Linkedin },
    { name: "X / Twitter", icon: Twitter },
    { name: "Meta", icon: Instagram },
    { name: "Canva", icon: Palette },
    { name: "CapCut", icon: Video },
    { name: "Google", icon: Globe },
    { name: "Figma", icon: Palette },
  ];

  const duplicatedTools = [...tools, ...tools];

  return (
    <div className="relative overflow-hidden py-6">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-zinc-950 via-zinc-950/90 to-transparent z-10" />
      
      {/* Scrolling container - bigger items */}
      <motion.div
        className="flex gap-3"
        animate={{ x: [0, -180 * tools.length] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
      >
        {duplicatedTools.map((tool, index) => (
          <motion.div
            key={`${tool.name}-${index}`}
            className="flex items-center gap-3 px-5 py-4 bg-zinc-900/60 border border-zinc-800/60 rounded-xl text-zinc-300 whitespace-nowrap hover:text-white hover:border-zinc-700 hover:bg-zinc-800/50 transition-all shrink-0 group"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <tool.icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
            <span className="text-sm font-medium">{tool.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Personality card
function PersonalityCard({ title, description, punchline, icon: Icon, accentColor = "from-amber-500 to-orange-600" }: { title: string; description: string; punchline: string; icon: React.ElementType; accentColor?: string }) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300 h-full overflow-hidden">
        <motion.div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 4, repeat: Infinity }} />
        <div className="flex items-center gap-3 mb-3">
          <motion.div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${accentColor} flex items-center justify-center`} whileHover={{ rotate: 12, scale: 1.1 }}>
            <Icon className="w-4 h-4 text-white" />
          </motion.div>
        </div>
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-2">{description}</p>
        <div className="text-zinc-600 text-xs italic border-t border-zinc-800 pt-2">{punchline}</div>
      </div>
    </motion.div>
  );
}

// Personal card
function PersonalCard({ title, subtitle, icon: Icon, accentColor }: { title: string; subtitle: string; icon: React.ElementType; accentColor: string }) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ y: -3, scale: 1.02 }} className="group relative">
      <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-amber-500/30 transition-all duration-300 h-full overflow-hidden">
        <motion.div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        <div className="flex flex-col items-center text-center gap-3">
          <motion.div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accentColor} flex items-center justify-center shrink-0`} whileHover={{ rotate: 12, scale: 1.1 }}>
            <Icon className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{title}</h3>
            <p className="text-zinc-500 text-xs mt-1">{subtitle}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Social Links
function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/dblair-gonzales/", color: "hover:bg-blue-600" },
    { name: "Twitter / X", icon: Twitter, url: "https://twitter.com/legen_dabyll", color: "hover:bg-sky-500" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/da.byll", color: "hover:bg-pink-600" },
    { name: "Email", icon: Mail, url: "mailto:dblair.gonzales@gmail.com", color: "hover:bg-amber-500" },
  ];

  return (
    <div className={`flex items-center justify-center lg:justify-start gap-3 ${className}`}>
      {links.map((link, i) => (
        <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`w-11 h-11 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 transition-all hover:text-white ${link.color}`} title={link.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.15, rotate: -6 }} whileTap={{ scale: 0.95 }}>
          <link.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const capabilities = [
    { title: "HR Operations & Strategy", description: "Design and run end-to-end HR systems: recruitment, onboarding, performance management, compliance. I don't just manage — I rebuild from scratch when needed.", icon: Users, skills: ["Recruitment", "Onboarding", "Performance", "Compliance"] },
    { title: "Automation & Bot Building", description: "Build no-code/low-code automations that replace repetitive HR workflows. From Slack bots to full HRIS systems — if it can be systemized, I'll automate it.", icon: Bot, skills: ["Slack Bots", "Typebot", "n8n", "Zapier"] },
    { title: "Ops System Design", description: "Map, design, and implement operational systems: dashboards, trackers, SOPs, content calendars, competitive research frameworks.", icon: Layers3, skills: ["Notion", "Airtable", "Dashboards", "SOPs"] },
    { title: "AI-Assisted Development", description: "Build functional tools with AI assistance — without writing code from memory. Bots, web apps, data pipelines. The output is real; the method is just smarter.", icon: Brain, skills: ["AI Tools", "APIs", "Web Apps", "Pipelines"] },
    { title: "Prompt Engineering", description: "I speak fluent AI. Prompt crafting is a skill — knowing how to talk to models to get exactly what you want. It's like being a translator for robots.", icon: Wand2, skills: ["Prompt Design", "AI Workflows", "Model Tuning", "Context Engineering"] },
    { title: "Employer Branding & Content", description: "Create HR content, LinkedIn strategy, job ad copy, culture docs. Strong writer with a strategic lens on what actually moves people.", icon: Sparkles, skills: ["Content", "LinkedIn", "Job Ads", "Culture Docs"] },
  ];

  const projects = [
    { title: "ClapBot — Peer Recognition Slack Bot", description: "Built a peer recognition bot that runs on free infrastructure. Team members give kudos seamlessly. SaaS vendors hate this one trick.", stack: ["Slack Bot", "Node.js", "Railway", "Supabase"], impact: [{ icon: DollarSign, value: "$0", label: "Monthly Cost" }, { icon: Users, value: "37", label: "Team Members" }, { icon: TrendingUp, value: "100%", label: "Free Forever" }], icon: Bot, chaosTag: "FREE INFINITY" },
    { title: "HRIS on Notion — Custom HR System", description: "Full HRIS on Notion: employee database, onboarding tracker, org structure, leave requests, HR reporting — all interconnected. BambooHR who?", stack: ["Notion", "Airtable", "Automation"], impact: [{ icon: DollarSign, value: "$280+", label: "Monthly Saved" }, { icon: Target, value: "Full", label: "Custom Build" }, { icon: Database, value: "Zero", label: "Vendor Lock-in" }], icon: Database, chaosTag: "NOTION MAXING" },
    { title: "Typebot Onboarding Flow", description: "Chatbot-based onboarding that candidates love. Applications flow to ATS while new hires get a unique, engaging experience. HR actually smiled.", stack: ["Typebot", "Notion", "ATS Integration"], impact: [{ icon: MessageSquare, value: "Unique", label: "Experience" }, { icon: Timer, value: "90%", label: "Time Saved" }, { icon: CheckCircle2, value: "Zero", label: "Manual Emails" }], icon: Zap, chaosTag: "AUTOMATION WINS" },
    { title: "Clique Dance Studio — Full Ops Build", description: "Entire ops infrastructure from scratch: dashboard, brand identity, logo ideation, growth strategy, competitive research, marketing playbook.", stack: ["Notion", "Brand Strategy", "Marketing", "Operations"], impact: [{ icon: Palette, value: "Full", label: "Brand Identity" }, { icon: MapPin, value: "End-to-End", label: "Operations" }, { icon: DollarSign, value: "$0", label: "SaaS Cost" }], icon: Building2, chaosTag: "BUILT DIFFERENT" },
  ];

  const experiences = [
    { role: "Head of Human Resources", company: "Growgami", period: "Mar 2024 – Present", commentary: "Turned chaos into policy. You're welcome." },
    { role: "Operations Manager", company: "Clique Dance Studio", period: "Jan 2024 – Present", commentary: "HR by day, ops by day. But with better music." },
    { role: "Virtual Professional", company: "MyOutDesk", period: "Oct 2020 – Sep 2025", commentary: "Realtors work hard. Zillow is a lifestyle." },
    { role: "Copywriter / Researcher", company: "DeFi Philippines", period: "May 2023 – Dec 2023", commentary: "Wrote about crypto. Still believe in crypto." },
    { role: "Head of Business Development", company: "Mammoth Media Ltd", period: "Jan 2020 – Nov 2020", commentary: "Team of one. Still crushed it." },
    { role: "Workforce Relationship Advisor", company: "CXC Global", period: "Jul 2019 – Oct 2020", commentary: "Australian contractors are chill. Compliance? Less chill." },
  ];

  const personalities = [
    { title: "Systems Thinker", description: "I see workflows in everything. If a process takes 5 steps, I'll find a way to do it in 2. Efficiency is my love language.", punchline: "Once automated a 3-hour task. Now it takes 4 minutes.", icon: Binary, accentColor: "from-cyan-500 to-blue-600" },
    { title: "People Whisperer", description: "8+ years in HR taught me one thing: everyone just wants to be heard. I bridge the gap between leadership and teams.", punchline: "I can read a room better than most can read a spreadsheet.", icon: Users, accentColor: "from-pink-500 to-rose-600" },
    { title: "Crypto Native", description: "DeFi researcher, NFT collector, and general chaos agent in the Web3 space. I've lost money, made money, and learned a lot.", punchline: "Wrote articles about DeFi. Still hold bags.", icon: Wallet, accentColor: "from-amber-500 to-orange-600" },
  ];

  const personal = [
    { title: "Dancer & Choreographer", subtitle: "16 years, still got moves", icon: Music, accentColor: "from-pink-500 to-rose-600" },
    { title: "Community Leader", subtitle: "Founded local dance community", icon: Trophy, accentColor: "from-amber-500 to-orange-600" },
    { title: "AI Nerd", subtitle: "Always tinkering with tools", icon: Brain, accentColor: "from-violet-500 to-purple-600" },
    { title: "NFT Enthusiast", subtitle: "Active collector in the space", icon: Sparkles, accentColor: "from-cyan-500 to-blue-600" },
    { title: "Fur Parent", subtitle: "3 adorable dogs", icon: Heart, accentColor: "from-rose-500 to-pink-600" },
    { title: "Casual Gamer", subtitle: "Decompress mode: ON", icon: Gamepad2, accentColor: "from-green-500 to-emerald-600" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden flex flex-col">
      <CustomCursor />

      {/* Animated Background */}
      <motion.div className="fixed inset-0 pointer-events-none z-0" style={{ y: backgroundY }}>
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.span className="font-bold text-lg" whileHover={{ scale: 1.1, rotate: -5 }}>
            <span className="text-amber-500">D</span>BG
          </motion.span>
          <div className="hidden md:flex items-center gap-8">
            {["About", "What I Do", "Projects", "The Journey", "Beyond Work"].map((item, i) => (
              <motion.a key={item} href={`#${["about", "capabilities", "projects", "experience", "personal"][i]}`} className="text-zinc-400 hover:text-white transition-colors text-sm hover:text-amber-500" whileHover={{ y: -2 }}>
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button asChild variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hidden sm:flex">
              <a href="/Daryl_Gonzales_CV.pdf" download>
                <Download className="w-4 h-4 mr-2" />CV
              </a>
            </Button>
            <Button asChild size="sm" className="bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold hover:from-amber-400 hover:to-orange-500">
              <a href="mailto:dblair.gonzales@gmail.com">
                <Mail className="w-4 h-4 mr-2" />Hire Me
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <motion.div className="absolute top-32 left-10 text-zinc-800 text-6xl font-bold opacity-20" animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }}>{"</>"}</motion.div>
        <motion.div className="absolute bottom-32 right-10 text-zinc-800 text-6xl font-bold opacity-20" animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>HR</motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Profile Photo */}
            <motion.div className="relative shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <motion.div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-xl opacity-30" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-zinc-800 group">
                <Image src="/profile.jpg" alt="Daryl Blair Gonzales" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <motion.div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 rounded-full text-xs font-bold text-black whitespace-nowrap" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                Open to Opportunities
              </motion.div>
            </motion.div>

            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <span className="text-white">Daryl Blair</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">Gonzales</span>
              </motion.h1>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <p className="text-lg md:text-xl text-zinc-400 mb-2 font-light">Head of HR · Systems Builder · No-Code Operator · <span className="text-amber-500">Generalist</span></p>
                <p className="text-base text-zinc-500 mb-3 italic">Technically overqualified to be this disorganized.</p>
                <p className="text-zinc-600 text-sm mb-6">I hire people smarter than me. <span className="text-amber-500">(It&apos;s working.)</span></p>
              </motion.div>

              <motion.div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-zinc-500 mb-7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span className="text-sm">Baguio City, Philippines</span></div>
                <span className="text-zinc-700">•</span>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:dblair.gonzales@gmail.com" className="text-sm hover:text-amber-500 transition-colors">dblair.gonzales@gmail.com</a></div>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold hover:from-amber-400 hover:to-orange-500 px-6 group">
                  <a href="#projects"><Rocket className="w-4 h-4 mr-2 group-hover:animate-bounce" />See What I Built</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white px-6">
                  <a href="/Daryl_Gonzales_CV.pdf" download><Download className="w-4 h-4 mr-2" />Download CV</a>
                </Button>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <SocialLinks />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle subtitle="About Me" title="The Short " highlight="Version" commentary="If you're in a rush, this is the gist." />
          <motion.div variants={fadeInUp} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8">
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-4">
              I&apos;m <span className="text-amber-500 font-semibold">Daryl Blair Gonzales</span> — Head of HR at Growgami, Operations Manager at Clique Dance Studio, and a <span className="text-amber-500 font-semibold">generalist</span> who builds systems that actually work.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-4">
              No CS degree. No formal dev training. Just 7+ years of HR operations, a stubborn refusal to pay for SaaS tools I can build myself, and an unhealthy obsession with automation.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              I&apos;ve built Slack bots, custom HRIS systems, onboarding flows, and ops dashboards — all while managing HR for remote teams. Currently based in <span className="text-white">Baguio City, Philippines</span>, dancing for 16 years, and raising three dogs who think they&apos;re my bosses.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Impact That Matters */}
      <Section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle subtitle="By The Numbers" title="Impact That " highlight="Matters" commentary="Flex numbers. Because nothing says 'hire me' like arbitrary metrics." />
          <MetricsCarousel />
        </div>
      </Section>

      {/* Beyond the Job Title */}
      <Section>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle subtitle="Who I Am" title="The Three " highlight="Archetypes" commentary="These are the hats I wear. Sometimes all at once. It's a skill." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {personalities.map((personality) => (
              <PersonalityCard key={personality.title} {...personality} />
            ))}
          </div>
        </div>
      </Section>

      {/* What I Do */}
      <Section id="capabilities">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle subtitle="What I Do" title="Core " highlight="Capabilities" commentary="Skills I've collected like Pokémon. Gotta automate 'em all." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} {...capability} />
            ))}
          </div>
        </div>
      </Section>

      {/* Tools - After What I Do */}
      <Section className="py-8">
        <div className="max-w-6xl mx-auto px-6 mb-4">
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white">Tools I <span className="text-amber-500">Actually</span> Use</h3>
            <p className="text-zinc-500 text-sm text-center mt-1 italic">The chaos stack</p>
          </motion.div>
        </div>
        <ScrollingTools />
      </Section>

      {/* Projects */}
      <Section id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle subtitle="Featured Work" title="Stuff I " highlight="Built" commentary="Everything here works. I tested it. Once." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle subtitle="Career" title="Long Story " highlight="Short" commentary="TL;DR: I've worn many hats. All of them fit. Some were itchy." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.role} {...experience} />
            ))}
          </div>
        </div>
      </Section>

      {/* When I'm Not Working */}
      <Section id="personal">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle subtitle="Outside Work" title="When I'm Not " highlight="Working" commentary="Sometimes I touch grass. Briefly." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {personal.map((item) => (
              <PersonalCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Let&apos;s Build Something <span className="text-amber-500">Together</span></h2>
            <p className="text-zinc-400 mb-6 max-w-md mx-auto">Got a project, a wild idea, or just want to chat about HR automation? I&apos;m always down for interesting conversations.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold hover:from-amber-400 hover:to-orange-500 px-8">
                <a href="mailto:dblair.gonzales@gmail.com"><Mail className="w-4 h-4 mr-2" />Send Email</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white px-8">
                <a href="https://www.linkedin.com/in/dblair-gonzales/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 mr-2" />Connect on LinkedIn</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-zinc-900/50 border-t border-zinc-800 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg"><span className="text-amber-500">D</span>BG</span>
              <span className="text-zinc-500 text-sm">© {new Date().getFullYear()} Daryl Blair Gonzales</span>
            </div>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}
