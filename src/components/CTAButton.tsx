import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const CALENDLY_URL =
  "https://calendly.com/mustafa-thevizionbox/free-google-ads-audit";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "sm";
  variant?: "primary" | "secondary";
  href?: string;
};

export function CTAButton({
  children,
  className,
  size = "default",
  variant = "primary",
  href,
}: Props) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    default: "px-6 py-3.5 text-[15px]",
    lg: "px-8 py-5 text-base sm:text-lg",
  }[size];

  const variantClasses =
    variant === "primary"
      ? "cta-shine glow-cta bg-brand text-white hover:brightness-110"
      : "border border-white/20 bg-white/5 text-foreground backdrop-blur-sm hover:bg-white/10 hover:border-brand";

  const finalHref = href ?? CALENDLY_URL;
  const isExternal = finalHref.startsWith("http");

  return (
    <a
      href={finalHref}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]",
        sizeClasses,
        variantClasses,
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
