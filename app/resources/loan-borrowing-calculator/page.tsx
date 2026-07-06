'use client'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronRight, ArrowRight, Plus, Minus } from 'lucide-react'

export default function BorrowingCalculatorPage() {
  const [income, setIncome] = useState(120000)
  const [partnerIncome, setPartnerIncome] = useState(0)
  const [includePartner, setIncludePartner] = useState(false)
  const [expenses, setExpenses] = useState(3000)
  const [existingDebt, setExistingDebt] = useState(0)
  const [creditCards, setCreditCards] = useState(0)
  const [dependants, setDependants] = useState(0)
  const [employmentType, setEmploymentType] = useState<'fulltime' | 'parttime' | 'casual' | 'selfemployed'>('fulltime')
  const [interestRate, setInterestRate] = useState(6.5)

  const results = useMemo(() => {
    const totalIncome = income + (includePartner ? partnerIncome : 0)
    const monthlyIncome = totalIncome / 12

    // Assessment rate buffer (lenders add ~3% to actual rate)
    const assessmentRate = (interestRate + 3) / 100 / 12
    const loanTerm = 30 * 12

    // Employment shading
    const incomeShading = employmentType === 'fulltime' ? 1 : employmentType === 'parttime' ? 0.9 : employmentType === 'casual' ? 0.8 : 0.8

    // Monthly living expenses (HEM-like estimate)
    const hemBase = 2000 + (dependants * 400)
    const monthlyLiving = Math.max(expenses, hemBase)

    // Existing debt commitments
    const monthlyDebt = existingDebt
    const creditCardCommitment = creditCards * 0.038 // 3.8% of limit per month

    const netMonthly = (monthlyIncome * incomeShading) - monthlyLiving - monthlyDebt - creditCardCommitment

    // Max repayment (up to 35% of gross income typically)
    const maxRepayment = Math.min(netMonthly * 0.85, monthlyIncome * 0.35)

    if (maxRepayment <= 0 || assessmentRate === 0) return { borrowing: 0, monthly: 0, conservative: 0, optimistic: 0 }

    const borrowing = maxRepayment * (Math.pow(1 + assessmentRate, loanTerm) - 1) / (assessmentRate * Math.pow(1 + assessmentRate, loanTerm))

    const monthlyRate = interestRate / 100 / 12
    const monthly = borrowing * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1)

    return {
      borrowing: Math.max(0, Math.round(borrowing / 10000) * 10000),
      monthly: Math.max(0, monthly),
      conservative: Math.max(0, Math.round(borrowing * 0.85 / 10000) * 10000),
      optimistic: Math.max(0, Math.round(borrowing * 1.1 / 10000) * 10000),
    }
  }, [income, partnerIncome, includePartner, expenses, existingDebt, creditCards, dependants, employmentType, interestRate])

  const fmt = (n: number) => n.toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  const fmtDec = (n: number) => n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const sliderStyle = { width: '100%', accentColor: 'var(--blue)' }
  const labelStyle = { fontWeight: 600 as const, fontSize: '0.9rem', color: 'var(--navy)' }

  return (
    <>
      <Navbar />

      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)', paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>Borrowing Power Calculator</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.25rem' }}>💰 Calculator</div>
          <h1 className="heading-1" style={{ color: 'white', marginBottom: '0.75rem' }}>Borrowing Power Calculator</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 520 }}>
            Estimate how much you may be able to borrow based on your income, expenses, and financial commitments.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Income */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '1.5rem', fontSize: '1rem' }}>Income</h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <label style={labelStyle}>Your Annual Income</label>
                    <span style={{ fontWeight: 700, color: 'var(--blue)' }}>${fmt(income)}</span>
                  </div>
                  <input type="range" min={30000} max={500000} step={5000} value={income} onChange={e => setIncome(Number(e.target.value))} style={sliderStyle} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
                    <span>$30K</span><span>$500K</span>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Employment Type</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                    {[['fulltime', 'Full-time'], ['parttime', 'Part-time'], ['casual', 'Casual'], ['selfemployed', 'Self-employed']].map(([v, l]) => (
                      <button key={v} onClick={() => setEmploymentType(v as typeof employmentType)}
                        style={{
                          padding: '0.5rem 0.875rem', borderRadius: '0.5rem', border: '2px solid',
                          borderColor: employmentType === v ? 'var(--blue)' : 'var(--border)',
                          background: employmentType === v ? 'var(--sky)' : 'white',
                          color: employmentType === v ? 'var(--blue)' : 'var(--muted)',
                          fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer'
                        }}>{l}</button>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: includePartner ? '1rem' : 0 }}>
                    <label style={labelStyle}>Include Partner's Income?</label>
                    <button onClick={() => setIncludePartner(!includePartner)}
                      style={{ width: 44, height: 24, borderRadius: 99, border: 'none', cursor: 'pointer', background: includePartner ? 'var(--blue)' : 'var(--border)', position: 'relative', transition: 'background 0.2s' }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'white', position: 'absolute', top: 3, left: includePartner ? 23 : 3, transition: 'left 0.2s' }} />
                    </button>
                  </div>
                  {includePartner && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                        <label style={{ ...labelStyle, fontWeight: 500, color: 'var(--muted)' }}>Partner Annual Income</label>
                        <span style={{ fontWeight: 700, color: 'var(--blue)' }}>${fmt(partnerIncome)}</span>
                      </div>
                      <input type="range" min={0} max={500000} step={5000} value={partnerIncome} onChange={e => setPartnerIncome(Number(e.target.value))} style={sliderStyle} />
                    </div>
                  )}
                </div>
              </div>

              {/* Expenses & Commitments */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '1.5rem', fontSize: '1rem' }}>Expenses & Commitments</h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <label style={labelStyle}>Monthly Living Expenses</label>
                    <span style={{ fontWeight: 700, color: 'var(--blue)' }}>${fmt(expenses)}/mo</span>
                  </div>
                  <input type="range" min={1000} max={15000} step={100} value={expenses} onChange={e => setExpenses(Number(e.target.value))} style={sliderStyle} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <label style={labelStyle}>Existing Loan Repayments</label>
                    <span style={{ fontWeight: 700, color: 'var(--blue)' }}>${fmt(existingDebt)}/mo</span>
                  </div>
                  <input type="range" min={0} max={5000} step={50} value={existingDebt} onChange={e => setExistingDebt(Number(e.target.value))} style={sliderStyle} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <label style={labelStyle}>Credit Card Limits</label>
                    <span style={{ fontWeight: 700, color: 'var(--blue)' }}>${fmt(creditCards)}</span>
                  </div>
                  <input type="range" min={0} max={50000} step={1000} value={creditCards} onChange={e => setCreditCards(Number(e.target.value))} style={sliderStyle} />
                </div>

                <div>
                  <label style={{ ...labelStyle, display: 'block', marginBottom: '0.75rem' }}>Dependants</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={() => setDependants(Math.max(0, dependants - 1))}
                      style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid var(--border)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Minus size={16} color="var(--navy)" />
                    </button>
                    <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--navy)', minWidth: 20, textAlign: 'center' }}>{dependants}</span>
                    <button onClick={() => setDependants(Math.min(6, dependants + 1))}
                      style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid var(--blue)', background: 'var(--sky)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Plus size={16} color="var(--blue)" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Rate */}
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <label style={labelStyle}>Interest Rate</label>
                  <span style={{ fontWeight: 700, color: 'var(--blue)' }}>{interestRate.toFixed(2)}% p.a.</span>
                </div>
                <input type="range" min={3} max={12} step={0.05} value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} style={sliderStyle} />
                <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.5rem' }}>Assessment rate used: {(interestRate + 3).toFixed(2)}% (includes 3% buffer)</p>
              </div>
            </div>

            {/* Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Estimated Borrowing Power</div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '2.75rem', letterSpacing: '-0.03em', lineHeight: 1 }}>${fmt(results.borrowing)}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: '0.5rem' }}>approximate maximum</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { label: 'Conservative', val: `$${fmt(results.conservative)}`, note: '85% estimate' },
                  { label: 'Optimistic', val: `$${fmt(results.optimistic)}`, note: 'strong application' },
                ].map(r => (
                  <div key={r.label} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '0.875rem', padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>{r.label}</div>
                    <div style={{ color: 'var(--navy)', fontWeight: 800, fontSize: '1.15rem' }}>{r.val}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: '0.2rem' }}>{r.note}</div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>Monthly Repayment Estimate</h3>
                {[
                  { label: 'Estimated Loan', val: `$${fmt(results.borrowing)}` },
                  { label: 'Interest Rate', val: `${interestRate.toFixed(2)}% p.a.` },
                  { label: 'Loan Term', val: '30 years' },
                  { label: 'Monthly Repayment', val: `$${fmtDec(results.monthly)}`, highlight: true },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{r.label}</span>
                    <span style={{ fontWeight: (r as any).highlight ? 800 : 600, color: (r as any).highlight ? 'var(--blue)' : 'var(--navy)', fontSize: (r as any).highlight ? '1.05rem' : '0.95rem' }}>{r.val}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: '#FFF7ED', border: '1px solid #FCD34D', borderRadius: '0.875rem', padding: '1rem 1.25rem' }}>
                <p style={{ color: '#92400E', fontSize: '0.85rem', fontWeight: 500 }}>
                  💡 These figures are estimates only. Your actual borrowing capacity depends on your full financial picture and the lender's policy. Book a call for an accurate assessment.
                </p>
              </div>

              <Link href="/#contact" className="btn-primary" style={{ justifyContent: 'center' }}>
                Get an Accurate Assessment <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '2rem', lineHeight: 1.6, maxWidth: 760 }}>
            * This calculator provides a general estimate only and does not constitute financial advice. Borrowing capacity is assessed differently by each lender and is subject to credit assessment, verification of income, and lender policy. Results assume a 30-year principal and interest loan.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h3 className="heading-3" style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>Other Calculators</h3>
          <div className="grid-2">
            {[
              { title: 'Repayment Calculator', desc: 'Estimate your monthly, fortnightly, and weekly repayments.', href: '/resources/repayment-calculator' },
              { title: 'Stamp Duty Calculator', desc: 'Calculate stamp duty costs for your property purchase.', href: '/resources/stamp-duty-calculator' },
            ].map(c => (
              <Link key={c.title} href={c.href} className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{c.title}</h4>
                <p className="body" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{c.desc}</p>
                <span style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Open Calculator <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

