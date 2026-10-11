import React, { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

const statsInventory = [
  { value: 145, suffix: '+', parameter: 'Industrial Case Partnerships' },
  { value: 96.4, suffix: '%', decimals: 1, parameter: 'Immediate Placement' },
  { value: 80, suffix: 'M+', parameter: 'Scholarship Funds' },
  { value: 1, prefix: 'Tier-', parameter: 'National HEC Status' },
];

function CountUp({ value, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const formattedCount = useTransform(count, (latest) => (
    latest.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  ));

  useEffect(() => {
    if (!isInView) return undefined;
    if (prefersReducedMotion) {
      count.set(value);
      return undefined;
    }

    const controls = animate(count, value, {
      duration: 1.6,
      ease: 'easeOut',
    });

    return controls.stop;
  }, [count, isInView, prefersReducedMotion, value]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}<motion.span aria-hidden="true">{formattedCount}</motion.span>{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="w-full bg-espresso py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-espresso-light overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {statsInventory.map((item) => (
          <motion.div
            key={item.parameter}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-center p-2"
          >
            <div className="text-2xl sm:text-4xl md:text-5xl font-black text-brass-light mb-1 sm:mb-2 tabular-nums">
              <CountUp {...item} />
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm font-bold text-sand/70 uppercase tracking-widest leading-snug">{item.parameter}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
