'use client';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  placeholder: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Sunset Vibes',
    description: 'Beautiful golden hour photography',
    category: 'Nature',
    placeholder: 'bg-linear-to-br from-yellow-400 to-orange-500',
  },
  {
    id: 2,
    title: 'Mountain Peak',
    description: 'Majestic mountain landscape',
    category: 'Nature',
    placeholder: 'bg-linear-to-br from-slate-400 to-slate-600',
  },
  {
    id: 3,
    title: 'Ocean Waves',
    description: 'Crashing waves at the beach',
    category: 'Nature',
    placeholder: 'bg-linear-to-br from-blue-400 to-cyan-500',
  },
  {
    id: 4,
    title: 'Forest Path',
    description: 'Serene path through the woods',
    category: 'Nature',
    placeholder: 'bg-linear-to-br from-green-400 to-emerald-600',
  },
  {
    id: 5,
    title: 'City Lights',
    description: 'Urban photography at night',
    category: 'Urban',
    placeholder: 'bg-linear-to-br from-purple-500 to-indigo-600',
  },
  {
    id: 6,
    title: 'Desert Dunes',
    description: 'Golden sand under blue sky',
    category: 'Nature',
    placeholder: 'bg-linear-to-br from-amber-300 to-orange-600',
  },
];

export default function GalleryGrid() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Our Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collection of photographs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`${item.placeholder} w-full h-64 sm:h-72 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="text-white text-4xl opacity-50">📷</span>
                </div>
                <div className="p-6 bg-white space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
