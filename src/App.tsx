import React from "react";
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
    light: "/images/logo-color.png",
    dark: "/images/logo-dark.png",
  },
  heroImg: "/images/hero.jpg",
  primaryCTA: {
    text: "Donate",
    href: "https://www.paypal.com/donate/?hosted_button_id=NFN35LVULXANN",
  },
  secondaryCTA: {
    text: "Become a Sponsor",
    href: "#sponsorships",
  },
  qrDataUrl: "/images/paypal-qr.png",
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
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#18181b", fontFamily: "system-ui, sans-serif" }}>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(6px)", background: "rgba(255,255,255,0.85)", borderBottom: "1px solid #e4e4e7" }}>
        <div style={containerRow}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={ORG.logos.light} alt="logo" style={{ height: 36, width: 36, borderRadius: 999, objectFit: "cover", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
            <div>
              <div style={{ fontWeight: 600 }}>{ORG.name}</div>
              <div style={{ fontSize: 12, color: "#71717a" }}>{ORG.tagline}</div>
            </div>
          </div>
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#mission" style={navLink}>Mission</a>
            <a href="#why" style={navLink}>Why it Matters</a>
            <a href="#volunteer" style={navLink}>Volunteer</a>
            <a href="#sponsorships" style={navLink}>Sponsorships</a>
            <a href="#contact" style={navLink}>Contact</a>
            <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={buttonPrimary}>
              <HeartHandshake size={16} style={{ marginRight: 6 }} /> {ORG.primaryCTA.text}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header style={{ position: "relative", height: "60vh", color: "white" }}>
        <img
  src={ORG.heroImg}
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
        <div style={{ ...container, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 800, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            Disc Golf that Builds Community
          </h1>
          <p style={{ marginTop: 16, maxWidth: 720, fontSize: 18, color: "#e4e4e7" }}>{ORG.blurb}</p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={{ ...buttonPrimary, padding: "12px 16px", fontSize: 16 }}>
              <HeartHandshake size={18} style={{ marginRight: 8 }} /> {ORG.primaryCTA.text}
            </a>
            <a href={ORG.secondaryCTA.href} style={{ ...buttonSecondary, padding: "12px 16px", fontSize: 16 }}>
              <ExternalLink size={18} style={{ marginRight: 8 }} /> {ORG.secondaryCTA.text}
            </a>
          </div>
        </div>
      </header>

      {/* MISSION + GOAL CARD */}
      <section id="mission" style={{ ...container, paddingTop: 64, paddingBottom: 64 }}>
        <div style={gridTwoCols}>
          <div>
            <h2 style={h2}>Our Mission</h2>
            <p style={{ marginTop: 12, color: "#52525b", lineHeight: 1.6 }}>
              Now we’re ready for the next step: expanding to a full 18-hole tournament-ready course.
            </p>
            <ul style={{ marginTop: 16, color: "#3f3f46", listStyle: "none", padding: 0 }}>
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
          <div style={card}>
            <img
              src="https://images.unsplash.com/photo-1602080858428-b5a6a7a0cb62?q=80&w=1400&auto=format&fit=crop"
              alt="course"
              style={{ width: "100%", height: 220, objectFit: "cover", display: "block", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
            <div style={{ padding: 16, borderTop: "1px solid #e4e4e7" }}>
              <h3 style={{ margin: 0, fontWeight: 700 }}>Our 2026 Goal</h3>
            </div>
            <div style={{ padding: 16, fontSize: 14, color: "#3f3f46" }}>
              <p>Raise <strong>$17,176</strong> to complete construction.</p>
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

      {/* WHY / HOW YOU CAN HELP */}
      <section id="why" style={{ borderTop: "1px solid #d4d4d8", borderBottom: "1px solid #d4d4d8", background: "#ecfdf5" }}>
        <div style={{ ...container, paddingTop: 48, paddingBottom: 48 }}>
          <h2 style={h2}>How You Can Help</h2>
          <ul style={{ marginTop: 16, color: "#374151", fontSize: 15, lineHeight: 1.6 }}>
            <li>• Make a tax-deductible donation today</li>
            <li>• Sponsor a hole or sign with your business logo</li>
            <li>• Join us as a volunteer and help us finish the course</li>
          </ul>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" style={{ borderBottom: "1px solid #e4e4e7", background: "#fafafa" }}>
        <div style={{ ...container, paddingTop: 48, paddingBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <h2 style={h2}>Volunteer Hours</h2>
            <span style={{ fontSize: 12, color: "#71717a" }}>{ORG.metrics.periodLabel || "This Year"}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            <div style={card}>
              <div style={{ padding: 16 }}>
                <p style={{ color: "#52525b" }}>
                  We track and celebrate the hours volunteers put into maintaining the Dunes course and running clinics.
                  If you put in time—log it so we can recognize you and report impact to sponsors.
                </p>
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginTop: 12 }}>
                  <div style={{ border: "1px solid #e4e4e7", background: "#fff", borderRadius: 12, padding: 16, minWidth: 160, textAlign: "center" }}>
                    <div style={{ fontSize: 36, fontWeight: 800 }}>{ORG.metrics.volunteerHours}</div>
                    <div style={{ fontSize: 12, color: "#71717a" }}>Total Hours</div>
                  </div>
                  <a
                    href={`mailto:${ORG.contact.email}?subject=Volunteer%20Hours%20Log&body=Name:%0AHours:%0ADate:%0AActivity:`}
                    style={buttonPrimary}
                  >
                    Submit Hours via Email
                  </a>
                  <a href="#contact" style={buttonSecondary}>Contact Us</a>
                </div>
              </div>
            </div>

            <div style={card}>
              <div style={{ padding: 16 }}>
                <h3 style={{ marginTop: 0 }}>How to Help</h3>
                <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
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
            <p style={{ color: "#52525b", maxWidth: 720 }}>
              Local businesses make our mission possible. Choose a tier below or contact us for a custom package (in-kind donations welcome!).
            </p>
          </div>
          <a href="#contact" style={buttonPrimary}><HeartHandshake size={16} style={{ marginRight: 6 }} /> Start a Conversation</a>
        </div>

        <div style={{ marginTop: 16, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {tiers.map((tier) => (
            <div key={tier.name} style={card}>
              <div style={{ padding: 16, borderBottom: "1px solid #e4e4e7", display: "flex", justifyContent: "space-between" }}>
                <strong>{tier.name}</strong>
                <span style={{ color: "#71717a" }}>{tier.amount}</span>
              </div>
              <div style={{ padding: 16 }}>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#374151", fontSize: 14 }}>
                  {tier.perks.map((p) => (
                    <li key={p} style={{ marginTop: 6 }}>{p}</li>
                  ))}
                </ul>
                <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={{ ...buttonSecondary, width: "100%", display: "inline-block", textAlign: "center", marginTop: 12 }}>
                  Sponsor {tier.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DONATE STRIP */}
      <section style={{ borderTop: "1px solid #e4e4e7", borderBottom: "1px solid #e4e4e7", background: "linear-gradient(90deg,#ecfdf5,#e0f2fe)" }}>
        <div style={{ ...container, paddingTop: 24, paddingBottom: 24, display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Every gift keeps the course playable and the community growing.</h3>
            <p style={{ marginTop: 6, color: "#52525b" }}>One-time or monthly donations are tax-deductible to the extent allowed by law.</p>
            <ul style={{ marginTop: 8, color: "#374151", fontSize: 14, lineHeight: 1.6 }}>
              <li>• Make a tax-deductible donation today</li>
              <li>• Sponsor a hole or sign with your business logo</li>
              <li>• Join us as a volunteer and help us finish the course</li>
            </ul>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={{ ...buttonPrimary, padding: "10px 14px" }}>Give Now</a>
            <a href="#faq" style={{ ...buttonSecondary, padding: "10px 14px" }}>Donor FAQ</a>
            {ORG.qrDataUrl && (
              <div style={{ display: "flex", gap: 12, alignItems: "center", border: "1px solid #e4e4e7", background: "#fff", borderRadius: 12, padding: "8px 12px" }}>
                <img src={ORG.qrDataUrl} alt="PayPal QR code" style={{ height: 80, width: 80, objectFit: "contain" }} />
                <div style={{ fontSize: 12, color: "#52525b" }}>Scan with your phone<br/>to donate via PayPal</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...container, paddingTop: 56, paddingBottom: 56 }}>
        <div style={gridTwoCols}>
          <div>
            <h2 style={h2}>Get in Touch</h2>
            <p style={{ marginTop: 8, color: "#52525b" }}>We&apos;d love to chat about sponsorships, in-kind donations, or volunteering.</p>
            <div style={{ marginTop: 12, fontSize: 14 }}>
              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={16} /> <a href={`mailto:${ORG.contact.email}`} style={{ textDecoration: "underline" }}>{ORG.contact.email}</a>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={16} /> {ORG.contact.address}
              </p>
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {ORG.contact.socials.map(({ name, href, icon: Icon }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #e4e4e7", borderRadius: 10, padding: "8px 10px", textDecoration: "none", color: "#18181b" }}>
                  <Icon size={16} /> <span style={{ fontSize: 14 }}>{name}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={card}>
            <div style={{ padding: 16, borderBottom: "1px solid #e4e4e7" }}>
              <h3 style={{ margin: 0 }}>Message Us</h3>
            </div>
            <div style={{ padding: 16 }}>
              {/* Demo form only */}
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: "grid", gap: 10 }}>
                  <input placeholder="Your name" required style={input} />
                  <input type="email" placeholder="Email" required style={input} />
                  <textarea placeholder="How would you like to partner with PDGC?" rows={5} style={textarea} />
                  <button type="submit" style={buttonPrimary}>Send</button>
                  <p style={{ fontSize: 12, color: "#71717a", display: "flex", alignItems: "center", gap: 6 }}>
                    <LinkIcon size={14} /> This form is a demo. Replace with a live form endpoint.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (simple) */}
      <section id="faq" style={{ borderTop: "1px solid #e4e4e7", background: "#fafafa" }}>
        <div style={{ ...container, paddingTop: 40, paddingBottom: 40 }}>
          <h2 style={h2}>Donor FAQ</h2>
          <div style={{ display: "grid", gap: 12 }}>
            <div style={card}>
              <div style={{ padding: 16 }}>
                <strong>Are donations tax-deductible?</strong>
                <p style={{ marginTop: 8 }}>Yes—PDGC operates as a small nonprofit (under $5,000 revenue). We&apos;ll provide a receipt for your records. Confirm with your tax advisor.</p>
              </div>
            </div>
            <div style={card}>
              <div style={{ padding: 16 }}>
                <strong>Can my business donate in-kind?</strong>
                <p style={{ marginTop: 8 }}>Absolutely. Tools, printing, signage, event prizes, and services are incredibly helpful. We recognize in-kind sponsors the same as cash sponsors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #e4e4e7", background: "#fff" }}>
        <div style={{ ...container, paddingTop: 28, paddingBottom: 28, fontSize: 14, color: "#52525b" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 600, color: "#18181b" }}>{ORG.name}</div>
              <div style={{ fontSize: 12 }}>{ORG.tagline}</div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              {ORG.contact.socials.map(({ name, href, icon: Icon }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", color: "#18181b" }}>
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

/** ——— little style helpers ——— */
const container: React.CSSProperties = { maxWidth: 1152, margin: "0 auto", padding: "0 16px" };
const containerRow: React.CSSProperties = { ...container, display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, paddingBottom: 12 };
const h2: React.CSSProperties = { margin: 0, fontSize: 28, fontWeight: 800 };
const card: React.CSSProperties = { background: "#fff", border: "1px solid #e4e4e7", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" };
const gridTwoCols: React.CSSProperties = { display: "grid", gap: 16, gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" };

const navLink: React.CSSProperties = { fontSize: 14, color: "#18181b", textDecoration: "none" };
const buttonPrimary: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#10b981", color: "#fff", padding: "8px 12px", borderRadius: 12, textDecoration: "none", fontWeight: 600, border: "1px solid #059669" };
const buttonSecondary: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#ffffff", color: "#18181b", padding: "8px 12px", borderRadius: 12, textDecoration: "none", border: "1px solid #e4e4e7" };
const input: React.CSSProperties = { height: 40, padding: "0 10px", border: "1px solid #e4e4e7", borderRadius: 8, outline: "none" };
const textarea: React.CSSProperties = { padding: 10, border: "1px solid #e4e4e7", borderRadius: 8, outline: "none", resize: "vertical", width: "100%" };
