'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateListing() {
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  return (
    <section className="p-6 md:p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">➕ Create a Listing</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Listing saved locally (mock)');
          router.push('/listings');
        }}
        className="space-y-4"
      >
        {/* Title, Price, Category, Description fields ... */}
        <label className="block">
          <span className="text-gray-700">Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setPreview(URL.createObjectURL(f));
            }}
            className="mt-1 block w-full"
          />
        </label>
        {preview && <img src={preview} alt="preview" className="w-full h-40 object-cover rounded"/>}
        <button className="bg-blue-900 text-white px-6 py-2 rounded">Save Listing</button>
      </form>
    </section>
  );
}