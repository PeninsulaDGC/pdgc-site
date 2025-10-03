import { useEffect, useState } from "react";
import {
  HeartHandshake,
  ExternalLink,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Check,
} from "lucide-react";

// Import images (Vite will handle cache-busting)
import heroImg from "./assets/hero.jpg";
import logoLight from "./assets/logo-color.png";
import logoDark from "./assets/logo-dark.png";
import paypalQR from "./assets/paypal-qr.png";

/** Dark mode hook */
function usePrefersDark() {
  const [prefersDark, setPrefersDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setPrefersDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersDark;
}

const ORG = {
  name: "Peninsula Disc Golf Club (PDGC)",
  tagline: "Connecting People Through Disc Golf",
  blurb:
    "Help Us Grow the Long Beach Dunes Disc Golf Course! Since 2023, the Peninsula Disc Golf Club has transformed empty dunes into a thriving 11-hole community disc golf course. With over 1,000 volunteer hours and strong local support, we’ve built tee pads, baskets, and signage — and welcomed 700+ unique players from across the Northwest.",
  metrics: { volunteerHours: 520, periodLabel: "2025 YTD" },
  logos: { light: logoLight, dark: logoDark },
  primaryCTA: {
    text: "Donate",
    href: "https://www.paypal.com/donate/?hosted_button_id=NFN35LVULXANN",
  },
  secondaryCTA: { text: "Become a Sponsor", href: "#sponsorships" },
  contact: {
    email: "info@peninsuladiscgolfclub.org",
    address: "Long Beach, WA",
    socials: [
      { name: "Instagram", href: "https://instagram.com/longbeachdunesdiscgolf", icon: Instagram },
      { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100087858846267", icon: Facebook },
    ],
  },
};

const tiers = [
  { name: "Friend", amount: "$50", perks: ["Thank-you post on social", "Name on website"] },
  { name: "Community", amount: "$100", perks: ["All Friend perks", "Sticker pack / shout-out"] },
  { name: "Bronze", amount: "$250", perks: ["All Community perks", "Logo on website", "Logo on quarterly update"] },
  { name: "Silver", amount: "$500", perks: ["All Bronze perks", "Small logo on tee sign (season)", "Event-day shout-out"] },
];

export default function PDGCWebsite() {
  const prefersDark = usePrefersDark();

  const colors = {
    bg: prefersDark ? "#18181b" : "#ffffff",
    text: prefersDark ? "#fafafa" : "#18181b",
    subtext: prefersDark ? "#a1a1aa" : "#52525b",
    border: prefersDark ? "#27272a" : "#e4e4e7",
    navBg: prefersDark ? "rgba(24,24,27,0.85)" : "rgba(255,255,255,0.85)",
    heroOverlay: prefersDark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)",
    accent: "#10b981",
    accentBorder: "#059669",
  };

  return (
    <div style={{ minHeight: "100vh", background: colors.bg, color: colors.text, fontFamily: "system-ui, sans-serif" }}>
      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(6px)",
          background: colors.navBg,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={containerRow}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src={prefersDark ? ORG.logos.dark : ORG.logos.light}
              alt="logo"
              style={{ height: 36, width: 36, borderRadius: 999, objectFit: "cover" }}
            />
            <div>
              <div style={{ fontWeight: 600 }}>{ORG.name}</div>
              <div style={{ fontSize: 12, color: colors.subtext }}>{ORG.tagline}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#mission" style={navLink(colors.text)}>Mission</a>
            <a href="#why" style={navLink(colors.text)}>Why it Matters</a>
            <a href="#volunteer" style={navLink(colors.text)}>Volunteer</a>
            <a href="#sponsorships" style={navLink(colors.text)}>Sponsorships</a>
            <a href="#contact" style={navLink(colors.text)}>Contact</a>
            <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={buttonPrimary(colors)}>
              <HeartHandshake size={16} style={{ marginRight: 6 }} /> {ORG.primaryCTA.text}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header
        style={{
          position: "relative",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <img
          src={heroImg}
          alt="hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: colors.heroOverlay, zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 800, padding: "0 16px" }}>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 800, marginBottom: 16 }}>
            Disc Golf that Builds Community
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#e4e4e7" }}>{ORG.blurb}</p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={buttonPrimary(colors)}>
              <HeartHandshake size={18} style={{ marginRight: 8 }} /> {ORG.primaryCTA.text}
            </a>
            <a href={ORG.secondaryCTA.href} style={buttonSecondary(colors)}>
              <ExternalLink size={18} style={{ marginRight: 8 }} /> {ORG.secondaryCTA.text}
            </a>
          </div>
        </div>
      </header>

      {/* MISSION */}
      <section id="mission" style={section}>
        <div style={container}>
          <h2 style={h2}>Our Mission</h2>
          <p style={{ marginTop: 12, color: colors.subtext }}>
            We expand access to healthy outdoor recreation through disc golf, steward local courses with volunteer labor,
            and host inclusive events and youth programs.
          </p>
          <ul style={{ marginTop: 16, lineHeight: 1.8 }}>
            {["Maintain and improve public disc-golf courses", "Run no-cost youth clinics and beginner days", "Host community events and tournaments", "Promote stewardship of dunes and local ecology"].map((item) => (
              <li key={item}><Check size={16} style={{ marginRight: 6 }} /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPONSORSHIPS */}
      <section id="sponsorships" style={sectionAlt(colors)}>
        <div style={container}>
          <h2 style={h2}>Sponsorships</h2>
          <p style={{ marginTop: 12, color: colors.subtext }}>Local businesses make our mission possible. Choose a tier below.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginTop: 20 }}>
            {tiers.map((tier) => (
              <div key={tier.name} style={card(colors)}>
                <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{tier.name} — {tier.amount}</h3>
                <ul style={{ fontSize: 14, lineHeight: 1.6 }}>
                  {tier.perks.map((p) => (<li key={p}><Check size={14} style={{ marginRight: 6 }} /> {p}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={section}>
        <div style={container}>
          <h2 style={h2}>Get in Touch</h2>
          <p style={{ marginTop: 12, color: colors.subtext }}>We’d love to chat about sponsorships, donations, or volunteering.</p>
          <p><Mail size={16} style={{ marginRight: 6 }} /> <a href={`mailto:${ORG.contact.email}`}>{ORG.contact.email}</a></p>
          <p><MapPin size={16} style={{ marginRight: 6 }} /> {ORG.contact.address}</p>
          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            {ORG.contact.socials.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Icon size={16} /> {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${colors.border}`, padding: "24px 16px", textAlign: "center", color: colors.subtext }}>
        © {new Date().getFullYear()} {ORG.name}. All rights reserved.
      </footer>
    </div>
  );
}

/* === style helpers === */
const container: React.CSSProperties = { maxWidth: 1152, margin: "0 auto", padding: "0 16px" };
const containerRow: React.CSSProperties = { ...container, display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, paddingBottom: 12 };
const section: React.CSSProperties = { padding: "64px 0" };
const h2: React.CSSProperties = { fontSize: 28, fontWeight: 800, marginBottom: 16 };
function navLink(color: string): React.CSSProperties {
  return { fontSize: 14, color, textDecoration: "none" };
}
function sectionAlt(colors: any): React.CSSProperties {
  return { padding: "64px 0", background: colors.bg === "#ffffff" ? "#f9fafb" : "#1f1f23" };
}
function card(colors: any): React.CSSProperties {
  return { background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: 12, padding: 16 };
}
function buttonPrimary(colors: any): React.CSSProperties {
  return { display: "inline-flex", alignItems: "center", background: colors.accent, color: "#fff", padding: "8px 16px", borderRadius: 12, textDecoration: "none", fontWeight: 600, border: `1px solid ${colors.accentBorder}` };
}
function buttonSecondary(colors: any): React.CSSProperties {
  return { display: "inline-flex", alignItems: "center", border: `1px solid ${colors.border}`, padding: "8px 16px", borderRadius: 12, textDecoration: "none", color: colors.text };
}
