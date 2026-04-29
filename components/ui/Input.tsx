export default function Input({
  label,
  error,
  ...props
}: {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#9898A0] mb-2">
          {label}
        </label>
      )}
      <input
        className="w-full bg-[#1C1C1F] border border-[#2A2A2E] rounded-xl px-4 py-3 text-white placeholder-[#9898A0] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
