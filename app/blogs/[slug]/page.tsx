import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight, Clock, ArrowRight, ArrowLeft } from 'lucide-react'

const posts: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  'how-much-can-i-borrow': {
    title: 'How Much Can I Borrow? A Practical Guide for 2025',
    category: 'Home Loans', date: 'June 18, 2025', readTime: '6 min read',
    content: [
      'One of the first questions people ask when considering a property purchase is: how much can I actually borrow? The answer is more nuanced than most people expect — and understanding it properly can make a significant difference to your purchasing strategy.',
      'Lenders assess borrowing capacity using a concept called "serviceability." They want to confirm that you can comfortably make loan repayments even if interest rates rise. To do this, they assess your application at a rate higher than the actual loan rate — currently, lenders apply a buffer of at least 3% above the loan rate.',
      'Your gross income is the starting point, but lenders don\'t use your full income figure. Different income types are treated differently. Base salary is generally accepted at 100%. Overtime and allowances might be shaded to 80%. Rental income is often accepted at 80%. Self-employment income requires two years of tax returns and is assessed more conservatively.',
      'On the expense side, lenders use either your declared living expenses or a benchmark figure called the Household Expenditure Measure (HEM) — whichever is higher. The HEM is a minimum living cost estimate based on your household composition. If your actual expenses are higher, those are used instead.',
      'Your existing debts also reduce borrowing capacity. Credit card limits are assessed at a minimum monthly repayment of around 3.8% of the total limit — even if you pay them off in full each month. Car loans, personal loans, and existing mortgages all reduce how much more you can borrow.',
      'The good news is that there are legitimate ways to improve your borrowing capacity before applying: reducing or closing unused credit cards, paying down existing debt, ensuring your income is documented correctly, and timing your application to align with recent pay rises or bonus history.',
      'The most reliable way to understand your borrowing capacity is to have a broker run a detailed assessment using real lender calculators. The figure varies significantly between lenders — sometimes by $100,000 or more for the same applicant. Knowing where you stand before you make an offer gives you confidence and helps you avoid disappointment.',
    ],
  },
  'fixed-vs-variable-rate': {
    title: 'Fixed vs Variable Rate: Which Is Right for You in 2025?',
    category: 'Home Loans', date: 'May 30, 2025', readTime: '5 min read',
    content: [
      'The fixed versus variable rate debate is one of the most common questions we receive — and one of the hardest to answer definitively, because the right choice depends on your specific situation rather than market predictions.',
      'A fixed rate locks your interest rate for a set period — usually 1, 2, 3, or 5 years. During this period, your repayments stay the same regardless of what happens to the cash rate. This certainty can be valuable for budgeting, particularly if you have a tight cash flow or are planning significant life changes.',
      'The trade-off is flexibility. Fixed rate loans typically have restrictions on extra repayments (often capped at $10,000–$30,000 per year), limited or no offset account access, and break costs if you need to exit the loan early — for example, if you sell the property or want to refinance.',
      'Variable rate loans move with the market. When the cash rate falls, your rate (usually) falls too. Variable loans typically offer more features: unlimited extra repayments, full offset accounts, and the ability to refinance without break costs. The downside is uncertainty — your repayments can increase if rates rise.',
      'A split loan — part fixed, part variable — is a popular middle ground. It gives you rate certainty on a portion of the loan while keeping flexibility on the rest. A common split might be 50/50 or 70/30 depending on your priorities.',
      'The key questions to ask yourself: How important is repayment certainty to you? Do you have surplus cash to make extra repayments? Are you likely to sell or refinance within the fixed period? What is your view on where rates are heading (acknowledging that nobody can predict this reliably)?',
      'Our recommendation is always to assess the decision in the context of your specific circumstances rather than trying to time the market. If certainty is important and you plan to stay in the property, fixing makes sense. If flexibility matters and you have an offset account you intend to use actively, variable is often better value.',
    ],
  },
}

// Generate all known slugs statically
export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <>
        <Navbar />
        <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gray)' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="heading-1" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Article Not Found</h1>
            <Link href="/blogs" className="btn-primary">Back to Blog <ArrowRight size={16} /></Link>
          </div>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
        paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <Link href="/blogs" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Blog</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>{post.category}</span>
          </div>
          <div style={{ display: 'inline-block', background: 'var(--blue)', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '99px', marginBottom: '1.25rem' }}>{post.category}</div>
          <h1 className="heading-1" style={{ color: 'white', marginBottom: '1.25rem', maxWidth: 680 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '1.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} />{post.readTime}</span>
            <span>{post.date}</span>
            <span>Open Lending Team</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem', alignItems: 'start', maxWidth: 1100, margin: '0 auto' }}>

            {/* Article body */}
            <article>
              {/* Cover image placeholder */}
              <div style={{
                width: '100%', aspectRatio: '16/9',
                background: 'linear-gradient(135deg, var(--sky) 0%, #D6E4FF 100%)',
                borderRadius: '1rem', marginBottom: '2.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--blue)', opacity: 0.6
              }}>Article Image Placeholder</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {post.content.map((para, i) => (
                  <p key={i} style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.85 }}>{para}</p>
                ))}
              </div>

              {/* Bottom CTA */}
              <div style={{ background: 'var(--sky)', borderRadius: '1rem', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
                <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '0.75rem' }}>Ready to take the next step?</h3>
                <p className="body" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Book a free strategy call and get personalised advice for your situation.</p>
                <Link href="/contact" className="btn-primary">Book a Free Call <ArrowRight size={16} /></Link>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--blue)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                  <ArrowLeft size={16} /> Back to all articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem', fontSize: '0.95rem' }}>Speak to a Specialist</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>Have questions about your specific situation? Book a free call.</p>
                <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '0.75rem' }}>
                  Book Free Call <ArrowRight size={14} />
                </Link>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem', fontSize: '0.95rem' }}>Related Tools</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { label: 'Repayment Calculator', href: '/resources/repayment-calculator' },
                    { label: 'Borrowing Calculator', href: '/resources/loan-borrowing-calculator' },
                    { label: 'Stamp Duty Calculator', href: '/resources/stamp-duty-calculator' },
                  ].map(t => (
                    <Link key={t.label} href={t.href} style={{ fontSize: '0.85rem', color: 'var(--blue)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <ArrowRight size={13} /> {t.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
