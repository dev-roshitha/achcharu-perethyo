'use client';

import { useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
  content: string;
}

interface MenuWithContentProps {
  items: MenuItem[];
  defaultItemId?: string;
}

export default function MenuWithContent({
  items,
  defaultItemId,
}: MenuWithContentProps) {
  const [activeItemId, setActiveItemId] = useState(
    defaultItemId || items[0]?.id || ''
  );

  const activeItem = items.find((item) => item.id === activeItemId);

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu */}
          <div className="md:col-span-1">
            <div className="space-y-2 sticky top-20">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItemId(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeItemId === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {activeItem && (
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeItem.label}
                </h2>
                <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
                  {activeItem.content}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
