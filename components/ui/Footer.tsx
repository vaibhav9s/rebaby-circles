import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-mint-100 text-gray-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-3">ReBaby Circles</h3>
          <p className="text-gray-700 text-sm">
            Curated, safe, second-hand baby essentials. Helping families in Luxembourg save money & the planet.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/events">Pop-Up Events</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p className="text-gray-700 text-sm">Luxembourg City + surroundings</p>
          <p className="text-gray-700 text-sm">hello@rebabycircles.com</p>

          <div className="flex space-x-4 mt-3 text-gray-700">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook size={20} />
            </Link>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-600 mt-10 text-sm">
        © {new Date().getFullYear()} ReBaby Circles. All rights reserved.
      </div>
    </footer>
  );
}
