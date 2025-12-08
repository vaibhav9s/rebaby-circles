import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function DonatePage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Donate Pre-Loved Baby Items</h1>

        {/* Instructions */}
        <div className="bg-mint-50 p-6 rounded-xl mb-10 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>We collect your pre-loved baby clothes, toys, books, and essentials for free.</li>
            <li>Our team carefully inspects and sanitizes all items.</li>
            <li>We resell them online or at pop-up events, helping families and the environment.</li>
          </ol>
        </div>

        {/* Accepted Items */}
        <div className="bg-white p-6 rounded-xl mb-10 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Accepted Items</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Baby clothing (0–24 months, clean & good condition)</li>
            <li>Toys (safe, complete sets)</li>
            <li>Books (children's books, good condition)</li>
            <li>Baby utilities (strollers, carriers, highchairs, gently used)</li>
          </ul>
        </div>

        {/* Pickup Form */}
        <div className="bg-mint-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Schedule a Free Pickup</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="example@mail.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="+352 12345678"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Address</label>
              <textarea
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="Street, City, ZIP"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Items to Donate</label>
              <textarea
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="List of items"
                required
              />
            </div>

            <Button type="submit" className="bg-pink-400 hover:bg-pink-500">Schedule Pickup</Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
