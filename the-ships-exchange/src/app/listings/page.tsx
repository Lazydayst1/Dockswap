import listingsData from '@/data/listings.json';
import Link from 'next/link';

export default function ListingsPage({
  searchParams
}: {
  searchParams: { category?: string; min?: string; max?: string };
}) {
  const selectedCategory = searchParams.category ?? 'All';
  const min = Number(searchParams.min ?? 0);
  const max = Number(searchParams.max ?? Infinity);

  const listings = listingsData.filter(
    (l) =>
      (selectedCategory === 'All' || l.category === selectedCategory) &&
      l.price >= min &&
      l.price <= max
  );

  const categories = ['All', ...new Set(listingsData.map((l) => l.category))];

  return (
    <section className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">📦 Listings</h1>

      {/* Filters */}
      <form className="flex flex-wrap gap-4 mb-6">
        <select name="category" defaultValue={selectedCategory} className="border rounded px-3 py-2">
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input name="min" type="number" placeholder="Min $" className="w-24 border rounded px-2 py-1" />
        <input name="max" type="number" placeholder="Max $" className="w-24 border rounded px-2 py-1" />
        <button className="bg-blue-900 text-white px-4 py-2 rounded">Filter</button>
      </form>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((l) => (
          <Link key={l.id} href={`/listings/${l.id}`} className="bg-white rounded-xl shadow hover:shadow-lg">
            <img src={l.image} alt={l.title} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-4">
              <h2 className="font-semibold">{l.title}</h2>
              <p className="text-blue-800 font-bold">${l.price}</p>
              <p className="text-xs text-gray-500">{l.category}</p>
            </div>
          </Link>
        ))}
        {listings.length === 0 && <p className="text-gray-500">No listings match filters.</p>}
      </div>
    </section>
  );
}