/* Constellation background: stars drift, link up when close, and flee the cursor. */
(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  // With "reduce motion" enabled in the OS, stars are drawn once and stay still.
  const still = false; // window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mouse = { x: null, y: null, r: 0 };
  let w, h, stars = [], raf, resizeT;

  function init() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
    mouse.r = (h / 80) * (w / 80);                       // cursor influence radius
    const n = Math.min(180, Math.floor((w * h) / 9000)); // star count
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      s: Math.random() * 2 + 1
    }));
  }

  function draw(move) {
    ctx.clearRect(0, 0, w, h);
    for (const p of stars) {
      if (move) {
        if (p.x < 0 || p.x > w) p.vx = -p.vx;
        if (p.y < 0 || p.y > h) p.vy = -p.vy;
        if (mouse.x !== null) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < mouse.r && d > 0) {                    // push away from the cursor
            p.x = Math.min(w, Math.max(0, p.x + (dx / d) * 2.5));
            p.y = Math.min(h, Math.max(0, p.y + (dy / d) * 2.5));
          }
        }
        p.x += p.vx; p.y += p.vy;
      }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2); ctx.fillStyle = '#6366f1'; ctx.fill();
    }
    for (let a = 0; a < stars.length; a++) {
      for (let b = a + 1; b < stars.length; b++) {
        const d2 = (stars[a].x - stars[b].x) ** 2 + (stars[a].y - stars[b].y) ** 2;
        if (d2 < 20000) {
          ctx.strokeStyle = 'rgba(99,102,241,' + (1 - d2 / 20000) * 0.15 + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(stars[a].x, stars[a].y); ctx.lineTo(stars[b].x, stars[b].y); ctx.stroke();
        }
      }
    }
  }

  function loop() { draw(true); raf = requestAnimationFrame(loop); }

  addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('mouseleave', () => { mouse.x = mouse.y = null; });
  addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(() => { init(); if (still) draw(false); }, 150); });
  document.addEventListener('visibilitychange', () => {
    if (still) return;
    cancelAnimationFrame(raf);
    if (!document.hidden) loop();
  });

  init();
  if (still) draw(false); else loop();
})();
