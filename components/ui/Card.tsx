export default function Card({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`
        bg-[#1C1C1F] border border-[#2A2A2E] rounded-2xl p-6
        ${hover ? "hover:border-blue-500/50 transition-all duration-200" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
