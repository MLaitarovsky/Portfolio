import Reveal from './Reveal.jsx'

function WebIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function AIIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function LayoutIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  )
}

const services = [
  {
    Icon: WebIcon,
    title: 'Custom web applications',
    desc: 'Full-stack apps with React/Next.js, robust APIs, databases, auth, and cloud deployment.',
  },
  {
    Icon: AIIcon,
    title: 'AI-powered tools',
    desc: 'LLM integrations, document processing pipelines, intelligent automation, and RAG systems.',
  },
  {
    Icon: ChartIcon,
    title: 'Real-time dashboards',
    desc: 'Live data visualization with WebSocket feeds, interactive charts, and monitoring systems.',
  },
  {
    Icon: LayoutIcon,
    title: 'Landing pages',
    desc: 'Fast, responsive, SEO-optimized marketing sites and startup landing pages.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        maxWidth: '1120px',
        margin: '0 auto',
      }}
    >
      <Reveal>
        <p className="section-label">SERVICES</p>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--text)',
            marginBottom: '48px',
          }}
        >
          What I build
        </h2>
      </Reveal>

      <div
        className="grid-2col"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
      >
        {services.map((svc, i) => (
          <Reveal key={svc.title} delay={0.05 + i * 0.07}>
            <div className="card" style={{ padding: '36px', height: '100%' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--border-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <svc.Icon />
              </div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '10px',
                }}
              >
                {svc.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {svc.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
