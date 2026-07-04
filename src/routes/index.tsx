import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مكتب الحدث للعقار | روابطنا" },
      {
        name: "description",
        content:
          "وكلاء عقاريون معتمدون | استثمار وتمويل | خبرة في السوق",
      },
      { property: "og:title", content: "مكتب الحدث للعقار | روابطنا" },
      {
        property: "og:description",
        content:
          "وكلاء عقاريون معتمدون | استثمار وتمويل | خبرة في السوق ",
      },
    ],
  }),
  component: BioLinkPage,
});

/* ---------- Icons ---------- */

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

/* ---------- Button ---------- */

function SocialButton({
  href,
  label,
  handle,
  icon,
  iconBg,
  delay,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
  iconBg: string;
  delay: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-4"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,247,238,0.92) 0%, rgba(245,232,215,0.88) 100%)",
        borderColor: "rgba(120, 80, 50, 0.18)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.7) inset, 0 8px 24px -12px rgba(60, 30, 15, 0.35)",
        animation: `riseIn 0.7s ${delay} cubic-bezier(0.2, 0.8, 0.2, 1) both`,
      }}
    >
      {/* icon badge */}
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105"
        style={{
          background: iconBg,
          boxShadow: "0 6px 16px -6px rgba(60, 30, 15, 0.5)",
        }}
      >
        {icon}
      </span>

      {/* labels */}
      <span className="flex flex-1 flex-col items-start text-right">
        <span
          className="text-[15px] font-bold leading-tight"
          style={{ color: "#3a2416" }}
        >
          {label}
        </span>
        <span
          className="mt-0.5 text-[11px] font-medium tracking-wide"
          style={{ color: "#8a6a52" }}
        >
          {handle}
        </span>
      </span>

      {/* arrow */}
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-x-1"
        style={{ color: "#6b4423", background: "rgba(107, 68, 35, 0.08)" }}
      >
        <ArrowIcon />
      </span>

      {/* sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
        }}
      />
    </a>
  );
}

/* ---------- Page ---------- */

function BioLinkPage() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10"
      style={{
        background:
          "radial-gradient(ellipse at top, #4a2c1a 0%, #2a1608 55%, #180a04 100%)",
      }}
    >
      {/* subtle grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.25 0 0 0 0 0.15 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* warm glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #c9884c 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #8a4e2b 0%, transparent 70%)" }}
      />

      <main
        className="relative w-full max-w-[400px] px-6 py-9 sm:max-w-md sm:px-8 sm:py-11"
        style={{
          borderRadius: "28px",
          background:
            "linear-gradient(165deg, rgba(255,244,228,0.08) 0%, rgba(201,136,76,0.10) 100%)",
          backdropFilter: "blur(28px) saturate(160%)",
          border: "1px solid rgba(230, 190, 140, 0.25)",
          boxShadow:
            "0 30px 80px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,220,180,0.15)",
          animation: "riseIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both",
        }}
      >
        {/* Avatar */}
        <div className="mb-6 flex justify-center">
          <div
            className="relative flex h-28 w-28 items-center justify-center rounded-full p-[3px]"
            style={{
              background:
                "conic-gradient(from 180deg, #e8b478, #c9884c, #6b4423, #c9884c, #e8b478)",
              boxShadow: "0 12px 32px -10px rgba(201, 136, 76, 0.55)",
            }}
          >
            <div
              className="flex h-full w-full items-center justify-center overflow-hidden rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #fdf3e3 0%, #f0dcc0 100%)",
              }}
            >
              <img
                src={logo}
                alt="مكتب الحدث للعقار"
                width={112}
                height={112}
                className="h-24 w-24 object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className="mb-2 text-center text-[26px] font-bold leading-tight tracking-tight sm:text-[30px]"
          style={{
            fontFamily: "'Fraunces', 'Tajawal', serif",
            background:
              "linear-gradient(180deg, #fdf3e3 0%, #e8b478 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          مكتب الحدث للعقار
        </h1>

        {/* Handle */}
        <p
          className="mb-4 text-center text-xs font-medium tracking-widest"
          style={{ color: "#c9a074" }}
        >
          @ALHADATH · REAL ESTATE
        </p>

        {/* Divider */}
        <div className="mx-auto mb-5 flex items-center justify-center gap-2">
          <span
            className="h-px w-10"
            style={{ background: "linear-gradient(90deg, transparent, #8a6a52)" }}
          />
          <span
            className="h-1.5 w-1.5 rotate-45"
            style={{ background: "#c9884c" }}
          />
          <span
            className="h-px w-10"
            style={{ background: "linear-gradient(90deg, #8a6a52, transparent)" }}
          />
        </div>

        {/* Description */}
        <p
          className="mb-7 text-center text-[13.5px] font-medium leading-relaxed sm:text-sm"
          style={{ color: "rgba(253, 243, 227, 0.82)" }}
        >
          وكلاء عقاريون معتمدون · استثمار وتمويل
          <br />
          خبرة في السوق السعودي
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <SocialButton
            href="https://vt.tiktok.com/ZSCQmucd8/"
            label="تابعنا على تيك توك"
            handle="@alhadath"
            icon={<TikTokIcon />}
            iconBg="linear-gradient(135deg, #2a1608 0%, #0f0704 100%)"
            delay="0.15s"
          />
          <SocialButton
            href="https://www.instagram.com/0.q47?igsh=N2k5bGJ4ODk4ODhv"
            label="تابعنا على إنستغرام"
            handle="@0.q47"
            icon={<InstagramIcon />}
            iconBg="linear-gradient(135deg, #6b4423 0%, #c9884c 100%)"
            delay="0.25s"
          />
          <SocialButton
            href="https://www.facebook.com/share/1DN5tA7K9o/?mibextid=wwXIfr"
            label="تابعنا على فيسبوك"
            handle="Facebook Page"
            icon={<FacebookIcon />}
            iconBg="linear-gradient(135deg, #4a2c1a 0%, #8a4e2b 100%)"
            delay="0.35s"
          />
        </div>

        {/* Footer */}
        <p
          className="mt-8 text-center text-[11px] tracking-wide"
          style={{ color: "rgba(230, 190, 140, 0.5)" }}
        >
          © 2026 مكتب الحدث للعقار — جميع الحقوق محفوظة
        </p>
      </main>

      {/* keyframes */}
      <style>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
