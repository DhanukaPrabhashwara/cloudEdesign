import Image from "next/image";

const MealCards = () => {
    const meals = [
        {
            id: 1,
            title: "Arabic Breakfast",
            description: "Enjoy the authentic Middle Eastern flavors",
            price: "USD 1,000",
            image: "/image.png", // Replace with your actual image path
            category: "Breakfast"
        },
        {
            id: 2,
            title: "English Breakfast",
            description: "Taste the real British breakfast",
            price: "USD 1,000",
            image: "/englishbreakfast.png", // Replace with your actual image path
            category: "Breakfast"
        },
        {
            id: 3,
            title: "Healthy Breakfast",
            description: "Delight in clean and nutritious breakfast",
            price: "USD 1,000",
            image: "/healthybreakfast.png", // Replace with your actual image path
            category: "Breakfast"
        },
        {
            id: 4,
            title: "Arabic Lunch",
            description: "Authentic Italian pasta with fresh ingredients",
            price: "USD 1,200",
            image: "/arabiclunch.png", // Replace with your actual image path
            category: "Lunch"
        },
        {
            id: 5,
            title: "English Lunch",
            description: "Fresh vegetables and protein in savory sauce",
            price: "USD 950",
            image: "/englishlunch.png", // Replace with your actual image path
            category: "Lunch"
        },
        {
            id: 6,
            title: "Healthy Lunch",
            description: "Healthy Mediterranean diet bowl",
            price: "USD 1,100",
            image: "/healthylunch.png", // Replace with your actual image path
            category: "Lunch"
        },
        {
            id: 7,
            title: "Arabic Dinner",
            description: "Fresh salmon with seasonal vegetables",
            price: "USD 1,500",
            image: "/arabicdinner.png", // Replace with your actual image path
            category: "Dinner"
        },
        {
            id: 8,
            title: "English Dinner",
            description: "Premium beef steak cooked to perfection",
            price: "USD 1,800",
            image: "/englishdinner.png", // Replace with your actual image path
            category: "Dinner"
        },
        {
            id: 9,
            title: "Healthy Dinner",
            description: "Plant-based meal full of flavors",
            price: "USD 900",
            image: "/healthydinner.png", // Replace with your actual image path
            category: "Dinner"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
                        Our Menu
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our carefully crafted meals made with the finest ingredients
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {meals.map((meal) => (
                        <div
                            key={meal.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 bg-gray-200">
                                {meal.image ? (
                                    <Image
                                        src={meal.image}        // e.g. "/image.png"
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
                                {/* Title + Price in same row */}
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-poppins font-medium text-gray-800">
                                        {meal.title}
                                    </h3>
                                    <span className="text-lg font-bold text-[#D4AF37]">
                                        {meal.price}
                                    </span>

                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 text-sm">{meal.description}</p>

                                {/* Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        className="flex-1 border py-2 px-4 rounded-tl-2xl rounded-br-2xl hover:bg-[rgba(138,23,57,0.1)] transition-colors duration-200 text-sm font-playfair font-medium"
                                        style={{ borderColor: "#8A1739", color: "#8A1739" }}
                                    >
                                        View Menu
                                    </button>
                                    <button
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