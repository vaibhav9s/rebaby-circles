export default function Filters() {
  return (
    <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 space-y-6">

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
        <div className="space-y-1 text-gray-600">
          <label className="block"><input type="checkbox" className="mr-2" /> Clothing</label>
          <label className="block"><input type="checkbox" className="mr-2" /> Toys</label>
          <label className="block"><input type="checkbox" className="mr-2" /> Books</label>
          <label className="block"><input type="checkbox" className="mr-2" /> Baby Gear</label>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Age / Size</h3>
        <select className="w-full p-2 rounded-lg border border-gray-200">
          <option>0–3 months</option>
          <option>3–6 months</option>
          <option>6–12 months</option>
          <option>12–18 months</option>
          <option>18–24 months</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Condition</h3>
        <select className="w-full p-2 rounded-lg border border-gray-200">
          <option>Like New</option>
          <option>Very Good</option>
          <option>Good</option>
        </select>
      </div>

    </div>
  );
}
