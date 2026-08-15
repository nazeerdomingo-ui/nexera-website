"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white flex flex-col"
      style={{ height: "100svh" }}
    >
      {/* Slide content */}
      <div className="flex-1 flex flex-col justify-center overflow-hidden pt-20">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 flex flex-col items-center h-full justify-center">
          {slide.type === "text" ? (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-indigo-800/50 border border-indigo-700 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-6">
                🇿🇦 Built for South African businesses
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Payroll made simple.<br />
                <span className="text-indigo-400">Compliance made easy.</span>
              </h1>
              <p className="text-lg sm:text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
                NexEra is a cloud-based payroll and people management platform built specifically for South African businesses. SARS compliant, secure, and easy to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg"
                >
                  Get Started
                </a>
                <Link
                  href="/pricing"
                  className="border border-indigo-500 hover:bg-indigo-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full h-full justify-center gap-4">
              <div className="text-center mt-2">
                <span className="inline-block bg-indigo-700/60 border border-indigo-600 rounded-full px-4 py-1 text-sm text-indigo-200 mb-2">
                  {slide.label}
                </span>
                <p className="text-indigo-200 text-sm sm:text-base max-w-2xl mx-auto">
                  {slide.caption}
                </p>
              </div>
              <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl border border-indigo-700/40 flex-1 min-h-0 relative">
                <Image
                  src={slide.src}
                  alt={slide.label}
                  width={1920}
                  height={947}
                  className="w-full h-full object-cover object-top"
                  priority={current === 1}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-4 flex-shrink-0">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-indigo-400"
                : "w-2 h-2 bg-indigo-700 hover:bg-indigo-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
