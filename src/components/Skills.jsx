import Reveal from './Reveal.jsx'

const TECH_COLORS = {
  'React': '#61DAFB',
  'Next.js': '#e2e8f0',
  'TypeScript': '#3178C6',
  'Tailwind CSS': '#06B6D4',
  'D3.js': '#F9A03C',
  'Python': '#3776AB',
  'FastAPI': '#009688',
  'Node.js': '#339933',
  'Express': '#e2e8f0',
  'PostgreSQL': '#4169E1',
  'Redis': '#DC382D',
  'MongoDB': '#47A248',
  'Celery': '#37814A',
  'Docker': '#2496ED',
  'GitHub Actions': '#2088FF',
  'Vercel': '#e2e8f0',
  'Railway': '#B146EC',
  'OpenAI API': '#412991',
  'Claude API': '#CC785C',
  'RAG Pipelines': '#0ea5e9',
  'AI Agents': '#a78bfa',
}

const groups = [
  { label: 'Frontend', tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'D3.js'] },
  { label: 'Backend',  tags: ['Python', 'FastAPI', 'Node.js', 'Express'] },
  { label: 'Data',     tags: ['PostgreSQL', 'Redis', 'MongoDB', 'Celery'] },
  { label: 'DevOps',   tags: ['Docker', 'GitHub Actions', 'Vercel', 'Railway'] },
  { label: 'AI / ML',  tags: ['OpenAI API', 'Claude API', 'RAG Pipelines', 'AI Agents'] },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        maxWidth: '1120px',
        margin: '0 auto',
      }}
    >
      <Reveal>
        <p className="section-label">TECH STACK</p>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--text)',
            marginBottom: '48px',
          }}
        >
          Tools I work with
        </h2>
      </Reveal>

      <div
        className="card"
        style={{ padding: 'clamp(24px, 4vw, 40px)', display: 'flex', flexDirection: 'column', gap: 0 }}
      >
        {groups.map((group, i) => (
          <Reveal key={group.label} delay={0.05 + i * 0.07}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px 0',
                borderBottom: i < groups.length - 1 ? '1px solid var(--border)' : 'none',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'var(--text-dim)',
                  minWidth: '80px',
                  flexShrink: 0,
                }}
              >
                {group.label}
              </span>

              <div
                aria-hidden="true"
                style={{
                  width: '1px',
                  height: '20px',
                  background: 'var(--border-hover)',
                  flexShrink: 0,
                }}
              />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tech-pill"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: TECH_COLORS[tag] ?? 'var(--accent)',
                        flexShrink: 0,
                      }}
                    />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
