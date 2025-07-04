
import Link from 'next/link';
import Image from 'next/image';
import listings from '@/data/listings.json';

export default function ListingsPage() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">📦 Available Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((item) => (
          <Link
            key={item.id}
            href={`/listings/${item.id}`}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-800">{item.title}</h2>
              <p className="text-gray-700 mt-1">${item.price}</p>
              <p className="text-gray-500 text-sm">{item.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}