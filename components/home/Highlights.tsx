import Container from "../layout/Container";
import { Card } from "../ui/Card";
import { FaLeaf, FaBaby, FaCheckCircle, FaEuroSign } from "react-icons/fa";
import Section from "../layout/Section";

export default function Highlights() {
  const items = [
    { icon: <FaCheckCircle />, title: "Safe & Sanitized", text: "Every item is cleaned and quality-checked." },
    { icon: <FaEuroSign />, title: "Budget-Friendly", text: "Premium items at accessible prices." },
    { icon: <FaLeaf />, title: "Sustainable", text: "Reduce waste through circular parenting." },
    { icon: <FaBaby />, title: "Curated for Families", text: "Only the best pre-loved pieces are selected." }
  ];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {items.map((item, i) => (
            <Card key={i}>
              <div className="text-mint-600 text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
