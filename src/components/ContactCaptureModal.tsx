import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Check, Sparkles, X, ShieldCheck, ArrowRight, MessageSquare, Bell, User } from 'lucide-react';
import { playSelectChime, playQuestVictory } from '../services/soundEffects';
import { recordUserLead, trackEvent } from '../services/analytics';
import { MagicalHatIcon } from './MagicalHatIcon';

interface ContactCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextTitle?: string;
}

export const ContactCaptureModal: React.FC<ContactCaptureModalProps> = ({
  isOpen,
  onClose,
  contextTitle = 'Your Curated Movie Recommendations'
}) => {
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
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

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

    try {
      const contactData = {
        name: name.trim(),
        phone: `${countryCode}${phoneNumber}`,
        countryCode,
        timestamp: Date.now(),
        context: contextTitle
      };
      localStorage.setItem('screenit_user_contact', JSON.stringify(contactData));
      recordUserLead({
        name: name.trim(),
        phone: `${countryCode}${phoneNumber}`,
        countryCode,
        wizard: 'standard',
        mission: contextTitle,
        submittedAt: Date.now()
      });
      trackEvent('modal_contact_submitted', { name: name.trim(), context: contextTitle });
      setIsSuccess(true);
      playQuestVictory();
    } catch {
      setIsSuccess(true);
    }
  };

  const isFormValid = name.trim().length >= 2 && phoneNumber.length === 10;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-lg parchment-card rounded-3xl p-6 sm:p-8 border-2 border-amber-400/60 shadow-[0_0_50px_rgba(245,158,11,0.3)] relative overflow-hidden text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={() => {
              playSelectChime();
              onClose();
            }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] shrink-0">
                  <MagicalHatIcon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Direct Movie Alert
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-black text-slate-100">
                    Get Your Watchlist on Mobile
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Drop your 10-digit number to receive your curated 3-movie quest recommendations, direct Indian OTT streaming links, and weekend cinephile gems from the Council of Oracles.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl bg-slate-950/90 border border-slate-700 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-500/30 transition-all overflow-hidden">
                    <User className="w-4 h-4 text-amber-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Enter your name (e.g. Gaurav)"
                      value={name}
                      onChange={handleNameChange}
                      autoFocus
                      className="w-full bg-transparent text-sm sm:text-base text-slate-100 pl-10 pr-3 py-3 outline-none placeholder:text-slate-500 font-medium"
                    />
                  </div>
                  {nameError && (
                    <p className="text-xs font-semibold text-rose-400">{nameError}</p>
                  )}
                </div>

                {/* Field 2: Mobile Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    10-Digit Mobile Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="flex items-center rounded-xl bg-slate-950/90 border border-slate-700 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-500/30 transition-all overflow-hidden">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-slate-900 text-xs font-bold text-amber-300 px-3 py-3 border-r border-slate-700 outline-none cursor-pointer"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+61">🇦🇺 +61</option>
                    </select>
                    <div className="relative flex-1 flex items-center">
                      <Smartphone className="w-4 h-4 text-amber-400 absolute left-3 pointer-events-none" />
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Enter 10-digit number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        className="w-full bg-transparent text-sm sm:text-base font-mono font-bold text-slate-100 pl-9 pr-3 py-3 outline-none placeholder:text-slate-600 tracking-wider"
                      />
                    </div>
                  </div>
                  {phoneError && (
                    <p className="text-xs font-semibold text-rose-400">{phoneError}</p>
                  )}
                </div>

                {/* Features Pills */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Instant WhatsApp Links</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <Bell className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Weekly Top Drops</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg ${
                    isFormValid
                      ? 'gold-glow-btn text-slate-950 scale-100'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>Send My Curated Watchlist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Spam-free • Zero ads • Client-side private</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(52,211,153,0.4)]">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="font-cinzel text-2xl font-black text-slate-100">
                Magic Delivered!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Your 10-digit number <span className="font-mono text-amber-300 font-bold">{countryCode} {phoneNumber}</span> has been connected to your Screenit vault!
              </p>
              <button
                onClick={() => {
                  playSelectChime();
                  onClose();
                }}
                className="gold-glow-btn px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 cursor-pointer"
              >
                Back to Recommendations
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
