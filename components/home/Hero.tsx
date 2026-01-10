import Link from "next/link";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/baby-bg.jpg')" }}
      ></div>

      {/* Soft overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-mint-100/40 to-pink-100/40"></div>

      {/* Content */}
      <div className="relative z-10 px-4 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md">
          Curated Second-Hand Baby Essentials
        </h1>
        <p className="text-gray-800 text-lg md:text-xl max-w-xl mx-auto drop-shadow-sm">
          Smart, sustainable parenting in Luxembourg. Affordable, safe, and pre-loved.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link href="#featured">
            <Button>Shop Baby Clothes</Button>
          </Link>
          <Link href="/donate">
            <Button className="bg-pink-400 hover:bg-pink-500">
              Book a Free Pickup
            </Button>
          </Link>
        </div>
      </div>

      {/* Accent shapes with visible shades */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-mint-300 rounded-full opacity-60 animate-pulse"></div>
      {/* <div className="absolute bottom-10 right-10 w-44 h-44 bg-pink-300 rounded-full opacity-60 animate-pulse"></div> */}
    </div>
  );
}
