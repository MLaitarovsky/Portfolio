import Reveal from './Reveal.jsx'

const projects = [
  {
    title: 'FlowForge',
    desc: 'Visual AI agent orchestration platform with drag-and-drop workflow builder, BYOK architecture, demo mode, and pre-built templates.',
    tags: ['React', 'TypeScript', 'AI Agents', 'BYOK'],
    github: 'https://github.com/MLaitarovsky/FlowForge',
    demo: 'https://flow-forge-black.vercel.app',
    image: '/flowforge.png',
  },
  {
    title: 'PulseBoard',
    desc: 'Real-time engineering operations dashboard with live metrics, WebSocket updates, and interactive D3.js visualizations.',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Socket.IO', 'PostgreSQL'],
    github: 'https://github.com/MLaitarovsky/Pulseboard',
    demo: 'https://pulseboard-khaki.vercel.app',
    image: '/pulseboard.png',
  },
  {
    title: 'DocPilot',
    desc: 'AI-powered contract review platform with multi-stage LLM pipeline for document classification, extraction, and risk analysis.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'LLM'],
    github: 'https://github.com/MLaitarovsky/DocPilot',
    demo: 'https://docpilot-tau.vercel.app',
    image: '/docpilot.png',
  },
]

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        maxWidth: '1120px',
        margin: '0 auto',
      }}
    >
      <Reveal>
        <p className="section-label">PROJECTS</p>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--text)',
            marginBottom: '48px',
          }}
        >
          Featured work
        </h2>
      </Reveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.05 + i * 0.08}>
            <div
              className="card"
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: 'clamp(28px, 4vw, 40px)',
              }}
            >
              {/* Radial glow top-right corner */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 65%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Two-column layout */}
              <div
                className="grid-project"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Left: text */}
                <div>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 800,
                      color: 'var(--text)',
                      letterSpacing: '-0.5px',
                      marginBottom: '14px',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.75,
                      marginBottom: '24px',
                    }}
                  >
                    {project.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: image + links */}
                <div>
                  <div
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid var(--border)',
                      marginBottom: '16px',
                      aspectRatio: '16 / 9',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--text-muted)',
                        fontSize: '14px',
                        fontWeight: 500,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      <GitHubIcon />
                      Source code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--accent)',
                          fontSize: '14px',
                          fontWeight: 500,
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                      >
                        <ExternalIcon />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
