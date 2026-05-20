'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { AnimatedSphere } from './animated-sphere'

const roles = ['coordinate', 'automate', 'support', 'build', 'ship']

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => { setIsVisible(true) }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }} />
        ))}
        {[...Array(12)].map((_, i) => (
          <div key={`v-${i}`} className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }} />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            <MapPin className="w-3 h-3" />
            Naic, Cavite — Philippines · Remote since March 2020
          </span>
        </div>

        {/* Headline */}
        <div className="mb-12">
          <h1 className={`text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="block">I</span>
            <span className="block">
              <span className="relative inline-block">
                <span key={wordIndex} className="inline-flex">
                  {roles[wordIndex].split('').map((char, i) => (
                    <span key={`${wordIndex}-${i}`} className="inline-block animate-char-in"
                      style={{ animationDelay: `${i * 50}ms` }}>
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
              </span>
            </span>
          </h1>
        </div>

        {/* Description + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl mb-6">
              Talent Acquisition & Recruitment Coordinator with a background in
              operations, customer support, and building things with code.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-mono text-muted-foreground">
              <span className="px-3 py-1 border border-foreground/10 rounded-full">3+ yrs recruitment</span>
              <span className="px-3 py-1 border border-foreground/10 rounded-full">7+ yrs support</span>
              <span className="px-3 py-1 border border-foreground/10 rounded-full">Supabase · Vercel · n8n</span>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a href="#experience"
              className="inline-flex items-center gap-2 bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group transition-colors">
              View my work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact"
              className="inline-flex items-center h-14 px-8 text-base rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
