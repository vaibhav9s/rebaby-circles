import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function CheckoutSuccessPage() {
  return (
    <Section>
      <Container className="mt-50 text-center space-y-6">
        <h1 className="text-3xl font-bold">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-600 text-lg">
          Thank you for supporting circular parenting 💚
        </p>
      </Container>
    </Section>
  );
}
