export const reviews = [
    // Reviews for Arabic Breakfast (mealId: 1)
    {
        id: 1,
        mealId: 1,
        name: "Patricia Schmidt",
        rating: 5,
        avatar: null,
        comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
        date: "September 19, 2023",
        verified: true
    },
    {
        id: 2,
        mealId: 1,
        name: "John Tyler",
        rating: 4,
        avatar: null,
        comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
        date: "September 19, 2023",
        verified: true
    },
    {
        id: 3,
        mealId: 1,
        name: "Ewa Jane",
        rating: 5,
        avatar: null,
        comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
        date: "September 19, 2023",
        verified: true
    },
    {
        id: 4,
        mealId: 1,
        name: "Patricia Schmidt",
        rating: 5,
        avatar: null,
        comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
        date: "September 19, 2023",
        verified: false
    },
    {
        id: 5,
        mealId: 1,
        name: "Ewa Jane",
        rating: 5,
        avatar: null,
        comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
        date: "September 19, 2023",
        verified: true
    },
    {
        id: 6,
        mealId: 1,
        name: "Patricia Schmidt",
        rating: 5,
        avatar: null,
        comment: "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
        date: "September 19, 2023",
        verified: true
    }
];

// Helper functions
export const getReviewsByMealId = (mealId) => 
    reviews.filter(review => review.mealId === mealId);

export const getAverageRating = (mealId) => {
    const mealReviews = getReviewsByMealId(mealId);
    if (mealReviews.length === 0) return 0;
    const sum = mealReviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / mealReviews.length).toFixed(1);
};

export const getReviewCount = (mealId) => 
    getReviewsByMealId(mealId).length;

export const getAllReviews = () => reviews;
