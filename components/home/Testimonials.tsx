import Container from "../layout/Container";
import { Card } from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Section from "../layout/Section";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anna, Luxembourg City",
      text: "Beautiful items in excellent condition. Feels good saving money and the planet!",
    },
    {
      name: "Mark, Kirchberg",
      text: "Donation pickup was so easy! Happy to see our baby’s clothes go to another family.",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle title="What Parents Say" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <p className="text-gray-700 italic mb-3">“{t.text}”</p>
              <p className="text-gray-900 font-semibold">— {t.name}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
