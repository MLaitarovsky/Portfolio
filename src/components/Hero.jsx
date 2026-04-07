import Waves from './Waves.jsx'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Radial glow top-right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Waves at bottom 40% */}
      <Waves />

      {/* Content */}
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '48px',
        }}
      >
        {/* Left: text */}
        <div style={{ flex: '1 1 auto', maxWidth: '680px' }}>
          {/* Status pill + location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--accent-dim)',
                border: '1px solid var(--border-hover)',
                borderRadius: '100px',
                padding: '7px 16px',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text-muted)',
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              Available · Free to work
            </div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text-dim)',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21C12 21 5 13.5 5 8a7 7 0 0 1 14 0c0 5.5-7 13-7 13z" />
                <circle cx="12" cy="8" r="2.5" />
              </svg>
              Tel Aviv · Open to remote
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.08,
              marginBottom: '24px',
              color: 'var(--text)',
            }}
          >
            <span style={{ display: 'block' }}>
              Full-stack engineer<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
            <span className="gradient-text" style={{ display: 'block' }}>
              AI builder<span style={{ WebkitTextFillColor: 'var(--accent)', color: 'var(--accent)' }}>.</span>
            </span>
            <span style={{ display: 'block' }}>
              Olympic athlete<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '560px',
            }}
          >
            I build production-grade web applications with AI integration, real-time systems, and
            clean architecture. Same discipline from the Olympic pool — applied to code.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: '10px',
                padding: '13px 24px',
                fontSize: '15px',
                fontWeight: 600,
                transition: 'opacity 0.2s, transform 0.2s',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.88'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              View my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'var(--accent)',
                border: '1px solid var(--border-hover)',
                borderRadius: '10px',
                padding: '13px 24px',
                fontSize: '15px',
                fontWeight: 600,
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-dim)'
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'var(--border-hover)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: hero photo (desktop only) */}
        <div
          className="hero-photo"
          style={{
            position: 'relative',
            width: '380px',
            height: '450px',
            flexShrink: 0,
          }}
        >
          {/* Glow behind image */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-24px',
              background: 'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.18) 0%, transparent 70%)',
              borderRadius: '40px',
              zIndex: 0,
            }}
          />
          {/* Image frame */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border-hover)',
              zIndex: 1,
            }}
          >
            <img
              src="/hero.JPG"
              alt="Michael Laitarovsky"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
            {/* Bottom gradient overlay */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '45%',
                background: 'linear-gradient(to top, rgba(6,11,20,0.75) 0%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
