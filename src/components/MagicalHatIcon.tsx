import React from 'react';

interface MagicalHatIconProps {
  className?: string;
  size?: number;
}

/**
 * Wizard Hat Icon matching the exact wizard hat from the homepage canvas:
 * - Midnight indigo / deep violet pointed cone curving to the right
 * - Golden bell / orb star at the bent tip
 * - Glowing celestial crescent moon with inner shadow on the cone
 * - Gold buckle and gold belt band across the base
 * - Oval wide indigo brim with gold rim stroke
 */
export const MagicalHatIcon: React.FC<MagicalHatIconProps> = ({
  className = 'w-6 h-6',
  size
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <defs>
        {/* Hat Cone Gradient (Midnight indigo to deep royal purple) */}
        <linearGradient id="wizardHatGrad" x1="20" y1="10" x2="80" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4338CA" />
          <stop offset="40%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </linearGradient>

        {/* Gold Belt & Rim Gradient */}
        <linearGradient id="wizardGoldGrad" x1="10" y1="70" x2="90" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Tip Bell Glow */}
        <radialGradient id="bellGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>
      </defs>

      {/* 1. Pointed cone with whimsical curve to top-right matching WizardCanvas */}
      <path
        d="M20 74C23 45 42 22 66 12C74 8 83 14 78 22C74 29 67 36 67 48C67 60 76 70 80 74H20Z"
        fill="url(#wizardHatGrad)"
      />

      {/* 2. Celestial Crescent Moon on the Hat Cone */}
      {/* Outer yellow disc */}
      <circle cx="49" cy="42" r="9" fill="#FCD34D" />
      {/* Subtracting inner shadow to create the crescent moon */}
      <circle cx="53" cy="40" r="7.8" fill="#312E81" />

      {/* 3. Gold Hat Band / Ribbon */}
      <path
        d="M21.5 66.5H78.5C79.2 69 79.8 71.5 80 74H20C20.2 71.5 20.8 69 21.5 66.5Z"
        fill="url(#wizardGoldGrad)"
      />

      {/* 4. Gold Buckle at Center */}
      <rect
        x="42"
        y="64.5"
        width="16"
        height="12"
        rx="2.5"
        fill="#FDE68A"
        stroke="#78350F"
        strokeWidth="1.5"
      />
      {/* Inner Buckle Hole */}
      <rect
        x="46"
        y="67"
        width="8"
        height="7"
        rx="1.2"
        fill="#1E1B4B"
      />

      {/* 5. Wide Oval Brim at Bottom */}
      <ellipse
        cx="50"
        cy="78"
        rx="44"
        ry="12"
        fill="#1E1B4B"
      />
      <ellipse
        cx="50"
        cy="78"
        rx="44"
        ry="12"
        stroke="url(#wizardGoldGrad)"
        strokeWidth="2.8"
      />

      {/* 6. Glowing Golden Orb / Bell at Tip */}
      <circle
        cx="72"
        cy="15"
        r="6.5"
        fill="url(#bellGlow)"
      />
      {/* Bell Highlight Glimmer */}
      <circle
        cx="70"
        cy="13"
        r="2"
        fill="#FFFFFF"
        opacity="0.9"
      />

      {/* 7. Magic Sparkles floating around hat */}
      <path
        d="M14 38L15.5 42.5L20 44L15.5 45.5L14 50L12.5 45.5L8 44L12.5 42.5L14 38Z"
        fill="#FDE68A"
        opacity="0.95"
      />
      <circle cx="86" cy="36" r="2.2" fill="#FEF08A" opacity="0.85" />
    </svg>
  );
};
