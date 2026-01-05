export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Logo / Brand */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Graphora Studio
        </h1>
      </div>

      {/* Main Hero */}
      <div className="text-center max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          Coming Soon.
        </h2>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          We’re building a modern digital studio focused on
          <br className="hidden md:block" />
          web development, branding, and creative solutions.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-12 h-px w-40 bg-gray-800" />

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-600">
        © {new Date().getFullYear()} Graphora Studio
      </footer>
    </main>
  );
}
