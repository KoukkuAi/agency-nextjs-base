export default function Badge({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "green" | "yellow" | "red";
}) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors[color]}`}>
      {children}
    </span>
  );
}
