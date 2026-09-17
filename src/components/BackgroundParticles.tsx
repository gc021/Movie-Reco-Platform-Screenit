import React, { useEffect, useRef } from 'react';

export const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle setup
    const particleCount = Math.min(width > 768 ? 65 : 35, 90);
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      pulseSpeed: number;
      phase: number;
      speedY: number;
      speedX: number;
      color: string;
      glowColor: string;
      isStar: boolean;
    }> = [];

    const colors = [
      { fill: '#F59E0B', glow: '#FCD34D' },
      { fill: '#FCD34D', glow: '#FEF08A' },
      { fill: '#818CF8', glow: '#A5B4FC' },
      { fill: '#C084FC', glow: '#E879F9' },
      { fill: '#38BDF8', glow: '#7DD3FC' }
    ];

    for (let i = 0; i < particleCount; i++) {
      const col = colors[Math.floor(Math.random() * colors.length)];
      const isStar = Math.random() < 0.25;
      const baseAlpha = Math.random() * 0.5 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isStar ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
        speedY: (Math.random() - 0.5) * 0.2,
        speedX: (Math.random() - 0.5) * 0.2,
        color: col.fill,
        glowColor: col.glow,
        isStar
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render atmospheric cosmic particles
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha = p.baseAlpha + Math.sin(time * 2 + p.phase) * (p.baseAlpha * 0.5);

        ctx.save();
        ctx.globalAlpha = Math.max(0.05, Math.min(0.9, p.alpha));
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.isStar ? 12 : 6;
        ctx.shadowColor = p.glowColor;

        if (p.isStar) {
          // Draw mini diamond star
          const r = p.radius;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - r * 1.8);
          ctx.lineTo(p.x + r * 0.4, p.y - r * 0.4);
          ctx.lineTo(p.x + r * 1.8, p.y);
          ctx.lineTo(p.x + r * 0.4, p.y + r * 0.4);
          ctx.lineTo(p.x, p.y + r * 1.8);
          ctx.lineTo(p.x - r * 0.4, p.y + r * 0.4);
          ctx.lineTo(p.x - r * 1.8, p.y);
          ctx.lineTo(p.x - r * 0.4, p.y - r * 0.4);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
};

