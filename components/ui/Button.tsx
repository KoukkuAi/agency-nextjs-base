// Shared primitive UI components for Claude Design context
// These serve as style references for the B-Pipeline

export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  [key: string]: unknown;
}) {
  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0A0A0B]";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-400 text-white",
    secondary: "border border-[#2A2A2E] text-[#9898A0] hover:text-white hover:border-[#444]",
    ghost: "text-[#9898A0] hover:text-white",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  );
}
