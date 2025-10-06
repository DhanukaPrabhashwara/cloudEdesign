"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getMealsByCityAndCategory } from "@/lib/data/meals";
import { getAllCategories } from "@/lib/data/categories";
import { getCityById } from "@/lib/data/cities";

const MealCards = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCity = searchParams.get('city') || 'city-a';
    const [activeFilter, setActiveFilter] = useState("all");

    // Get filters from categories data
    const filters = getAllCategories();

    const handleFilterChange = (filterSlug) => {
        setActiveFilter(filterSlug);
    };

    const handleReserveTable = (meal) => {
        router.push(`/reservation/${meal.slug}?city=${currentCity}`);
    };

    // Get meals from data file instead of hardcoded array
    const cityMeals = getMealsByCityAndCategory(currentCity, activeFilter);

    // Group by category for "All" filter
    const groupedMeals = {
        breakfast: cityMeals.filter(meal => meal.category === "breakfast"),
        lunch: cityMeals.filter(meal => meal.category === "lunch"),
        dinner: cityMeals.filter(meal => meal.category === "dinner")
    };

    // Get city info
    const cityInfo = getCityById(currentCity);

    // Render meal cards
    const renderMealCards = (meals) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map((meal) => (
                <div
                    key={meal.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
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

                    <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-poppins font-medium text-gray-800">
                                {meal.title}
                            </h3>
                            <span className="text-lg font-bold text-[#D4AF37]">
                                USD {meal.price}
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
    );

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-playfair font-bold text-[#8A1739] mb-4">
                        {cityInfo?.fullName || 'ABC Ventures'}
                    </h2>
                    <p className="font-medium text-[#D4AF37] text-lg max-w-2xl mx-auto">
                        {cityInfo?.description || 'The best city view Dining'}
                    </p>
                </div>

                {/* Menu Filter */}
                <div className="flex flex-wrap justify-end gap-2 md:gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => handleFilterChange(filter.slug)}
                            className={`px-6 py-3 rounded-tl-2xl rounded-br-2xl font-medium transition-all duration-300 text-sm md:text-base ${
                                activeFilter === filter.slug
                                    ? "bg-white text-gray-800 shadow-md"
                                    : "bg-[#8A878766] text-white hover:bg-gray-400"
                            }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Meals by Section or Filtered View */}
                {activeFilter === "all" ? (
                    <>
                        {/* Breakfast Section */}
                        {groupedMeals.breakfast.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-3xl font-playfair font-bold text-[#8A1739] mb-8">
                                    Breakfast
                                </h3>
                                {renderMealCards(groupedMeals.breakfast)}
                            </div>
                        )}

                        {/* Lunch Section */}
                        {groupedMeals.lunch.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-3xl font-playfair font-bold text-[#8A1739] mb-8">
                                    Lunch
                                </h3>
                                {renderMealCards(groupedMeals.lunch)}
                            </div>
                        )}

                        {/* Dinner Section */}
                        {groupedMeals.dinner.length > 0 && (
                            <div>
                                <h3 className="text-3xl font-playfair font-bold text-[#8A1739] mb-8">
                                    Dinner
                                </h3>
                                {renderMealCards(groupedMeals.dinner)}
                            </div>
                        )}
                    </>
                ) : (
                    // Filtered view (when a specific category is selected)
                    renderMealCards(cityMeals)
                )}
            </div>
        </section>
    );
};

export default MealCards;
