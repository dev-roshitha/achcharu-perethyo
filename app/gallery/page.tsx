import PageIntro from '@/src/components/pageIntro';
import GalleryGrid from '@/src/components/galleryGrid';

export default function Gallery() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageIntro
        subtitle="Achcharu Perethayo"
        title="Gallery"
        description="Browse through our complete collection of works organized by category"
      />
      <GalleryGrid />
      <section className="w-full bg-linear-to-r from-blue-50 to-purple-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            More Coming Soon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're constantly updating our gallery with new works. Check back soon for more!
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
