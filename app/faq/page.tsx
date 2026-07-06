'use client'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-react'

const categories = [
  {
    label: 'Home Loans',
    icon: '🏠',
    faqs: [
      { q: 'How much deposit do I need to buy a home?', a: 'Most lenders require a minimum 5�?0% deposit. With less than 20%, you will typically need to pay Lenders Mortgage Insurance (LMI). A guarantor arrangement can sometimes help you purchase with a smaller deposit while avoiding LMI.' },
      { q: 'What is the difference between fixed and variable rates?', a: 'A fixed rate locks in your interest rate for a set period (usually 1�? years), giving you repayment certainty. A variable rate moves with the market, offering more flexibility (like offset accounts and extra repayments) but less predictability. Many clients choose a split loan to balance both.' },
      { q: 'What is an offset account?', a: 'An offset account is a transaction account linked to your home loan. The balance in the offset reduces the loan balance on which interest is calculated. For example, a $500,000 loan with $50,000 in offset means you only pay interest on $450,000.' },
      { q: 'How long does home loan approval take?', a: 'Conditional approval can come within 24�?8 hours for straightforward applications. Full approval typically takes 3�? business days once all documents are submitted. Complex situations or tight timelines �?always let us know upfront so we can manage the process accordingly.' },
      { q: 'Can I get a home loan if I am self-employed?', a: 'Yes. Self-employed borrowers typically need 2 years of tax returns and financial statements. Some lenders offer low-doc loans requiring less documentation, though these usually come with slightly higher rates. We work with lenders experienced in self-employed applications.' },
      { q: 'What is LMI and can I avoid it?', a: 'Lenders Mortgage Insurance protects the lender (not you) if you default on a loan with less than 20% deposit. You can avoid it by saving a 20% deposit, using a guarantor, or qualifying for a first home buyer LMI waiver scheme.' },
    ],
  },
  {
    label: 'Refinancing',
    icon: '🔄',
    faqs: [
      { q: 'When should I consider refinancing?', a: 'Good triggers to review your loan include: your fixed rate period ending, rates moving significantly, your property value increasing (improving your LVR), or a change in your financial situation. We recommend a loan review every 2�? years as a baseline.' },
      { q: 'How much can I save by refinancing?', a: 'Savings depend on your current rate, loan balance, and what you can access. Even a 0.5% rate reduction on a $500,000 loan saves around $2,500 per year. We run a full comparison including exit fees and new loan costs before recommending a switch.' },
      { q: 'Are there costs involved in refinancing?', a: 'Potentially yes �?discharge fees from your existing lender, government fees, and new lender application fees. We calculate the break-even point so you can see how long it takes for savings to outweigh costs. In many cases, lenders offer cashback offers that offset these costs.' },
      { q: 'Can I access equity when I refinance?', a: 'Yes. If your property has increased in value, refinancing can let you access that equity for renovations, investment, or other purposes, subject to serviceability and LVR limits.' },
    ],
  },
  {
    label: 'Car Loans',
    icon: '🚗',
    faqs: [
      { q: 'Can I get pre-approved before visiting a dealership?', a: 'Yes, and we strongly recommend it. Pre-approval lets you know your budget and gives you negotiating power at the dealership. We can have a pre-approval letter ready within hours for most applicants.' },
      { q: 'What is the difference between a chattel mortgage and a car lease?', a: 'A chattel mortgage means you own the vehicle from day one and use it as security for the loan �?popular for business use. A lease means the lender owns the vehicle and you make fixed payments, with an option to purchase at the end. Each has different tax implications.' },
      { q: 'Can I finance a private sale vehicle?', a: 'Yes, many lenders finance private sale purchases, subject to the vehicle\'s age and condition. There are usually restrictions on vehicles over 10 years old. We will clarify applicable lender policies for your specific vehicle.' },
    ],
  },
  {
    label: 'Commercial Lending',
    icon: '🏢',
    faqs: [
      { q: 'What LVR can I borrow to for commercial property?', a: 'Most lenders will lend up to 65�?0% LVR for commercial property. Some specialist lenders may go higher with additional security, a strong borrower profile, or in certain property types. Residential security can sometimes supplement commercial deals.' },
      { q: 'Do I need two years of financial statements?', a: 'Generally yes for standard commercial loans. However, there are low-doc and alt-doc options for established businesses with demonstrable cash flow. We assess the full picture to find the right fit.' },
      { q: 'How long does commercial loan approval take?', a: 'Commercial deals typically take 2�? weeks from full submission to approval. Complex structures, development finance, or specialist lender deals may take longer. We set realistic timelines upfront and manage the process throughout.' },
    ],
  },
  {
    label: 'The Process',
    icon: '📋',
    faqs: [
      { q: 'What documents do I need to apply?', a: 'Typically: last 2 payslips (or 2 years tax returns if self-employed), last 3 months bank statements, photo ID, and a signed contract of sale or property address. We give you a tailored document checklist once we understand your situation.' },
      { q: 'Do you charge a fee for your service?', a: 'Our service is free for most residential clients. We are paid a commission by the lender when your loan settles. We disclose all commissions transparently. For some complex commercial or specialist situations, a broker fee may apply �?this is always agreed upfront.' },
      { q: 'Can you help if I have bad credit?', a: 'Yes. We work with specialist lenders who assess applications beyond just credit scores. Depending on your situation �?defaults, bankruptcy, or missed payments �?there may be suitable options available. We assess honestly and will tell you if the timing is not right.' },
      { q: 'Do I need to visit an office?', a: 'No. We work with clients Australia-wide via phone and video. In-person meetings are available at our Sydney, Brisbane, and Hobart offices if you prefer.' },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem'
      }}>
        <span style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem', lineHeight: 1.5 }}>{q}</span>
        <ChevronDown size={18} color="var(--blue)" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>
      {open && (
        <div style={{ paddingBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0)

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
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>FAQ</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.25rem' }}>�?FAQ</div>
          <h1 className="heading-1" style={{ color: 'white', marginBottom: '0.75rem' }}>Frequently Asked Questions</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.75 }}>
            Answers to the most common questions about home loans, refinancing, car loans, and commercial lending.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '3rem', alignItems: 'start' }}>

            {/* Category sidebar */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', paddingLeft: '0.5rem' }}>Categories</div>
                {categories.map((c, i) => (
                  <button key={c.label} onClick={() => setActiveCategory(i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.75rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textAlign: 'left',
                      background: activeCategory === i ? 'var(--sky)' : 'transparent',
                      color: activeCategory === i ? 'var(--blue)' : 'var(--muted)',
                      fontWeight: activeCategory === i ? 700 : 500, fontSize: '0.875rem',
                      marginBottom: '0.25rem'
                    }}>
                    <span>{c.icon}</span>
                    <span>{c.label}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.6 }}>{c.faqs.length}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ list */}
            <div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{categories[activeCategory].icon}</span>
                  <h2 className="heading-2" style={{ color: 'var(--navy)' }}>{categories[activeCategory].label}</h2>
                </div>
                {categories[activeCategory].faqs.map(f => (
                  <FAQItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>

              {/* Still have questions */}
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1rem', padding: '2rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Still have questions?</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>Book a free call and we will answer your specific questions.</p>
                </div>
                <Link href="/contact" className="btn-primary">
                  Talk to a Specialist <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

