import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <Section>
      <Container className="space-y-12">

        {/* Hero / Mission */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About ReBaby Circles</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At ReBaby Circles, we believe in making parenting sustainable, budget-friendly, and joyful.
            We collect pre-loved baby items, carefully sanitize and curate them, and give them a second life
            through online sales and pop-up events in Luxembourg.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-mint-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-2">
            ReBaby Circles started with a simple idea: reduce waste while helping families afford
            high-quality baby essentials. Many baby items are only used for a short time, so we wanted
            to create a safe, curated way to reuse them.
          </p>
          <p className="text-gray-700">
            Today, we serve families across Luxembourg, collecting pre-loved items for free and ensuring
            they meet our high standards before passing them on to new little ones.
          </p>
        </div>

        {/* Circular Parenting & Sustainability */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/images/circular-parenting.jpg"
            alt="Circular Parenting"
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Circular Parenting & Sustainability</h2>
            <p className="text-gray-700 mb-2">
              Circular parenting is about reusing, sharing, and reducing waste. By giving items a second life,
              we reduce CO₂ emissions, save resources, and teach the next generation the value of sustainability.
            </p>
            <p className="text-gray-700">
              Every donation helps the environment and supports a community of families who care.
            </p>
          </div>
        </div>

        {/* Social & Environmental Impact */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-pink-400">500+</p>
              <p className="text-gray-700">Items Reused</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-mint-400">100+</p>
              <p className="text-gray-700">Families Helped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">2.5t</p>
              <p className="text-gray-700">CO₂ Saved</p>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}