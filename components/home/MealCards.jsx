"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MealCards = ({ activeFilter, citySlug }) => {
  const router = useRouter();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      try {
        let url = `/api/meals?city=${citySlug}`;
        if (activeFilter && activeFilter !== "all") url += `&category=${activeFilter}`;
        const res = await fetch(url);
        if (res.ok) setMeals(await res.json());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMeals();
  }, [citySlug, activeFilter]);

  const handleReserveTable = (meal) => router.push(`/reservation/${meal.slug}?city=${citySlug}`);

  const groupedMeals = {
    breakfast: meals.filter((meal) => meal.category === "breakfast"),
    lunch: meals.filter((meal) => meal.category === "lunch"),
    dinner: meals.filter((meal) => meal.category === "dinner"),
  };

  const renderMealCards = (mealsToRender) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mealsToRender.map((meal) => (
        <div
          key={meal._id || meal.id}
          className="bg-white rounded-tl-2xl rounded-br-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48 bg-gray-200">
            {meal.image ? (
              <Image src={meal.image} alt={meal.title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                <span className="text-gray-600 font-medium">{meal.title}</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-poppins font-medium text-gray-800">{meal.title}</h3>
              <span className="text-lg font-bold text-[#D4AF37]">USD {meal.price}</span>
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

  if (loading) return <div className="text-center py-16">Loading meals...</div>;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {activeFilter === "all" ? (
          <>
            {groupedMeals.breakfast.length > 0 && (
              <div className="mb-16">
                <h3 className="text-3xl font-playfair font-bold text-[#8A1739] mb-8">Breakfast</h3>
                {renderMealCards(groupedMeals.breakfast)}
              </div>
            )}
            {groupedMeals.lunch.length > 0 && (
              <div className="mb-16">
                <h3 className="text-3xl font-playfair font-bold text-[#8A1739] mb-8">Lunch</h3>
                {renderMealCards(groupedMeals.lunch)}
              </div>
            )}
            {groupedMeals.dinner.length > 0 && (
              <div>
                <h3 className="text-3xl font-playfair font-bold text-[#8A1739] mb-8">Dinner</h3>
                {renderMealCards(groupedMeals.dinner)}
              </div>
            )}
          </>
        ) : (
          renderMealCards(meals)
        )}
      </div>
    </section>
  );
};

export default MealCards;
