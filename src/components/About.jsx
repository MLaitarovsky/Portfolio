import Reveal from './Reveal.jsx'

function OlympicRings() {
  return (
    <svg width="44" height="28" viewBox="0 0 44 28" aria-label="Olympic rings" role="img">
      <circle cx="7"  cy="10" r="6" fill="none" stroke="#0085C7" strokeWidth="2" />
      <circle cx="22" cy="10" r="6" fill="none" stroke="#1a1a1a"  strokeWidth="2" />
      <circle cx="37" cy="10" r="6" fill="none" stroke="#DF0024" strokeWidth="2" />
      <circle cx="14" cy="18" r="6" fill="none" stroke="#F4C300" strokeWidth="2" />
      <circle cx="29" cy="18" r="6" fill="none" stroke="#009F6B" strokeWidth="2" />
    </svg>
  )
}

const stats = [
  {
    value: '5',
    suffix: ' yrs',
    label: 'Coding since 2021',
    accent: false,
  },
  {
    value: '3',
    suffix: '',
    label: 'Production apps shipped',
    accent: false,
  },
  {
    value: 'Tokyo',
    suffix: ' 2020',
    label: 'Olympic Games · Swimming',
    accent: true,
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        maxWidth: '1120px',
        margin: '0 auto',
      }}
    >
      <Reveal>
        <p className="section-label">ABOUT</p>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--text)',
            marginBottom: '48px',
            maxWidth: '520px',
          }}
        >
          Athlete&apos;s discipline, engineer&apos;s precision
        </h2>
      </Reveal>

      <div
        className="grid-2col"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto',
          gap: '20px',
        }}
      >
        {/* Large bio card */}
        <Reveal delay={0.05} className="bento-left" style={{ gridRow: 'span 3' }}>
          <div className="card" style={{ height: '100%', padding: '40px' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '24px' }}>
              I&apos;m Michael — a CS graduate, competitive swimmer representing Israel at the Tokyo
              2020 Olympics, and currently training for LA 2028.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '24px' }}>
              I bring the same work ethic from elite sport into software engineering: relentless
              iteration, performing under pressure, and obsessing over the details that separate
              good from great.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.85 }}>
              My focus is full-stack development with AI/LLM integration — building tools that are
              not just functional but genuinely useful and well-crafted.
            </p>
          </div>
        </Reveal>

        {/* Stat cards */}
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.1 + i * 0.07}>
            <div
              className="card"
              style={{
                padding: '28px 32px',
                background: stat.accent
                  ? 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, var(--bg-card) 60%)'
                  : undefined,
                border: stat.accent ? '1px solid rgba(245,158,11,0.2)' : undefined,
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(26px, 3.5vw, 36px)',
                  fontWeight: 800,
                  color: stat.accent ? '#F59E0B' : 'var(--text)',
                  lineHeight: 1,
                  marginBottom: '6px',
                  letterSpacing: '-1px',
                }}
              >
                {stat.value}
                <span style={{ fontSize: '0.6em', fontWeight: 700, letterSpacing: 0 }}>
                  {stat.suffix}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500, marginBottom: stat.accent ? '12px' : 0 }}>
                {stat.label}
              </div>
              {stat.accent && <OlympicRings />}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
