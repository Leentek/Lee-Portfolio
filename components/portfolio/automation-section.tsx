'use client'

import { useEffect, useRef, useState } from 'react'

const automations = [
  {
    tool: 'Zapier',
    title: 'AI Topic Researcher',
    description: 'Input any topic idea → AI conducts research across the web → results auto-populate a structured Google Sheet. Built entirely in Zapier with a multi-step AI action chain.',
    tags: ['Zapier', 'ChatGPT', 'Google Sheets', 'AI Automation'],
    icon: '⚡',
  },
  {
    tool: 'n8n',
    title: 'Weather Email Reporter',
    description: 'Scheduled automation that fetches current weather data and delivers a formatted daily email report. Demonstrates n8n node chaining, scheduling, and SMTP integration.',
    tags: ['n8n', 'Weather API', 'SMTP', 'Scheduled Workflows'],
    icon: '🔄',
  },
  {
    tool: 'Make',
    title: 'Order Routing Form',
    description: 'A form submission triggers automatic order sheet creation and routes a notification to the correct team group channel based on order type. Built in Make (Integromat).',
    tags: ['Make', 'Google Forms', 'Google Sheets', 'Slack / Teams'],
    icon: '📋',
  },
]

export function AutomationSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Automation projects
            </span>
            <h2 className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Workflows I&apos;ve built.
              <br />
              <span className="text-muted-foreground">Things that run themselves.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All built from scratch
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10">
          {automations.map((item, index) => (
            <div key={item.title}
              className={`bg-background p-8 lg:p-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="text-4xl mb-6">{item.icon}</div>
              <span className="font-mono text-xs text-muted-foreground block mb-2">{item.tool}</span>
              <h3 className="text-2xl font-display mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-foreground/5 border border-foreground/10 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
