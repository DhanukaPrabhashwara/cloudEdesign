"use client";

export default function CityInfoAndFilterSection({ city, filters, activeFilter, onFilterChange, onCityChange }) {
  return (
    <section className="mb-12 text-center mt-12">
      {city && (
        <>
          <h1 className="text-5xl text-[#8A1739] font-playfair font-bold mb-2">
            ABC Ventures <span className="text-[#D4AF37]">- {city.name}</span>
          </h1>
          <div className="mt-2 text-[#D4AF37] font-medium text-lg">{city.description}</div>
        </>
      )}

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">
        {filters.map((filter) => (
          <button
            key={filter._id || filter.id}
            onClick={() => onFilterChange(filter.slug)}
            className={`px-6 py-3 rounded-tl-2xl rounded-br-2xl font-medium transition-all duration-300 text-sm md:text-base ${
              activeFilter === filter.slug
                ? "bg-white text-[#8A1739] shadow-md"
                : "bg-[#8A878766] text-white hover:bg-gray-400"
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Optional: You can add a city selector UI here that calls onCityChange */}
    </section>
  );
}
