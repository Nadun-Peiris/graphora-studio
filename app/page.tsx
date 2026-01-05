export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
          Graphora Studio
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Web Development • Branding • Digital Solutions
        </p>

        <p className="mt-8 text-gray-500 leading-relaxed">
          Our website is currently under development.
          <br />
          We’re working behind the scenes to build something exceptional.
        </p>

        <div className="mt-12 text-sm text-gray-600">
          © {new Date().getFullYear()} Graphora Studio. All rights reserved.
        </div>
      </div>
    </main>
  );
}
