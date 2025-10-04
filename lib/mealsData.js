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
        childPrice: 500,
        reviews: [
            {
                name: "Patricia Schmidt",
                rating: 5,
                avatar: "/avatars/patricia.jpg",
                comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
                date: "September 19, 2023"
            },
            {
                name: "John Tyler",
                rating: 4,
                avatar: "/avatars/john.jpg",
                comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
                date: "September 19, 2023"
            },
            {
                name: "Ewa Jane",
                rating: 5,
                avatar: "/avatars/ewa.jpg",
                comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
                date: "September 19, 2023"
            },
            {
                name: "Patricia Schmidt",
                rating: 5,
                avatar: "/avatars/patricia.jpg",
                comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
                date: "September 19, 2023"
            },
            {
                name: "Ewa Jane",
                rating: 5,
                avatar: "/avatars/ewa2.jpg",
                comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
                date: "September 19, 2023"
            },
            {
                name: "Patricia Schmidt",
                rating: 5,
                avatar: "/avatars/patricia2.jpg",
                comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
                date: "September 19, 2023"
            }
        ]
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
