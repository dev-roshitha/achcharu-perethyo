export default function Hero() {
  return (
    <section className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Welcome to Achcharu Perethyo
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl">
              Discover beautiful moments and experiences captured in time
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/gallery"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Gallery
            </a>
            <a
              href="#about"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
