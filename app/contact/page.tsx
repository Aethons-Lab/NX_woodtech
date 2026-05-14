"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const LeafletMap = dynamic(() => import("../../components/LeafletMap"), {
  ssr: false,
});

const CHIPS = [
  "Plywood",
  "Flush Doors",
  "Panel Doors",
  "Block Board",
  "Custom Size",
  "Site Visit",
] as const;

interface ScheduleSlot {
  open: number;
  close: number;
}

const SCHEDULE: (ScheduleSlot | null)[] = [
  { open: 9 * 60, close: 18 * 60 }, // Sun
  { open: 9 * 60, close: 18 * 60 }, // Mon
  { open: 9 * 60, close: 18 * 60 }, // Tue
  { open: 9 * 60, close: 18 * 60 }, // Wed
  { open: 9 * 60, close: 18 * 60 }, // Thu
  null, // Fri closed
  { open: 9 * 60, close: 14 * 60 }, // Sat
];

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

interface HoursStatus {
  open: boolean;
  text: string;
}

interface FieldErrors {
  [key: string]: boolean;
}

export default function ContactPage(): React.JSX.Element {
  const [selectedChips, setSelectedChips] = useState<Set<string>>(new Set());
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [refNumber, setRefNumber] = useState<string>("");
  const [submitLabel, setSubmitLabel] = useState<string>("Send enquiry");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [hoursStatus, setHoursStatus] = useState<HoursStatus>({
    open: false,
    text: "",
  });
  const [todayIdx, setTodayIdx] = useState<number>(-1);
  const [activeMapIdx, setActiveMapIdx] = useState<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      const elem = el as HTMLElement;
      elem.style.opacity = "0";
      elem.style.transform = "translateY(16px)";
      elem.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      io.observe(elem);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();
    setTodayIdx(day);

    const today = SCHEDULE[day];
    if (today && minutes >= today.open && minutes < today.close) {
      const closeH = String(Math.floor(today.close / 60)).padStart(2, "0");
      setHoursStatus({ open: true, text: `Closing at ${closeH}:00 today` });
    } else {
      let next: { idx: number; sched: ScheduleSlot; days: number } | null =
        null;
      for (let i = 0; i < 7; i++) {
        const idx = (day + i) % 7;
        const slot = SCHEDULE[idx];
        if (slot && (i > 0 || minutes < slot.open)) {
          next = { idx, sched: slot, days: i };
          break;
        }
      }
      if (next) {
        const label =
          next.days === 0
            ? "later today"
            : next.days === 1
              ? "tomorrow"
              : DAY_NAMES[next.idx];
        const openH = String(Math.floor(next.sched.open / 60)).padStart(2, "0");
        setHoursStatus({ open: false, text: `Opens ${label} at ${openH}:00` });
      }
    }
  }, []);

  function toggleChip(val: string): void {
    setSelectedChips((prev) => {
      const next = new Set(prev);
      next.has(val) ? next.delete(val) : next.add(val);
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = e.currentTarget;
    const errors: FieldErrors = {};
    const name = (
      form.elements.namedItem("f-name") as HTMLInputElement
    ).value.trim();
    const email = (
      form.elements.namedItem("f-email") as HTMLInputElement
    ).value.trim();
    const msg = (
      form.elements.namedItem("f-msg") as HTMLTextAreaElement
    ).value.trim();

    if (!name) errors["f-name"] = true;
    if (!email) errors["f-email"] = true;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors["f-email"] = true;
    if (!msg) errors["f-msg"] = true;

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitLabel("Sending…");
    setTimeout(() => {
      const ref = "WT-" + Math.floor(100000 + Math.random() * 900000);
      setRefNumber("REF / " + ref);
      setShowSuccess(true);
    }, 700);
  }

  function handleReset(): void {
    formRef.current?.reset();
    setSelectedChips(new Set());
    setFieldErrors({});
    setSubmitLabel("Send enquiry");
    setShowSuccess(false);
  }

  return (
    <>
      {/* PAGE HEAD */}
      <section className="py-20 border-b border-[#2a1d1422]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847] mb-9 flex items-center gap-3">
            <span className="w-6 h-px bg-[#8b5e3c]"></span>
            <Link href="/">Home</Link>
            <span className="text-[#8b5e3c]">/</span>
            <span>Contact</span>
          </div>
          <div className="grid gap-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:items-end">
            <h1
              className="font-serif text-[clamp(56px,8vw,120px)] leading-[0.95] tracking-[-0.035em] mb-7"
              data-reveal
            >
              Tell us what
              <br />
              <em className="italic text-[#8b5e3c] font-normal">
                you&apos;re building.
              </em>
            </h1>
            <div className="flex flex-col justify-end" data-reveal>
              <p className="text-[17px] leading-[1.6] text-[#6b5847] mb-8">
                Projects, samples, site visits, bulk quotes — we'll come back
                within one business day. Three locations across Dhaka, Khulna
                and Bagerhat.
              </p>
              <div className="grid lg:grid-cols-2 border border-[#2a1d1422]">
                <div className="flex items-start gap-3.5 p-5 border-b border-r border-[#2a1d1422] hover:bg-[#ede5d8] transition-colors">
                  <div className="w-[34px] h-[34px] border border-[#2a1d1422] rounded grid place-items-center flex-shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[15px] h-[15px] stroke-[#2a1d14] fill-none"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-1">
                      Response time
                    </div>
                    <div className="text-sm text-[#2a1d14] font-medium">
                      Within 1 business day
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 p-5 border-b border-[#2a1d1422] hover:bg-[#ede5d8] transition-colors">
                  <div className="w-[34px] h-[34px] border border-[#2a1d1422] rounded grid place-items-center flex-shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[15px] h-[15px] stroke-[#2a1d14] fill-none"
                      strokeWidth="1.5"
                    >
                      <path d="M4 5c0 10 5 15 15 15l2-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-1">
                      Direct lines
                    </div>
                    <div className="text-sm text-[#2a1d14] font-medium leading-[1.45]">
                      02477721103
                      <br />
                      0255012800
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 p-5 border-r border-[#2a1d1422] hover:bg-[#ede5d8] transition-colors">
                  <div className="w-[34px] h-[34px] border border-[#2a1d1422] rounded grid place-items-center flex-shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[15px] h-[15px] stroke-[#2a1d14] fill-none"
                      strokeWidth="1.5"
                    >
                      <path d="M3 7h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" />
                      <path d="M3 7l9 7 9-7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-1">
                      Email us
                    </div>
                    <div className="text-sm text-[#2a1d14] font-medium">
                      info@woodtechipl.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 p-5 hover:bg-[#ede5d8] transition-colors">
                  <div className="w-[34px] h-[34px] border border-[#2a1d1422] rounded grid place-items-center flex-shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[15px] h-[15px] stroke-[#2a1d14] fill-none"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b5847] mb-1">
                      Our locations
                    </div>
                    <div className="text-sm text-[#2a1d14] font-medium">
                      Dhaka · Khulna · Bagerhat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-24 bg-[#f6f1ea]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid gap-20 lg:grid-cols-[1.4fr_1fr]">
            {/* FORM */}
            <div className="bg-white" data-reveal>
              {!showSuccess ? (
                <form
                  id="contactForm"
                  noValidate
                  onSubmit={handleSubmit}
                  ref={formRef}
                  className="p-12 space-y-8"
                >
                  <div className="border-b border-[#2a1d1422] pb-6">
                    <h2 className="font-serif text-2xl font-bold mb-2">
                      Start a conversation.
                    </h2>
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847]">
                      Form · 01 / 01
                    </span>
                  </div>

                  <div
                    className={
                      fieldErrors["f-name"]
                        ? "border-b-2 border-red-500 pb-2"
                        : "border-b border-[#2a1d1422] pb-4"
                    }
                  >
                    <label
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847] block mb-3"
                      htmlFor="f-name"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="f-name"
                      name="f-name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-transparent text-lg outline-none placeholder-[#6b5847]/40"
                    />
                  </div>

                  <div>
                    <label
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847] block mb-3"
                      htmlFor="f-email"
                    >
                      Contact <span className="text-red-500">*</span>
                    </label>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <input
                        id="f-email"
                        name="f-email"
                        type="email"
                        placeholder="you@company.com"
                        className={`w-full bg-transparent text-lg outline-none placeholder-[#6b5847]/40 border-b ${fieldErrors["f-email"] ? "border-red-500" : "border-[#2a1d1422]"} pb-2`}
                      />
                      <input
                        id="f-phone"
                        name="f-phone"
                        type="tel"
                        placeholder="+880 1X XXXX XXXX"
                        className="w-full bg-transparent text-lg outline-none placeholder-[#6b5847]/40 border-b border-[#2a1d1422] pb-2"
                      />
                    </div>
                  </div>

                  <div className="border-b border-[#2a1d1422] pb-4">
                    <label
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847] block mb-3"
                      htmlFor="f-company"
                    >
                      Company
                    </label>
                    <input
                      id="f-company"
                      name="f-company"
                      type="text"
                      placeholder="Studio, contractor or firm — optional"
                      className="w-full bg-transparent text-lg outline-none placeholder-[#6b5847]/40"
                    />
                  </div>

                  <div className="border-b border-[#2a1d1422] pb-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847] block mb-4">
                      Interested in
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {CHIPS.map((c) => (
                        <div
                          key={c}
                          className={`px-4 py-2 border rounded-full font-sans text-sm cursor-pointer transition-all ${
                            selectedChips.has(c)
                              ? "bg-[#2a1d14] text-[#f6f1ea] border-[#2a1d14]"
                              : "bg-[#f6f1ea] text-[#2a1d14] border-[#2a1d1422] hover:border-[#2a1d14]"
                          }`}
                          onClick={() => toggleChip(c)}
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={
                      fieldErrors["f-msg"]
                        ? "border-b-2 border-red-500 pb-2"
                        : "border-b border-[#2a1d1422] pb-4"
                    }
                  >
                    <label
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b5847] block mb-3"
                      htmlFor="f-msg"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="f-msg"
                      name="f-msg"
                      placeholder="Tell us about your project — quantities, sizes, timeline, or anything else we should know."
                      className="w-full bg-transparent text-lg outline-none placeholder-[#6b5847]/40 min-h-32"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-[#6b5847] leading-[1.6]">
                      By submitting you agree we may contact you about your
                      enquiry. We don't share your details with anyone else.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#2a1d14] text-[#f6f1ea] px-8 py-3.5 rounded font-sans text-sm font-medium hover:bg-[#8b5e3c] transition-colors"
                    >
                      {submitLabel}{" "}
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-[#2a1d14] text-[#f6f1ea] p-12 space-y-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em]">
                    Received · 200 OK
                  </div>
                  <h3 className="font-serif text-3xl font-bold">
                    Thank you. We&apos;ll be in touch.
                  </h3>
                  <p className="text-[15px] leading-[1.6]">
                    A member of our team will respond within one business day.
                    If it&apos;s urgent, give us a ring — we actually pick up.
                  </p>
                  <div className="font-mono text-sm tracking-[0.05em] border-t border-opacity-20 border-[#f6f1ea] pt-6">
                    {refNumber}
                  </div>
                  <div>
                    <button
                      className="inline-flex items-center gap-2 bg-transparent text-[#f6f1ea] px-8 py-3.5 rounded border border-opacity-30 border-[#f6f1ea] font-sans text-sm font-medium hover:bg-opacity-10 hover:bg-[#f6f1ea] transition-colors"
                      onClick={handleReset}
                    >
                      Send another
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* INFO COLUMN */}
            <aside className="space-y-6">
              <div className="bg-[#2a1d14] text-[#f6f1ea] p-8" data-reveal>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-opacity-70 text-[#f6f1ea] flex items-center gap-2.5 mb-4">
                  <span className="w-6 h-px bg-opacity-50 bg-[#f6f1ea]"></span>
                  01 · Direct lines
                </div>
                <div className="font-serif text-2xl font-bold mb-6">
                  Reach a person, not a form.
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-opacity-70 text-[#f6f1ea] mb-1">
                      Dhaka
                    </div>
                    <div className="text-sm">
                      <a
                        href="tel:02477721103"
                        className="hover:text-[#c68a3a]"
                      >
                        02477721103
                      </a>{" "}
                      |{" "}
                      <a
                        href="tel:01874090410"
                        className="hover:text-[#c68a3a]"
                      >
                        01874090410
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-opacity-70 text-[#f6f1ea] mb-1">
                      Khulna
                    </div>
                    <div className="text-sm">
                      <a href="tel:0255012800" className="hover:text-[#c68a3a]">
                        0255012800
                      </a>{" "}
                      |{" "}
                      <a
                        href="tel:01874090420"
                        className="hover:text-[#c68a3a]"
                      >
                        01874090420
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-opacity-70 text-[#f6f1ea] mb-1">
                      Email
                    </div>
                    <div className="text-sm">
                      <a
                        href="mailto:info@woodtechipl.com"
                        className="hover:text-[#c68a3a]"
                      >
                        info@woodtechipl.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#f6f1ea] p-8 border border-[#2a1d1422]"
                data-reveal
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8b5e3c] flex items-center gap-2.5 mb-4">
                  <span className="w-6 h-px bg-[#8b5e3c]"></span>
                  02 · Offices &amp; Factory
                </div>
                <div className="font-serif text-2xl font-bold mb-6">
                  Where to find us.
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b5847] mb-1">
                      Khulna Office
                    </div>
                    <div className="text-sm mb-2">
                      06 Old Jessore Road, Khulna-9100
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Old+Jessore+Road+Khulna+Bangladesh"
                      className="text-[#8b5e3c] hover:text-[#c68a3a] font-mono text-[10px] uppercase tracking-[0.12em]"
                    >
                      View on map →
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b5847] mb-1">
                      Dhaka Office
                    </div>
                    <div className="text-sm mb-2">
                      Dhaka Trade Centre, Suite No. L, 11th Floor, 99 Kazi
                      Nazrul Islam Avenue, Kawranbazar, Dhaka
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Kawranbazar+Dhaka+Bangladesh"
                      className="text-[#8b5e3c] hover:text-[#c68a3a] font-mono text-[10px] uppercase tracking-[0.12em]"
                    >
                      View on map →
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b5847] mb-1">
                      Factory
                    </div>
                    <div className="text-sm mb-2">
                      Chara bot tolar more, Khulna-Mongla Highway, Fakirhat,
                      Bagerhat
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Fakirhat+Bagerhat+Bangladesh"
                      className="text-[#8b5e3c] hover:text-[#c68a3a] font-mono text-[10px] uppercase tracking-[0.12em]"
                    >
                      View on map →
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#f6f1ea] p-8 border border-[#2a1d1422]"
                data-reveal
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8b5e3c] flex items-center gap-2.5 mb-4">
                  <span className="w-6 h-px bg-[#8b5e3c]"></span>
                  03 · Hours
                </div>
                <div className="font-serif text-2xl font-bold mb-6">
                  Business hours.
                </div>
                <div className="space-y-3 text-sm mb-6 font-mono text-[11px] uppercase tracking-[0.05em] text-[#6b5847]">
                  <div className="flex justify-between">
                    <span>Sunday – Thursday</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM – 2:00 PM</span>
                  </div>
                </div>
                <div
                  className="border-l-4 pl-3 py-2"
                  style={{
                    borderLeftColor: hoursStatus.open ? "#7ab027" : "#8b5e3c",
                  }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b5847]">
                    Status
                  </div>
                  <div className="text-sm font-medium text-[#2a1d14]">
                    {hoursStatus.text}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-24 bg-[#f6f1ea]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <div data-reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8b5e3c] flex items-center gap-2.5 mb-5">
                <span className="w-6 h-px bg-[#8b5e3c]"></span>
                04 / Location
              </div>
              <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] tracking-[-0.02em] mb-4">
                Walk the yard.
              </h2>
            </div>
            <p
              className="text-[18px] text-[#6b5847] leading-[1.6] max-w-[560px]"
              data-reveal
            >
              Visitors welcome by appointment. Email ahead and we'll have
              samples out. Our factory is located on the Khulna-Mongla Highway
              at Fakirhat, Bagerhat.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-[300px_1fr]" data-reveal>
            <div className="space-y-3">
              {[
                {
                  num: "01",
                  name: "Khulna Office",
                  addr: "06 Old Jessore Road, Khulna-9100",
                  phone: "0255012800 | 01874090420",
                  dir: "https://www.google.com/maps/search/?api=1&query=Old+Jessore+Road+Khulna+Bangladesh",
                },
                {
                  num: "02",
                  name: "Dhaka Office",
                  addr: "Dhaka Trade Centre, Suite No. L, 11th Floor, 99 Kazi Nazrul Islam Avenue, Kawranbazar, Dhaka",
                  phone: "02477721103 | 01874090410",
                  dir: "https://www.google.com/maps/search/?api=1&query=Kawranbazar+Dhaka+Bangladesh",
                },
                {
                  num: "03",
                  name: "Factory",
                  addr: "Chara bot tolar more, Khulna-Mongla Highway, Fakirhat, Bagerhat",
                  phone: null as string | null,
                  dir: "https://www.google.com/maps/search/?api=1&query=Fakirhat+Bagerhat+Bangladesh",
                },
              ].map((loc, i) => (
                <div
                  key={i}
                  className={`p-4 border rounded cursor-pointer transition-all ${
                    activeMapIdx === i
                      ? "bg-[#2a1d14] text-[#f6f1ea] border-[#2a1d14]"
                      : "bg-[#f6f1ea] border-[#2a1d1422] hover:border-[#2a1d14]"
                  }`}
                  onClick={() => setActiveMapIdx(i)}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2">
                    {loc.num}
                  </div>
                  <h4 className="font-serif font-bold text-sm mb-1">
                    {loc.name}
                  </h4>
                  <p className="text-xs leading-tight mb-3">{loc.addr}</p>
                  {loc.phone && <p className="text-xs mb-3">{loc.phone}</p>}
                  <a
                    href={loc.dir}
                    className={`text-xs font-mono tracking-[0.1em] uppercase ${activeMapIdx === i ? "hover:opacity-80" : "text-[#8b5e3c] hover:text-[#c68a3a]"}`}
                  >
                    Directions →
                  </a>
                </div>
              ))}
            </div>
            <div className="w-full h-96 bg-[#ede5d8] rounded overflow-hidden">
              <LeafletMap activeIdx={activeMapIdx} />
            </div>
          </div>
        </div>
      </section>

      {/* ALT CONTACT */}
      <section className="py-24 bg-[#f6f1ea]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12" data-reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8b5e3c] flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#8b5e3c]"></span>
              05 / Other ways
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] tracking-[-0.02em]">
              Pick your lane.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <a
              className="p-8 border border-[#2a1d1422] hover:shadow-lg transition-shadow"
              href="mailto:info@woodtechipl.com"
              data-reveal
            >
              <div className="w-11 h-11 border border-[#2a1d14] rounded grid place-items-center mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-[#2a1d14] fill-none"
                  strokeWidth="1.4"
                >
                  <path d="M3 7h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" />
                  <path d="M3 7l9 7 9-7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">
                Request a quote
              </h3>
              <p className="text-sm leading-[1.6] text-[#6b5847] mb-4">
                Send specs, quantities and delivery address. We'll respond with
                pricing and lead time within one business day.
              </p>
              <span className="text-[#8b5e3c] font-mono text-[11px] uppercase tracking-[0.12em] hover:text-[#c68a3a]">
                info@woodtechipl.com →
              </span>
            </a>
            <a
              className="p-8 border border-[#2a1d1422] hover:shadow-lg transition-shadow"
              href="tel:02477721103"
              data-reveal
            >
              <div className="w-11 h-11 border border-[#2a1d14] rounded grid place-items-center mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-[#2a1d14] fill-none"
                  strokeWidth="1.4"
                >
                  <path d="M4 5c0 10 5 15 15 15l2-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">
                Call the yard
              </h3>
              <p className="text-sm leading-[1.6] text-[#6b5847] mb-4">
                For urgent enquiries, site visits or to talk to sales directly.
                We're on the line Sun–Thu 9–6, Sat 9–2.
              </p>
              <span className="text-[#8b5e3c] font-mono text-[11px] uppercase tracking-[0.12em] hover:text-[#c68a3a]">
                02477721103 →
              </span>
            </a>
            <a
              className="p-8 border border-[#2a1d1422] hover:shadow-lg transition-shadow"
              href="#"
              data-reveal
            >
              <div className="w-11 h-11 border border-[#2a1d14] rounded grid place-items-center mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-[#2a1d14] fill-none"
                  strokeWidth="1.4"
                >
                  <rect x="3" y="4" width="18" height="16" rx="1" />
                  <path d="M3 8h18M8 4v16" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">
                Download the spec sheet
              </h3>
              <p className="text-sm leading-[1.6] text-[#6b5847] mb-4">
                Full technical specifications for our plywood and door ranges —
                grades, dimensions, certifications, and warranty terms.
              </p>
              <span className="text-[#8b5e3c] font-mono text-[11px] uppercase tracking-[0.12em] hover:text-[#c68a3a]">
                PDF · 2.4 MB →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
