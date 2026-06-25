import React, { useState, useEffect } from 'react'
import { 
  ArrowUpRight, 
  Mail, 
  Layers, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  X,
  ArrowLeft,
  CheckCircle2,
  Zap,
  Settings,
  FileText,
  Play,
  ShoppingBag,
  TrendingUp,
  MapPin,
  Truck,
  Phone
} from 'lucide-react'

// Custom SVGs for brand icons
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

function App() {
  const [view, setView] = useState('home')
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false)
  const [activeWorkflowProj, setActiveWorkflowProj] = useState('proofstudio') // 'proofstudio' or 'rssavoury'

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#proofstudio') {
        setView('proofstudio')
        window.scrollTo(0, 0)
      } else if (window.location.hash === '#rssavoury') {
        setView('rssavoury')
        window.scrollTo(0, 0)
      } else if (window.location.hash === '#ucrs') {
        setView('ucrs')
        window.scrollTo(0, 0)
      } else if (window.location.hash === '#defect-detection') {
        setView('defect-detection')
        window.scrollTo(0, 0)
      } else if (window.location.hash === '#shelf-monitor') {
        setView('shelf-monitor')
        window.scrollTo(0, 0)
      } else if (window.location.hash === '#sorting-system') {
        setView('sorting-system')
        window.scrollTo(0, 0)
      } else {
        setView('home')
      }
    }
    
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // run initially
    
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const openWorkflow = (proj) => {
    setActiveWorkflowProj(proj)
    setIsWorkflowOpen(true)
  }

  // Main Portfolio View
  const renderHome = () => (
    <div className="min-h-screen linear-gradient-bg selection:bg-[#3B82F6]/30 selection:text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/70 border-b border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-baseline gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">KT RAO</span>
            <span className="text-xs italic text-[#EDEDED]/50 font-light tracking-wide">Kirtagya</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#EDEDED]/70">
            <a href="#tech" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/kirtagyacse-droid" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDEDED]/60 hover:text-white transition-colors p-1"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kirtagyakt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#EDEDED]/60 hover:text-white transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-white/10 rounded-md text-xs font-semibold text-white hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-24 md:space-y-36 relative z-10 w-full">
        
        {/* HERO SECTION */}
        <section id="hero" className="space-y-8 md:space-y-12 pt-4 md:pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wide uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
              Available for Freelance
            </div>
            
            <h1 className="flex items-baseline flex-wrap gap-x-4 gap-y-2 font-sans select-none">
              <span className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-none">
                KT RAO
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl italic text-[#EDEDED]/40 font-light tracking-tight">
                Kirtagya
              </span>
            </h1>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-[#EDEDED]/80 font-light leading-normal tracking-tight">
              Bridging <span className="text-white font-medium underline decoration-[#3B82F6] decoration-2 underline-offset-4">AI and Automation</span> to ship production-grade software.
            </p>
            <p className="text-sm sm:text-base text-[#EDEDED]/50 max-w-2xl leading-relaxed">
              Full-stack engineer focusing on clean, scalable serverless architectures, custom machine learning pipelines, and visual workflow logic that drives real business outcomes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a 
              href="mailto:kirtagya.rao@gmail.com?subject=Discovery%20Call%20Request"
              className="group inline-flex items-center justify-center px-6 py-3.5 border border-[#EDEDED]/10 rounded-lg text-sm font-medium text-white hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="ml-2 w-4 h-4 text-[#EDEDED]/60 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#EDEDED]/60 hover:text-white transition-colors w-full sm:w-auto"
            >
              View Projects
            </a>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="tech" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#EDEDED]/40 font-bold">Current Focus Stack</h2>
          </div>
          
          <div className="flex flex-wrap gap-2.5 max-w-4xl">
            {[
              { name: 'Next.js', category: 'Frontend' },
              { name: 'Python', category: 'Backend/AI' },
              { name: 'Prisma', category: 'Database' },
              { name: 'n8n', category: 'Automation' },
              { name: 'Vercel', category: 'DevOps' },
              { name: 'Computer Vision', category: 'AI' }
            ].map((tech) => (
              <div 
                key={tech.name} 
                className="px-4 py-2 text-sm font-medium rounded-lg bg-[#0b0b0b] border border-white/5 text-[#EDEDED]/80 hover:border-[#3B82F6]/30 hover:text-white transition-all duration-200 cursor-default select-none flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-[#EDEDED]/20 group-hover:bg-[#3B82F6] transition-colors"></span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION - BENTO GRID */}
        <section id="projects" className="space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#EDEDED]/40 font-bold">Featured Projects</h2>
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Shaped for Performance</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Project 1: ProofStudio (lg:col-span-1) */}
            <a 
              href="#proofstudio"
              className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.02)' }} />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-md bg-white/3 text-[#3B82F6] border border-white/5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[#EDEDED]/40 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 pr-8">
                    <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">
                      ProofStudio
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-[9px] font-mono border border-[#3B82F6]/20 whitespace-nowrap">SaaS Case Study</span>
                  </div>
                  <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light font-sans">
                    SaaS engine that transforms raw client testimonials into automated LinkedIn posts, structured case studies, and landing page copy.
                  </p>
                </div>
              </div>

              {/* Simulated Testimonial Transformation Visual */}
              <div className="my-6 p-4 rounded bg-[#050505] border border-white/5 space-y-3.5 select-none font-mono text-[9px]">
                <div className="flex items-center justify-between text-[#EDEDED]/40 border-b border-white/5 pb-1.5">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                    RAW WIN
                  </span>
                  <span>"In 8 weeks I got..."</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-[#EDEDED]/60 bg-white/2 p-2 rounded border border-white/5 leading-relaxed font-sans">
                    "I went from zero interviews to 3 offers in 8 weeks..."
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-1 text-[#3B82F6] font-semibold tracking-wider text-[8px] bg-[#3B82F6]/10 px-2 py-0.5 rounded-full border border-[#3B82F6]/20">
                      <Zap className="w-2.5 h-2.5 animate-pulse" />
                      GEMINI AI
                    </div>
                  </div>

                  <div className="text-white bg-[#3B82F6]/5 p-2 rounded border border-[#3B82F6]/20 leading-relaxed font-sans">
                    <strong>Generated Post:</strong> Three job offers in 8 weeks. A 50% salary increase. Fully remote.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['Next.js', 'Prisma', 'SQLite', 'Gemini AI'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-[#EDEDED]/70 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* Project 2: Achar Project (lg:col-span-2) */}
            <a 
              href="#rssavoury"
              className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300 lg:col-span-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.03)' }} />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-md bg-white/3 text-[#3B82F6] border border-white/5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[#EDEDED]/40 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 pr-8">
                    <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">
                      RS Savoury (Achar Project)
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-[9px] font-mono border border-[#3B82F6]/20 whitespace-nowrap">E-Commerce & Logistics</span>
                  </div>
                  <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light font-sans max-w-2xl">
                    Full-stack e-commerce and logistics ecosystem built to scale traditional picklemaking manufacturing, bridging Jaipur consumer storefronts with dynamic operational admin hubs.
                  </p>
                </div>
              </div>

              {/* Grid visual component representing picklemaking operations */}
              <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-3 select-none">
                {[
                  { title: 'Production Alert', status: 'Alert', count: 'Low Stock: Keri', color: 'text-rose-400' },
                  { title: 'Kitchen Status', status: 'Active Targets', count: '10 Jars Left', color: 'text-[#3B82F6]' },
                  { title: 'Revenue Tracker', status: 'Healthy', count: '₹1,950 Total', color: 'text-emerald-400' }
                ].map((stat, i) => (
                  <div key={i} className="p-3 rounded bg-[#050505] border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#EDEDED]/40">{stat.title}</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-white">{stat.count}</span>
                      <span className={`text-[9px] font-mono font-medium ${stat.color}`}>{stat.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['Next.js', 'Prisma', 'Vercel', 'PostgreSQL', 'Google Maps API'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-[#EDEDED]/70 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* Project 3: UCRS - Dairy Monitoring System (lg:col-span-3) */}
            <a
              href="#ucrs"
              className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300 lg:col-span-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.04)' }} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-4">
                    <div className="p-2.5 rounded-md bg-white/3 text-[#3B82F6] border border-white/5 w-fit">
                      <Cpu className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 pr-8">
                        <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">
                          UCRS - Dairy Monitoring System
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono border border-emerald-500/20 whitespace-nowrap">Computer Vision</span>
                      </div>
                      <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light font-sans">
                        Enterprise computer vision and IoT platform for multi-camera cattle identification and milk quality traceability.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {['Python', 'YOLOv8-seg', 'OSNet', 'PostgreSQL', 'IoT'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-[#EDEDED]/70 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Active CV Pipeline Visualization */}
                <div className="lg:col-span-5 p-4 rounded-lg bg-[#050505] border border-white/5 space-y-4 font-mono text-xs select-none">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-[#EDEDED]/40">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      ACTIVE_PIPELINE
                    </span>
                    <span className="text-emerald-400/70">&lt;200ms</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between bg-white/3 p-2 rounded border border-white/5">
                      <span className="text-[#3B82F6]">Node_1: Detection_Agent</span>
                      <span className="text-emerald-400 text-[10px]">✔ SUCCESS</span>
                    </div>
                    <div className="flex justify-center my-0.5">
                      <ChevronRight className="w-4 h-4 text-[#EDEDED]/30 rotate-90" />
                    </div>
                    <div className="flex items-center justify-between bg-[#3B82F6]/5 p-2 rounded border border-[#3B82F6]/30">
                      <span className="text-white">Node_2: ReID_Engine</span>
                      <span className="text-[#3B82F6] text-[10px] animate-pulse">● RUNNING</span>
                    </div>
                    <div className="flex justify-center my-0.5">
                      <ChevronRight className="w-4 h-4 text-[#EDEDED]/30 rotate-90" />
                    </div>
                    <div className="flex items-center justify-between bg-white/1 p-2 rounded border border-white/5 opacity-50">
                      <span>Node_3: Traceability_Sync</span>
                      <span className="text-[#EDEDED]/30 text-[10px]">PENDING</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 4: Defect Detection System (lg:col-span-2) */}
            <a
              href="#defect-detection"
              className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300 lg:col-span-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.03)' }} />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-md bg-white/3 text-[#3B82F6] border border-white/5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[#EDEDED]/40 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 pr-8">
                    <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">
                      Defect Detection System
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono border border-emerald-500/20 whitespace-nowrap">Computer Vision</span>
                  </div>
                  <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light font-sans max-w-2xl">
                    Automated surface inspection pipeline using YOLOv8 for real-time scratch, crack, and dent detection on industrial metal sheets with a Flask REST API.
                  </p>
                </div>
              </div>

              {/* Calibration Metrics Visual */}
              <div className="my-6 grid grid-cols-3 gap-3 select-none">
                {[
                  { title: 'Accuracy', value: '98.6%', status: 'Optimal', color: 'text-emerald-400' },
                  { title: 'Latency', value: '34ms', status: 'Real-time', color: 'text-[#3B82F6]' },
                  { title: 'Defect Classes', value: '4', status: 'Active', color: 'text-amber-400' }
                ].map((stat, i) => (
                  <div key={i} className="p-3 rounded bg-[#050505] border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#EDEDED]/40">{stat.title}</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-white">{stat.value}</span>
                      <span className={`text-[9px] font-mono font-medium ${stat.color}`}>{stat.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['YOLOv8', 'Python', 'Flask', 'Docker', 'OpenCV'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-[#EDEDED]/70 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* Project 5: Retail Shelf Monitor (lg:col-span-1) */}
            <a
              href="#shelf-monitor"
              className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.02)' }} />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-md bg-white/3 text-[#3B82F6] border border-white/5">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <span className="text-[#EDEDED]/40 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 pr-8">
                    <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">
                      Retail Shelf Monitor
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono border border-emerald-500/20 whitespace-nowrap">Computer Vision</span>
                  </div>
                  <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light font-sans">
                    AI shelf analysis detecting stock levels across retail aisles with YOLOv8 and a Next.js upload dashboard.
                  </p>
                </div>
              </div>

              {/* Stock Status Grid */}
              <div className="my-6 p-4 rounded bg-[#050505] border border-white/5 space-y-3 select-none font-mono text-[9px]">
                <div className="flex items-center justify-between text-[#EDEDED]/40 border-b border-white/5 pb-1.5">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    SHELF SCAN
                  </span>
                  <span>Aisle 4B</span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {['Full','Full','Low','Full','Empty','Full','Low','Full','Full','Full'].map((s, i) => (
                    <div key={i} className={`p-1.5 rounded text-center text-[8px] font-semibold ${
                      s === 'Full' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      s === 'Low' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>{s}</div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {['YOLOv8', 'Next.js', 'Python', 'FastAPI'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-[#EDEDED]/70 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* Project 6: Package Sorting System (lg:col-span-3) */}
            <a
              href="#sorting-system"
              className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300 lg:col-span-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.04)' }} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-4">
                    <div className="p-2.5 rounded-md bg-white/3 text-[#3B82F6] border border-white/5 w-fit">
                      <Truck className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 pr-8">
                        <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">
                          Package Sorting System
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono border border-emerald-500/20 whitespace-nowrap">Computer Vision</span>
                      </div>
                      <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light font-sans">
                        Deep association tracking pipeline using YOLOv8 + OSNet Re-ID for automated multi-class package identification and conveyor sorting.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {['YOLOv8', 'OSNet', 'DeepSORT', 'Python', 'Flask'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-[#EDEDED]/70 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Sorting Log */}
                <div className="lg:col-span-5 p-4 rounded-lg bg-[#050505] border border-white/5 space-y-4 font-mono text-xs select-none">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-[#EDEDED]/40">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      SORT_ENGINE
                    </span>
                    <span className="text-emerald-400/70">99.4% match</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { id: 'PKG-0042', cls: 'Express', bin: 'Bin B', conf: '99.3%', color: 'text-[#3B82F6]' },
                      { id: 'PKG-0041', cls: 'Ground', bin: 'Bin A', conf: '99.8%', color: 'text-emerald-400' },
                      { id: 'PKG-0040', cls: 'Next Day', bin: 'Bin C', conf: '98.9%', color: 'text-amber-400' }
                    ].map((pkg, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/3 p-2 rounded border border-white/5 text-[10px]">
                        <span className="text-white font-semibold">{pkg.id}</span>
                        <span className="text-[#EDEDED]/50">{pkg.cls}</span>
                        <span className={pkg.color}>{pkg.bin}</span>
                        <span className="text-emerald-400">{pkg.conf}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>

          </div>
        </section>

        {/* LET'S CONNECT / CONTACT */}
        <section id="contact" className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial at-center from-[#3B82F6]/5 to-transparent opacity-50 pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Let's build something exceptional.</h2>
            <p className="text-sm md:text-base text-[#EDEDED]/60 leading-relaxed font-light">
              I am currently accepting inquiries for engineering engagements, architectural consultations, and full-scale freelance software development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <a 
              href="mailto:kirtagya.rao@gmail.com?subject=Inquiry" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              kirtagya.rao@gmail.com
            </a>
            <a 
              href="https://github.com/kirtagyacse-droid" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white font-semibold rounded-lg text-sm hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4 mr-2 text-[#EDEDED]/60" />
              GitHub Repo
            </a>
            <a 
              href="https://www.linkedin.com/in/kirtagyakt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white font-semibold rounded-lg text-sm hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 mr-2 text-[#EDEDED]/60" />
              LinkedIn
            </a>
            <a 
              href="tel:+919216656099" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white font-semibold rounded-lg text-sm hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-[#EDEDED]/60" />
              +91 92166 56099
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDEDED]/40 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} KT RAO. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Production-Grade Build
            </span>
            <span>Based in India</span>
          </div>
        </div>
      </footer>

    </div>
  )

  // ProofStudio Project Details Page View
  const renderProofStudio = () => (
    <div className="min-h-screen bg-[#050505] selection:bg-[#3B82F6]/30 selection:text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3B82F6]/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#3B82F6]/2 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">KT RAO</span>
            <span className="text-xs italic text-[#EDEDED]/50 font-light tracking-wide">Kirtagya</span>
          </a>

          <a 
            href="#" 
            className="flex items-center gap-2 text-xs font-semibold text-[#EDEDED]/60 hover:text-white transition-colors px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-20 md:space-y-28 relative z-10 w-full">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-mono font-medium">
              <Zap className="w-3.5 h-3.5" />
              SaaS Project Case Study
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              ProofStudio: From Raw Feedback to Viral Marketing.
            </h1>
            
            <p className="text-lg text-[#EDEDED]/70 font-light leading-relaxed">
              A SaaS engine that turns client testimonials into automated LinkedIn posts, case studies, and landing page copy.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => openWorkflow('proofstudio')}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300"
              >
                <Workflow className="w-4 h-4 mr-2" />
                View the Workflow
              </button>
              <a 
                href="https://github.com/kirtagyacse-droid/proofstudio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold border border-white/10 hover:border-white/20 text-[#EDEDED] hover:bg-white/3 transition-all"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                View GitHub Repo
              </a>
              <a 
                href="https://proofstudio-5h2i.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold border border-[#3B82F6]/30 hover:border-[#3B82F6] text-white hover:bg-[#3B82F6]/5 transition-all"
              >
                <ExternalLink className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Hero Image Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl transition-all duration-300 hover:border-[#3B82F6]/30 group">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0c0c0c] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-[10px] font-mono text-[#EDEDED]/30 ml-4">AI Case Study Generator Modal</span>
              </div>
              <div className="p-1.5 bg-[#050505]">
                <img 
                  src="/assets/Screenshot_20260622_205441.png" 
                  alt="ProofStudio AI Case Study Generator Modal Mockup" 
                  className="w-full h-auto rounded-lg select-none filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE TOUR (BENTO GRID) */}
        <section className="space-y-12">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#3B82F6] font-bold">
              <span>Feature Tour</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Automating the Content Engine</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Bento Card 1: Instant Content Generation */}
            <div className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-between w-full">
                  <span className="text-xs font-mono font-medium text-[#3B82F6]/80 bg-[#3B82F6]/10 px-2 py-0.5 rounded">01 / DISTRIBUTION</span>
                  <Settings className="w-4 h-4 text-[#EDEDED]/30 group-hover:text-[#3B82F6] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Instant Content Generation</h3>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  Showcases auto-generated LinkedIn post variations drafted from a single client win, ready to post and schedule.
                </p>
              </div>

              <div className="mt-6 rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 shadow-md hover:border-white/10 transition-colors">
                <img 
                  src="/assets/Screenshot_20260622_205119.png" 
                  alt="Auto-generated LinkedIn posts dashboard screenshot" 
                  className="w-full h-auto rounded filter brightness-90 group-hover:brightness-100 transition-all duration-300 select-none"
                />
              </div>
            </div>

            {/* Bento Card 2: Structured Storytelling */}
            <div className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-between w-full">
                  <span className="text-xs font-mono font-medium text-[#3B82F6]/80 bg-[#3B82F6]/10 px-2 py-0.5 rounded">02 / LONG FORM</span>
                  <FileText className="w-4 h-4 text-[#EDEDED]/30 group-hover:text-[#3B82F6] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Structured Storytelling</h3>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  Extracts raw customer wins into full-length case study frameworks and high-converting website landing page copies.
                </p>
              </div>

              <div className="mt-6 rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 shadow-md hover:border-white/10 transition-colors">
                <img 
                  src="/assets/Screenshot_20260622_205202.png" 
                  alt="Case study and landing page content pack generation view" 
                  className="w-full h-auto rounded filter brightness-90 group-hover:brightness-100 transition-all duration-300 select-none"
                />
              </div>
            </div>

            {/* Bento Card 3: Workflow Automation */}
            <div className="group linear-card-gradient linear-border rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-between w-full">
                  <span className="text-xs font-mono font-medium text-[#3B82F6]/80 bg-[#3B82F6]/10 px-2 py-0.5 rounded">03 / SHORT VIDEO</span>
                  <Play className="w-4 h-4 text-[#EDEDED]/30 group-hover:text-[#3B82F6] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Workflow Automation</h3>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  Translates written reviews into dynamic short-form video scripts complete with screen cues and spoken scripts.
                </p>
              </div>

              <div className="mt-6 rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 shadow-md hover:border-white/10 transition-colors">
                <img 
                  src="/assets/Screenshot_20260622_205240.png" 
                  alt="Video script content pack screen" 
                  className="w-full h-auto rounded filter brightness-90 group-hover:brightness-100 transition-all duration-300 select-none"
                />
              </div>
            </div>

          </div>
        </section>

        {/* THE "WHY" (THE OUTCOME) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Why ProofStudio?</h2>
            
            <ul className="space-y-4">
              {[
                "Transform raw testimonials into expert-level content in seconds.",
                "Multi-channel delivery: Generate LinkedIn posts, long-form case studies, and video scripts from one input.",
                "Gamified 'Getting Started' flow reduces user friction to absolute zero."
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#EDEDED]/80 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl p-1 hover:border-[#3B82F6]/30 transition-colors group">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0c0c0c] border-b border-white/5 rounded-t-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EDEDED]/30"></div>
                <div className="w-12 h-1.5 rounded-full bg-[#EDEDED]/10"></div>
                <div className="text-[10px] font-mono text-[#EDEDED]/30 ml-auto">Interactive Getting Started Guide</div>
              </div>
              <img 
                src="/assets/Screenshot_20260622_205002.png" 
                alt="ProofStudio Getting Started Onboarding Flow" 
                className="w-full h-auto rounded-b filter brightness-95 group-hover:brightness-100 transition-all duration-300 select-none"
              />
            </div>
          </div>
        </section>

        {/* TECH STACK & TOOLS */}
        <section className="text-center space-y-6 border-t border-white/5 pt-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#EDEDED]/40">
            <span>Engineering Stack</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
            Built with Next.js 16, Prisma, SQLite, and Gemini 2.5 Flash AI.
          </h2>
          <p className="text-sm text-[#EDEDED]/50 max-w-xl mx-auto leading-relaxed">
            The platform is structured on an optimized local database model configured for sub-second database transactions and instant LLM completions.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => openWorkflow('proofstudio')}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 text-white transition-all font-semibold"
            >
              <Workflow className="w-4 h-4 mr-2" />
              View Pipeline Workflow Diagram
            </button>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial at-center from-[#3B82F6]/5 to-transparent opacity-50 pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl font-bold text-white">Interested in automated social proof?</h3>
            <p className="text-sm text-[#EDEDED]/60 font-light">
              See the code in action or request a dedicated workflow demo tailored for your team's needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <a 
              href="mailto:kirtagya.rao@gmail.com?subject=ProofStudio%20Demo%20Request" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white font-semibold rounded-lg text-sm hover:bg-white/5 transition-colors"
            >
              Request Demo
            </a>
            <a 
              href="https://github.com/kirtagyacse-droid/proofstudio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white font-semibold rounded-lg text-sm hover:bg-white/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4 mr-2 text-[#EDEDED]/60" />
              View GitHub Repo
            </a>
            <a 
              href="https://proofstudio-5h2i.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg text-sm hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/10"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDEDED]/40 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} KT RAO. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Production-Grade Build
            </span>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </footer>

    </div>
  )

  // RS Savoury Case Study Page View
  const renderRSSavoury = () => (
    <div className="min-h-screen bg-[#050505] selection:bg-[#3B82F6]/30 selection:text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3B82F6]/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#3B82F6]/2 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">KT RAO</span>
            <span className="text-xs italic text-[#EDEDED]/50 font-light tracking-wide">Kirtagya</span>
          </a>

          <a 
            href="#" 
            className="flex items-center gap-2 text-xs font-semibold text-[#EDEDED]/60 hover:text-white transition-colors px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-20 md:space-y-28 relative z-10 w-full">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-mono font-medium">
              <ShoppingBag className="w-3.5 h-3.5" />
              E-Commerce & Logistics Case Study
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              RS Savoury: Digitizing Artisanal Heritage.
            </h1>
            
            <p className="text-lg text-[#EDEDED]/70 font-light leading-relaxed">
              A full-stack e-commerce and logistics ecosystem built to scale traditional manufacturing.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => openWorkflow('rssavoury')}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300"
              >
                <Workflow className="w-4 h-4 mr-2" />
                View the Workflow
              </button>
              <a 
                href="https://github.com/kirtagyacse-droid/the-achar-project" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold border border-white/10 hover:border-white/20 text-[#EDEDED] hover:bg-white/3 transition-all"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                View GitHub Repo
              </a>
              <a 
                href="https://rssavoury.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold border border-[#3B82F6]/30 hover:border-[#3B82F6] text-white hover:bg-[#3B82F6]/5 transition-all"
              >
                <ExternalLink className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Hero Image Mockup (Screenshot_20260622_210309.png) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl transition-all duration-300 hover:border-[#3B82F6]/30 group">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0c0c0c] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-[10px] font-mono text-[#EDEDED]/30 ml-4">Consumer Storefront (Jaipur Gourmet)</span>
              </div>
              <div className="p-1.5 bg-[#050505]">
                <img 
                  src="/assets/Screenshot_20260622_210309.png" 
                  alt="RS Savoury Consumer Storefront Hero" 
                  className="w-full h-auto rounded-lg select-none filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* THE "TWO-SIDED" PLATFORM - HIGH-CONTRAST BEFORE/AFTER */}
        <section className="space-y-12">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#3B82F6] font-bold">
              <span>Dual-Engine Architecture</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">The Two-Sided Platform</h2>
            <p className="text-sm text-[#EDEDED]/50 max-w-2xl leading-relaxed">
              Scaling artisanal picklemaking requires balancing an elegant, high-end consumer-facing storefront with a data-dense kitchen operations dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Column 1: Storefront (Customer-facing) */}
            <div className="space-y-8 p-6 rounded-lg border border-white/5 bg-[#0b0b0b] hover:border-[#3B82F6]/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded bg-[#3B82F6]/10 text-[#3B82F6]">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Storefront (Customer UI)</h3>
                </div>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  A gorgeous digital store designed to convert premium culinary buyers. Features **"Gifting Mode"** box builders, **"Achar Club"** subscriptions, and the interactive **"Provenance Map"** tracing Jaipur garlic and Jodhpur mangoes. 
                </p>
                <p className="text-xs text-[#EDEDED]/40 italic leading-relaxed">
                  "Aunty's Diary" (the recipes blog) and the "Provenance Map" act as critical brand building hooks to connect urban consumers with local Rajasthani farms.
                </p>
              </div>

              {/* Stacked Storefront Screenshots */}
              <div className="space-y-4">
                {/* Product Layout Screenshot_20260622_210407.png */}
                <div className="rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 shadow-lg">
                  <div className="text-[9px] font-mono text-[#EDEDED]/30 px-2 py-1 flex items-center justify-between border-b border-white/5 mb-1 bg-[#090909]">
                    <span>Product Showcase View</span>
                    <span>Keri Ka Khatta</span>
                  </div>
                  <img 
                    src="/assets/Screenshot_20260622_210407.png" 
                    alt="RS Savoury product detail view showcasing premium pickle jar" 
                    className="w-full h-auto rounded select-none filter brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                </div>

                {/* Provenance Map Screenshot_20260622_210441.png */}
                <div className="rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 shadow-lg">
                  <div className="text-[9px] font-mono text-[#EDEDED]/30 px-2 py-1 flex items-center justify-between border-b border-white/5 mb-1 bg-[#090909]">
                    <span>Sourced From the Heart of Rajasthan</span>
                    <span>Provenance Mapping</span>
                  </div>
                  <img 
                    src="/assets/Screenshot_20260622_210441.png" 
                    alt="RS Savoury ingredient provenance map showcasing local farm sourcing" 
                    className="w-full h-auto rounded select-none filter brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Column 2: Command Center (Admin-facing) */}
            <div className="space-y-8 p-6 rounded-lg border border-white/5 bg-[#0b0b0b] hover:border-[#3B82F6]/20 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded bg-[#3B82F6]/10 text-[#3B82F6]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Command Center (Admin Backend)</h3>
                </div>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  A high-efficiency logistics dashboard for internal stakeholders. Coordinates order dispatch, kitchen output targets, and real-time transit status.
                </p>
                <ul className="space-y-3.5 text-xs text-[#EDEDED]/80">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                    <span><strong>Automated Production Planning Alerts:</strong> Flags stock shortages relative to pending delivery orders.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                    <span><strong>Real-time Order Tracking:</strong> Connects dispatch pipelines to multi-partner route optimization networks.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                    <span><strong>Revenue Health Analytics:</strong> Tracks Cash on Delivery (COD) collection and pending transit values.</span>
                  </li>
                </ul>
              </div>

              {/* Admin Dashboard Screenshot_20260622_210525.png */}
              <div className="rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 shadow-lg mt-4 lg:mt-0">
                <div className="text-[9px] font-mono text-[#EDEDED]/30 px-2 py-1 flex items-center justify-between border-b border-white/5 mb-1 bg-[#090909]">
                  <span>Admin Dashboard</span>
                  <span>Operational Control</span>
                </div>
                <img 
                  src="/assets/Screenshot_20260622_210525.png" 
                  alt="RS Savoury Admin Dashboard for inventory and revenue tracking" 
                  className="w-full h-auto rounded select-none filter brightness-90 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>

          </div>
        </section>

        {/* THE "WHY" (BUSINESS VALUE) */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial at-center from-[#3B82F6]/3 to-transparent opacity-40 pointer-events-none" />
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Traditional retail meets modern logistics.</h2>
            <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
              RS Savoury demonstrates how legacy manufacturing can digitize successfully to control margins, increase customer retention, and orchestrate logistics efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-10 pt-4">
            {[
              { 
                title: "Dynamic Kitchen Planning", 
                desc: "Automated production planning triggers recipes and ingredient allocations based on active stock forecasts." 
              },
              { 
                title: "Verified Sourcing Map", 
                desc: "End-to-end transparency traces salt, oil, mangoes, and chilies directly from regional farms to the consumer's jar." 
              },
              { 
                title: "Artisanal Subscription Model", 
                desc: "Custom monthly 'Achar Club' checkout flows capture stable recurring revenue and improve lifetime value." 
              }
            ].map((col, idx) => (
              <div key={idx} className="p-5 rounded bg-[#050505] border border-white/5 space-y-2">
                <div className="text-[#3B82F6] font-mono text-[10px] font-bold">VALUE / 0{idx+1}</div>
                <h4 className="text-sm font-semibold text-white">{col.title}</h4>
                <p className="text-xs text-[#EDEDED]/50 leading-relaxed font-light">{col.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK & TOOLS */}
        <section className="text-center space-y-6 border-t border-white/5 pt-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#EDEDED]/40">
            <span>Engineering Stack</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
            Built with Next.js, Prisma, PostgreSQL, and Google Maps API.
          </h2>
          <p className="text-sm text-[#EDEDED]/50 max-w-xl mx-auto leading-relaxed">
            Incorporates a custom JWT-based authentication protocol securing the delivery rider dispatcher portals. Includes multi-platform mobile client frameworks (Native iOS & Android with SwiftUI & Jetpack Compose).
          </p>
          <div className="pt-2">
            <button 
              onClick={() => openWorkflow('rssavoury')}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 text-white transition-all font-semibold"
            >
              <Workflow className="w-4 h-4 mr-2" />
              View Delivery & Sourcing Flow Diagram
            </button>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial at-center from-[#3B82F6]/5 to-transparent opacity-50 pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl font-bold text-white">Need a custom logistics engine for your business?</h3>
            <p className="text-sm text-[#EDEDED]/60 font-light">
              Let's build a secure, automated backend to align your inventory and customer facing storefront.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <a 
              href="mailto:kirtagya.rao@gmail.com?subject=Custom%20Logistics%20Engine%20Inquiry" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/10 text-white font-semibold rounded-lg text-sm hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Let's talk
            </a>
            <a 
              href="https://rssavoury.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors shadow-lg"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDEDED]/40 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} KT RAO. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Production-Grade Build
            </span>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </footer>

    </div>
  )

  // UCRS Project Details Page View
  const renderUCRS = () => (
    <div className="min-h-screen bg-[#050505] selection:bg-[#3B82F6]/30 selection:text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#3B82F6]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-[130px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors">KT RAO</span>
            <span className="text-xs italic text-[#EDEDED]/50 font-light tracking-wide">Kirtagya</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 text-xs font-semibold text-[#EDEDED]/60 hover:text-white transition-colors px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-20 md:space-y-28 relative z-10 w-full">

        {/* ─── HERO SECTION ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <Cpu className="w-3.5 h-3.5" />
              Computer Vision &amp; IoT Platform
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              UCRS: Enterprise Cattle Identification &amp; Quality Traceability.
            </h1>

            <p className="text-lg text-[#EDEDED]/70 font-light leading-relaxed">
              A multi-camera computer vision and IoT platform for modernizing artisanal dairy production.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                MVP Phase
              </span>
              <span className="text-[#EDEDED]/30 text-xs font-mono">99.1% ReID Accuracy</span>
              <span className="text-[#EDEDED]/30 text-xs font-mono">&lt;200ms Latency</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:kirtagya.rao@gmail.com?subject=UCRS%20Technical%20Documentation%20Request"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Request Documentation
              </a>
            </div>
          </div>

          {/* Hero Image — Cattle ID Dashboard */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-xl rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300 group">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0c0c0c] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-[10px] font-mono text-[#EDEDED]/30 ml-4">Real-time Cattle Identification — LIVE FEED</span>
              </div>
              <div className="p-1.5 bg-[#050505]">
                <img
                  src="/assets/ucrs_cattle_id.png"
                  alt="UCRS Real-time Cattle Identification Dashboard"
                  className="w-full h-auto rounded-lg select-none filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── ARCHITECTURE SECTION ─── */}
        <section className="space-y-10 border-t border-white/5 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#3B82F6] font-bold">
                <span>The Technical Core</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Engineering the Pipeline.</h2>
              <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                UCRS runs a two-stage deep learning pipeline. <span className="text-white font-medium">YOLOv8-seg</span> performs real-time instance segmentation on each CCTV frame — isolating and masking individual animals at 30fps.
              </p>
              <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                Each detected silhouette is passed to <span className="text-white font-medium">OSNet (Omni-Scale Network)</span>, which encodes the animal's coat texture, body structure, and markings into a compact <span className="text-emerald-400 font-medium">512-dimensional embedding vector</span> — a permanent digital fingerprint.
              </p>
              <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                This fingerprint is matched against the farm's herd database using cosine similarity at sub-millisecond speed, guaranteeing <span className="text-white font-medium">100% accurate herd counting</span> even when animals move between cameras.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { label: 'Embedding Dims', value: '512' },
                  { label: 'ReID Accuracy', value: '99.1%' },
                  { label: 'Pipeline Latency', value: '<200ms' }
                ].map((m) => (
                  <div key={m.label} className="p-3 rounded-lg bg-white/3 border border-white/5 text-center space-y-1">
                    <div className="text-xl font-black text-[#3B82F6] tracking-tight">{m.value}</div>
                    <div className="text-[9px] uppercase tracking-wider font-mono text-[#EDEDED]/40">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pipeline Diagram */}
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300 group">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0c0c0c] border-b border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EDEDED]/30"></div>
                  <div className="w-12 h-1.5 rounded-full bg-[#EDEDED]/10"></div>
                  <span className="text-[10px] font-mono text-[#EDEDED]/30 ml-auto">UCRS Computer Vision Architecture</span>
                </div>
                <img
                  src="/assets/ucrs_pipeline.png"
                  alt="UCRS YOLOv8-seg + OSNet Computer Vision Pipeline Architecture Diagram"
                  className="w-full h-auto rounded-b select-none filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── BENTO FEATURE GRID ─── */}
        <section className="space-y-10 border-t border-white/5 pt-16">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#3B82F6] font-bold">
              <span>Feature Tour</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Four Pillars of Intelligence.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Feature 1: Computer Vision Detection */}
            <div className="group linear-card-gradient linear-border rounded-xl p-6 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#3B82F6]/80 bg-[#3B82F6]/10 px-2 py-0.5 rounded">01 / DETECTION</span>
                <Cpu className="w-4 h-4 text-[#EDEDED]/30 group-hover:text-[#3B82F6] transition-colors" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight">Computer Vision Detection</h3>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  Multi-camera CCTV streams are processed in real-time. YOLOv8-seg segments every individual animal per frame, enabling accurate headcounts and activity logging without manual intervention.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 hover:border-white/10 transition-colors">
                <img
                  src="/assets/ucrs_cattle_id.png"
                  alt="Real-time cattle identification CCTV detection feed"
                  className="w-full h-auto rounded filter brightness-90 group-hover:brightness-100 transition-all duration-300 select-none"
                />
              </div>
            </div>

            {/* Feature 2: IoT Milk Analysis */}
            <div className="group linear-card-gradient linear-border rounded-xl p-6 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#3B82F6]/80 bg-[#3B82F6]/10 px-2 py-0.5 rounded">02 / IOT ANALYTICS</span>
                <TrendingUp className="w-4 h-4 text-[#EDEDED]/30 group-hover:text-[#3B82F6] transition-colors" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight">IoT Milk Quality Analysis</h3>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  Inline IoT sensors capture Fat %, SNF, and protein levels at every milking event. Data is bound to the identified animal's fingerprint — enabling per-cow quality trends over time.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 hover:border-white/10 transition-colors">
                <img
                  src="/assets/ucrs_milk_analysis.png"
                  alt="IoT sensor milk fat and SNF real-time analysis graph"
                  className="w-full h-auto rounded filter brightness-90 group-hover:brightness-100 transition-all duration-300 select-none"
                />
              </div>
            </div>

            {/* Feature 3: End-to-End Traceability */}
            <div className="group linear-card-gradient linear-border rounded-xl p-6 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#3B82F6]/80 bg-[#3B82F6]/10 px-2 py-0.5 rounded">03 / TRACEABILITY</span>
                <MapPin className="w-4 h-4 text-[#EDEDED]/30 group-hover:text-[#3B82F6] transition-colors" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight">End-to-End Traceability</h3>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  Every ghee or dairy batch is cryptographically linked to the source animal, milking session, and farm GPS coordinates — giving consumers and auditors a full chain of custody from field to jar.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 hover:border-white/10 transition-colors">
                <img
                  src="/assets/ucrs_traceability.png"
                  alt="Artisanal ghee product traceability back to farm location"
                  className="w-full h-auto rounded filter brightness-90 group-hover:brightness-100 transition-all duration-300 select-none"
                />
              </div>
            </div>

            {/* Feature 4: Technical Pipeline */}
            <div className="group linear-card-gradient linear-border rounded-xl p-6 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#3B82F6]/80 bg-[#3B82F6]/10 px-2 py-0.5 rounded">04 / PIPELINE</span>
                <Workflow className="w-4 h-4 text-[#EDEDED]/30 group-hover:text-[#3B82F6] transition-colors" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight">Technical Pipeline</h3>
                <p className="text-sm text-[#EDEDED]/60 leading-relaxed font-light">
                  Raw CCTV frames flow through YOLOv8-seg for segmentation, a Kalman filter for cross-frame tracking, and OSNet for Re-ID embedding — all persisted to PostgreSQL for audit-ready event logs.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-white/5 bg-[#050505] p-1 hover:border-white/10 transition-colors">
                <img
                  src="/assets/ucrs_pipeline.png"
                  alt="UCRS YOLOv8-seg OSNet computer vision pipeline architectural diagram"
                  className="w-full h-auto rounded filter brightness-90 group-hover:brightness-100 transition-all duration-300 select-none"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ─── BUSINESS OUTCOME ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#3B82F6] font-bold">
              <span>Business Outcome</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Why UCRS?</h2>
            <ul className="space-y-4">
              {[
                { text: 'Reduced supply chain fraud through cryptographic batch-to-animal linkage — no more unverifiable provenance claims.', badge: 'Fraud Prevention' },
                { text: 'Automated production alerts driven by real-time herd inventory and per-cow yield data, eliminating manual stock checks.', badge: 'Operations' },
                { text: 'Data-driven quality control for artisanal dairy — Fat % and SNF analytics deliver the consistency consumers expect at scale.', badge: 'Quality' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-white/2 border border-white/5 hover:border-[#3B82F6]/20 hover:bg-[#3B82F6]/3 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#3B82F6] uppercase tracking-wider">{item.badge}</span>
                    <p className="text-sm text-[#EDEDED]/80 leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="linear-card-gradient linear-border rounded-xl p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-[#EDEDED]/40 font-bold">Engineering Stack</div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">Built with the best tools for the job.</h3>
                <p className="text-sm text-[#EDEDED]/50 leading-relaxed font-light">
                  Python, YOLOv8-seg, OSNet, PostgreSQL, and IoT integration — every component chosen for production-grade performance in low-latency embedded environments.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Python', role: 'Core Runtime' },
                  { name: 'YOLOv8-seg', role: 'Detection' },
                  { name: 'OSNet ReID', role: 'Fingerprinting' },
                  { name: 'Kalman Filter', role: 'Tracking' },
                  { name: 'PostgreSQL', role: 'Event Store' },
                  { name: 'IoT Sensors', role: 'Milk QC' }
                ].map((tech) => (
                  <div key={tech.name} className="p-3 rounded-lg bg-[#050505] border border-white/5 hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/3 transition-all duration-200 cursor-default group">
                    <div className="text-sm font-semibold text-white group-hover:text-[#3B82F6] transition-colors">{tech.name}</div>
                    <div className="text-[9px] font-mono text-[#EDEDED]/40 uppercase tracking-wide mt-0.5">{tech.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CALL TO ACTION ─── */}
        <section className="linear-card-gradient linear-border rounded-xl p-10 md:p-14 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07),transparent_70%)] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Currently in MVP Phase
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Request technical documentation or partner with us.
            </h2>
            <p className="text-sm md:text-base text-[#EDEDED]/60 leading-relaxed font-light">
              UCRS is actively seeking pilot partnerships with dairy cooperatives and agri-tech investors. Reach out to explore integration or review full system architecture.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <a
              href="mailto:kirtagya.rao@gmail.com?subject=UCRS%20Partnership%20Inquiry"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors shadow-lg"
            >
              <Mail className="w-4 h-4 mr-2" />
              Partner with Us
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDEDED]/40 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} KT RAO. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Production-Grade Build
            </span>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </footer>

    </div>
  )

  // ─── Defect Detection System Detail Page ──────────────────────────────
  const renderDefectDetection = () => (
    <div className="min-h-screen linear-gradient-bg selection:bg-[#3B82F6]/30 selection:text-white flex flex-col font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-[#EDEDED]/60 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </a>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">Computer Vision</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20 flex-1">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Defect Detection System
            </h1>
            <p className="text-base text-[#EDEDED]/60 leading-relaxed font-light max-w-xl">
              An automated surface inspection pipeline that uses YOLOv8 to detect scratches, cracks, dents, and corrosion on industrial metal sheets in real time, served via a containerized Flask REST API.
            </p>
            <div className="flex flex-wrap gap-2">
              {['YOLOv8', 'Python', 'Flask', 'Docker', 'OpenCV', 'Kaggle GPU'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-[#EDEDED]/70 border border-white/5">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="mailto:kirtagya.rao@gmail.com?subject=Defect%20Detection%20System%20Inquiry" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                Discuss This Project
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl transition-all duration-300 hover:border-[#3B82F6]/30">
              <img src="/assets/defect_conveyor_inspection.png" alt="Defect Detection Conveyor" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="p-2 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20"><ShieldCheck className="w-5 h-5" /></span>
            The Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Manual Inspection Bottleneck', desc: 'Human inspectors miss 12-18% of surface defects under fatigue, creating costly downstream recalls.' },
              { title: 'Inconsistent Quality Gates', desc: 'Subjective pass/fail criteria across shifts led to 3x variance in defect classification accuracy.' },
              { title: 'No Real-Time Feedback', desc: 'Defect reports took 24-48 hours to compile, preventing immediate corrective action on the production line.' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-[#050505] border border-white/5 space-y-2">
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-[#EDEDED]/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Solution */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Engineering Solution</h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Data Acquisition & Augmentation', desc: 'Curated 12,000+ annotated images of metal surface defects (scratches, cracks, dents, corrosion) from Kaggle and proprietary datasets. Applied mosaic augmentation, random HSV shifts, and geometric transforms to 4x the training volume.' },
              { step: '02', title: 'YOLOv8 Model Training', desc: 'Trained a YOLOv8m model on Kaggle T4 GPUs for 150 epochs with cosine learning rate annealing, achieving 98.6% mAP@0.5 across all 4 defect classes.' },
              { step: '03', title: 'Flask REST API', desc: 'Wrapped the trained model in a Flask inference server exposing POST /detect endpoints. Returns bounding box coordinates, class labels, and confidence scores as structured JSON.' },
              { step: '04', title: 'Containerization & Deployment', desc: 'Dockerized the entire stack (model weights + Flask server) for reproducible deployment. Supports both CPU and GPU inference with automatic device selection.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] text-sm font-bold font-mono">{item.step}</div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[#EDEDED]/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results & ROI */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 space-y-8">
          <h2 className="text-2xl font-bold text-white">Results & ROI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: '98.6%', label: 'Detection Accuracy (mAP@0.5)' },
              { metric: '34ms', label: 'Inference Latency (GPU)' },
              { metric: '4', label: 'Defect Classes Supported' },
              { metric: '85%', label: 'Reduction in Manual Inspections' }
            ].map((r, i) => (
              <div key={i} className="p-5 rounded-lg bg-[#050505] border border-white/5 text-center space-y-1">
                <div className="text-2xl font-extrabold text-[#3B82F6]">{r.metric}</div>
                <div className="text-[10px] text-[#EDEDED]/50 font-mono uppercase tracking-wider">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Gallery */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white">System Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/assets/defect_analysis_dashboard.png', caption: 'Anomaly Analysis Dashboard' },
              { src: '/assets/defect_api_visualizer.png', caption: 'API Response Visualizer' },
              { src: '/assets/defect_conveyor_inspection.png', caption: 'Conveyor Inspection Feed' },
              { src: '/assets/defect_pipeline_architecture.png', caption: 'Training & Deployment Pipeline' }
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] hover:border-[#3B82F6]/30 transition-colors">
                <img src={img.src} alt={img.caption} className="w-full h-auto" />
                <div className="p-3 text-xs text-[#EDEDED]/50 font-mono text-center">{img.caption}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial at-center from-[#3B82F6]/5 to-transparent opacity-50 pointer-events-none" />
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl font-bold text-white">Need an automated quality inspection system?</h3>
            <p className="text-sm text-[#EDEDED]/60 font-light">Let's build a vision-powered defect detection pipeline for your manufacturing line.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <a href="mailto:kirtagya.rao@gmail.com?subject=Defect%20Detection%20Inquiry" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors shadow-lg">
              <Mail className="w-4 h-4 mr-2" />
              Let's talk
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDEDED]/30 gap-4">
          <span>&copy; {new Date().getFullYear()} KT RAO. All rights reserved.</span>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
        </div>
      </footer>
    </div>
  )

  // ─── Retail Shelf Monitor Detail Page ─────────────────────────────────
  const renderShelfMonitor = () => (
    <div className="min-h-screen linear-gradient-bg selection:bg-[#3B82F6]/30 selection:text-white flex flex-col font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-[#EDEDED]/60 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </a>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">Computer Vision</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20 flex-1">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Retail Shelf Monitor
            </h1>
            <p className="text-base text-[#EDEDED]/60 leading-relaxed font-light max-w-xl">
              An AI-driven shelf analysis system that detects stock levels (Full, Low, Empty) across retail aisles using YOLOv8 object detection, paired with a Next.js drag-and-drop upload dashboard for store managers.
            </p>
            <div className="flex flex-wrap gap-2">
              {['YOLOv8', 'Next.js', 'Python', 'FastAPI', 'TailwindCSS'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-[#EDEDED]/70 border border-white/5">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="mailto:kirtagya.rao@gmail.com?subject=Shelf%20Monitor%20Inquiry" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                Discuss This Project
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl transition-all duration-300 hover:border-[#3B82F6]/30">
              <img src="/assets/shelf_monitor_dashboard.png" alt="Shelf Monitor Dashboard" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="p-2 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20"><ShieldCheck className="w-5 h-5" /></span>
            The Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Out-of-Stock Revenue Loss', desc: 'Retailers lose 4-8% of annual revenue due to out-of-stock items that go undetected until daily manual audits.' },
              { title: 'Manual Shelf Audits', desc: 'Store associates spend 2-3 hours per shift on manual aisle walks, often missing low-stock sections in high-traffic zones.' },
              { title: 'Delayed Restock Signals', desc: 'Without real-time detection, restock requests lag by 6-12 hours, causing avoidable empty-shelf periods.' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-[#050505] border border-white/5 space-y-2">
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-[#EDEDED]/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Solution */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Engineering Solution</h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Custom Dataset Annotation', desc: 'Annotated 5,000+ grocery shelf images across 3 classes (Full, Low, Empty) using Roboflow. Applied tile augmentation for dense shelf layouts.' },
              { step: '02', title: 'YOLOv8 Fine-Tuning', desc: 'Fine-tuned a YOLOv8s model for 120 epochs achieving 94.2% mAP@0.5. Optimized for inference on commodity hardware (no GPU required for deployment).' },
              { step: '03', title: 'Stock Analyzer Logic', desc: 'Built a post-processing module that aggregates per-section detection counts into shelf occupancy percentages and triggers restock alerts when occupancy drops below 40%.' },
              { step: '04', title: 'Next.js Upload Dashboard', desc: 'Created a responsive drag-and-drop frontend where store managers upload shelf photos and receive instant annotated results with color-coded bounding boxes.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] text-sm font-bold font-mono">{item.step}</div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[#EDEDED]/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results & ROI */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 space-y-8">
          <h2 className="text-2xl font-bold text-white">Results & ROI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: '94.2%', label: 'Detection Accuracy (mAP@0.5)' },
              { metric: '35%', label: 'Faster Restock Response' },
              { metric: '3', label: 'Stock Level Classes' },
              { metric: '<2s', label: 'Upload-to-Result Latency' }
            ].map((r, i) => (
              <div key={i} className="p-5 rounded-lg bg-[#050505] border border-white/5 text-center space-y-1">
                <div className="text-2xl font-extrabold text-[#3B82F6]">{r.metric}</div>
                <div className="text-[10px] text-[#EDEDED]/50 font-mono uppercase tracking-wider">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Gallery */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white">System Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/assets/shelf_monitor_dashboard.png', caption: 'Shelf Analysis Dashboard' },
              { src: '/assets/shelf_stock_statistics.png', caption: 'Stock Statistics Report' },
              { src: '/assets/shelf_upload_interface.png', caption: 'Image Upload Interface' },
              { src: '/assets/shelf_system_architecture.png', caption: 'System Architecture' }
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] hover:border-[#3B82F6]/30 transition-colors">
                <img src={img.src} alt={img.caption} className="w-full h-auto" />
                <div className="p-3 text-xs text-[#EDEDED]/50 font-mono text-center">{img.caption}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial at-center from-[#3B82F6]/5 to-transparent opacity-50 pointer-events-none" />
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl font-bold text-white">Want to automate your shelf auditing?</h3>
            <p className="text-sm text-[#EDEDED]/60 font-light">Let's build a real-time inventory intelligence system for your retail operation.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <a href="mailto:kirtagya.rao@gmail.com?subject=Shelf%20Monitor%20Inquiry" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors shadow-lg">
              <Mail className="w-4 h-4 mr-2" />
              Let's talk
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDEDED]/30 gap-4">
          <span>&copy; {new Date().getFullYear()} KT RAO. All rights reserved.</span>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
        </div>
      </footer>
    </div>
  )

  // ─── Package Sorting System Detail Page ───────────────────────────────
  const renderSortingSystem = () => (
    <div className="min-h-screen linear-gradient-bg selection:bg-[#3B82F6]/30 selection:text-white flex flex-col font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-[#EDEDED]/60 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </a>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">Computer Vision</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20 flex-1">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Package Sorting System
            </h1>
            <p className="text-base text-[#EDEDED]/60 leading-relaxed font-light max-w-xl">
              A deep association tracking pipeline that combines YOLOv8 detection with OSNet Re-ID embeddings and Hungarian matching to automatically identify, track, and sort multi-class packages on industrial conveyor belts.
            </p>
            <div className="flex flex-wrap gap-2">
              {['YOLOv8', 'OSNet', 'DeepSORT', 'Python', 'Flask', 'OpenCV'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-[#EDEDED]/70 border border-white/5">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="mailto:kirtagya.rao@gmail.com?subject=Package%20Sorting%20System%20Inquiry" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                Discuss This Project
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl transition-all duration-300 hover:border-[#3B82F6]/30">
              <img src="/assets/package_conveyor_tracking.png" alt="Package Conveyor Tracking" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="p-2 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20"><ShieldCheck className="w-5 h-5" /></span>
            The Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Manual Package Categorization', desc: 'Warehouse workers manually read labels and route packages, limiting throughput to ~200 packages/hour with 5-8% mis-sort rates.' },
              { title: 'Identity Loss Across Cameras', desc: 'Multi-camera conveyor systems lose package identity at handoff points, making end-to-end tracking impossible without barcode scanning.' },
              { title: 'Scalability Constraints', desc: 'Adding more sorting lanes requires proportional staffing increases, making linear scaling economically unfeasible for peak seasons.' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-[#050505] border border-white/5 space-y-2">
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-[#EDEDED]/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Solution */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Engineering Solution</h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'YOLOv8 Package Detection', desc: 'Trained YOLOv8m on 8,000+ annotated conveyor images across 6 package classes (Small Box, Large Box, Envelope, Tube, Poly Bag, Irregular). Achieved 97.1% mAP@0.5.' },
              { step: '02', title: 'OSNet Feature Extraction', desc: 'Integrated OSNet (Omni-Scale Network) to extract 512-dimensional appearance embeddings for each detected package, enabling visual re-identification without barcode dependency.' },
              { step: '03', title: 'Hungarian Matching & DeepSORT', desc: 'Combined Kalman filter motion prediction with cosine distance on OSNet embeddings using the Hungarian algorithm for optimal detection-to-track assignment across frames.' },
              { step: '04', title: 'Automated Sorting & Routing', desc: 'Mapped tracked package classes to destination bins via a configurable routing table. Flask API serves real-time sorting decisions with 12ms average latency.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] text-sm font-bold font-mono">{item.step}</div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[#EDEDED]/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results & ROI */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 space-y-8">
          <h2 className="text-2xl font-bold text-white">Results & ROI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: '99.4%', label: 'Sorting Match Rate' },
              { metric: '12ms', label: 'Avg Sorting Latency' },
              { metric: '6', label: 'Package Classes Tracked' },
              { metric: '1,847+', label: 'Packages Sorted/Hour' }
            ].map((r, i) => (
              <div key={i} className="p-5 rounded-lg bg-[#050505] border border-white/5 text-center space-y-1">
                <div className="text-2xl font-extrabold text-[#3B82F6]">{r.metric}</div>
                <div className="text-[10px] text-[#EDEDED]/50 font-mono uppercase tracking-wider">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Gallery */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white">System Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/assets/package_conveyor_tracking.png', caption: 'Conveyor Tracking Feed' },
              { src: '/assets/package_reid_embeddings.png', caption: 'Re-ID Embedding Visualization' },
              { src: '/assets/package_sorting_destination.png', caption: 'Sorting Operations Dashboard' },
              { src: '/assets/package_tracker_architecture.png', caption: 'Deep Association Tracking Architecture' }
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0b] hover:border-[#3B82F6]/30 transition-colors">
                <img src={img.src} alt={img.caption} className="w-full h-auto" />
                <div className="p-3 text-xs text-[#EDEDED]/50 font-mono text-center">{img.caption}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="linear-card-gradient linear-border rounded-lg p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial at-center from-[#3B82F6]/5 to-transparent opacity-50 pointer-events-none" />
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl font-bold text-white">Need an intelligent package sorting solution?</h3>
            <p className="text-sm text-[#EDEDED]/60 font-light">Let's build a vision-powered tracking and sorting pipeline for your logistics operation.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <a href="mailto:kirtagya.rao@gmail.com?subject=Package%20Sorting%20Inquiry" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#EDEDED] transition-colors shadow-lg">
              <Mail className="w-4 h-4 mr-2" />
              Let's talk
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDEDED]/30 gap-4">
          <span>&copy; {new Date().getFullYear()} KT RAO. All rights reserved.</span>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
        </div>
      </footer>
    </div>
  )

  return (
    <>
      {view === 'proofstudio' ? renderProofStudio() : view === 'rssavoury' ? renderRSSavoury() : view === 'ucrs' ? renderUCRS() : view === 'defect-detection' ? renderDefectDetection() : view === 'shelf-monitor' ? renderShelfMonitor() : view === 'sorting-system' ? renderSortingSystem() : renderHome()}

      {/* WORKFLOW MODAL DIALOG */}
      {isWorkflowOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 transition-all duration-300">
          <div className="bg-[#0b0b0b] border border-white/10 rounded-xl max-w-4xl w-full p-6 space-y-6 relative shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsWorkflowOpen(false)}
              className="absolute top-4 right-4 text-[#EDEDED]/50 hover:text-white transition-colors p-1"
              aria-label="Close Workflow Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="space-y-1 pr-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Workflow className="w-5 h-5 text-[#3B82F6]" />
                {activeWorkflowProj === 'proofstudio' ? 'ProofStudio Pipeline Node Workflow' : 'RS Savoury Logistics & Sourcing Workflow'}
              </h3>
              <p className="text-xs text-[#EDEDED]/50 font-light">
                {activeWorkflowProj === 'proofstudio' 
                  ? 'This diagram maps the automation workflow from raw input client testimonials to structured multi-channel marketing campaigns.'
                  : 'This diagram maps the provenance supply chain and rider route coordination dispatching artisanal jars directly to customers.'
                }
              </p>
            </div>

            {/* Node Diagram Layout */}
            {activeWorkflowProj === 'proofstudio' ? (
              <div className="py-8 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 items-center justify-center relative font-mono text-xs text-center select-none">
                {/* Node 1: Input */}
                <div className="p-4 rounded-lg bg-[#050505] border border-white/5 space-y-2">
                  <span className="text-[10px] text-[#EDEDED]/40 uppercase tracking-wide">Step 01 / Input</span>
                  <div className="font-semibold text-white">Client Win</div>
                  <div className="text-[10px] text-[#EDEDED]/50 bg-white/5 p-1 rounded font-sans truncate">"In 8 weeks I got..."</div>
                </div>

                {/* Connecting line 1 */}
                <div className="hidden md:flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-[#3B82F6]" />
                </div>

                {/* Node 2: Core Processing */}
                <div className="p-4 rounded-lg bg-[#3B82F6]/5 border border-[#3B82F6]/30 space-y-2 relative glow-effect">
                  <span className="text-[10px] text-[#3B82F6] uppercase tracking-wide">Step 02 / Engine</span>
                  <div className="font-semibold text-white flex items-center justify-center gap-1.5">
                    <Cpu className="w-4 h-4 text-[#3B82F6]" />
                    Gemini 2.5 AI
                  </div>
                  <div className="text-[9px] text-[#EDEDED]/60 bg-[#3B82F6]/10 py-0.5 px-1.5 rounded inline-block">Flash Engine</div>
                </div>

                {/* Connecting line 2 */}
                <div className="hidden md:flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-[#3B82F6]" />
                </div>

                {/* Node 3: Multi-Outputs */}
                <div className="space-y-3">
                  <div className="p-2.5 rounded bg-[#050505] border border-white/5 flex items-center justify-between text-left gap-3">
                    <span className="text-white font-sans text-[11px]">LinkedIn Posts</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="p-2.5 rounded bg-[#050505] border border-white/5 flex items-center justify-between text-left gap-3">
                    <span className="text-white font-sans text-[11px]">Case Study Pages</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="p-2.5 rounded bg-[#050505] border border-white/5 flex items-center justify-between text-left gap-3">
                    <span className="text-white font-sans text-[11px]">Video Scripts</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-2 items-center justify-center relative font-mono text-xs text-center select-none">
                {/* Node 1: Sourcing */}
                <div className="p-3 rounded-lg bg-[#050505] border border-white/5 space-y-2">
                  <span className="text-[9px] text-[#EDEDED]/40 uppercase tracking-wide">01 / Source</span>
                  <div className="font-semibold text-white flex items-center justify-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Farms
                  </div>
                  <div className="text-[9px] text-[#EDEDED]/50 bg-white/5 p-1 rounded font-sans truncate">Jaipur / Jodhpur</div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-[#3B82F6]" />
                </div>

                {/* Node 2: Kitchen */}
                <div className="p-3 rounded-lg bg-[#050505] border border-white/5 space-y-2">
                  <span className="text-[9px] text-[#EDEDED]/40 uppercase tracking-wide">02 / Kitchen</span>
                  <div className="font-semibold text-white">Manufacture</div>
                  <div className="text-[9px] text-[#EDEDED]/50 bg-white/5 p-1 rounded font-sans truncate">Sun-Drying (21d)</div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-[#3B82F6]" />
                </div>

                {/* Node 3: Serverless Backend API */}
                <div className="p-3 rounded-lg bg-[#3B82F6]/5 border border-[#3B82F6]/30 space-y-2 relative glow-effect">
                  <span className="text-[9px] text-[#3B82F6] uppercase tracking-wide">03 / Platform</span>
                  <div className="font-semibold text-white flex items-center justify-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Logistics API
                  </div>
                  <div className="text-[8px] text-[#EDEDED]/60 bg-[#3B82F6]/10 px-1.5 py-0.5 rounded">Prisma / Postgres</div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-[#3B82F6]" />
                </div>

                {/* Node 4: Rider Dispatch */}
                <div className="p-3 rounded-lg bg-[#050505] border border-white/5 space-y-2">
                  <span className="text-[9px] text-[#EDEDED]/40 uppercase tracking-wide">04 / Delivery</span>
                  <div className="font-semibold text-white flex items-center justify-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    Rider Portal
                  </div>
                  <div className="text-[9px] text-[#EDEDED]/50 bg-white/5 p-1 rounded font-sans truncate">JWT Auth Route</div>
                </div>
              </div>
            )}

            {/* Modal Bottom note */}
            <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[11px] text-[#EDEDED]/40">
              <span>State: Pipeline Active</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Ready
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default App
