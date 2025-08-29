import React, { useEffect, useRef } from "react";

export default function ParallaxAura({ size = 220, rippleEveryMs = 120 }) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);
  const lastRippleRef = useRef(0);

  useEffect(() => {
    let frame = null;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Фактори для паралакс-ефекту (різна швидкість руху для кожного шару)
    const parallaxFactors = [0.3, 0.5, 0.7, 0.9, 1.1];

    const placeContainer = (x, y) => {
      if (!containerRef.current) return;
      containerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const updateBlobs = (dx, dy) => {
      blobsRef.current.forEach((blob, index) => {
        if (!blob) return;
        const factor = parallaxFactors[index];
        const offsetX = dx * factor;
        const offsetY = dy * factor;
        blob.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    const makeRipple = () => {
      if (!containerRef.current) return;
      const span = document.createElement("span");
      span.className = "ripple";
      const palette = [
        "79,70,229",
        "34,211,238",
        "168,85,247",
        "16,185,129",
        "255,255,255",
      ];
      const col = palette[Math.floor(Math.random() * palette.length)];
      span.style.setProperty("--col", col);
      containerRef.current.appendChild(span);
      span.addEventListener("animationend", () => span.remove(), { once: true });
    };

    const onMove = (e) => {
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      const y = e.clientY ?? e.touches?.[0]?.clientY;
      if (x == null || y == null) return;

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const dx = (x - centerX) * 0.1;
        const dy = (y - centerY) * 0.1;

        placeContainer(x, y);
        updateBlobs(dx, dy);

        const now = performance.now();
        if (now - lastRippleRef.current > rippleEveryMs) {
          lastRippleRef.current = now;
          makeRipple();
        }
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [rippleEveryMs, size]);

  return (
    <div
      className="parallax-aura"
      ref={containerRef}
      style={{ width: size, height: size }}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`blob b${i}`}
          ref={(el) => (blobsRef.current[i - 1] = el)}
        />
      ))}
    </div>
  );
}