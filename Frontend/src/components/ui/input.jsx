export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
