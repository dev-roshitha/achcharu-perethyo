import Hero from '@/src/components/hero';
import GalleryGrid from '@/src/components/galleryGrid';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <section className="w-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Featured Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of our most popular and recent works
            </p>
          </div>
        </div>
      </section>
      <GalleryGrid />
      <section className="w-full bg-white py-16 sm:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have any questions? We'd love to hear from you
            </p>
            <div className="pt-8">
              <button className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
