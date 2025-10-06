"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const MealCards = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCity = searchParams.get('city') || 'city-a';
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = [
        "All",
        "Breakfast", 
        "Lunch",
        "Dinner",
        "Events",
        "Offers"
    ];

    const meals = [
        {
            id: 1,
            title: "Arabic Breakfast",
            description: "Enjoy the authentic Middle Eastern flavors",
            price: "USD 1,000",
            image: "/image.png",
            category: "Breakfast",
            slug: "arabic-breakfast",
            city: "city-a" // Add city field
        },
        {
            id: 2,
            title: "English Breakfast",
            description: "Taste the real British breakfast",
            price: "USD 1,000",
            image: "/englishbreakfast.png",
            category: "Breakfast",
            slug: "english-breakfast",
            city: "city-a"
        },
        // Add more meals with city field...
        {
            id: 3,
            title: "Healthy Breakfast",
            description: "Delight in clean and nutritious breakfast",
            price: "USD 1,000",
            image: "/healthybreakfast.png",
            category: "Breakfast",
            slug: "healthy-breakfast",
            city: "city-a"
        },
        {
            id: 4,
            title: "Arabic Lunch",
            description: "Authentic Italian pasta with fresh ingredients",
            price: "USD 1,200",
            image: "/arabiclunch.png",
            category: "Lunch",
            slug: "arabic-lunch",
            city: "city-a"
        },
        {
            id: 5,
            title: "English Lunch",
            description: "Fresh vegetables and protein in savory sauce",
            price: "USD 950",
            image: "/englishlunch.png",
            category: "Lunch",
            slug: "english-lunch",
            city: "city-a"
        },
        {
            id: 6,
            title: "Healthy Lunch",
            description: "Healthy Mediterranean diet bowl",
            price: "USD 1,100",
            image: "/healthylunch.png",
            category: "Lunch",
            slug: "healthy-lunch",
            city: "city-a"
        },
        {
            id: 7,
            title: "Arabic Dinner",
            description: "Fresh salmon with seasonal vegetables",
            price: "USD 1,500",
            image: "/arabicdinner.png",
            category: "Dinner",
            slug: "arabic-dinner",
            city: "city-a"
        },
        {
            id: 8,
            title: "English Dinner",
            description: "Premium beef steak cooked to perfection",
            price: "USD 1,800",
            image: "/englishdinner.png",
            category: "Dinner",
            slug: "english-dinner",
            city: "city-a"
        },
        {
            id: 9,
            title: "Healthy Dinner",
            description: "Plant-based meal full of flavors",
            price: "USD 900",
            image: "/healthydinner.png",
            category: "Dinner",
            slug: "healthy-dinner",
            city: "city-a"
        }
    ];

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const handleReserveTable = (meal) => {
        router.push(`/reservation/${meal.slug}?city=${currentCity}`);
    };

    // Filter by city first, then by category
    const cityMeals = meals.filter(meal => meal.city === currentCity);
    const filteredMeals = activeFilter === "All" 
        ? cityMeals 
        : cityMeals.filter(meal => meal.category === activeFilter);

    // Get city name for display
    const cityNames = {
        'city-a': 'City A',
        'city-b': 'City B',
        'city-c': 'City C',
        'city-d': 'City D'
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-playfair font-bold text-[#8A1739] mb-4">
                        ABC Ventures <span className="text-[#D4AF37]">- {cityNames[currentCity]}</span>
                    </h2>

                    <p className="font-medium text-[#D4AF37] text-lg max-w-2xl mx-auto">
                        The best city view Dining
                    </p>
                </div>

                {/* Menu Filter */}
                <div className="flex flex-wrap justify-end gap-2 md:gap-3 mb-12">
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChange(filter)}
                            className={`px-6 py-3 rounded-tl-2xl rounded-br-2xl font-medium transition-all duration-300 text-sm md:text-base ${
                                activeFilter === filter
                                    ? "bg-white text-gray-800 shadow-md"
                                    : "bg-[#8A878766] text-white hover:bg-gray-400"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMeals.map((meal) => (
                        <div
                            key={meal.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 bg-gray-200">
                                {meal.image ? (
                                    <Image
                                        src={meal.image}
                                        alt={meal.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                                        <span className="text-gray-600 font-medium">{meal.title}</span>
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-poppins font-medium text-gray-800">
                                        {meal.title}
                                    </h3>
                                    <span className="text-lg font-bold text-[#D4AF37]">
                                        {meal.price}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4 text-sm">{meal.description}</p>

                                <div className="flex gap-3">
                                    <button
                                        className="flex-1 border py-2 px-4 rounded-tl-2xl rounded-br-2xl hover:bg-[rgba(138,23,57,0.1)] transition-colors duration-200 text-sm font-playfair font-medium"
                                        style={{ borderColor: "#8A1739", color: "#8A1739" }}
                                    >
                                        View Menu
                                    </button>
                                    <button
                                        onClick={() => handleReserveTable(meal)}
                                        className="flex-1 py-2 px-4 rounded-tl-2xl rounded-br-2xl hover:bg-[#8A1739]/90 transition-colors duration-200 text-sm font-playfair font-medium text-white"
                                        style={{ backgroundColor: "#8A1739" }}
                                    >
                                        Reserve Table Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MealCards;
