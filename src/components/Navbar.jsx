import { useState } from 'react'
import { navigation } from '../data/portfolio.js'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Oneli Premarathne home" onClick={closeMenu}>
          <span className="brand-mark"><span>O</span></span>
          <span className="brand-name">oneli<span>.</span>me</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
