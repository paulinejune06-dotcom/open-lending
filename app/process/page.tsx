import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Search, Users, FileText, Activity, CheckCircle, RefreshCw } from 'lucide-react'

export const metadata = { title: 'Our Process - Open Lending', description: 'A clear, structured six-step process from search to post-closing support.' }

const steps = [
  {
    number: '01',
    title: 'Search & Shortlist',
    icon: <Search size={28} />,
    content: 'At this stage, our team reviews blog posts, market updates, and resource content to track lending trends, rate movements, and product changes. We then filter and shortlist suitable loan directions based on your deposit position, repayment preferences, and risk profile. You receive a clear, curated set of options rather than having to compare everything yourself.',
    deliverable: 'Curated shortlist of loan options matched to your profile',
  },
  {
    number: '02',
    title: 'Expert Consultation',
    icon: <Users size={28} />,
    content: 'Book a one-on-one session with an experienced broker to review your income, liabilities, savings, and long-term goals in detail. We clarify borrowing capacity, likely approval conditions, and lender policy fit based on your scenario. You will leave this consultation with a clear strategy, required document checklist, and next-step timeline.',
    deliverable: 'Written strategy, document checklist, and next-step timeline',
  },
  {
    number: '03',
    title: 'Application',
    icon: <FileText size={28} />,
    content: 'Once you are ready, we help you complete and submit the application with a structured, credit-ready package. Our team reviews supporting documents for consistency, addresses potential assessment questions early, and prepares a strong submission narrative. This reduces back-and-forth and helps lenders assess your file more efficiently.',
    deliverable: 'Fully prepared, credit-ready application submitted to lender',
  },
  {
    number: '04',
    title: 'Tracking & Updating',
    icon: <Activity size={28} />,
    content: 'After submission, we actively monitor progress and manage communication with the lender, credit assessor, and any third parties involved. You receive regular status updates, clear explanations of outstanding requirements, and guidance on any additional documents. Our focus is to keep the process moving while minimizing uncertainty and delays.',
    deliverable: 'Regular status updates and active lender communication management',
  },
  {
    number: '05',
    title: 'Closing',
    icon: <CheckCircle size={28} />,
    content: 'When formal approval is issued, we coordinate the closing stage and walk you through key loan terms, repayment setup, and settlement requirements. We assist with document review and signing to ensure accuracy before funds are released. The goal is a smooth settlement experience with full clarity on your obligations from day one.',
    deliverable: 'Smooth settlement with full clarity on loan terms and obligations',
  },
  {
    number: '06',
    title: 'Post-Closing',
    icon: <RefreshCw size={28} />,
    content: 'Our support continues after settlement through regular loan health checks and strategic reviews as your circumstances change. We help you assess refinancing opportunities, equity release options, and structure adjustments when rates or goals shift. Where relevant, we also connect you with trusted partners for tax, accounting, and insurance coordination.',
    deliverable: 'Ongoing loan reviews, refinancing guidance, and trusted referrals',
  },
]

export default function ProcessPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1A0D2E 50%, #0D0D1A 100%)',
        paddingTop: 'calc(72px + 5rem)', paddingBottom: '5rem',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,53,201,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,53,201,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#9B55E9', fontSize: '0.85rem' }}>Our Process</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.5rem' }}>📋 How We Work</div>
          <h1 className="display" style={{ color: 'white', maxWidth: 700, marginBottom: '1.5rem' }}>
            A clear path from<br />
            <span style={{ color: '#9B55E9' }}>search to settlement</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 580, marginBottom: '2.5rem' }}>
            Six structured steps designed to remove uncertainty, reduce delays, and keep you informed at every stage of the lending journey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Book a Consultation <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-outline-white">Talk to a Broker</Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
            {[['6', 'Clear Steps'], ['500+', 'Loans Settled'], ['1 Day', 'Avg. Response Time']].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em' }}>{n}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="label">Step by Step</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Our Six-Step Process</h2>
            <p className="body-lg" style={{ maxWidth: 540, margin: '1rem auto 0' }}>
              Every step has a clear purpose, defined deliverable, and practical outcome for you.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, i) => (
              <div key={step.number} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              }}>
                {/* Content side */}
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: '14px',
                      background: 'linear-gradient(135deg, #7B35C9 0%, #9B55E9 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', flexShrink: 0,
                      boxShadow: '0 4px 16px rgba(123,53,201,0.3)'
                    }}>{step.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9B55E9', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Step {step.number}</div>
                      <h3 className="heading-2" style={{ color: 'var(--navy)', lineHeight: 1.2 }}>{step.title}</h3>
                    </div>
                  </div>
                  <p className="body-lg" style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>{step.content}</p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'var(--sky)', borderRadius: '0.75rem', padding: '1rem 1.25rem' }}>
                    <CheckCircle size={18} color="#7B35C9" style={{ flexShrink: 0, marginTop: 1 }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7B35C9', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>Deliverable</div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text)', fontWeight: 500 }}>{step.deliverable}</p>
                    </div>
                  </div>
                </div>

                {/* Visual side */}
                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <div style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg, #1A0D2E 0%, #2D1054 100%)'
                      : 'linear-gradient(135deg, #0D0D0D 0%, #1A0D2E 100%)',
                    borderRadius: '1.25rem',
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: 220,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                  }}>
                    {/* BG orb */}
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,53,201,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

                    {/* Step number large */}
                    <div style={{ fontSize: '5rem', fontWeight: 900, color: 'rgba(155,85,233,0.15)', lineHeight: 1, letterSpacing: '-0.04em', position: 'absolute', bottom: 16, right: 24 }}>
                      {step.number}
                    </div>

                    <div style={{ color: '#9B55E9', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                      {step.icon}
                    </div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#9B55E9' }} />
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Step {step.number} of 06</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1A0D2E 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>Ready to start the process?</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Book a free consultation and we will walk you through the first step together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Book Free Consultation <ArrowRight size={16} /></Link>
            <Link href="/services/home-loan" className="btn-outline-white">View Our Services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
