import React, { useEffect, useRef, useState } from 'react';
import { playWandSparkle } from '../services/soundEffects';

interface WizardCanvasProps {
  onInteract?: () => void;
}

export const WizardCanvas: React.FC<WizardCanvasProps> = ({ onInteract }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const sparks: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const sparkColors = ['#F59E0B', '#FCD34D', '#FEF08A', '#A855F7', '#38BDF8', '#FFFFFF'];

    const render = () => {
      time += 0.035;
      const width = canvas.width = 380;
      const height = canvas.height = 380;

      ctx.clearRect(0, 0, width, height);

      // Wizard center
      const cx = width / 2;
      const cy = height / 2 + 10;

      // Gentle floating hover
      const floatY = Math.sin(time * 1.5) * 6;

      // Wand tip position calculation
      const wandAngle = -0.45 + Math.sin(time * 2) * 0.25;
      const wandLen = 105;
      const handX = cx + 55;
      const handY = cy - 20 + floatY;
      const tipX = handX + Math.cos(wandAngle) * wandLen;
      const tipY = handY + Math.sin(wandAngle) * wandLen;

      // Spawn magical sparks from wand tip continuously
      if (Math.random() < 0.75) {
        sparks.push({
          x: tipX + (Math.random() - 0.5) * 6,
          y: tipY + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.8 + Math.cos(wandAngle) * 0.5,
          vy: (Math.random() - 0.8) * 2,
          size: Math.random() * 3.5 + 1.5,
          alpha: 1,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          life: 0,
          maxLife: Math.floor(Math.random() * 45 + 30)
        });
      }

      // Update & Draw Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.02; // soft gravity
        s.alpha = Math.max(0, 1 - s.life / s.maxLife);

        if (s.life >= s.maxLife) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = s.color;

        // Draw 4-point star sparkle
        const r = s.size;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y - r * 1.6);
        ctx.lineTo(s.x + r * 0.5, s.y - r * 0.5);
        ctx.lineTo(s.x + r * 1.6, s.y);
        ctx.lineTo(s.x + r * 0.5, s.y + r * 0.5);
        ctx.lineTo(s.x, s.y + r * 1.6);
        ctx.lineTo(s.x - r * 0.5, s.y + r * 0.5);
        ctx.lineTo(s.x - r * 1.6, s.y);
        ctx.lineTo(s.x - r * 0.5, s.y - r * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // Glow behind the wand crystal
      const glowGrad = ctx.createRadialGradient(tipX, tipY, 2, tipX, tipY, 45);
      glowGrad.addColorStop(0, 'rgba(252, 211, 77, 0.85)');
      glowGrad.addColorStop(0.3, 'rgba(245, 158, 11, 0.45)');
      glowGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(tipX, tipY, 45, 0, Math.PI * 2);
      ctx.fill();

      // Draw Wizard Body
      ctx.save();
      ctx.translate(cx, cy + floatY);

      // --- Robe Shadow & Base ---
      ctx.fillStyle = '#0F1226';
      ctx.beginPath();
      ctx.moveTo(-65, 130);
      ctx.quadraticCurveTo(0, 140, 65, 130);
      ctx.lineTo(40, -10);
      ctx.lineTo(-40, -10);
      ctx.closePath();
      ctx.fill();

      // Robe main (Midnight Violet with gold hem)
      const robeGrad = ctx.createLinearGradient(-50, 0, 50, 130);
      robeGrad.addColorStop(0, '#1E1B4B');
      robeGrad.addColorStop(0.6, '#312E81');
      robeGrad.addColorStop(1, '#4338CA');

      ctx.fillStyle = robeGrad;
      ctx.beginPath();
      ctx.moveTo(-55, 125);
      ctx.quadraticCurveTo(0, 135, 55, 125);
      ctx.lineTo(35, -5);
      ctx.lineTo(-35, -5);
      ctx.closePath();
      ctx.fill();

      // Gold robe trim
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(-55, 125);
      ctx.quadraticCurveTo(0, 135, 55, 125);
      ctx.stroke();

      // Gold Belt
      ctx.fillStyle = '#D97706';
      ctx.fillRect(-32, 45, 64, 10);
      ctx.fillStyle = '#FCD34D';
      ctx.fillRect(-8, 42, 16, 16);
      ctx.fillStyle = '#1E1B4B';
      ctx.fillRect(-4, 46, 8, 8);

      // --- Whimsical Flowing Silver Beard ---
      const beardSway = Math.sin(time * 2.2) * 4;
      ctx.fillStyle = '#E2E8F0';
      ctx.beginPath();
      ctx.moveTo(-28, 5);
      ctx.quadraticCurveTo(-38 + beardSway, 45, -15 + beardSway, 75);
      ctx.quadraticCurveTo(0 + beardSway * 1.5, 92, 15 + beardSway, 75);
      ctx.quadraticCurveTo(38 + beardSway, 45, 28, 5);
      ctx.closePath();
      ctx.fill();

      // Beard texture strands
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-10, 15);
      ctx.quadraticCurveTo(-15 + beardSway, 50, -5 + beardSway, 80);
      ctx.moveTo(8, 15);
      ctx.quadraticCurveTo(12 + beardSway, 50, 4 + beardSway, 80);
      ctx.stroke();

      // --- Wizard Face ---
      ctx.fillStyle = '#FDE68A';
      ctx.beginPath();
      ctx.arc(0, -10, 24, 0, Math.PI * 2);
      ctx.fill();

      // Cheeks
      ctx.fillStyle = '#FCA5A5';
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(-14, -6, 5, 0, Math.PI * 2);
      ctx.arc(14, -6, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Whimsical Nose
      ctx.fillStyle = '#FCD34D';
      ctx.beginPath();
      ctx.arc(0, -9, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Twinkling Eyes
      ctx.fillStyle = '#1E1B4B';
      ctx.beginPath();
      ctx.arc(-8, -14, 2.8, 0, Math.PI * 2);
      ctx.arc(8, -14, 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Eye glimmer
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(-7, -15, 1.2, 0, Math.PI * 2);
      ctx.arc(9, -15, 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Whimsical Eyebrows
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-14, -20);
      ctx.quadraticCurveTo(-8, -23, -2, -19);
      ctx.moveTo(2, -19);
      ctx.quadraticCurveTo(8, -23, 14, -20);
      ctx.stroke();

      // --- Wizard Hat ---
      // Brim
      ctx.fillStyle = '#1E1B4B';
      ctx.beginPath();
      ctx.ellipse(0, -22, 54, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(0, -22, 54, 14, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Pointed cone with bend
      const hatGrad = ctx.createLinearGradient(-30, -100, 30, -22);
      hatGrad.addColorStop(0, '#312E81');
      hatGrad.addColorStop(1, '#1E1B4B');
      ctx.fillStyle = hatGrad;

      ctx.beginPath();
      ctx.moveTo(-35, -24);
      ctx.quadraticCurveTo(-30, -70, -5, -105);
      ctx.quadraticCurveTo(5, -112, 18, -100);
      ctx.quadraticCurveTo(28, -60, 35, -24);
      ctx.closePath();
      ctx.fill();

      // Hat gold buckle & band
      ctx.fillStyle = '#F59E0B';
      ctx.fillRect(-28, -32, 56, 8);
      ctx.fillStyle = '#FDE68A';
      ctx.fillRect(-8, -35, 16, 14);
      ctx.fillStyle = '#1E1B4B';
      ctx.fillRect(-4, -32, 8, 8);

      // Glowing Crescent Moon on Hat
      ctx.fillStyle = '#FCD34D';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#FCD34D';
      ctx.beginPath();
      ctx.arc(2, -72, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#262466';
      ctx.beginPath();
      ctx.arc(5, -74, 7, 0, Math.PI * 2);
      ctx.fill();

      // Hat tip golden bell/star
      ctx.fillStyle = '#FCD34D';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#F59E0B';
      ctx.beginPath();
      ctx.arc(16, -102, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();

      // --- Draw Wand Arm & Carved Wand ---
      ctx.save();
      // Arm sleeve
      ctx.fillStyle = '#312E81';
      ctx.beginPath();
      ctx.moveTo(cx + 25, cy + 10 + floatY);
      ctx.quadraticCurveTo(cx + 40, cy + 5 + floatY, handX, handY);
      ctx.lineTo(handX - 5, handY + 12);
      ctx.quadraticCurveTo(cx + 30, cy + 25 + floatY, cx + 20, cy + 25 + floatY);
      ctx.closePath();
      ctx.fill();

      // Wizard Hand
      ctx.fillStyle = '#FDE68A';
      ctx.beginPath();
      ctx.arc(handX, handY + 2, 7, 0, Math.PI * 2);
      ctx.fill();

      // Wand Shaft
      ctx.save();
      ctx.translate(handX, handY);
      ctx.rotate(wandAngle);

      ctx.fillStyle = '#78350F';
      ctx.fillRect(-5, -3, wandLen + 5, 6);

      // Gold wand bindings
      ctx.fillStyle = '#F59E0B';
      ctx.fillRect(15, -4, 4, 8);
      ctx.fillRect(50, -4, 4, 8);
      ctx.fillRect(85, -4, 5, 8);

      // Crystal at tip
      ctx.fillStyle = '#FEF08A';
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#F59E0B';
      ctx.beginPath();
      ctx.moveTo(wandLen, 0);
      ctx.lineTo(wandLen + 12, -6);
      ctx.lineTo(wandLen + 20, 0);
      ctx.lineTo(wandLen + 12, 6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handlePointer = () => {
    playWandSparkle();
    if (onInteract) onInteract();
  };

  return (
    <div
      ref={containerRef}
      id="wizard-character-stage"
      onClick={handlePointer}
      onMouseEnter={() => {
        setIsHovered(true);
        playWandSparkle();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center cursor-pointer group"
      title="Click or hover to channel the wizard's movie magic!"
    >
      {/* Background celestial aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-amber-500/10 to-purple-600/20 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />

      {/* Main vector wizard canvas */}
      <canvas
        ref={canvasRef}
        width={380}
        height={380}
        className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter transition-transform duration-300 group-hover:scale-105"
      />

      {/* Interactive prompt tooltip */}
      <div className="absolute -bottom-2 bg-slate-900/90 border border-amber-500/40 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300 shadow-lg flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:border-amber-400 transition-all">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span>Cast Magic Wand</span>
      </div>
    </div>
  );
};
