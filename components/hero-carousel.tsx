"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Rings } from "@/components/brand";

const slides = [
  { type: "text" as const },
  {
    type: "screen" as const,
    src: "/screenshots/dashboard.png",
    label: "Payroll Dashboard",
    caption: "Real-time payroll overview — YTD gross, PAYE, net pay, and payroll trends at a glance.",
  },
  {
    type: "screen" as const,
    src: "/screenshots/employee.png",
    label: "Employee Management",
    caption: "Complete employee profiles with payslips, leave balances, documents, and cost centre allocations.",
  },
  {
    type: "screen" as const,
    src: "/screenshots/payroll.png",
    label: "Payroll Processing",
    caption: "Run, lock, and export payroll in minutes — EFT files, GL journals, UIF, and payslips in one click.",
  },
  {
    type: "screen" as const,
    src: "/screenshots/leave.png",
    label: "Leave Management",
    caption: "Record, approve, and track annual, sick, and family responsibility leave — all in one place.",
  },
  {
    type: "screen" as const,
    src: "/screenshots/reports.png",
    label: "SARS Compliance Reports",
    caption: "EMP201, EMP501, IRP5 certificates, and 12-month reports — always submission-ready.",
  },
  {
    type: "screen" as const,
    src: "/screenshots/audit.png",
    label: "Audit Trail",
    caption: "A complete, tamper-proof log of every action performed in the system — who did what and when.",
  },
  {
    type: "screen" as const,
    src: "/screenshots/settings.png",
    label: "Company Settings",
    caption: "Set up your company, manage users, configure payroll components, departments, and cost centres.",
  },
  {
    type: "screen" as const,
    src: "/screenshots/portal.png",
    label: "Employee Self-Service Portal",
    caption: "Employees view payslips, apply for leave, and update their details — no admin needed.",
  },
];

const INTERVAL = 4500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    startTimer(); // reset the timer so it counts from now
  };

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden bg-ink text-white flex flex-col"
      style={{ height: "100svh" }}
    >
      {/* Backdrop: grid texture, amethyst glow and the card's rings */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[820px] max-w-[120vw] h-[520px] rounded-full bg-amethyst/35 blur-[140px] animate-glow" />
      <div className="absolute -left-40 top-24 w-[420px] h-[420px] rounded-full bg-lilac/10 blur-[120px]" />
      <Rings className="w-[640px] -right-56 -bottom-72 opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      {/* Slide content */}
      <div className="relative flex-1 flex flex-col justify-center overflow-hidden pt-20">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 flex flex-col items-center h-full justify-center">
          {slide.type === "text" ? (
            <div key="text" className="text-center animate-rise">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-haze mb-8 border border-white/10 bg-white/[0.04] backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full bg-lilac shadow-[0_0_10px_2px_rgba(134,135,190,0.8)]" />
                🇿🇦 Built for South African businesses
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mb-7 leading-[1.05]">
                Payroll made simple.<br />
                <span className="text-shine">Compliance made easy.</span>
              </h1>
              <p className="text-lg sm:text-xl text-silver max-w-2xl mx-auto mb-11 leading-relaxed">
                NexEra is a cloud-based payroll and people management platform built specifically for South African businesses. SARS compliant, secure, and easy to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary font-semibold px-8 py-3.5 rounded-full text-lg"
                >
                  Get Started
                </a>
                <Link
                  href="/pricing"
                  className="btn-ghost font-semibold px-8 py-3.5 rounded-full text-lg"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          ) : (
            <div key={slide.src} className="flex flex-col items-center w-full h-full justify-center gap-5 animate-rise">
              <div className="text-center mt-2">
                <span className="eyebrow inline-block rounded-full px-4 py-1.5 mb-3 border border-white/10 bg-white/[0.04]">
                  {slide.label}
                </span>
                <p className="text-silver text-sm sm:text-base max-w-2xl mx-auto">
                  {slide.caption}
                </p>
              </div>
              <div className="w-full max-w-5xl flex-1 min-h-0 flex items-center justify-center">
                <Image
                  src={slide.src}
                  alt={slide.label}
                  width={1920}
                  height={slide.src === "/screenshots/portal.png" ? 870 : 933}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl ring-1 ring-white/10 shadow-[0_40px_120px_-30px_rgba(125,112,214,0.65)]"
                  priority={current === 1}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="relative flex justify-center gap-2 py-5 flex-shrink-0">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 h-2 bg-gradient-to-r from-lilac to-amethyst-bright shadow-[0_0_12px_rgba(134,135,190,0.8)]"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
