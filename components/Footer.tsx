import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ padding: '4rem 2rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem' }}>
          <div>
            <div className="footer-brand">Open Mortgage</div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 280 }}>
              Your trusted partner for mortgage solutions in Sydney, Brisbane, and Hobart.
            </p>
          </div>
          <div>
            <div className="footer-heading">Services</div>
            {[
              ['Our Process', '/#process'],
              ['Home Loan', '/services/home-loan'],
              ['Car Loan', '/services/car-loan'],
              ['Commercial Loan', '/services/commercial-loan'],
            ].map(([l, h]) => (
              <Link key={l} href={h} className="footer-link">{l}</Link>
            ))}
          </div>
          <div>
            <div className="footer-heading">Resources</div>
            {[
              ['Repayment Calculator', '/resources/repayment-calculator'],
              ['Stamp Duty Calculator', '/resources/stamp-duty-calculator'],
              ['Borrowing Calculator', '/resources/loan-borrowing-calculator'],
            ].map(([l, h]) => (
              <Link key={l} href={h} className="footer-link">{l}</Link>
            ))}
          </div>
          <div>
            <div className="footer-heading">More</div>
            {[
              ['About Us', '/about'],
              ['Contact Us', '/contact'],
              ['FAQ', '/faq'],
              ['Blogs', '/blogs'],
            ].map(([l, h]) => (
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
  )
}
