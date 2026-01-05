export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-grid" />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">
          Graphora Studio
        </h1>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          Coming Soon.
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          We’re building a modern digital studio focused on web development,
          branding, and creative solutions.
        </p>

        <footer className="mt-12 text-sm text-gray-600">
          © {new Date().getFullYear()} Graphora Studio
        </footer>
      </div>
    </main>
  );
}
