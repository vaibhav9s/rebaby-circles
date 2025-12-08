import Container from "../layout/Container";
import { Card } from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Section from "../layout/Section";

export default function FeaturedCollections() {
  const items = [
    {
      title: "Baby Clothing (0–24 months)",
      img: "/images/clothes.jpg",
    },
    {
      title: "Toys & Books",
      img: "/images/toys.jpg",
    },
    {
      title: "Baby Gear",
      img: "/images/gear.jpg",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle title="Featured Collections" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Card key={i}>
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl mb-4 w-full h-56 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
