'use client'

const stats = [
  { value: '3+', label: 'years in recruitment', detail: 'PSG GLOBAL' },
  { value: '7+', label: 'years in support', detail: 'B2C & B2B' },
  { value: '3', label: 'health platforms', detail: 'FORMFOX · ESCREEN · CONCENTRA' },
  { value: '2', label: 'enterprise ATS systems', detail: 'DUAL PLATFORM' },
  { value: '5+', label: 'years fully remote', detail: 'SINCE MARCH 2020' },
  { value: '3', label: 'live deployed apps', detail: 'SUPABASE · VERCEL' },
]

export function StatsMarquee() {
  return (
    <div className="border-y border-foreground/10 py-6 overflow-hidden">
      <div className="flex gap-16 marquee whitespace-nowrap">
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex gap-16 shrink-0">
            {stats.map((stat) => (
              <div key={`${stat.detail}-${setIdx}`} className="flex items-baseline gap-4">
                <span className="text-4xl lg:text-5xl font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                  <span className="block font-mono text-xs mt-1">{stat.detail}</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
