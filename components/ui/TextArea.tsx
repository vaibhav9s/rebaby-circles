export default function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-mint-500 focus:ring-mint-500"
    />
  );
}
