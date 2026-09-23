import { useState } from 'react';

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function IconTruck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
    </svg>
  );
}

function IconAward() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

function IconStar({ filled = false }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#c9a84c' : 'none'} stroke="#c9a84c" strokeWidth="1.5">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8311a" strokeWidth="2.5">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function IconCart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function IconZap() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
    </svg>
  );
}

function IconWind() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
    </svg>
  );
}

function IconBluetooth() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="6.5,6.5 17.5,17.5 12,23 12,1 17.5,6.5 6.5,17.5"/>
    </svg>
  );
}

function IconLayers() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/>
    </svg>
  );
}

function IconEye() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
}

function IconGitCompare() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>
    </svg>
  );
}

// ─── Stars Component ─────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => <IconStar key={i} filled={i <= Math.floor(rating)} />)}
    </div>
  );
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      backdropFilter: 'blur(20px)',
      background: 'rgba(10,10,11,0.92)',
    }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 36, height: 36,
              background: '#e8311a',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{ color: '#fff', fontSize: 14, fontFamily: 'Rajdhani', fontWeight: 700 }}>A</span>
            </div>
            <span style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 22, letterSpacing: '0.08em', color: '#f0efe8', textTransform: 'uppercase' }}>
              APEX<span style={{ color: '#e8311a' }}>MOTO</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="hidden-mobile">
            {['Helmets', 'Collections', 'Technology', 'Fit Guide', 'About'].map(item => (
              <button key={item} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 14,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#8a8a8f',
                display: 'flex', alignItems: 'center', gap: 4,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0efe8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8a8a8f')}>
                {item}
                {item === 'Helmets' && <IconChevronDown />}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8a8a8f' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0efe8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8a8a8f')}>
              <IconSearch />
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8a8a8f', position: 'relative' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0efe8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8a8a8f')}>
              <IconCart />
              <span style={{
                position: 'absolute', top: -6, right: -8,
                background: '#e8311a', color: '#fff', borderRadius: '50%',
                width: 16, height: 16, fontSize: 9, fontFamily: 'Rajdhani', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>3</span>
            </button>
            <button className="btn-primary hidden-mobile" style={{ padding: '10px 24px', fontSize: 12 }}>
              Shop Now
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#f0efe8' }} className="show-mobile">
              <IconMenu />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
            {['Helmets', 'Collections', 'Technology', 'Fit Guide', 'About'].map(item => (
              <div key={item} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 16, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#f0efe8' }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden', paddingTop: 72 }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1586423702505-b13505519074?w=1800&h=1000&fit=crop&auto=format)`,
        backgroundSize: 'cover', backgroundPosition: 'center 30%',
      }} />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0.75) 55%, rgba(10,10,11,0.3) 100%)',
      }} />
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Accent line left */}
      <div style={{ position: 'absolute', left: 0, top: '30%', bottom: '30%', width: 3, background: 'linear-gradient(180deg, transparent, #e8311a, transparent)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: '0 48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: 680 }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ width: 40, height: 2, background: '#e8311a' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8311a' }}>
              APEX PROTECTION SYSTEMS
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(52px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.01em', color: '#f0efe8', margin: '0 0 8px' }}>
            ENGINEERED
          </h1>
          <h1 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(52px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.01em', color: '#e8311a', margin: '0 0 8px' }}>
            TO PROTECT.
          </h1>
          <h1 style={{ fontFamily: 'Rajdhani', fontWeight: 400, fontSize: 'clamp(52px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.01em', color: 'rgba(240,239,232,0.5)', margin: '0 0 32px', fontStyle: 'italic' }}>
            BUILT TO LAST.
          </h1>

          {/* Subtext */}
          <p style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.65, color: 'rgba(240,239,232,0.7)', margin: '0 0 40px', maxWidth: 480, fontWeight: 300 }}>
            Race-grade protection engineered for every rider. ECE 22.06 certified helmets built from aerospace carbon fiber — where safety data meets rider instinct.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ fontSize: 14 }}>
              Shop Helmets
            </button>
            <button className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              Find Your Helmet <IconArrowRight />
            </button>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 32, marginTop: 52, flexWrap: 'wrap' }}>
            {[
              { icon: <IconShield />, label: 'ECE 22.06 Certified' },
              { icon: <IconTruck />, label: 'Free Shipping $149+' },
              { icon: <IconRefresh />, label: '60-Day Returns' },
              { icon: <IconAward />, label: '5-Year Warranty' },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#e8311a' }}>{icon}</span>
                <span style={{ fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(240,239,232,0.6)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats — bottom right */}
        <div style={{
          position: 'absolute', right: 48, bottom: 60,
          display: 'flex', gap: 48,
        }}>
          {[
            { value: '40K+', label: 'Riders Protected' },
            { value: '97%', label: 'Impact Absorption' },
            { value: '#1', label: 'Safety Rating' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 36, color: '#f0efe8', lineHeight: 1 }}>{value}</div>
              <div style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#5a5a60', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'Space Mono', fontSize: 9, letterSpacing: '0.2em', color: '#5a5a60', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(180deg, #5a5a60, transparent)' }} />
      </div>
    </section>
  );
}

// ─── Category Discovery ────────────────────────────────────────────────────────

const categories = [
  {
    name: 'Full Face',
    desc: 'Maximum protection for sport & track',
    img: 'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?w=500&h=640&fit=crop&auto=format',
    tag: 'Best Seller',
  },
  {
    name: 'Modular',
    desc: 'Versatile comfort for touring & commuting',
    img: 'https://images.unsplash.com/photo-1779280555329-b0ef1688a8ef?w=500&h=640&fit=crop&auto=format',
    tag: 'Most Popular',
  },
  {
    name: 'Adventure',
    desc: 'Dual-purpose built for the long haul',
    img: 'https://images.unsplash.com/photo-1575312363468-c8455fb38a76?w=500&h=640&fit=crop&auto=format',
    tag: 'New Collection',
  },
  {
    name: 'Racing',
    desc: 'FIM homologated track-day performance',
    img: 'https://images.unsplash.com/photo-1543134471-52488faa85af?w=500&h=640&fit=crop&auto=format',
    tag: 'Pro Series',
  },
  {
    name: 'Open Face',
    desc: 'Urban style with city-grade protection',
    img: 'https://images.unsplash.com/photo-1715498780900-61b73ac29b6a?w=500&h=640&fit=crop&auto=format',
    tag: 'Urban Collection',
  },
];

function CategoryCard({ cat, featured = false }: { cat: typeof categories[0]; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        cursor: 'pointer',
        height: featured ? 520 : 420,
        background: '#111114',
      }}
    >
      <img
        src={cat.img}
        alt={cat.name}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.5s ease, filter 0.3s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          filter: hovered ? 'brightness(0.6)' : 'brightness(0.4)',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 30%, rgba(10,10,11,0.9) 100%)',
      }} />

      {/* Tag */}
      <div style={{
        position: 'absolute', top: 20, left: 20,
        background: '#e8311a', color: '#fff',
        fontFamily: 'Space Mono', fontSize: 9, letterSpacing: '0.15em',
        textTransform: 'uppercase', padding: '5px 10px',
      }}>
        {cat.tag}
      </div>

      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28 }}>
        <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: featured ? 32 : 26, color: '#f0efe8', letterSpacing: '0.03em', textTransform: 'uppercase', lineHeight: 1 }}>
          {cat.name}
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'rgba(240,239,232,0.55)', marginTop: 6, fontWeight: 300 }}>{cat.desc}</div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, marginTop: 16,
          opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}>
          <span style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e8311a' }}>Shop {cat.name}</span>
          <IconArrowRight />
        </div>
      </div>

      {/* Hover accent */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
        background: '#e8311a',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.35s ease',
      }} />
    </div>
  );
}

