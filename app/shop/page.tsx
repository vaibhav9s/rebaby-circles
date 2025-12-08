import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProductGrid from "@/components/shop/ProductGrid";
import Filters from "@/components/shop/Filters";


export default function ShopPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shop Baby Items</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Filters */}
          <Filters />

          {/* Products */}
          <div className="md:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </Container>
    </Section>
  );
}