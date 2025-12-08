import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 shadow-sm bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold text-mint-600">
          ReBaby Circles
        </Link>

        <div className="space-x-6 text-gray-700">
          <Link href="/shop">Shop</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
