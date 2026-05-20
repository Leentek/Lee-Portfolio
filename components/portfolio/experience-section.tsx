'use client'

import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    number: '01',
    period: '2024 – Present',
    title: 'Recruitment Onboarding Coordinator',
    company: 'PSG Global Solutions · Makati City',
    description: 'Designated team lead and primary POC for the email channel queue on Zendesk — managing post-offer onboarding lifecycle end to end across background checks, occupational health screenings (FormFox, eScreen, Concentra), credentialing verifications (NSC, TazWorks, TinCheck), and audit-ready compliance documentation for every placed candidate.',
    tags: ['Zendesk', 'FormFox', 'eScreen', 'Concentra', 'TazWorks', 'NSC', 'B2B Client POC'],
  },
  {
    number: '02',
    period: 'Apr 2023 – 2024',
    title: 'Talent Acquisition & Recruitment Administrator',
    company: 'PSG Global Solutions · Makati City',
    description: 'Sourced and screened candidates across job boards, LinkedIn, and direct outreach while administering two proprietary ATS platforms simultaneously — one comparable to SmartRecruiters/Ashby/Greenhouse, the other to Greenhouse/Breezy HR/Zoho Recruit. Maintained real-time pipeline records and generated daily productivity reports.',
    tags: ['Dual ATS', 'LinkedIn Sourcing', 'ZipRecruiter', 'Bria VoIP', 'Pipeline Management'],
  },
  {
    number: '03',
    period: 'Nov 2022 – Apr 2023',
    title: 'Senior Contact Center Associate',
    company: 'Collective Solution · Remote',
    description: 'Handled inbound emergency roadside assistance in a fully remote environment — triaging situations, dispatching roadside units (tow, flatbed, jump-start), negotiating provider rates within market range in real time, and delivering live updates to customers via GPS and dispatch software.',
    tags: ['Emergency Dispatch', 'GPS Software', 'Rate Negotiation', 'Remote Operations'],
  },
  {
    number: '04',
    period: 'Jul 2019 – Apr 2022',
    title: 'Customer Service Representative',
    company: 'Genpact · Alabang, Muntinlupa',
    description: 'Managed high-volume inbound support for a major US retail credit card client (Citibank-issued) — billing disputes, charge breakdowns to the cent, payment processing, payment arrangements, and credit eligibility. Informally designated as acting team QA for 3–4 months, conducting call reviews and coaching sessions based on performance.',
    tags: ['Credit Card Support', 'Billing & Disputes', 'Acting Team QA', 'BPO'],
  },
  {
    number: '05',
    period: 'Jul 2016 – Jul 2019',
    title: 'Customer Service Representative',
    company: 'Infocom · Makati City',
    description: 'Delivered Tier-1 support for internet and telephone service customers — billing, router/modem troubleshooting, upgrade eligibility, and additional line requests across a 3-year tenure. Informally designated as acting team QA, conducting call reviews and peer coaching.',
    tags: ['ISP Support', 'Tier-1 Tech Support', 'Acting Team QA', 'Telecom'],
  },
]

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
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
      className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-16 border-b border-foreground/10">
        {/* Number + period */}
        <div className="shrink-0 lg:w-32">
          <span className="font-mono text-sm text-muted-foreground block">{exp.number}</span>
          <span className="font-mono text-xs text-muted-foreground/60 block mt-1">{exp.period}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl lg:text-3xl font-display mb-1 group-hover:translate-x-2 transition-transform duration-500">
            {exp.title}
          </h3>
          <p className="text-sm font-mono text-muted-foreground mb-4">{exp.company}</p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-3 py-1 border border-foreground/10 rounded-full text-muted-foreground hover:border-foreground/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Career history
          </span>
          <h2 className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Where I&apos;ve worked.
            <br />
            <span className="text-muted-foreground">What I&apos;ve built there.</span>
          </h2>
        </div>

        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.number} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
