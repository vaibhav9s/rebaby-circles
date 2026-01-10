import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function PickupSuccessPage() {
  return (
    <Section>
      <Container className="mt-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Pickup Scheduled Successfully 🎉
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Thank you for supporting circular parenting.  
          Our team will contact you shortly to confirm the pickup details.
        </p>

        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </Container>
    </Section>
  );
}
