import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  User, Smartphone, Sparkles, ShieldCheck, ArrowRight,
  Film, MessageSquare, Bell, Lock, CheckCircle2
} from 'lucide-react';
import { MagicalHatIcon } from './MagicalHatIcon';
import { playSelectChime, playQuestVictory } from '../services/soundEffects';
import { trackEvent } from '../services/analytics';
import { QuizAnswers, WizardType } from '../types';

interface ContactGateScreenProps {
  answers: Partial<QuizAnswers>;
  activeWizard: WizardType;
  onUnlockRecommendations: (contactData: { name: string; phone: string; countryCode: string }) => void;
  onBackToQuiz?: () => void;
}

export const ContactGateScreen: React.FC<ContactGateScreenProps> = ({
  answers,
  activeWizard,
  onUnlockRecommendations,
  onBackToQuiz
}) => {
  // Check if previously saved contact data exists in localStorage
  const savedContact = (() => {
    try {
      const raw = localStorage.getItem('screenit_user_contact');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const [name, setName] = useState(savedContact?.name || '');
  const [phoneNumber, setPhoneNumber] = useState(
    savedContact?.phone ? savedContact.phone.replace(/^\+\d{1,3}/, '') : ''
  );
  const [countryCode, setCountryCode] = useState(savedContact?.countryCode || '+91');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    if (raw.length <= 10) {
      setPhoneNumber(raw);
      if (phoneError) setPhoneError('');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (nameError) setNameError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!name.trim()) {
      setNameError('Please enter your name');
      hasError = true;
    }

    if (phoneNumber.length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      hasError = true;
    }

    if (hasError) return;

    setIsSubmitting(true);
    playQuestVictory();

    const contactPayload = {
      name: name.trim(),
      phone: `${countryCode}${phoneNumber}`,
      countryCode,
      submittedAt: Date.now()
    };

    try {
      localStorage.setItem('screenit_user_contact', JSON.stringify(contactPayload));
      trackEvent('contact_gate_submitted', { name: name.trim(), wizard: activeWizard });
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }

    // Graceful flourish before revealing
    setTimeout(() => {
      onUnlockRecommendations(contactPayload);
    }, 350);
  };

  const isFormValid = name.trim().length >= 2 && phoneNumber.length === 10;

  return (
    <div id="contact-gate-container" className="py-8 px-4 sm:px-6 max-w-3xl mx-auto space-y-8 min-h-[75vh] flex flex-col justify-center">
      {/* Top Magical Divination Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full atmospheric-glass border-amber-400/60 text-amber-300 text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(245,158,11,0.25)]">
          <MagicalHatIcon className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>7-Question Divination Complete • 3 Movie Picks Ready</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight">
          Unlock Your <span className="text-amber-300 text-gold-glow">Curated Recommendations</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          The Council of Oracles has selected 3 tailored masterpieces for your quest. Enter your details to unveil your recommendations and receive direct Indian OTT streaming links.
        </p>
      </motion.div>

      {/* Main Parchment Card Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="parchment-card rounded-3xl p-6 sm:p-10 border-2 border-amber-400/60 shadow-[0_0_60px_rgba(245,158,11,0.3)] relative overflow-hidden"
      >
        {/* Atmospheric background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* Summary Pills of user's quest */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Mission: <strong className="text-slate-100">{answers.q1Mission || 'Movie Adventure'}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Party: <strong className="text-slate-100">{answers.q3Party || 'Solo'}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Weapon: <strong className="text-slate-100">{answers.q4Weapon || 'Cinematic magic'}</strong></span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Field 1: User's Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-200">
                Your Name <span className="text-amber-400">*</span>
              </label>
              <div className="relative flex items-center rounded-xl bg-slate-950/90 border border-slate-700 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-500/30 transition-all overflow-hidden">
                <User className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Enter your name (e.g. Gaurav Sharma)"
                  value={name}
                  onChange={handleNameChange}
                  autoFocus
                  className="w-full bg-transparent text-sm sm:text-base text-slate-100 pl-11 pr-4 py-3.5 outline-none placeholder:text-slate-500 font-medium"
                />
              </div>
              {nameError && (
                <p className="text-xs font-semibold text-rose-400">{nameError}</p>
              )}
            </div>

            {/* Field 2: 10-Digit Mobile Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-200">
                10-Digit Mobile Number <span className="text-amber-400">*</span>
              </label>
              <div className="flex items-center rounded-xl bg-slate-950/90 border border-slate-700 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-500/30 transition-all overflow-hidden">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-slate-900 text-xs sm:text-sm font-bold text-amber-300 px-3.5 py-3.5 border-r border-slate-700 outline-none cursor-pointer"
                >
                  <option value="+91">🇮🇳 +91 (India)</option>
                  <option value="+1">🇺🇸 +1 (US)</option>
                  <option value="+44">🇬🇧 +44 (UK)</option>
                  <option value="+971">🇦🇪 +971 (UAE)</option>
                  <option value="+65">🇸🇬 +65 (SG)</option>
                  <option value="+61">🇦🇺 +61 (AU)</option>
                </select>

                <div className="relative flex-1 flex items-center">
                  <Smartphone className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Enter 10-digit mobile number"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="w-full bg-transparent text-sm sm:text-base font-mono font-bold text-slate-100 pl-11 pr-4 py-3.5 outline-none placeholder:text-slate-500 tracking-wider"
                  />
                </div>
              </div>
              {phoneError && (
                <p className="text-xs font-semibold text-rose-400">{phoneError}</p>
              )}
            </div>
          </div>

          {/* Value Props Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant WhatsApp OTT streaming links</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <Bell className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Weekend cinephile gems from the Council</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-4 rounded-2xl font-cinzel text-base sm:text-lg font-bold flex items-center justify-center gap-3 cursor-pointer transition-all shadow-2xl ${
                isFormValid && !isSubmitting
                  ? 'gold-glow-btn text-slate-950 scale-100 hover:scale-[1.02]'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>{isSubmitting ? 'Unlocking Divination...' : 'Reveal My 3 Recommendations'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Spam-Free • Zero Ads • Verified Indian OTT Streaming</span>
            </div>
          </div>

          {/* Back button */}
          {onBackToQuiz && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  playSelectChime();
                  onBackToQuiz();
                }}
                className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer transition-colors"
              >
                ← Back to Quest Questions
              </button>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};
