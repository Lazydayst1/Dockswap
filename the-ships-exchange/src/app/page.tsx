export default function HomePage() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Kraken Image with tentacle animation */}
      <img
        src="/kraken-bp.bmp"
        alt="Kraken"
        className="
          absolute left-0 right-0 top-[-5%]
          w-full h-auto
          object-contain
          opacity-70
          animate-wave
          pointer-events-none select-none
        "
        aria-hidden="true"
      />

      {/* Centered Welcome Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 drop-shadow-lg">
          ⚓ Welcome to The Ship’s Exchange
        </h1>
        <p className="mt-4 text-black-700 text-lg">
          Buy and sell second-hand items at HMAS Cerberus
        </p>
      </div>

      {/* Animated Bubbles */}
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-white/70 blur-sm animate-bubble pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 10}px`,
            height: `${10 + Math.random() * 10}px`,
            animationDelay: `${Math.random() * 8}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </section>
  );
}