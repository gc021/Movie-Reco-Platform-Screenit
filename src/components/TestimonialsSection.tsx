import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Quote, ShieldCheck } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  tag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Screenit frickin’ killed it. We found the exact movie our group wanted in minutes.',
    author: 'Sanya',
    role: 'Movie Night Host',
    tag: 'Group Watch Party'
  },
  {
    quote: 'The recommendation felt weirdly personal—in the best way.',
    author: 'Tanya',
    role: 'Film Enthusiast',
    tag: 'Date Night Quest'
  },
  {
    quote: 'No endless scrolling. Just one great pick and a perfect movie night.',
    author: 'Ashwin',
    role: 'Sci-Fi Explorer',
    tag: 'Weekend Watch'
  },
  {
    quote: 'I came for a movie recommendation and stayed for the wizard.',
    author: 'Shishir',
    role: 'Cinema Adventurer',
    tag: 'Solo Watch'
  },
  {
    quote: 'Effortless, fun, and actually accurate.',
    author: 'Rama',
    role: 'Casual Viewer',
    tag: 'Family Movie Quest'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Explorer Chronicles</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100">
          Loved by movie night questers everywhere.
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Sample moviegoer experiences. Real viewer reactions from early beta quest explorers.
        </p>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="parchment-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border border-slate-800 hover:border-amber-500/40 relative"
          >
            {/* Top Stars & Tag */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-indigo-950/90 border border-indigo-500/40 text-indigo-300 font-semibold shadow-sm">
                {t.tag}
              </span>
            </div>

            {/* Quote Body */}
            <div className="relative">
              <Quote className="w-7 h-7 text-amber-500/25 absolute -top-2.5 -left-2 -z-0" />
              <p className="text-sm sm:text-base text-slate-200 font-medium italic relative z-10 leading-relaxed">
                “{t.quote}”
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div>
                <strong className="text-amber-300 font-bold block">{t.author}</strong>
                <span className="text-slate-400">{t.role}</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" title="Verified Quest Explorer" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
