import React, { useEffect, useState } from "react";
import {
  HeartHandshake,
  ExternalLink,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Check,
  Link as LinkIcon,
} from "lucide-react";

// Import images from src/assets so Vite fingerprints & cache-busts them
import heroImg from "./assets/hero.jpg";
import logoLight from "./assets/logo-color.png";
import logoDark from "./assets/logo-dark.png";
import paypalQR from "./assets/paypal-qr.png";

/** Detects system dark mode and listens for changes */
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
  metrics: {
    volunteerHours: 520,
    periodLabel: "2025 YTD",
  },
  logos: {
    light: logoLight,
    dark: logoDark,
  },
  primaryCTA: {
    text: "Donate",
    href: "https://www.paypal.com/donate/?hosted_button_id=NFN35LVULXANN",
  },
  secondaryCTA: {
    text: "Become a Sponsor",
    href: "#sponsorships",
  },
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
    cardBg: prefersDark ? "#111113" : "#ffffff",
    cardShadow: prefersDark ? "0 1px 2px rgba(0,0,0,0.25)" : "0 1px 2px rgba(0,0,0,0.06)",
    navBg: prefersDark ? "rgba(24,24,27,0.85)" : "rgba(255,255,255,0.85)",
    heroOverlay: prefersDark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)",
    accent: "#10b981", // emerald
    accentBorder: "#059669",
    secondaryBg: prefersDark ? "#18181b" : "#ffffff",
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
              style={{ height: 36, width: 36, borderRadius: 999, objectFit: "cover", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }}
            />
            <div>
              <div style={{ fontWeight: 600 }}>{ORG.name}</div>
              <div style={{ fontSize: 12, color: colors.subtext }}>{ORG.tagline}</div>
            </div>
          </div>
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
      <header style={{ position: "relative", height: "60vh", color: "white" }}>
        <img
          src={heroImg}
          alt="hero"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: colors.heroOverlay }} />
        <div style={{ ...container, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 800, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            Disc Golf that Builds Community
          </h1>
          <p style={{ marginTop: 16, maxWidth: 720, fontSize: 18, color: "#e4e4e7" }}>{ORG.blurb}</p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={{ ...buttonPrimary(colors), padding: "12px 16px", fontSize: 16 }}>
              <HeartHandshake size={18} style={{ marginRight: 8 }} /> {ORG.primaryCTA.text}
            </a>
            <a href={ORG.secondaryCTA.href} style={{ ...buttonSecondary(colors), padding: "12px 16px", fontSize: 16 }}>
              <ExternalLink size={18} style={{ marginRight: 8 }} /> {ORG.secondaryCTA.text}
            </a>
          </div>
        </div>
      </header>

      {/* MISSION + GOAL */}
      <section id="mission" style={{ ...container, paddingTop: 64, paddingBottom: 64 }}>
        <div style={gridTwoCols}>
          <div>
            <h2 style={h2}>Our Mission</h2>
            <p style={{ marginTop: 12, color: colors.subtext, lineHeight: 1.6 }}>
              Now we’re ready for the next step: expanding to a full 18-hole tournament-ready course.
            </p>
            <ul style={{ marginTop: 16, color: colors.text, listStyle: "none", padding: 0 }}>
              {[
                "Brings hundreds of visitors to Long Beach each year",
                "Supports local businesses with new tourism revenue",
                "Provides a free, family-friendly recreational space for residents and visitors",
                "Builds pride and visibility for the Long Beach community",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 8 }}>
                  <Check size={20} style={{ marginTop: 2 }} /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={card(colors)}>
            <img
              src="https://images.unsplash.com/photo-1602080858428-b5a6a7a0cb62?q=80&w=1400&auto=format&fit=crop"
              alt="course"
              style={{ width: "100%", height: 220, objectFit: "cover", display: "block", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
            <div style={{ padding: 16, borderTop: `1px solid ${colors.border}` }}>
              <h3 style={{ margin: 0, fontWeight: 700 }}>Our 2026 Goal</h3>
            </div>
            <div style={{ padding: 16, fontSize: 14, color: colors.subtext }}>
              <p>Raise <strong style={{ color: colors.text }}>$17,176</strong> to complete construction.</p>
              <p>Every dollar goes directly to:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>Tee pads and baskets for 8 new holes</li>
                <li>Professional signage</li>
                <li>Safe land clearing and mowing</li>
                <li>Benches, erosion control, and course improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY / HOW */}
      <section id="why" style={{ borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}`, background: prefersDark ? "#0b2a33" : "#ecfdf5" }}>
        <div style={{ ...container, paddingTop: 48, paddingBottom: 48 }}>
          <h2 style={h2}>How You Can Help</h2>
          <ul style={{ marginTop: 16, color: prefersDark ? "#d1fae5" : "#374151", fontSize: 15, lineHeight: 1.6 }}>
            <li>• Make a tax-deductible donation today</li>
            <li>• Sponsor a hole or sign with your business logo</li>
            <li>• Join us as a volunteer and help us finish the course</li>
          </ul>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" style={{ borderBottom: `1px solid ${colors.border}`, background: prefersDark ? "#0b0b0c" : "#fafafa" }}>
        <div style={{ ...container, paddingTop: 48, paddingBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <h2 style={h2}>Volunteer Hours</h2>
            <span style={{ fontSize: 12, color: colors.subtext }}>{ORG.metrics.periodLabel || "This Year"}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            <div style={card(colors)}>
              <div style={{ padding: 16 }}>
                <p style={{ color: colors.subtext }}>
                  We track and celebrate the hours volunteers put into maintaining the Dunes course and running clinics.
                  If you put in time—log it so we can recognize you and report impact to sponsors.
                </p>
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginTop: 12 }}>
                  <div style={{ border: `1px solid ${colors.border}`, background: colors.secondaryBg, borderRadius: 12, padding: 16, minWidth: 160, textAlign: "center" }}>
                    <div style={{ fontSize: 36, fontWeight: 800, color: colors.text }}>{ORG.metrics.volunteerHours}</div>
                    <div style={{ fontSize: 12, color: colors.subtext }}>Total Hours</div>
                  </div>
                  <a
                    href={`mailto:${ORG.contact.email}?subject=Volunteer%20Hours%20Log&body=Name:%0AHours:%0ADate:%0AActivity:`}
                    style={buttonPrimary(colors)}
                  >
                    Submit Hours via Email
                  </a>
                  <a href="#contact" style={buttonSecondary(colors)}>Contact Us</a>
                </div>
              </div>
            </div>

            <div style={card(colors)}>
              <div style={{ padding: 16 }}>
                <h3 style={{ marginTop: 0 }}>How to Help</h3>
                <div style={{ fontSize: 14, color: colors.subtext, lineHeight: 1.6 }}>
                  <p>• Join work parties for trail and tee maintenance</p>
                  <p>• Help at youth clinics and beginner days</p>
                  <p>• Contribute signage, tools, or printing (in-kind)</p>
                  <p>• Share updates on social to spread the word</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORSHIPS */}
      <section id="sponsorships" style={{ ...container, paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h2 style={h2}>Sponsorships</h2>
            <p style={{ color: colors.subtext, maxWidth: 720 }}>
              Local businesses make our mission possible. Choose a tier below or contact us for a custom package (in-kind donations welcome!).
            </p>
          </div>
          <a href="#contact" style={buttonPrimary(colors)}><HeartHandshake size={16} style={{ marginRight: 6 }} /> Start a Conversation</a>
        </div>

        <div style={{ marginTop: 16, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {tiers.map((tier) => (
            <div key={tier.name} style={card(colors)}>
              <div style={{ padding: 16, borderBottom: `1px solid ${colors.border}`, display: "flex", justifyContent: "space-between" }}>
                <strong>{tier.name}</strong>
                <span style={{ color: colors.subtext }}>{tier.amount}</span>
              </div>
              <div style={{ padding: 16 }}>
                <ul style={{ margin: 0, paddingLeft: 18, color: colors.subtext, fontSize: 14 }}>
                  {tier.perks.map((p) => (
                    <li key={p} style={{ marginTop: 6 }}>{p}</li>
                  ))}
                </ul>
                <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={{ ...buttonSecondary(colors), width: "100%", display: "inline-block", textAlign: "center", marginTop: 12 }}>
                  Sponsor {tier.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DONATE STRIP */}
      <section style={{ borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}`, background: prefersDark ? "linear-gradient(90deg,#052e2b,#0b2a33)" : "linear-gradient(90deg,#ecfdf5,#e0f2fe)" }}>
        <div style={{ ...container, paddingTop: 24, paddingBottom: 24, display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Every gift keeps the course playable and the community growing.</h3>
            <p style={{ marginTop: 6, color: colors.subtext }}>One-time or monthly donations are tax-deductible to the extent allowed by law.</p>
            <ul style={{ marginTop: 8, color: prefersDark ? "#e2e8f0" : "#374151", fontSize: 14, lineHeight: 1.6 }}>
              <li>• Make a tax-deductible donation today</li>
              <li>• Sponsor a hole or sign with your business logo</li>
              <li>• Join us as a volunteer and help us finish the course</li>
            </ul>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={{ ...buttonPrimary(colors), padding: "10px 14px" }}>Give Now</a>
            <a href="#faq" style={{ ...buttonSecondary(colors), padding: "10px 14px" }}>Donor FAQ</a>
            <div style={{ display: "flex", gap: 12, alignItems: "center", border: `1px solid ${colors.border}`, background: colors.cardBg, borderRadius: 12, padding: "8px 12px" }}>
              <img src={paypalQR} alt="PayPal QR code" style={{ height: 80, width: 80, objectFit: "contain" }} />
              <div style={{ fontSize: 12, color: colors.subtext }}>Scan with your phone<br/>to donate via PayPal</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...container, paddingTop: 56, paddingBottom: 56 }}>
        <div style={gridTwoCols}>
          <div>
            <h2 style={h2}>Get in Touch</h2>
            <p style={{ marginTop: 8, color: colors.subtext }}>We&apos;d love to chat about sponsorships, in-kind donations, or volunteering.</p>
            <div style={{ marginTop: 12, fontSize: 14 }}>
              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={16} /> <a href={`mailto:${ORG.contact.email}`} style={{ textDecoration: "underline", color: colors.text }}>{ORG.contact.email}</a>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={16} /> {ORG.contact.address}
              </p>
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {ORG.contact.socials.map(({ name, href, icon: Icon }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${colors.border}`, background: colors.cardBg, borderRadius: 10, padding: "8px 10px", textDecoration: "none", color: colors.text }}>
                  <Icon size={16} /> <span style={{ fontSize: 14 }}>{name}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={card(colors)}>
            <div style={{ padding: 16, borderBottom: `1px solid ${colors.border}` }}>
              <h3 style={{ margin: 0 }}>Message Us</h3>
            </div>
            <div style={{ padding: 16 }}>
              {/* Demo form only */}
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: "grid", gap: 10 }}>
                  <input placeholder="Your name" required style={input(colors)} />
                  <input type="email" placeholder="Email" required style={input(colors)} />
                  <textarea placeholder="How would you like to partner with PDGC?" rows={5} style={textarea(colors)} />
                  <button type="submit" style={buttonPrimary(colors)}>Send</button>
                  <p style={{ fontSize: 12, color: colors.subtext, display: "flex", alignItems: "center", gap: 6 }}>
                    <LinkIcon size={14} /> This form is a demo. Replace with a live form endpoint.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${colors.border}`, background: colors.secondaryBg }}>
        <div style={{ ...container, paddingTop: 28, paddingBottom: 28, fontSize: 14, color: colors.subtext }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 600, color: colors.text }}>{ORG.name}</div>
              <div style={{ fontSize: 12 }}>{ORG.tagline}</div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              {ORG.contact.socials.map(({ name, href, icon: Icon }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", color: colors.text }}>
                  <Icon size={16} /> {name}
                </a>
              ))}
            </div>
          </div>
          <p style={{ marginTop: 12, fontSize: 12 }}>© {new Date().getFullYear()} {ORG.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

/** style helpers */
const container: React.CSSProperties = { maxWidth: 1152, margin: "0 auto", padding: "0 16px" };
const containerRow: React.CSSProperties = { ...container, display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, paddingBottom: 12 };
const h2: React.CSSProperties = { margin: 0, fontSize: 28, fontWeight: 800 };
const gridTwoCols: React.CSSProperties = { display: "grid", gap: 16, gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" };

function card(colors: any): React.CSSProperties {
  return {
    background: colors.cardBg,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: colors.cardShadow,
  };
}
function navLink(color: string): React.CSSProperties {
  return { fontSize: 14, color, textDecoration: "none" };
}
function buttonPrimary(colors: any): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    background: "#10b981",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid #059669",
  };
}
function buttonSecondary(colors: any): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    background: colors.secondaryBg,
    color: colors.text,
    padding: "8px 12px",
    borderRadius: 12,
    textDecoration: "none",
    border: `1px solid ${colors.border}`,
  };
}
function input(colors: any): React.CSSProperties {
  return { height: 40, padding: "0 10px", border: `1px solid ${colors.border}`, background: colors.cardBg, color: colors.text, borderRadius: 8, outline: "none" };
}
function textarea(colors: any): React.CSSProperties {
  return { padding: 10, border: `1px solid ${colors.border}`, background: colors.cardBg, color: colors.text, borderRadius: 8, outline: "none", resize: "vertical", width: "100%" };
}
