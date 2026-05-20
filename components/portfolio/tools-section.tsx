'use client'

import { useEffect, useRef, useState } from 'react'

const toolsRow1 = [
  { name: 'Zendesk', category: 'Support & CRM' },
  { name: 'FormFox', category: 'Health Screening' },
  { name: 'eScreen', category: 'Health Screening' },
  { name: 'Concentra', category: 'Health Screening' },
  { name: 'TazWorks', category: 'Background Check' },
  { name: 'TinCheck', category: 'Credentialing' },
  { name: 'NSC', category: 'Credentialing' },
  { name: 'Supabase', category: 'Database & Auth' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'Cloudflare R2', category: 'Storage' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'n8n', category: 'Automation' },
]

const toolsRow2 = [
  { name: 'Make', category: 'Automation' },
  { name: 'Claude Code', category: 'AI Dev' },
  { name: 'Windsurf', category: 'AI Dev' },
  { name: 'Antigravity', category: 'AI Dev' },
  { name: 'Google Stitch', category: 'Web Design' },
  { name: 'ChatGPT', category: 'AI Prompting' },
  { name: 'Gemini', category: 'AI Prompting' },
  { name: 'NotebookLM', category: 'AI Research' },
  { name: 'Bria VoIP', category: 'Phone Screening' },
  { name: 'Canva', category: 'Design' },
  { name: 'Banana', category: 'Design' },
  { name: 'MS Office 365', category: 'Productivity' },
]

export function ToolsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tools" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Tech stack & tools
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            The tools I use.
            <br />
            <span className="text-muted-foreground">Every single day.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From credentialing platforms and ATS systems to automation workflows and full-stack development tools.
          </p>
        </div>
      </div>

      {/* Row 1 — forward */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-6 shrink-0">
              {toolsRow1.map((tool) => (
                <div key={`${tool.name}-${setIdx}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group">
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">{tool.name}</div>
                  <div className="text-sm text-muted-foreground">{tool.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-6 shrink-0">
              {toolsRow2.map((tool) => (
                <div key={`${tool.name}-rev-${setIdx}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group">
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">{tool.name}</div>
                  <div className="text-sm text-muted-foreground">{tool.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
