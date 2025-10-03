import React from 'react';
import { HeartHandshake, ExternalLink, Instagram, Facebook } from 'lucide-react';

const ORG = {
  name: 'Peninsula Disc Golf Club (PDGC)',
  tagline: 'Connecting People Through Disc Golf',
  blurb: 'Help Us Grow the Long Beach Dunes Disc Golf Course! Since 2023, the Peninsula Disc Golf Club has transformed empty dunes into a thriving 11-hole community disc golf course. With over 1,000 volunteer hours and strong local support, we’ve built tee pads, baskets, and signage — and welcomed 700+ unique players from across the Northwest.',
  logos: {
    light: '/images/logo-color.png',
    dark: '/images/logo-dark.png',
  },
  heroImg: '/images/hero.jpg',
  primaryCTA: {
    text: 'Donate',
    href: 'https://www.paypal.com/donate/?hosted_button_id=NFN35LVULXANN',
  },
  secondaryCTA: {
    text: 'Become a Sponsor',
    href: '#sponsorships',
  },
  qrDataUrl: '/images/paypal-qr.png',
  contact: {
    email: 'info@peninsuladiscgolfclub.org',
    address: 'Long Beach, WA',
    socials: [
      { name: 'Instagram', href: 'https://instagram.com/longbeachdunesdiscgolf', icon: Instagram },
      { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100087858846267', icon: Facebook },
    ],
  },
};

export default function PDGCWebsite() {
  return (
    <div>
      <header style={{ position: 'relative', height: '60vh', color: 'white' }}>
        <img src={ORG.heroImg} alt='hero' style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Disc Golf that Builds Community</h1>
          <p style={{ marginTop: '1rem', maxWidth: '600px' }}>{ORG.blurb}</p>
          <div style={{ marginTop: '1rem' }}>
            <a href={ORG.primaryCTA.href} target='_blank' rel='noreferrer' style={{ padding: '0.5rem 1rem', backgroundColor: 'green', color: 'white', borderRadius: '0.5rem', marginRight: '1rem' }}>
              <HeartHandshake style={{ display: 'inline', marginRight: '0.5rem' }} /> {ORG.primaryCTA.text}
            </a>
            <a href={ORG.secondaryCTA.href} style={{ padding: '0.5rem 1rem', border: '1px solid white', borderRadius: '0.5rem', color: 'white' }}>
              <ExternalLink style={{ display: 'inline', marginRight: '0.5rem' }} /> {ORG.secondaryCTA.text}
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
