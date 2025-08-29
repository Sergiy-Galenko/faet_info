import React, { useEffect, useRef } from "react";

/**
 * Високопродуктивний particle cursor без помилок хуків.
 * - усі хуки викликаються безумовно
 * - робота вимикається прапором `disabled`
 * - offscreen-спрайти, адаптивна деградація, пауза у неактивній вкладці
 */
export default function ParticleCursor({
  colors = ["#4f46e5", "#22d3ee", "#a855f7", "#10b981", "#ffffff"],
  baseSpawn = 4,
  spawnFactor = 0.12,
  radius = [1.4, 2.6],
  speed = [0.6, 1.3],
  friction = 0.92,
  life = [26, 42],
  trail = 0.10,
  maxParticles = 320,
  disableOnMobile = true,
}) {
  // --- визначення прапорів (без хуків)
  const isBrowser = typeof window !== "undefined";
  const prefersReduce =
    isBrowser &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarse =
    isBrowser &&
    window.matchMedia &&
    window.matchMedia("(pointer: coarse)").matches;

  const disabled = prefersReduce || (disableOnMobile && isCoarse);

  // --- ХУКИ: викликаємо завжди, без умовних return
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const dprRef = useRef(1);

  const parts = useRef([]); // активні частинки
  const pool = useRef([]);  // пул переробки

  const initialX = isBrowser ? window.innerWidth / 2 : 0;
  const initialY = isBrowser ? window.innerHeight / 2 : 0;
  const initialT = isBrowser ? performance.now() : 0;

  const lastPos = useRef({ x: initialX, y: initialY, t: initialT });
  const rafRef = useRef(0);
  const fpsRef = useRef(60);
  const lowRef = useRef(false);

  const spritesRef = useRef([]);

  // утиліти
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[(Math.random() * arr.length) | 0];

  const buildSprites = (palette) => {
    spritesRef.current = palette.map((hex) => {
      const s = 48;
      const off = document.createElement("canvas");
      off.width = off.height = s;
      const c = off.getContext("2d");
      const { r, g, b } = hexToRgb(hex);
      const grd = c.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      grd.addColorStop(0.0, `rgba(${r},${g},${b},0.95)`);
      grd.addColorStop(0.35, `rgba(${r},${g},${b},0.55)`);
      grd.addColorStop(1.0, `rgba(${r},${g},${b},0)`);
      c.fillStyle = grd;
      c.fillRect(0, 0, s, s);
      return off;
    });
  };

  useEffect(() => {
    // Якщо вимкнено — нічого не робимо (хук викликано, але ефект зупинено)
    if (disabled) return;

    buildSprites(colors);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    ctxRef.current = ctx;

    const fit = () => {
      const ideal = Math.max(1, window.devicePixelRatio || 1);
      const dpr = lowRef.current ? 1 : Math.min(1.5, ideal);
      dprRef.current = dpr;

      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h };

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgba(11,18,32,${trail})`;
    };

    fit();
    window.addEventListener("resize", fit);

    let visible = true;
    const onVis = () => {
      visible = !document.hidden;
      if (!visible) ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    document.addEventListener("visibilitychange", onVis);

    const onMove = (e) => {
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      const y = e.clientY ?? e.touches?.[0]?.clientY;
      if (x == null || y == null) return;

      const lp = lastPos.current;
      const dx = x - lp.x,
        dy = y - lp.y;
      const dist = Math.hypot(dx, dy);

      let n = baseSpawn + dist * spawnFactor;
      if (lowRef.current) n *= 0.5;
      n = Math.min(n, 12);

      for (let i = 0; i < n; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = rnd(speed[0], speed[1]);
        let p = pool.current.pop();
        if (!p) p = {};
        p.x = x;
        p.y = y;
        p.vx = Math.cos(angle) * spd;
        p.vy = Math.sin(angle) * spd;
        p.r = rnd(radius[0], radius[1]);
        p.life = rnd(life[0], life[1]);
        p.ttl = 0;
        p.sprite = pick(spritesRef.current);
        parts.current.push(p);
      }

      if (parts.current.length > maxParticles) {
        pool.current.push(
          ...parts.current.splice(0, parts.current.length - maxParticles)
        );
      }

      lp.x = x;
      lp.y = y;
      lp.t = performance.now();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });

    let last = performance.now();
    let fpsAvg = 60;

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      if (!visible) return;

      const now = performance.now();
      const dt = Math.min(32, now - last);
      last = now;

      const fps = 1000 / (dt || 16.7);
      fpsAvg = fpsAvg * 0.9 + fps * 0.1;
      fpsRef.current = fpsAvg;

      if (fpsAvg < 45 && !lowRef.current) {
        lowRef.current = true;
        fit();
      }
      if (fpsAvg > 57 && lowRef.current) {
        lowRef.current = false;
        fit();
      }

      const { w, h } = sizeRef.current;
      const ctx = ctxRef.current;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      const arr = parts.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;
        p.ttl += dt / 16.67;

        const t = 1 - p.ttl / p.life; // 1..0
        if (
          t <= 0 ||
          p.x < -50 ||
          p.x > w + 50 ||
          p.y < -50 ||
          p.y > h + 50
        ) {
          pool.current.push(arr[i]);
          arr.splice(i, 1);
          continue;
        }

        const alpha = Math.max(0, Math.min(1, t));
        const scale = Math.max(0.6, t) * (p.r / 2.2 + 0.7);
        const s = p.sprite.width * scale;

        ctx.globalAlpha = alpha;
        ctx.drawImage(p.sprite, p.x - s / 2, p.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", fit);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    disabled, colors, baseSpawn, spawnFactor, radius, speed,
    friction, life, trail, maxParticles, disableOnMobile,
  ]);

  // РЕНДЕР: якщо вимкнено — нічого не показуємо (хуки вже викликані вище)
  if (disabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

function hexToRgb(hex) {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const num = parseInt(h, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}
