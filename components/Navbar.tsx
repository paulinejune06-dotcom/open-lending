'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <div className="container nav-inner">
          <Link
            href="/"
            onClick={closeMenu}
            className="nav-brand"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="/opl.svg"
              alt="Open Lending"
              className="nav-logo"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>

            <Link href="/#services" className="nav-link">
              Services
            </Link>

            <Link href="/process" className="nav-link">
              Our Process
            </Link>

            <Link href="/#resources" className="nav-link">
              Resources
            </Link>

            <Link href="/about" className="nav-link">
              About
            </Link>

            <Link href="/contact" className="nav-link">
              Contact
            </Link>

            <Link
              href="/contact"
              className="btn-primary"
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.875rem',
              }}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/#services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/process" onClick={closeMenu}>
            Our Process
          </Link>

          <Link href="/#resources" onClick={closeMenu}>
            Resources
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            href="/contact"
            className="btn-primary mobile-book-button"
            onClick={closeMenu}
          >
            Book a Call
          </Link>
        </div>
      )}
    </>
  )
}