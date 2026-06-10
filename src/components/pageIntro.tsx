interface PageIntroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageIntro({
  title,
  subtitle,
  description,
}: PageIntroProps) {
  return (
    <section className="w-full bg-linear-to-br from-gray-50 to-gray-100 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        {subtitle && (
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
