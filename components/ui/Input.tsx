export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-mint-500 focus:ring-mint-500"
    />
  );
}
