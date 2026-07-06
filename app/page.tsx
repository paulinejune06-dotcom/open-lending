'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, Car, Building2, Calculator, FileText, Phone, Mail, MapPin, ChevronRight, ArrowRight, Menu, X } from 'lucide-react'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="container nav-inner">
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/opl.png" alt="Open Lending" style={{ height: 105 }} />
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

      {/* HERO */}
<section className="hero" style={{ paddingTop: 72 }}>
  <div className="orb" style={{ width: 600, height: 600, top: -200, right: -200 }} />
  <div className="container hero-content" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
      
      {/* Left: Text */}
      <div>
        <div className="hero-eyebrow">Australia's Trusted Mortgage Partner</div>
        <h1 className="display" style={{ color: 'white', marginBottom: '1.5rem' }}>
          Open Your<br />
          <span style={{ color: '#93B4FF' }}>Dream Home</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: 480, marginBottom: '2.5rem' }}>
          Structured lending advice, lender matching, and end-to-end support from assessment to settlement.
        </p>
        <div className="hero-btns">
          <Link href="/contact" className="btn-primary">Free Consultation <ArrowRight size={16} /></Link>
          <Link href="/#process" className="btn-outline-white">See Our Process</Link>
        </div>
        <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          {[{ num: '500+', label: 'Loans Settled' }, { num: '$200M+', label: 'Funds Placed' }, { num: '50+', label: 'Lender Panel' }].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white', letterSpacing: '-0.03em' }}>{s.num}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div style={{ position: 'relative' }}>
        <div style={{ borderRadius: '1.25rem', overflow: 'hidden', position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
            alt="Modern home"
            style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
          />
          {/* Overlay card */}
          <div style={{
            position: 'absolute', bottom: 24, left: 24, right: 24,
            background: 'rgba(10,22,40,0.85)', backdropFilter: 'blur(12px)',
            borderRadius: '0.875rem', padding: '1.25rem 1.5rem',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: 4 }}>Monthly Repayment</div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>$3,840</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: 4 }}>Rate</div>
                <div style={{ color: '#93B4FF', fontWeight: 700, fontSize: '1.1rem' }}>6.14% p.a.</div>
              </div>
              <div style={{ background: '#1B4FD8', borderRadius: '0.5rem', padding: '0.5rem 1rem' }}>
                <div style={{ color: 'white', fontSize: '0.75rem', fontWeight: 600 }}>✓ Approved</div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating badge */}
        <div style={{
          position: 'absolute', top: -16, right: -16,
          background: '#1B4FD8', borderRadius: '1rem',
          padding: '1rem 1.25rem', textAlign: 'center'
        }}>
          <div style={{ color: 'white', fontWeight: 800, fontSize: '1.25rem' }}>50+</div>
          <div style={{ color: '#93B4FF', fontSize: '0.7rem' }}>Lenders</div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* WELCOME */}
      <section className="section stripe-accent" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">About Us</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>Welcome to Open Mortgage</h2>
              <p className="body-lg" style={{ marginBottom: '1.5rem' }}>
                At Open Mortgage, we are committed to providing exceptional financial solutions tailored to your unique needs.
              </p>
              <p className="body" style={{ marginBottom: '2rem' }}>
                With years of experience in the mortgage industry, our team of experts is dedicated to helping you achieve your property and financial goals.
              </p>
              <Link href="/contact" className="btn-primary">Talk to an Expert <ChevronRight size={16} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '🏠', title: 'End-to-end Advisory', desc: 'Full coverage from discovery to settlement' },
                { icon: '🏦', title: 'Multi-lender Panel', desc: 'Compare across 50+ lenders' },
                { icon: '📊', title: 'Credit-aware', desc: 'Optimised submission quality' },
                { icon: '🔄', title: 'Post-settlement', desc: 'Ongoing loan review support' },
              ].map(f => (
                <div key={f.title} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                  <div className="heading-3" style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>{f.title}</div>
                  <p className="body" style={{ fontSize: '0.85rem' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVISORY */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">Our Approach</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">A more rigorous lending advisory experience</h2>
            <p className="body-lg" style={{ maxWidth: 560, margin: '1rem auto 0' }}>We combine structured planning, lender policy insight, and disciplined execution.</p>
          </div>
          <div className="grid-3">
            {[
              { title: 'Borrowing Strategy', desc: 'We map your target, timeline, and cash-flow position into a practical borrowing structure before paperwork begins.', icon: '📋' },
              { title: 'Credit Positioning', desc: 'We assess serviceability, liabilities, and lender policy fit to reduce avoidable credit friction in assessment.', icon: '🎯' },
              { title: 'Execution Discipline', desc: 'From document collection to lender follow-up, we manage milestones and keep every stakeholder aligned through to settlement.', icon: '⚡' },
            ].map(a => (
              <div key={a.title} className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{a.icon}</div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{a.title}</h3>
                <p className="body">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">How It Works</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">A transparent client journey</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>Every stage has a clear objective, expected deliverables, and practical next actions.</p>
          </div>
          <div className="process-grid">
            {[
              { n: 1, title: 'Discovery & Positioning', desc: 'We clarify your goals, borrowing profile, and constraints to establish a realistic approval pathway.' },
              { n: 2, title: 'Structuring & Lender Selection', desc: 'We compare lender policy, pricing, and product features to shortlist options that actually fit your scenario.' },
              { n: 3, title: 'Application & Credit Management', desc: 'We prepare a complete submission package, anticipate key credit questions, and coordinate responses quickly.' },
              { n: 4, title: 'Settlement & Ongoing Review', desc: 'After approval, we guide settlement and continue reviewing your loan structure as rates and life plans change.' },
            ].map(step => (
              <div key={step.n} style={{ padding: '0 1.5rem', textAlign: 'center', position: 'relative' }}>
                <div className="step-num" style={{ margin: '0 auto 1.5rem', position: 'relative', zIndex: 1 }}>{step.n}</div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{step.title}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1.25rem', padding: '3rem', textAlign: 'center' }}>
            <h3 className="heading-2" style={{ color: 'white', marginBottom: '0.75rem' }}>Ready for a more professional mortgage process?</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
              Share your current scenario and we will give you a structured action plan with clear recommendations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book a Strategy Call</Link>
              <Link href="/#process" className="btn-outline-white">See Our Process</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'var(--sky)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">Why Open Mortgage</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Why Choose Open Mortgage</h2>
          </div>
          <div className="grid-4">
            {[
              { title: 'Free Property Valuation', icon: '🏡', link: '/contact', cta: 'Apply Now' },
              { title: 'Tailored Loan Solution', icon: '✂️', link: '/#process', cta: 'Check Our Process' },
              { title: 'Professional Team', icon: '👥', link: '/contact', cta: 'Contact Us' },
              { title: 'Competitive Rates', icon: '📉', link: '/#services', cta: 'View Loan Products' },
            ].map(w => (
              <div key={w.title} className="card" style={{ textAlign: 'center', background: 'white' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{w.icon}</div>
                <div style={{ width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, #EEF3FF 0%, #D6E4FF 100%)', borderRadius: '0.75rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', fontSize: '0.8rem', opacity: 0.6 }}>Image placeholder</div>
                <h3 className="heading-3" style={{ marginBottom: '1rem', fontSize: '1rem' }}>{w.title}</h3>
                <Link href={w.link} className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>{w.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">What We Offer</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Our Services</h2>
          </div>
          <div className="grid-3">
            {[
              { title: 'Home Loan', icon: <Home size={32} />, desc: 'Whether you are buying your first home, upgrading, or refinancing — we find the right loan structure for your situation.', link: '/services/home-loan' },
              { title: 'Car Loan', icon: <Car size={32} />, desc: 'Competitive car finance solutions with fast approvals and flexible repayment terms tailored to your budget.', link: '/services/car-loan' },
              { title: 'Commercial Loan', icon: <Building2 size={32} />, desc: 'Business lending solutions for property acquisition, equipment, and working capital — structured for your growth.', link: '/services/commercial-loan' },
            ].map(s => (
              <div key={s.title} className="card">
                <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, #EEF3FF 0%, #D6E4FF 100%)', borderRadius: '0.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>{s.icon}</div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{s.title}</h3>
                <p className="body" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>{s.desc}</p>
                <Link href={s.link} className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section" id="resources" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">Tools & Calculators</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Resources</h2>
          </div>
          <div className="grid-3">
            {[
              { title: 'Repayment Calculator', icon: <Calculator size={28} />, desc: 'Estimate your monthly repayments based on loan amount, interest rate, and term.', href: '/resources/repayment-calculator' },
              { title: 'Stamp Duty Calculator', icon: <FileText size={28} />, desc: 'Calculate stamp duty costs for your property purchase across all Australian states.', href: '/resources/stamp-duty-calculator' },
              { title: 'Loan Borrowing Calculator', icon: <Calculator size={28} />, desc: 'Find out how much you may be able to borrow based on your income and expenses.', href: '/resources/loan-borrowing-calculator' },
            ].map(r => (
              <div key={r.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--sky)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{r.icon}</div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{r.title}</h3>
                <p className="body" style={{ marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>{r.desc}</p>
                <Link href={r.href} className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', alignSelf: 'flex-start' }}>
                  Open Calculator <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LENDERS */}
      <section className="section-sm" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="label">Our Panel</div>
            <div className="divider" style={{ margin: '1rem auto 1rem' }} />
            <h2 className="heading-2">Our Lenders</h2>
            <p className="body" style={{ marginTop: '0.5rem' }}>We partner with leading financial institutions to provide you with the best loan options.</p>
          </div>
          <div className="lender-strip">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="lender-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>Lender {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ color: '#93B4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Get In Touch</div>
              <h2 className="heading-1" style={{ color: 'white', marginBottom: '1.25rem' }}>Let's talk about your mortgage</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Ready to take the next step? Our team of experts is here to help you navigate the mortgage process with confidence.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { icon: <MapPin size={18} />, label: 'Sydney', val: '1211/87-89 Liverpool Street, Sydney NSW 2000' },
                  { icon: <MapPin size={18} />, label: 'Brisbane', val: 'Suite 1.8, 7 Clunies Ross Court, Eight Mile Plains QLD 4113' },
                  { icon: <MapPin size={18} />, label: 'Hobart', val: 'Level 1/22 Liverpool Street, Hobart TAS 7000' },
                  { icon: <Mail size={18} />, label: 'Email', val: 'info@omlending.com.au' },
                  { icon: <Phone size={18} />, label: 'Hours', val: 'Mon–Fri 10:00 am – 06:00 pm · Sat/Sun Closed' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#93B4FF', marginTop: 2, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '1.25rem', padding: '2.5rem' }}>
              <h3 className="heading-3" style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>Book a Strategy Call</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+61 4xx xxx xxx' },
                ].map(f => (
                  <div key={f.id}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', color: 'var(--text)', outline: 'none' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>Loan Type</label>
                  <select style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', color: 'var(--text)', outline: 'none', background: 'white' }}>
                    <option>Home Loan</option><option>Car Loan</option><option>Commercial Loan</option><option>Refinance</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>Message</label>
                  <textarea rows={4} placeholder="Tell us about your situation..." style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', color: 'var(--text)', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
                </div>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem' }}>
                  Send Message <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container" style={{ padding: '4rem 2rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem' }}>
            <div>
              <div className="footer-brand">Open Mortgage</div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 280 }}>Your trusted partner for mortgage solutions in Sydney, Brisbane, and Hobart.</p>
            </div>
            <div>
              <div className="footer-heading">Services</div>
              {[['Our Process', '/#process'], ['Home Loan', '/services/home-loan'], ['Car Loan', '/services/car-loan'], ['Commercial Loan', '/services/commercial-loan']].map(([l, h]) => (
                <Link key={l} href={h} className="footer-link">{l}</Link>
              ))}
            </div>
            <div>
              <div className="footer-heading">Resources</div>
              {[['Repayment Calculator', '/resources/repayment-calculator'], ['Stamp Duty Calculator', '/resources/stamp-duty-calculator'], ['Borrowing Calculator', '/resources/loan-borrowing-calculator']].map(([l, h]) => (
                <Link key={l} href={h} className="footer-link">{l}</Link>
              ))}
            </div>
            <div>
              <div className="footer-heading">More</div>
              {[['About Us', '/about'], ['Contact Us', '/contact'], ['FAQ', '/faq'], ['Blogs', '/blogs']].map(([l, h]) => (
                <Link key={l} href={h} className="footer-link">{l}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span>© 2026 Open Mortgage. All rights reserved.</span>
            <span>Credit Representative · Australian Credit Licence</span>
          </div>
        </div>
      </footer>
    </>
  )
}
