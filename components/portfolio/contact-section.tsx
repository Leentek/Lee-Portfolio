'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, Linkedin, ArrowUpRight, Download } from 'lucide-react'
import { AnimatedTetrahedron } from './animated-tetrahedron'

const cvLinks = [
  { label: 'VA / Executive Assistant CV', file: '/CV1_VirtualExecutiveAssistant_LeeDC.pdf' },
  { label: 'Talent Acquisition & Recruitment CV', file: '/CV2_TalentAcquisition_RecruitmentCoordinator_LeeDC.pdf' },
  { label: 'Customer Support Specialist CV', file: '/CV3_CustomerSupport_LeeDC.pdf' },
]

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'delacruzleerobin@gmail.com', href: 'mailto:delacruzleerobin@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+63 926 536 5567', href: 'tel:+639265365567' },
  { icon: Phone, label: 'Alt Phone', value: '+63 976 030 1009', href: 'tel:+639760301009' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/leerobindelacruz', href: 'https://linkedin.com/in/leerobindelacruz' },
]

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-40 border-t border-foreground/10 overflow-hidden">
      {/* Tetrahedron background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30 pointer-events-none">
        <AnimatedTetrahedron />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            Get in touch
          </span>

          <h2 className={`text-5xl lg:text-8xl font-display tracking-tight mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Let&apos;s work
            <br />
            together.
          </h2>

          {/* Contact links */}
          <div className={`grid sm:grid-cols-2 gap-4 mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {contactLinks.map((contact) => (
              <a key={contact.label} href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 p-5 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300">
                <div className="w-10 h-10 border border-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <contact.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground mb-0.5">{contact.label}</div>
                  <div className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">{contact.value}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CV downloads */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm font-mono text-muted-foreground mb-6">Download a CV — pick the role that fits:</p>
            <div className="flex flex-col gap-3">
              {cvLinks.map((cv) => (
                <a key={cv.label} href={cv.file} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-base hover:text-muted-foreground transition-colors duration-300">
                  <Download className="w-4 h-4 text-muted-foreground" />
                  <span className="border-b border-foreground/20 group-hover:border-foreground/50 transition-colors duration-300 pb-0.5">
                    {cv.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
