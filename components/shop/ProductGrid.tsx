import ProductCard from "./ProductCard";

const mockProducts = [
  {
    id: 1,
    title: "Organic Cotton Onesie (3–6m)",
    price: "€6.00",
    condition: "Like New",
    image: "/images/clothes.jpg",
  },
  {
    id: 2,
    title: "Wooden Stacking Toy",
    price: "€8.00",
    condition: "Very Good",
    image: "/images/toys.jpg",
  },
  {
    id: 3,
    title: "Baby Carrier",
    price: "€18.00",
    condition: "Good",
    image: "/images/gear.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
