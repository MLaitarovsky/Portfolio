import { useState, useEffect } from 'react'

const links = ['About', 'Services', 'Projects', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        background: scrolled ? 'rgba(6,11,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          height: '64px',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '22px',
            color: 'var(--text)',
            letterSpacing: '-1px',
          }}
        >
          M<span style={{ color: 'var(--accent)' }}>.</span>L
        </a>

        {/* Desktop links */}
        <div className="desktop-nav-links">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            style={{
              background: 'var(--accent-dim)',
              color: 'var(--accent)',
              border: '1px solid var(--border-hover)',
              borderRadius: '8px',
              padding: '7px 16px',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'background 0.2s, border-color 0.2s',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(14,165,233,0.2)'
              e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-dim)'
              e.currentTarget.style.borderColor = 'var(--border-hover)'
            }}
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            width: '36px',
          }}
        >
          <span
            style={{
              display: 'block',
              height: '2px',
              background: 'var(--text)',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center',
              transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              height: '2px',
              background: 'var(--text)',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              height: '2px',
              background: 'var(--text)',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center',
              transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '4px',
          background: 'rgba(6,11,20,0.97)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '16px 24px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={closeMenu}
            style={{
              color: 'var(--text-muted)',
              fontSize: '16px',
              fontWeight: 500,
              padding: '12px 0',
              borderBottom: '1px solid var(--border)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {link}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          onClick={closeMenu}
          style={{
            color: 'var(--accent)',
            fontSize: '15px',
            fontWeight: 600,
            paddingTop: '16px',
          }}
        >
          Download Resume ↓
        </a>
      </div>
    </nav>
  )
}
