import Container from "../layout/Container";
import { Card } from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Section from "../layout/Section";
import Link from "next/link";

export default function FeaturedCollections() {
  const items = [
    {
      title: "Baby Shirts",
      img: "/images/shirts.jpg",
      href: "/shop/shirts",
    },
    {
      title: "Onesies & Sets",
      img: "/images/onesies.jpg",
      href: "/shop/onesies",
    },
    {
      title: "Baby Dresses",
      img: "/images/dresses.jpg",
      href: "/shop/dresses",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle title="Featured Collections" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Link key={i} href={item.href} className="block">
              <Card key={i}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl mb-4 w-full h-56 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
