import { useEffect, useState } from "react";

/**
 * Returns true once the user has scrolled far enough that the
 * #how (How It Works) section has entered the viewport.
 */
export function usePastHero(): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const target = document.getElementById("how");
    if (!target) {
      const onScroll = () => {
        if (window.scrollY > 600) setPast(true);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setPast(true);
        });
      },
      { threshold: 0.05 },
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return past;
}
