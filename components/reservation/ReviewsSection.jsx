'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ReviewsSection({ mealId }) {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!mealId) return;

        async function fetchReviews() {
            setLoading(true);
            try {
                const response = await fetch(`/api/reviews?mealId=${mealId}`);
                if (response.ok) {
                    const data = await response.json();
                    setReviews(data);
                } else {
                    console.error('Failed to fetch reviews', response.status);
                }
            } catch (error) {
                console.error('Failed to fetch reviews', error);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, [mealId]);

    if (loading) {
        return (
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-playfair font-bold text-[#8A1739] text-center mb-12">Reviews</h2>
                <p className="text-center text-gray-600">Loading reviews...</p>
            </section>
        );
    }

    if (reviews.length === 0) {
        return (
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-playfair font-bold text-[#8A1739] text-center mb-12">Reviews</h2>
                <p className="text-center text-gray-600">No reviews yet.</p>
            </section>
        );
    }

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-playfair font-bold text-[#8A1739] text-center mb-12">Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white rounded-tl-2xl rounded-br-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                                {review.avatar && review.avatar !== "" ? (
                                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-[#8A1739] text-white font-semibold text-lg">
                                        {review.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1">{review.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-gray-700">{review.rating}/5</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <span key={star} className={`text-lg ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.comment}"</p>
                        <p className="text-gray-400 text-xs text-right">{review.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
