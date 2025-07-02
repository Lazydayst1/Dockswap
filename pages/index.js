import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">🚢 DockSwap</h1>
      <p className="text-gray-600">Sail and Sell — HMAS Cerberus</p>
      <p className="mt-4">Login and start listing your gear!</p>
    </main>
  );
}
