import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0_4px_0_0_#b34d00] active:shadow-[0_0px_0_0_#b34d00] active:translate-y-1": variant === "default",
            "bg-[var(--color-secondary)] text-black hover:bg-[#00c2d9] shadow-[0_4px_0_0_#008a99] active:shadow-[0_0px_0_0_#008a99] active:translate-y-1": variant === "secondary",
            "border-2 border-[var(--color-surface)] bg-transparent hover:bg-[var(--color-surface)] text-white": variant === "outline",
            "hover:bg-[var(--color-surface)] hover:text-white text-[var(--color-text-muted)]": variant === "ghost",
            "h-12 px-6 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-14 rounded-2xl px-8 text-lg": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
