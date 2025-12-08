export default function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block rounded-full bg-pink-100 text-pink-700 text-xs font-medium px-3 py-1">
      {text}
    </span>
  );
}
