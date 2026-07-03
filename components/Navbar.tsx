'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav>
        <div className="container nav-inner">
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 36, height: 36, background: 'var(--blue)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: '1rem' }}>OM</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy)' }}>Open Mortgage</span>
          </Link>
          <div className="nav-links">
            <Link href="/#services" className="nav-link">Services</Link>
            <Link href="/#process" className="nav-link">Our Process</Link>
            <Link href="/#resources" className="nav-link">Resources</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/contact" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>Book a Call</Link>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, background: 'white',
          borderBottom: '1px solid var(--border)', zIndex: 99, padding: '1rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1rem'
        }}>
          {[
            { href: '/#services', label: 'Services' },
            { href: '/#process', label: 'Our Process' },
            { href: '/#resources', label: 'Resources' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(item => (
            <Link key={item.href} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
