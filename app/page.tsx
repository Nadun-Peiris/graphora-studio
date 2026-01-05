"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function Home() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      setCursorVisible(true);
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setRenderPos(positionRef.current);
          rafRef.current = null;
        });
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      {/* Background stack */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-1/2 top-1/3 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial opacity-80 glow-pulse" />
        <div className="absolute left-[15%] top-[25%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial opacity-45 glow-pulse glow-pulse-delay-1" />
        <div className="absolute right-[12%] top-[55%] h-[380px] w-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial opacity-35 glow-pulse glow-pulse-delay-2" />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="grid-line grid-line-h absolute"
            style={{ "--row": 2 } as React.CSSProperties }
          />
          <div
            className="grid-line grid-line-h-reverse grid-line-delay-1 absolute"
            style={{ "--row": 4 } as React.CSSProperties }
          />
          <div
            className="grid-line grid-line-h grid-line-delay-2 absolute"
            style={{ "--row": 7 } as React.CSSProperties }
          />
          <div
            className="grid-line grid-line-h-reverse grid-line-delay-3 absolute"
            style={{ "--row": 9 } as React.CSSProperties }
          />

          <div
            className="grid-line grid-line-v absolute"
            style={{ "--col": 2 } as React.CSSProperties }
          />
          <div
            className="grid-line grid-line-v-reverse grid-line-delay-1 absolute"
            style={{ "--col": 5 } as React.CSSProperties }
          />
          <div
            className="grid-line grid-line-v grid-line-delay-2 absolute"
            style={{ "--col": 8 } as React.CSSProperties }
          />
          <div
            className="grid-line grid-line-v-reverse grid-line-delay-3 absolute"
            style={{ "--col": 11 } as React.CSSProperties }
          />
        </div>
      </div>

      {/* Cursor effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="cursor-glow absolute"
          style={{
            transform: `translate3d(${renderPos.x}px, ${renderPos.y}px, 0) translate(-50%, -50%)`,
            opacity: cursorVisible ? 1 : 0,
          }}
        />
        <div
          className="cursor-dot absolute"
          style={{
            transform: `translate3d(${renderPos.x}px, ${renderPos.y}px, 0) translate(-50%, -50%)`,
            opacity: cursorVisible ? 1 : 0,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1
          className="font-heading mb-4 text-3xl font-semibold tracking-tight text-sky-100"
          style={{ fontFamily: 'var(--font-heading), "MuseoModerno", system-ui, sans-serif' }}
        >
          Graphora Studio
        </h1>

        <h2
          className="font-heading text-5xl font-bold tracking-tight sm:text-6xl"
          style={{ fontFamily: 'var(--font-heading), "MuseoModerno", system-ui, sans-serif' }}
        >
          Coming Soon.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
          We’re building a modern digital studio focused on web development,
          branding, and creative digital solutions.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="https://wa.me/94766005631"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-18px_rgba(255,255,255,0.9)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white hover:shadow-[0_15px_35px_-18px_rgba(255,255,255,0.95)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
            <FaWhatsapp aria-hidden />
            WhatsApp +94 76 600 5631
          </a>
          <a
            href="mailto:graphorastudiopvtltd@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-18px_rgba(255,255,255,0.9)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white hover:shadow-[0_15px_35px_-18px_rgba(255,255,255,0.95)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FiMail aria-hidden />
            graphorastudiopvtltd@gmail.com
          </a>
        </div>

        <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white">
          © 2026 Graphora Studio
        </footer>
      </div>
    </main>
  );
}
