'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Nexus Portal Hub',
    subtitle: 'P2P Collectibles Marketplace',
    url: 'https://nexus-portal-hub.vercel.app',
    description: 'A fully functional peer-to-peer marketplace for Gunpla, figures, and trading cards. Built with user authentication, browse and listing flows, and Cloudflare R2 image storage. Comparable in scope to Carousell.',
    stack: ['Supabase', 'Vercel', 'Cloudflare R2', 'HTML/CSS/JS'],
    type: 'Full-Stack App',
  },
  {
    number: '02',
    title: 'JobTrack',
    subtitle: 'Application Pipeline Manager',
    url: 'https://job-trackre.vercel.app',
    description: 'A SaaS-style PWA for tracking job applications. Features user authentication, pipeline management (Applied / Interview / Offer / Ghosted), resume manager, asset manager, and full offline support.',
    stack: ['Supabase', 'Vercel', 'PWA', 'HTML/CSS/JS'],
    type: 'SaaS PWA',
  },
  {
    number: '03',
    title: 'Hungry Villains',
    subtitle: 'Restaurant Menu Site',
    url: 'https://hungry-villains.vercel.app/menu.html',
    description: 'A restaurant menu website designed and built end-to-end. Custom visual assets created in Canva and Banana — demonstrates the full pipeline from asset design through deployment.',
    stack: ['HTML/CSS/JS', 'Canva', 'Banana', 'Vercel'],
    type: 'Web Design',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}
      className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="relative border border-foreground/10 hover:border-foreground/30 transition-all duration-500 p-8 lg:p-10">
        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-foreground/10" />

        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-2">{project.number} — {project.type}</span>
            <h3 className="text-2xl lg:text-3xl font-display group-hover:translate-x-1 transition-transform duration-500">
              {project.title}
            </h3>
            <p className="text-muted-foreground mt-1">{project.subtitle}</p>
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            className="shrink-0 w-10 h-10 border border-foreground/20 rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 group/link">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs font-mono px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* URL */}
        <div className="mt-6 pt-6 border-t border-foreground/10">
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
            {project.url.replace('https://', '')}
          </a>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Live projects
          </span>
          <h2 className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Things I&apos;ve built.
            <br />
            <span className="text-muted-foreground">All live. All mine.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
          {projects.map((project, index) => (
            <div key={project.number} className="bg-background">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