function CategorySection() {
  return (
    <section style={{ background: '#0a0a0b', padding: '100px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 2, background: '#e8311a' }} />
              <span style={{ fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8311a' }}>Helmet Systems</span>
            </div>
            <h2 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.01em', color: '#f0efe8', margin: 0, textTransform: 'uppercase', lineHeight: 0.95 }}>
              FIND YOUR<br />
              <span style={{ color: 'rgba(240,239,232,0.3)', fontWeight: 400, fontStyle: 'italic' }}>PERFECT FIT</span>
            </h2>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a8a8f' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0efe8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8a8a8f')}>
            All Categories <IconArrowRight />
          </button>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: 3 }}>
          <div style={{ gridRow: '1 / 3' }}>
            <CategoryCard cat={categories[0]} featured />
          </div>
          <CategoryCard cat={categories[1]} />
          <CategoryCard cat={categories[2]} />
          <CategoryCard cat={categories[3]} />
          <CategoryCard cat={categories[4]} />
        </div>
      </div>
    </section>
  );
}

// ─── Featured Products ─────────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: 'Apex RS-1 Carbon',
    price: 849,
    originalPrice: 999,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?w=600&h=500&fit=crop&auto=format',
    cert: 'ECE 22.06',
    tags: ['Carbon Fiber', 'Lightweight', 'Anti-Fog'],
    weight: '1,190g',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Apex Pro Modular X',
    price: 649,
    originalPrice: null,
    rating: 4.8,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1787852984663-21e38ad3f247?w=600&h=500&fit=crop&auto=format',
    cert: 'ECE 22.06',
    tags: ['Bluetooth Ready', 'Anti-Fog', 'Ventilated'],
    weight: '1,420g',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Apex Touring ADV',
    price: 549,
    originalPrice: null,
    rating: 4.7,
    reviews: 241,
    image: 'https://images.unsplash.com/photo-1623343195365-0924fa1ac09b?w=600&h=500&fit=crop&auto=format',
    cert: 'ECE + DOT',
    tags: ['Adventure', 'Peak Shield', 'Anti-Fog'],
    weight: '1,580g',
    badge: null,
  },
  {
    id: 4,
    name: 'Apex Race GP-S',
    price: 1199,
    originalPrice: 1399,
    rating: 5.0,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1635698073891-63d97c116262?w=600&h=500&fit=crop&auto=format',
    cert: 'FIM + ECE',
    tags: ['Carbon Fiber', 'Race Spec', 'Aero Wing'],
    weight: '1,050g',
    badge: 'Pro Series',
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111114',
        border: `1px solid ${hovered ? 'rgba(232,49,26,0.25)' : 'rgba(255,255,255,0.06)'}`,
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        boxShadow: hovered ? '0 0 40px rgba(232,49,26,0.08)' : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: 280, background: '#0d0d10' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />

        {product.badge && (
          <div style={{
            position: 'absolute', top: 16, left: 0,
            background: product.badge === 'New' ? '#c9a84c' : '#e8311a',
            color: '#fff', fontFamily: 'Space Mono', fontSize: 9, letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '5px 12px',
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
          }}>
            {product.badge}
          </div>
        )}

        {/* Quick actions overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,10,11,0.7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}>
          <button style={{
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#f0efe8', padding: '10px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            <IconGitCompare /> Compare
          </button>
          <button style={{
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#f0efe8', padding: '10px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            <IconEye /> Details
          </button>
        </div>

        {/* Cert badge */}
        <div style={{
          position: 'absolute', bottom: 12, right: 12,
          background: 'rgba(10,10,11,0.85)', border: '1px solid rgba(232,49,26,0.4)',
          padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <IconShield />
          <span style={{ fontFamily: 'Space Mono', fontSize: 9, color: '#e8311a', letterSpacing: '0.1em' }}>{product.cert}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Stars rating={product.rating} />
          <span style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#5a5a60' }}>({product.reviews})</span>
        </div>

        {/* Name */}
        <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 20, color: '#f0efe8', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: 4 }}>
          {product.name}
        </div>

        {/* Weight */}
        <div style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#5a5a60', letterSpacing: '0.1em', marginBottom: 14 }}>
          WEIGHT: {product.weight}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          {product.tags.map(tag => (
            <span key={tag} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#8a8a8f', fontFamily: 'Space Mono', fontSize: 9,
              letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 8px',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <div>
            <span style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 26, color: '#f0efe8' }}>
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span style={{ fontFamily: 'Inter', fontSize: 13, color: '#5a5a60', textDecoration: 'line-through', marginLeft: 8 }}>
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6, background: added ? '#1a7a3a' : '#e8311a' }}
          >
            {added ? '✓ Added' : <><IconPlus /> Add to Cart</>}
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  return (
    <section style={{ background: '#0d0d10', padding: '100px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 2, background: '#e8311a' }} />
              <span style={{ fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8311a' }}>Top Performers</span>
            </div>
            <h2 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.01em', color: '#f0efe8', margin: 0, textTransform: 'uppercase', lineHeight: 0.95 }}>
              FEATURED<br />
              <span style={{ color: 'rgba(240,239,232,0.3)', fontWeight: 400, fontStyle: 'italic' }}>HELMETS</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['All', 'Full Face', 'Modular', 'Racing'].map((f, i) => (
              <button key={f} style={{
                background: i === 0 ? '#e8311a' : 'transparent',
                border: `1px solid ${i === 0 ? '#e8311a' : 'rgba(255,255,255,0.12)'}`,
                color: i === 0 ? '#fff' : '#8a8a8f',
                fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '8px 18px', cursor: 'pointer',
              }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Load more */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <button className="btn-ghost" style={{ padding: '16px 48px' }}>
            View All 47 Helmets
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Comparison Section ────────────────────────────────────────────────────────

const compareData = [
  { label: 'Safety Rating', rs1: '★★★★★', proX: '★★★★★', adv: '★★★★☆' },
  { label: 'Shell Material', rs1: 'Carbon Fiber', proX: 'Fiberglass', adv: 'Polycarbonate' },
  { label: 'Weight', rs1: '1,190g', proX: '1,420g', adv: '1,580g' },
  { label: 'Ventilation Ports', rs1: '8 ports', proX: '6 ports', adv: '10 ports' },
  { label: 'Visor Type', rs1: 'Pinlock 120 EVO', proX: 'Pinlock 70 EVO', adv: 'Dual Pane' },
  { label: 'Bluetooth', rs1: 'Optional', proX: 'Built-in', adv: 'Optional' },
  { label: 'Best For', rs1: 'Sport/Track', proX: 'Touring/Daily', adv: 'Adventure' },
  { label: 'Price', rs1: '$849', proX: '$649', adv: '$549' },
];

function ComparisonSection() {
  return (
    <section style={{ background: '#0a0a0b', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 2, background: '#e8311a' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8311a' }}>Spec Comparison</span>
            <div style={{ width: 40, height: 2, background: '#e8311a' }} />
          </div>
          <h2 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)', color: '#f0efe8', margin: 0, textTransform: 'uppercase', lineHeight: 0.95 }}>
            COMPARE<br />
            <span style={{ color: 'rgba(240,239,232,0.3)', fontWeight: 400, fontStyle: 'italic' }}>HELMETS SIDE BY SIDE</span>
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: 16, color: 'rgba(240,239,232,0.5)', marginTop: 20, fontWeight: 300 }}>
            Cut through the noise. Every spec that matters — no fluff.
          </p>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
            <thead>
              <tr>
                <th style={{ width: '25%', padding: '20px 24px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#5a5a60', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Specification</span>
                </th>
                {['Apex RS-1 Carbon', 'Apex Pro Modular X', 'Apex Touring ADV'].map((name, i) => (
                  <th key={name} style={{ width: '25%', padding: '20px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', background: i === 0 ? 'rgba(232,49,26,0.04)' : 'transparent' }}>
                    {i === 0 && <div style={{ fontFamily: 'Space Mono', fontSize: 9, color: '#e8311a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>★ Top Pick</div>}
                    <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 16, color: '#f0efe8', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, idx) => (
                <tr key={row.label} style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ fontFamily: 'Inter', fontSize: 13, color: '#8a8a8f', fontWeight: 500 }}>{row.label}</span>
                  </td>
                  {[row.rs1, row.proX, row.adv].map((val, i) => (
                    <td key={i} style={{ padding: '16px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)', background: i === 0 ? 'rgba(232,49,26,0.03)' : 'transparent' }}>
                      <span style={{ fontFamily: row.label === 'Price' ? 'Rajdhani' : 'Inter', fontWeight: row.label === 'Price' ? 700 : 400, fontSize: row.label === 'Price' ? 18 : 13, color: i === 0 ? '#f0efe8' : '#8a8a8f' }}>
                        {val}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA row */}
        <div style={{ display: 'grid', gridTemplateColumns: '25% 1fr 1fr 1fr', marginTop: 32 }}>
          <div />
          {['Buy RS-1 Carbon — $849', 'Buy Pro Modular — $649', 'Buy Touring ADV — $549'].map((label, i) => (
            <div key={label} style={{ padding: '0 24px', textAlign: 'center' }}>
              <button
                className={i === 0 ? 'btn-primary' : 'btn-ghost'}
                style={{ width: '100%', padding: '14px 16px', fontSize: 12 }}
              >
                {label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust Section ─────────────────────────────────────────────────────────────

const trustItems = [
  {
    icon: <IconShield />,
    title: 'Race-Grade Safety',
    body: 'Every shell is tested beyond ECE 22.06 minimums at our in-house impact lab. We don\'t stop at certified — we exceed it.',
  },
  {
    icon: <IconLayers />,
    title: 'Aerospace Materials',
    body: '12K carbon fiber weave sourced from aerospace suppliers. The same material found in Formula 1 monocoques.',
  },
  {
    icon: <IconZap />,
    title: 'Rider-Engineered',
    body: 'Our product team includes MotoGP pit crew and long-haul touring riders. Real-world input at every design stage.',
  },
  {
    icon: <IconWind />,
    title: 'Precision Ventilation',
    body: 'Fluid-dynamics-modeled airflow ports. Pressure-tested in our wind tunnel to optimize temperature at 100mph.',
  },
  {
    icon: <IconAward />,
    title: '5-Year Warranty',
    body: 'We stand behind every helmet. Impact, liner compression, visor mechanisms — covered. No questions asked.',
  },
  {
    icon: <IconBluetooth />,
    title: 'Smart Integration',
    body: 'Designed from the ground up for intercom and Bluetooth audio. No hacks, no adapters, no rattles.',
  },
];

function TrustSection() {
  return (
    <section style={{ background: '#111114', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        {/* Split header + intro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 72, alignItems: 'end' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 2, background: '#e8311a' }} />
              <span style={{ fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8311a' }}>Our Standards</span>
            </div>
            <h2 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)', color: '#f0efe8', margin: 0, textTransform: 'uppercase', lineHeight: 0.95 }}>
              WHY APEX<br />
              <span style={{ color: 'rgba(240,239,232,0.3)', fontWeight: 400, fontStyle: 'italic' }}>IS DIFFERENT</span>
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.7, color: 'rgba(240,239,232,0.55)', margin: 0, fontWeight: 300 }}>
              We're not a fashion brand that happens to sell helmets. We're engineers and riders who build protection systems — and the design follows function, not the other way around.
            </p>
            <div style={{ display: 'flex', gap: 48, marginTop: 32 }}>
              {[['2009', 'Founded'], ['40K+', 'Riders'], ['0', 'ECE Failures']].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 32, color: '#f0efe8', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#5a5a60', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
          {trustItems.map(({ icon, title, body }) => (
            <div key={title} style={{
              background: '#0d0d10', padding: '36px 32px',
              border: '1px solid rgba(255,255,255,0.04)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,49,26,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)')}>
              <div style={{ color: '#e8311a', marginBottom: 20 }}>{icon}</div>
              <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 18, color: '#f0efe8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>{title}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 13, lineHeight: 1.65, color: '#5a5a60', fontWeight: 300 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Marcus T.',
    role: 'Track Day Racer, CA',
    rating: 5,
    quote: 'Crashed at 85mph in a corner at Laguna Seca. Walked away. The RS-1 Carbon absorbed everything — my head didn\'t even bounce. I\'ll never ride in anything else.',
    helmet: 'Apex RS-1 Carbon',
    img: 'https://images.unsplash.com/photo-1586423702505-b13505519074?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Reinhilde K.',
    role: 'Adventure Tourer, TX',
    rating: 5,
    quote: 'Rode from Austin to Patagonia wearing the ADV. 6,800 miles over 47 days. Zero pressure points, zero fog issues, zero regrets. The ventilation is genuinely exceptional.',
    helmet: 'Apex Touring ADV',
    img: 'https://images.unsplash.com/photo-1715498780900-61b73ac29b6a?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Devon S.',
    role: 'Daily Commuter, NYC',
    rating: 5,
    quote: 'Wore a cheaper helmet for years and thought that was just "how it is." The Pro Modular changed my understanding of what comfort even means on a bike.',
    helmet: 'Apex Pro Modular X',
    img: 'https://images.unsplash.com/photo-1787852984663-21e38ad3f247?w=80&h=80&fit=crop&auto=format',
  },
];

function SocialProofSection() {
  return (
    <section style={{ background: '#0a0a0b', padding: '100px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 40, height: 2, background: '#e8311a' }} />
          <span style={{ fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8311a' }}>Rider Stories</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start', marginBottom: 64 }}>
          <h2 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)', color: '#f0efe8', margin: 0, textTransform: 'uppercase', lineHeight: 0.95 }}>
            TRUSTED<br />
            <span style={{ color: 'rgba(240,239,232,0.3)', fontWeight: 400, fontStyle: 'italic' }}>BY RIDERS</span>
          </h2>
          <div style={{ display: 'flex', gap: 60, paddingTop: 8 }}>
            {[['4.9/5', '3,400+ Reviews'], ['98%', 'Would Recommend'], ['47', 'Countries Shipped']].map(([val, lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 40, color: '#f0efe8', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#5a5a60', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ background: '#111114', padding: '36px 32px', border: '1px solid rgba(255,255,255,0.04)', display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Stars */}
              <Stars rating={t.rating} />

              {/* Quote mark */}
              <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 80, color: 'rgba(232,49,26,0.12)', lineHeight: 0.6, marginTop: -16 }}>"</div>

              {/* Quote */}
              <p style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.7, color: 'rgba(240,239,232,0.7)', margin: 0, fontWeight: 300, marginTop: -24 }}>
                {t.quote}
              </p>

              {/* Helmet tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 3, height: 3, background: '#e8311a', borderRadius: '50%' }} />
                <span style={{ fontFamily: 'Space Mono', fontSize: 9, color: '#e8311a', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t.helmet}</span>
              </div>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto' }}>
                <img src={t.img} alt={t.name} style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: '50%', border: '2px solid rgba(232,49,26,0.3)' }} />
                <div>
                  <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 15, color: '#f0efe8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.name}</div>
                  <div style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#5a5a60', marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifestyle photo strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, marginTop: 3 }}>
          {[
            'https://images.unsplash.com/photo-1629294148914-678ba902dd49?w=400&h=280&fit=crop&auto=format',
            'https://images.unsplash.com/photo-1550149550-33b46c745e03?w=400&h=280&fit=crop&auto=format',
            'https://images.unsplash.com/photo-1666907418714-1b5f85aaf146?w=400&h=280&fit=crop&auto=format',
            'https://images.unsplash.com/photo-1640703651198-d8de0ef8e093?w=400&h=280&fit=crop&auto=format',
          ].map((url, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden', height: 180, cursor: 'pointer', background: '#111114' }}
              onMouseEnter={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.07)'; (e.currentTarget.querySelector('.overlay') as HTMLElement).style.opacity = '1'; }}
              onMouseLeave={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget.querySelector('.overlay') as HTMLElement).style.opacity = '0'; }}>
              <img src={url} alt="Rider" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', filter: 'brightness(0.6)' }} />
              <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(232,49,26,0.15)', opacity: 0, transition: 'opacity 0.25s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#fff', letterSpacing: '0.15em', textTransform: 'uppercase' }}>@apexmoto</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Educational Content ──────────────────────────────────────────────────────

const articles = [
  {
    tag: 'Buying Guide',
    title: 'How to Choose the Right Helmet for Your Riding Style',
    excerpt: 'The right helmet depends on three factors: how you ride, how far you ride, and how much you ride. Our complete guide breaks it down.',
    img: 'https://images.unsplash.com/photo-1787852984663-21e38ad3f247?w=600&h=400&fit=crop&auto=format',
    readTime: '8 min read',
  },
  {
    tag: 'Safety Deep Dive',
    title: 'ECE 22.06 vs. DOT vs. SNELL — What the Certifications Actually Mean',
    excerpt: 'Not all safety certifications are equal. Here\'s what each standard tests and why it matters for your head.',
    img: 'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?w=600&h=400&fit=crop&auto=format',
    readTime: '12 min read',
  },
  {
    tag: 'Helmet Comparison',
    title: 'Full Face vs. Modular: The Definitive Breakdown',
    excerpt: 'Both protect your skull. But which protects your sanity? We test both through 10,000 miles of real-world riding.',
    img: 'https://images.unsplash.com/photo-1586423702505-b13505519074?w=600&h=400&fit=crop&auto=format',
    readTime: '6 min read',
  },
];

function ContentSection() {
  return (
    <section style={{ background: '#111114', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 2, background: '#e8311a' }} />
              <span style={{ fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8311a' }}>Rider Resources</span>
            </div>
            <h2 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)', color: '#f0efe8', margin: 0, textTransform: 'uppercase', lineHeight: 0.95 }}>
              MAKE A BETTER<br />
              <span style={{ color: 'rgba(240,239,232,0.3)', fontWeight: 400, fontStyle: 'italic' }}>DECISION</span>
            </h2>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a8a8f' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0efe8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8a8a8f')}>
            View All Guides <IconArrowRight />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 3 }}>
          {articles.map((a, i) => (
            <div key={a.title}
              className="card-hover"
              style={{ background: '#0d0d10', border: '1px solid rgba(255,255,255,0.04)', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)')}>
              <div style={{ height: i === 0 ? 300 : 200, overflow: 'hidden', background: '#111114' }}>
                <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
              <div style={{ padding: i === 0 ? '28px 32px 32px' : '22px 24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontFamily: 'Space Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e8311a' }}>{a.tag}</span>
                  <span style={{ fontFamily: 'Space Mono', fontSize: 9, color: '#5a5a60' }}>·</span>
                  <span style={{ fontFamily: 'Space Mono', fontSize: 9, color: '#5a5a60' }}>{a.readTime}</span>
                </div>
                <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: i === 0 ? 22 : 16, color: '#f0efe8', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.2, marginBottom: 12 }}>{a.title}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#5a5a60', lineHeight: 1.6, fontWeight: 300 }}>{a.excerpt}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20, color: '#e8311a' }}>
                  <span style={{ fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Read Guide</span>
                  <IconArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 0', background: '#0a0a0b' }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1543134471-52488faa85af?w=1800&h=700&fit=crop&auto=format)`,
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
        filter: 'brightness(0.2)',
      }} />
      {/* Red vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(232,49,26,0.12) 0%, rgba(10,10,11,0.6) 70%)',
      }} />
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ width: 40, height: 2, background: '#e8311a' }} />
          <span style={{ fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e8311a' }}>Your Next Ride Awaits</span>
          <div style={{ width: 40, height: 2, background: '#e8311a' }} />
        </div>

        <h2 style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 'clamp(48px, 7vw, 96px)', color: '#f0efe8', margin: '0 0 8px', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.01em' }}>
          FIND THE HELMET
        </h2>
        <h2 style={{ fontFamily: 'Rajdhani', fontWeight: 400, fontSize: 'clamp(48px, 7vw, 96px)', color: 'rgba(240,239,232,0.3)', margin: '0 0 32px', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.01em', fontStyle: 'italic' }}>
          BUILT FOR YOUR RIDE
        </h2>

        <p style={{ fontFamily: 'Inter', fontSize: 18, color: 'rgba(240,239,232,0.6)', marginBottom: 48, fontWeight: 300, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
          47 helmets. Every riding style. Free shipping on orders over $149.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" style={{ fontSize: 15, padding: '18px 48px' }}>
            Shop All Helmets
          </button>
          <button className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, padding: '18px 40px' }}>
            Take the Fit Quiz <IconArrowRight />
          </button>
        </div>

        {/* Trust row */}
        <div style={{ display: 'flex', gap: 48, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}>
          {[
            { icon: <IconCheck />, label: 'ECE 22.06 Certified' },
            { icon: <IconCheck />, label: 'Free Returns Within 60 Days' },
            { icon: <IconCheck />, label: 'Ships in 24 Hours' },
            { icon: <IconCheck />, label: '5-Year Warranty' },
          ].map(({ icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {icon}
              <span style={{ fontFamily: 'Rajdhani', fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(240,239,232,0.5)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: '#07070a', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '72px 0 40px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 64, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, background: '#e8311a', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700 }}>A</span>
              </div>
              <span style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 20, letterSpacing: '0.08em', color: '#f0efe8', textTransform: 'uppercase' }}>APEX<span style={{ color: '#e8311a' }}>MOTO</span></span>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 13, lineHeight: 1.7, color: '#5a5a60', fontWeight: 300, maxWidth: 280, margin: '0 0 24px' }}>
              Professional-grade motorcycle helmets engineered for every rider. ECE 22.06 certified. Built to last. Ready for your next ride.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['IG', 'YT', 'TW', 'FB'].map(s => (
                <div key={s} style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#e8311a')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}>
                  <span style={{ fontFamily: 'Space Mono', fontSize: 9, color: '#8a8a8f' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columns */}
          {[
            { title: 'Shop', links: ['Full Face Helmets', 'Modular Helmets', 'Adventure Helmets', 'Racing Helmets', 'Open Face Helmets', 'Accessories'] },
            { title: 'Support', links: ['Size & Fit Guide', 'Helmet Care', 'Warranty Claims', 'Contact Us', 'Returns', 'FAQ'] },
            { title: 'Company', links: ['About Apex', 'Technology', 'Rider Stories', 'Press', 'Careers', 'Dealers'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 14, color: '#f0efe8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ fontFamily: 'Inter', fontSize: 13, color: '#5a5a60', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#f0efe8')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5a5a60')}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#3a3a40', letterSpacing: '0.1em' }}>© 2024 APEXMOTO INC. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(link => (
              <a key={link} href="#" style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#3a3a40', textDecoration: 'none', letterSpacing: '0.08em' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#8a8a8f')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3a3a40')}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0b' }}>
      <Nav />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <ComparisonSection />
      <TrustSection />
      <SocialProofSection />
      <ContentSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
