'use client'

import { AnimatedWave } from './animated-wave'

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-foreground/10 overflow-hidden">
      {/* Wave background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Name + tagline */}
          <div>
            <div className="text-5xl lg:text-7xl font-display tracking-tight mb-4">
              Lee Robin
              <br />
              Dela Cruz
            </div>
            <p className="font-mono text-sm text-muted-foreground">
              Talent Acquisition · Recruitment · Ops · Builder
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 lg:text-right">
            <a href="mailto:delacruzleerobin@gmail.com"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
              delacruzleerobin@gmail.com
            </a>
            <a href="https://linkedin.com/in/leerobindelacruz" target="_blank" rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
              linkedin.com/in/leerobindelacruz
            </a>
            <a href="https://nexus-portal-hub.vercel.app" target="_blank" rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
              nexus-portal-hub.vercel.app
            </a>
            <a href="https://job-trackre.vercel.app" target="_blank" rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
              job-trackre.vercel.app
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} Lee Robin Dela Cruz · Naic, Cavite, Philippines
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
