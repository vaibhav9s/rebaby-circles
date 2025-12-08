import Container from "../layout/Container";
import Section from "../layout/Section";

export default function ImpactMetrics() {
  const stats = [
    { value: "1,200+", label: "Items Reused" },
    { value: "480 kg", label: "CO₂ Saved" },
    { value: "300+", label: "Families Helped" },
  ];

  return (
    <Section className="bg-mint-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-center gap-10 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-mint-700">{s.value}</h3>
              <p className="text-gray-700">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
