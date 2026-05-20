'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tools', href: '#tools' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed z-50 transition-all duration-500 ${isScrolled ? 'top-4 left-4 right-4' : 'top-0 left-0 right-0'}`}>
      <nav className={`mx-auto transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]'
          : 'bg-transparent max-w-[1400px]'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${isScrolled ? 'h-14' : 'h-20'}`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className={`font-display tracking-tight transition-all duration-500 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
              Lee Robin
            </span>
            <span className={`text-muted-foreground font-mono transition-all duration-500 ${isScrolled ? 'text-[10px] mt-0.5' : 'text-xs mt-1'}`}>
              DC
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/CV2_TalentAcquisition_RecruitmentCoordinator_LeeDC.pdf"
              target="_blank"
              className={`inline-flex items-center gap-2 bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 font-sans ${isScrolled ? 'px-4 h-8 text-xs' : 'px-6 h-10 text-sm'}`}>
              <Download className={`transition-all ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : '0ms' }}>
                {link.name}
              </a>
            ))}
          </div>
          <div className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}>
            <a href="/CV2_TalentAcquisition_RecruitmentCoordinator_LeeDC.pdf"
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-foreground text-background rounded-full h-14 text-base font-sans">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
