import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
  HeartHandshake,
  ExternalLink,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Check,
} from "lucide-react";

// Import images from src/assets (Vite will fingerprint & cache-bust)
import heroImg from "./assets/hero2.jpg";
import logoLight from "./assets/PDGC logo white background.png";
import logoDark from "./assets/PDGC black background.png";
import paypalQR from "./assets/fall2025qrcode.png";

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
  name: "Strengthening Connections and People Through Disc Golf",
  tagline: "",
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
  { name: "Friend", amount: "$50", perks: ["Thank-you post on social media", "Name on website"] },
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
    accent: "#10b981",
    accentBorder: "#059669",
    softAlt: prefersDark ? "#1f1f23" : "#f9fafb",
  };

  return (
    <div style={{ minHeight: "100vh", background: colors.bg, color: colors.text, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
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
              style={{ height: 130, width: 130, borderRadius: 999, objectFit: "cover", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }}
            />
            <div>
              <div style={{ fontWeight: 600 }}>{ORG.name}</div>
              <div style={{ fontSize: 14, color: colors.subtext }}>{ORG.tagline}</div>
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

      {/* HERO WITH FUNDRAISER */}
      <header
        style={{
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
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
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: colors.heroOverlay, zIndex: 1 }} />

        {/* Fundraiser content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            ...container,
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
            alignItems: "center",
            gap: 24,
            textAlign: "left",
          }}
        >
          {/* LEFT: text + buttons */}
          <div style={{ paddingRight: 16 }}>
            <h1 style={{ fontSize: "clamp(32px,6vw,56px)", fontWeight: 800, marginBottom: 16, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              Disc Golf that Builds Community
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#e4e4e7", marginBottom: 24 }}>
              {ORG.blurb}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={ORG.primaryCTA.href} target="_blank" rel="noreferrer" style={{ ...buttonPrimary(colors), padding: "12px 20px", fontSize: 16 }}>
                <HeartHandshake size={18} style={{ marginRight: 8 }} /> {ORG.primaryCTA.text}
              </a>
              <a href={ORG.secondaryCTA.href} style={{ ...buttonSecondary(colors), padding: "12px 20px", fontSize: 16 }}>
                <ExternalLink size={18} style={{ marginRight: 8 }} /> {ORG.secondaryCTA.text}
              </a>
            </div>
          </div>

          {/* RIGHT: Zeffy embeds */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Donation form */}
            <div style={{ position: "relative", overflow: "hidden", height: "450px", width: "100%" }}>
              <iframe
                title="Donation form powered by Zeffy"
                style={{
                  position: "absolute",
                  border: 0,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
                }}
                src="https://www.zeffy.com/embed/donation-form/help-us-grow-the-long-beach-dunes-disc-golf-course"
                allowPaymentRequest
                allowTransparency={true}
              ></iframe>
            </div>

            {/* Thermometer */}
            <div style={{ position: "relative", overflow: "hidden", width: "100%", paddingTop: "120px" }}>
              <iframe
                title="Donation thermometer powered by Zeffy"
                style={{
                  position: "absolute",
                  border: 0,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "120px",
                }}
                src="https://www.zeffy.com/embed/thermometer/help-us-grow-the-long-beach-dunes-disc-golf-course"
                allowTransparency={true}
              ></iframe>
            </div>
          </div>
        </div>
      </header>

      {/* --- rest of your original layout remains unchanged --- */}
      {/* MISSION + GOAL */}
      <section id="mission" style={section}>
        <div style={container}>
          <div style={gridTwoCols}>
            <div>
              <h2 style={h2}>Our Mission</h2>
              <p style={{ marginTop: 12, color: colors.subtext, lineHeight: 1.6 }}>
                We expand access to healthy outdoor recreation through disc golf, steward local courses with volunteer labor,
                and host inclusive events and youth programs.
              </p>
              <ul style={{ marginTop: 16, color: colors.text, listStyle: "none", padding: 0 }}>
                {[
                  "Maintain and improve public disc-golf courses",
                  "Run no-cost youth clinics and beginner days",
                  "Host community events and tournaments",
                  "Promote stewardship of dunes and local ecology",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 8 }}>
                    <Check size={20} style={{ marginTop: 2 }} /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
