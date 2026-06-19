import { useEffect, useRef, useState } from "react";

type Props = {
  from: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/** Animates a number counting DOWN from `from` to `to` when it scrolls into view. */
export function CountDown({
  from,
  to,
  duration = 1800,
  prefix = "",
  suffix = "",
  className,
}: Props) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(from - (from - to) * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(value)}
      {suffix}
    </span>
  );
}
