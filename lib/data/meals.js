export const meals = [
    // City A - Breakfast
    {
        id: 1,
        title: "Arabic Breakfast",
        slug: "arabic-breakfast",
        description: "Enjoy the authentic Middle Eastern flavors",
        fullDescription: "An Authentic Arabian Breakfast Experience\n\nCome and enjoy our rich selection of traditional flavors from across the Middle East.",
        category: "breakfast",
        cityId: "city-a",
        price: 1000,
        adultPrice: 1000,
        childPrice: 500,
        image: "/image.png",
        images: ["/image.png", "/image.png", "/image.png"],
        availability: "In Stock",
        schedule: "Breakfast Time (Monday to Sunday) - 6:30am to 10:30am",
        createdAt: "2025-01-01"
    },
    {
        id: 2,
        title: "English Breakfast",
        slug: "english-breakfast",
        description: "Taste the real British breakfast",
        fullDescription: "Traditional English Breakfast\n\nEnjoy a full English breakfast with all the classics.",
        category: "breakfast",
        cityId: "city-a",
        price: 1000,
        adultPrice: 1000,
        childPrice: 500,
        image: "/englishbreakfast.png",
        images: ["/englishbreakfast.png", "/englishbreakfast.png", "/englishbreakfast.png"],
        availability: "In Stock",
        schedule: "Breakfast Time (Monday to Sunday) - 6:30am to 10:30am",
        createdAt: "2025-01-01"
    },
    {
        id: 3,
        title: "Healthy Breakfast",
        slug: "healthy-breakfast",
        description: "Delight in clean and nutritious breakfast",
        fullDescription: "Healthy Start to Your Day\n\nNutritious and delicious breakfast options.",
        category: "breakfast",
        cityId: "city-a",
        price: 1000,
        adultPrice: 1000,
        childPrice: 500,
        image: "/healthybreakfast.png",
        images: ["/healthybreakfast.png", "/healthybreakfast.png", "/healthybreakfast.png"],
        availability: "In Stock",
        schedule: "Breakfast Time (Monday to Sunday) - 6:30am to 10:30am",
        createdAt: "2025-01-01"
    },

    // City A - Lunch
    {
        id: 4,
        title: "Arabic Lunch",
        slug: "arabic-lunch",
        description: "Authentic Middle Eastern lunch dishes",
        fullDescription: "Traditional Arabic Lunch\n\nExperience authentic Middle Eastern cuisine.",
        category: "lunch",
        cityId: "city-a",
        price: 1200,
        adultPrice: 1200,
        childPrice: 600,
        image: "/arabiclunch.png",
        images: ["/arabiclunch.png", "/arabiclunch.png", "/arabiclunch.png"],
        availability: "In Stock",
        schedule: "Lunch Time (Monday to Sunday) - 12:00pm to 3:00pm",
        createdAt: "2025-01-01"
    },
    {
        id: 5,
        title: "English Lunch",
        slug: "english-lunch",
        description: "Fresh vegetables and protein in savory sauce",
        fullDescription: "Classic English Lunch\n\nTraditional English lunch favorites.",
        category: "lunch",
        cityId: "city-a",
        price: 950,
        adultPrice: 950,
        childPrice: 475,
        image: "/englishlunch.png",
        images: ["/englishlunch.png", "/englishlunch.png", "/englishlunch.png"],
        availability: "In Stock",
        schedule: "Lunch Time (Monday to Sunday) - 12:00pm to 3:00pm",
        createdAt: "2025-01-01"
    },
    {
        id: 6,
        title: "Healthy Lunch",
        slug: "healthy-lunch",
        description: "Healthy Mediterranean diet bowl",
        fullDescription: "Nutritious Lunch Options\n\nHealthy and balanced lunch choices.",
        category: "lunch",
        cityId: "city-a",
        price: 1100,
        adultPrice: 1100,
        childPrice: 550,
        image: "/healthylunch.png",
        images: ["/healthylunch.png", "/healthylunch.png", "/healthylunch.png"],
        availability: "In Stock",
        schedule: "Lunch Time (Monday to Sunday) - 12:00pm to 3:00pm",
        createdAt: "2025-01-01"
    },

    // City A - Dinner
    {
        id: 7,
        title: "Arabic Dinner",
        slug: "arabic-dinner",
        description: "Fresh salmon with seasonal vegetables",
        fullDescription: "Exquisite Arabic Dinner\n\nElegant dinner with Middle Eastern flavors.",
        category: "dinner",
        cityId: "city-a",
        price: 1500,
        adultPrice: 1500,
        childPrice: 750,
        image: "/arabicdinner.png",
        images: ["/arabicdinner.png", "/arabicdinner.png", "/arabicdinner.png"],
        availability: "In Stock",
        schedule: "Dinner Time (Monday to Sunday) - 6:00pm to 11:00pm",
        createdAt: "2025-01-01"
    },
    {
        id: 8,
        title: "English Dinner",
        slug: "english-dinner",
        description: "Premium beef steak cooked to perfection",
        fullDescription: "Fine English Dinner\n\nPremium cuts and classic preparations.",
        category: "dinner",
        cityId: "city-a",
        price: 1800,
        adultPrice: 1800,
        childPrice: 900,
        image: "/englishdinner.png",
        images: ["/englishdinner.png", "/englishdinner.png", "/englishdinner.png"],
        availability: "In Stock",
        schedule: "Dinner Time (Monday to Sunday) - 6:00pm to 11:00pm",
        createdAt: "2025-01-01"
    },
    {
        id: 9,
        title: "Healthy Dinner",
        slug: "healthy-dinner",
        description: "Plant-based meal full of flavors",
        fullDescription: "Wholesome Dinner Experience\n\nHealthy dinner options that don't compromise on taste.",
        category: "dinner",
        cityId: "city-a",
        price: 900,
        adultPrice: 900,
        childPrice: 450,
        image: "/healthydinner.png",
        images: ["/healthydinner.png", "/healthydinner.png", "/healthydinner.png"],
        availability: "In Stock",
        schedule: "Dinner Time (Monday to Sunday) - 6:00pm to 11:00pm",
        createdAt: "2025-01-01"
    }
];

// Helper functions
export const getMealById = (id) => meals.find(meal => meal.id === id);
export const getMealBySlug = (slug) => meals.find(meal => meal.slug === slug);
export const getMealsByCity = (cityId) => meals.filter(meal => meal.cityId === cityId);
export const getMealsByCategory = (category) => {
    if (category === 'all') return meals;
    return meals.filter(meal => meal.category === category);
};
export const getMealsByCityAndCategory = (cityId, category) => {
    let filtered = getMealsByCity(cityId);
    if (category !== 'all') {
        filtered = filtered.filter(meal => meal.category === category);
    }
    return filtered;
};
export const getAllMeals = () => meals;
