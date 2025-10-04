export const meals = [
    {
        id: 1,
        title: "Arabic Breakfast",
        description: "Enjoy the authentic Middle Eastern flavors",
        fullDescription: "An Authentic Arabian Breakfast Experience\n\nCome and enjoy our rich selection of traditional flavors from across the Middle East.",
        price: "USD 1,000",
        priceValue: 1000,
        image: "/image.png",
        category: "Breakfast",
        slug: "arabic-breakfast",
        availability: "In Stock",
        schedule: "Breakfast Time (Monday to Sunday) - 6:30am to 10:30am",
        adultPrice: 1000,
        childPrice: 500
    },
    {
        id: 2,
        title: "English Breakfast",
        description: "Taste the real British breakfast",
        fullDescription: "A Traditional British Breakfast Experience\n\nExperience authentic English breakfast traditions.",
        price: "USD 1,000",
        priceValue: 1000,
        image: "/englishbreakfast.png",
        category: "Breakfast",
        slug: "english-breakfast",
        availability: "In Stock",
        schedule: "Breakfast Time (Monday to Sunday) - 6:30am to 10:30am",
        adultPrice: 1000,
        childPrice: 500
    },
    // Add all other meals following the same pattern
];

export const getMealBySlug = (slug) => {
    return meals.find(meal => meal.slug === slug);
};
