import { Card } from "../ui/Card";

export default function ProductCard({ product }: { product: any }) {
  const conditionColor =
    product.condition === "Like New"
      ? "bg-green-100 text-green-700"
      : product.condition === "Very Good"
      ? "bg-blue-100 text-blue-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <Card className="p-0 hover:shadow-md transition shadow-sm border border-gray-100">
      
      <img
        src={product.image}
        alt={product.title}
        className="rounded-t-xl w-full h-48 object-cover"
      />

      <div className="p-4">
        <span className={`text-xs px-2 py-1 rounded-md ${conditionColor}`}>
          {product.condition}
        </span>

        <h3 className="text-gray-800 font-semibold mt-3 text-sm">
          {product.title}
        </h3>

        <p className="text-mint-700 font-bold mt-2">{product.price}</p>
      </div>
    </Card>
  );
}
