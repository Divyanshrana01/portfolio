import React, { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Mail, Phone, MapPin, Sparkles, ArrowUpRight, ExternalLink, Download, Play, BrainCircuit, Rocket, Code2, Layers3, Database, Gauge, ArrowRight, Star, Globe2 } from "lucide-react";

// ---------- THEME TOGGLE (light/dark) ----------
function ThemeToggle() {
  const [dark, setDark] = useState(true);
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark"); else root.classList.remove("dark");
  }, [dark]);
  return (
    <motion.button
      onClick={() => setDark(d => !d)}
      className="relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">
          {dark ? "Dark" : "Light"} mode
        </span>
        <div className="relative">
          <Sparkles className="h-5 w-5 text-white/90 group-hover:text-white transition-colors duration-300" />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-sm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.button>
  );
}

// ---------- NAVBAR ----------
function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0.3, 0.9]);
  const bgColor = useTransform(bgOpacity, (o) => `rgba(10, 10, 12, ${o})`);

  return (
    <motion.nav
      style={{ backgroundColor: bgColor }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-gradient-primary hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          
        </motion.a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white relative group font-medium transition-colors duration-300"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

// ---------- HERO ----------
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  return (
    <section id="home" className="relative min-h-[100svh] grid place-items-center overflow-clip bg-mesh dark:bg-[#0a0a0a]">
      {/* Enhanced animated gradient orbs */}
      <motion.div 
        style={{ y }} 
        className="pointer-events-none absolute -top-24 right-[-10%] h-[55rem] w-[55rem] rounded-full bg-gradient-to-r from-fuchsia-500/30 to-purple-600/20 blur-3xl animate-float" 
      />
      <motion.div 
        style={{ y, animationDelay: '2s' }} 
        className="pointer-events-none absolute -top-32 left-[-10%] h-[45rem] w-[45rem] rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-600/20 blur-3xl animate-float"
      />
      
      {/* Additional floating elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-2xl animate-pulse-slow" 
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      />

      <div className="relative z-10 max-w-7xl px-6 pt-32 pb-20 w-full grid md:grid-cols-2 items-center gap-16">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-2"
          >
            <motion.h1
              className="text-6xl sm:text-7xl font-black tracking-tight text-gradient-primary leading-tight"
            >
              Divyansh Rana
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2 text-lg text-white/90 font-medium"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></span>
              AI/ML Engineer • Agentic Workflows • RAG • LLMOps
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-white/80 max-w-xl leading-relaxed"
          >
            Turning messy, real‑world problems into elegant, production‑ready AI systems. Currently building with LangGraph, LangChain, CrewAI, and modern MLOps.
          </motion.p>
          
                      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="h-5 w-5" />
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
                Get in touch
              </motion.a>
                            <motion.a
                href="https://github.com/Divyanshrana01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
                GitHub
              </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Card className="card-glass relative overflow-hidden">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gradient-secondary mb-2">Core Expertise</h3>
                <p className="text-white/60 text-sm">Technologies I work with daily</p>
              </div>
              
              {/* Enhanced skills grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { Icon: BrainCircuit, label: "LLMs", color: "from-purple-500 to-pink-500" },
                  { Icon: Layers3, label: "RAG", color: "from-blue-500 to-cyan-500" },
                  { Icon: Rocket, label: "Agents", color: "from-green-500 to-emerald-500" },
                  { Icon: Database, label: "Vector", color: "from-orange-500 to-red-500" },
                  { Icon: Gauge, label: "MLOps", color: "from-indigo-500 to-purple-500" },
                  { Icon: Code2, label: "Apps", color: "from-teal-500 to-blue-500" },
                ].map(({ Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group aspect-square rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center gap-3 h-full p-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white"/>
                      </div>
                      <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">{label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    animate={{
                      x: [0, 100, 0],
                      y: [0, -100, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22><path d=%22M0 .5H32%22 stroke=%22rgba(255,255,255,0.04)%22/><path d=%22M.5 0V32%22 stroke=%22rgba(255,255,255,0.04)%22/></svg>')]" />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.p
          className="text-white/50 text-xs mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>

    </section>
  );
}

// ---------- ABOUT ----------
function About() {
  const stats = [
    { k: "+10", t: "Projects" },
    { k: "+3", t: "Years" },
    { k: "+15", t: "Techs" },
  ];
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I’m a Noida‑based AI/ML developer focused on shipping useful things: high‑quality agentic systems, robust RAG, and clean MLOps pipelines. I’m comfortable across the stack—FastAPI backends, Streamlit/React frontends, CI/CD, and cloud.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <Card key={s.t} className="rounded-2xl border-white/10 bg-white/[0.03]">
                  <CardContent className="p-6">
                    <div className="text-3xl font-extrabold text-cyan-400">{s.k}</div>
                    <div className="text-white/70 text-sm">{s.t}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="md:col-span-2 rounded-3xl border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
            <CardHeader>
              <CardTitle className="text-white">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a className="flex items-center justify-between p-3 rounded-xl border border-white/10 hover:bg-white/[0.04]" href="https://www.linkedin.com/in/divyanshrana991/" target="_blank" rel="noreferrer">
                <div className="flex items-center gap-3 text-white/80"><Linkedin className="h-5 w-5"/>LinkedIn</div>
                <ExternalLink className="h-4 w-4 text-white/50"/>
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl border border-white/10 hover:bg-white/[0.04]" href="https://github.com/Divyanshrana01" target="_blank" rel="noreferrer">
                <div className="flex items-center gap-3 text-white/80"><Github className="h-5 w-5"/>GitHub</div>
                <ExternalLink className="h-4 w-4 text-white/50"/>
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl border border-white/10 hover:bg-white/[0.04]" href="#contact">
                <div className="flex items-center gap-3 text-white/80"><Mail className="h-5 w-5"/>Contact</div>
                <ArrowRight className="h-4 w-4 text-white/50"/>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ---------- SKILLS ----------
function Skills() {
  const categories = [
    {
      title: "Generative AI",
      icon: BrainCircuit,
      items: ["LangGraph", "LangChain", "CrewAI", "RAG", "Fine‑tuning", "LLMOps", "Agentic Workflows", "MCP servers", "Prompt Eng", "Vector DBs"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "ML/DL",
      icon: Rocket,
      items: ["Supervised", "Unsupervised", "Transformers", "TensorFlow", "Keras", "Optuna", "Model Eval"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data/Infra",
      icon: Database,
      items: ["Python", "SQL", "Docker", "MLflow", "DVC", "Airflow", "Kubernetes", "AWS", "FastAPI", "Streamlit"],
      gradient: "from-green-500 to-emerald-500"
    },
  ];
  
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden" >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-4">Technical Skills</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Expertise across the full AI/ML stack, from research to production deployment
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-glass h-full group hover:border-white/20 transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${c.gradient} shadow-lg`}>
                      <c.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-gradient-primary transition-all duration-300">
                      {c.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {c.items.map((s, j) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: j * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-default"
                        >
                          {s}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROJECTS ----------
function Projects() {
  const projects = [
    {
      title: "MAX – Agentic Chatbot",
      blurb: "Streaming chatbot with persona tuning, auto tool routing (web search), multi‑chat threads, clean live‑response UI.",
      tags: ["LangGraph", "LangChain", "Agents", "Streaming"],
      links: { demo: "#", code: "https://github.com/Divyanshrana01" },
    },
    {
      title: "DocTalk – Chat with PDFs & Websites",
      blurb: "FAISS + HF embeddings, Groq LLaMA 4, chat history, LangSmith tracing.",
      tags: ["RAG", "FAISS", "LangChain", "Groq"],
      links: { demo: "#", code: "https://github.com/Divyanshrana01" },
    },
    {
      title: "Indian Constitution Legal Assistant",
      blurb: "RAG over bare acts, fast retrieval, grounded answers, Streamlit UI.",
      tags: ["RAG", "Streamlit", "LLMs"],
      links: { demo: "#", code: "https://github.com/Divyanshrana01" },
    },
    {
      title: "AI Nutrition Coach",
      blurb: "Conversational meal planning with LangChain tools and macro targets.",
      tags: ["Agents", "Tools", "LLMs"],
      links: { demo: "#", code: "https://github.com/Divyanshrana01" },
    },
    {
      title: "GenAI News Assistant (India)",
      blurb: "Personalized feeds, pop‑up blocks, category routing, recommendations.",
      tags: ["RAG", "Recs", "LLMOps"],
      links: { demo: "#", code: "https://github.com/Divyanshrana01" },
    },
  ];
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-white/10">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="rag">RAG</TabsTrigger>
              <TabsTrigger value="agents">Agents</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
              <Card className="group rounded-3xl border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between gap-2">
                    <span>{p.title}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge className="bg-white/10 border border-white/10">Premium</Badge>
                        </TooltipTrigger>
                        <TooltipContent className="text-sm">Hand‑crafted UI + clean code</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 min-h-16">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <Badge key={t} variant="secondary" className="rounded-full bg-white/10 text-white border border-white/10">{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <Button asChild size="sm" className="rounded-full">
                      <a href={p.links.demo} target="_blank" rel="noreferrer"><Play className="mr-2 h-4 w-4"/>Live</a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <a href={p.links.code} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/>Code</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS / SIGNAL ----------
function Signal() {
  return (
    <section className="py-24 bg-[#0a0a0a]" >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">What people say</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-3xl border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/100?img=${i}`} alt="avatar" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-medium">Reviewer {i}</div>
                    <div className="text-white/60 text-sm">Ex‑colleague</div>
                  </div>
                </div>
                <p className="mt-4 text-white/80">“Divyansh ships fast and cares about quality. His RAG + agentic systems are reliable and thoughtfully engineered.”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT ----------
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]" >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s work together</h2>
            <p className="mt-4 text-white/70">I’m open to roles and collaborations in AI/ML, GenAI, and MLOps. Prefer hands‑on engineering with measurable impact.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> divyanshr141@gmail.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +91 7453049660</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Greater Noida, India</div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild variant="outline" className="rounded-full"><a href="/Divyansh_Rana_Resume.pdf" download><Download className="mr-2 h-4 w-4"/>Resume</a></Button>
              <Button asChild variant="ghost" className="rounded-full"><a href="https://www.linkedin.com/in/divyanshrana991/" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4"/>LinkedIn</a></Button>
              <Button asChild variant="ghost" className="rounded-full"><a href="https://github.com/Divyanshrana01" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/>GitHub</a></Button>
            </div>
          </div>
          <Card className="rounded-3xl border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
            <CardHeader>
              <CardTitle className="text-white">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-3" onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:divyanshr141@gmail.com";
               }}>
                <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="Your name"/>
                <input type="email" className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="Your email"/>
                <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="Subject"/>
                <textarea rows={5} className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="Message"/>
                <Button type="submit" className="rounded-full">Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/60">© {new Date().getFullYear()} Divyansh Rana. Built with care for AI/ML.</div>
        <div className="flex items-center gap-4 text-white/60">
          <a className="hover:text-white" href="#home">Back to top</a>
          <span>•</span>
          <a className="hover:text-white" href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

// ---------- ROOT ----------
export default function PortfolioSite() {
  return (
    <div className="min-h-screen font-sans bg-[#0a0a0a] text-white selection:bg-cyan-400/30 selection:text-white relative overflow-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 bg-mesh opacity-10 pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Signal />
      <Contact />
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <ArrowUpRight className="w-5 h-5 transform rotate-45 group-hover:rotate-0 transition-transform duration-300" />
      </motion.button>
    </div>
  );
}

// ---------- TAILWIND BASE (only needed for CodeSandbox-like preview) ----------
// Metadata moved to index.html for better compatibility