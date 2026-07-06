import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Clock, Tag } from 'lucide-react'

export const metadata = { title: 'Blog - Open Lending', description: 'Mortgage insights, market updates, and practical guides from the Open Lending team.' }

const posts = [
  {
    slug: 'how-much-can-i-borrow',
    title: 'How Much Can I Borrow? A Practical Guide for 2025',
    excerpt: 'Lenders look at far more than just your income when assessing your borrowing capacity. We break down the key factors that determine how much you can borrow �?and what you can do to improve it.',
    category: 'Home Loans',
    readTime: '6 min read',
    date: 'June 18, 2025',
    featured: true,
  },
  {
    slug: 'fixed-vs-variable-rate',
    title: 'Fixed vs Variable Rate: Which Is Right for You in 2025?',
    excerpt: 'With rates moving significantly over the past two years, the fixed vs variable decision is more nuanced than ever. Here is how to think about it based on your situation.',
    category: 'Home Loans',
    readTime: '5 min read',
    date: 'May 30, 2025',
    featured: false,
  },
  {
    slug: 'first-home-buyer-grants',
    title: 'First Home Buyer Grants and Schemes: What Is Available in 2025',
    excerpt: 'A practical summary of federal and state grants, stamp duty concessions, and LMI waiver schemes available to first home buyers across Australia.',
    category: 'First Home Buyers',
    readTime: '8 min read',
    date: 'May 12, 2025',
    featured: false,
  },
  {
    slug: 'refinancing-checklist',
    title: 'The Refinancing Checklist: 7 Things to Do Before You Switch Lenders',
    excerpt: 'Refinancing can save thousands �?but only if you do it right. Here is a practical checklist to work through before making the switch.',
    category: 'Refinancing',
    readTime: '5 min read',
    date: 'April 24, 2025',
    featured: false,
  },
  {
    slug: 'investment-loan-structure',
    title: 'How to Structure Your Investment Loan for Maximum Tax Efficiency',
    excerpt: 'The structure of your investment loan matters as much as the rate. We explain the key decisions �?interest only, offset, cross-collateralisation �?and what each means for your returns.',
    category: 'Investment',
    readTime: '7 min read',
    date: 'April 8, 2025',
    featured: false,
  },
  {
    slug: 'commercial-property-finance',
    title: 'Commercial Property Finance: What Lenders Actually Look For',
    excerpt: 'Commercial lending is assessed very differently to residential. Understanding what lenders prioritise �?and how to present your application �?makes a significant difference to outcome.',
    category: 'Commercial',
    readTime: '6 min read',
    date: 'March 20, 2025',
    featured: false,
  },
  {
    slug: 'offset-account-guide',
    title: 'Offset Accounts Explained: Are They Worth It?',
    excerpt: 'Offset accounts can save significant interest over the life of a loan �?but they are not right for everyone. We break down how they work and when to use them.',
    category: 'Home Loans',
    readTime: '4 min read',
    date: 'March 5, 2025',
    featured: false,
  },
  {
    slug: 'self-employed-home-loan',
    title: 'Getting a Home Loan When Self-Employed: What You Need to Know',
    excerpt: 'Self-employed borrowers face extra scrutiny. Here is what lenders look for, what documents you need, and how to position your application for the best outcome.',
    category: 'Home Loans',
    readTime: '7 min read',
    date: 'February 18, 2025',
    featured: false,
  },
]

const categories = ['All', 'Home Loans', 'First Home Buyers', 'Refinancing', 'Investment', 'Commercial']

const categoryColors: Record<string, string> = {
  'Home Loans': '#1B4FD8',
  'First Home Buyers': '#059669',
  'Refinancing': '#7C3AED',
  'Investment': '#D97706',
  'Commercial': '#DC2626',
}

export default function BlogsPage() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
        paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>Blog</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.25rem' }}>📝 Insights</div>
          <h1 className="heading-1" style={{ color: 'white', marginBottom: '0.75rem' }}>Mortgage Insights & Guides</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.75 }}>
            Practical guides, market updates, and expert commentary from the Open Lending team.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">

          {/* Category filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(c => (
              <div key={c} style={{
                padding: '0.5rem 1.25rem', borderRadius: '99px',
                background: c === 'All' ? 'var(--blue)' : 'white',
                color: c === 'All' ? 'white' : 'var(--muted)',
                border: '1.5px solid', borderColor: c === 'All' ? 'var(--blue)' : 'var(--border)',
                fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer'
              }}>{c}</div>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link href={`/blogs/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '2.5rem' }}>
              <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', overflow: 'hidden', padding: 0 }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--sky) 0%, #D6E4FF 100%)',
                  minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--blue)', fontSize: '0.85rem', opacity: 0.6
                }}>Featured Image Placeholder</div>
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ background: categoryColors[featured.category] || 'var(--blue)', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '99px' }}>{featured.category}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Featured</span>
                  </div>
                  <h2 className="heading-2" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>{featured.title}</h2>
                  <p className="body" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{featured.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} />{featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--blue)', fontWeight: 600, fontSize: '0.875rem', marginTop: '1.25rem' }}>
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid-3">
            {rest.map(post => (
              <Link key={post.slug} href={`/blogs/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--sky) 0%, #D6E4FF 100%)',
                    height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--blue)', fontSize: '0.75rem', opacity: 0.6
                  }}>Image Placeholder</div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.875rem' }}>
                      <span style={{ background: categoryColors[post.category] || 'var(--blue)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.625rem', borderRadius: '99px' }}>{post.category}</span>
                    </div>
                    <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', lineHeight: 1.4, marginBottom: '0.75rem', flex: 1 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>{post.excerpt.substring(0, 100)}...</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} />{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>Stay informed</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Get practical mortgage insights and market updates delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}>
            <input type="email" placeholder="your@email.com" style={{
              flex: 1, minWidth: 220, padding: '0.875rem 1.25rem',
              borderRadius: '0.5rem', border: 'none', fontSize: '0.95rem', outline: 'none'
            }} />
            <button className="btn-primary">Subscribe <ArrowRight size={16} /></button>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '1rem' }}>No spam. Unsubscribe at any time.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}

