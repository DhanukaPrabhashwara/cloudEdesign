'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import NotificationModal from '@/components/ui/NotificationModal';

export default function ReservationContent({ meal }) {
    const router = useRouter();
    const { addToCart } = useCart();
    
    const [kidsTickets, setKidsTickets] = useState(0);
    const [adultsTickets, setAdultsTickets] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({ type: 'success', title: '', message: '' });

    // Gallery images
    const galleryImages = [meal.image, meal.image, meal.image];

    const handleAddToCart = () => {
    if (!selectedDate) {
        // Show error modal
        setModalConfig({
            type: 'error',
            title: 'Error !',
            message: 'Please select a date before proceeding'
        });
        setShowModal(true);
        return;
    }

    const cartItem = {
        id: `${meal.id}-${Date.now()}`,
        name: meal.title,
        price: meal.adultPrice * adultsTickets + meal.childPrice * kidsTickets,
        image: meal.image,
        quantity: 1,
        details: {
            adults: adultsTickets,
            kids: kidsTickets,
            date: selectedDate
        }
    };

    addToCart(cartItem);
    
    // Show success modal
    setModalConfig({
        type: 'success',
        title: 'Success !',
        message: `You have added ${meal.title} at ABC Venture - City to your shopping basket`
    });
    setShowModal(true);
    
    // Auto-close after 3 seconds
    setTimeout(() => {
        setShowModal(false);
    }, 3000);
};


    const handleViewMenu = () => {
        console.log('View menu for:', meal.title);
    };

    const totalCost = meal.adultPrice * adultsTickets + meal.childPrice * kidsTickets;

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Images */}
                    <div>
                        {/* Main Image */}
                        <div className="relative w-full h-[400px] mb-4 rounded-tl-2xl rounded-br-2xl overflow-hidden">
                            <Image
                                src={galleryImages[currentImageIndex]}
                                alt={meal.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="flex gap-4">
                            {galleryImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`relative w-24 h-24 rounded-tl-2xl rounded-br-2xl overflow-hidden border-2 ${
                                        currentImageIndex === index
                                            ? 'border-[#8A1739]'
                                            : 'border-gray-300'
                                    }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${meal.title} ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Reservation Note */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-tl-2xl rounded-br-2xl">
                            <p className="text-sm text-gray-700">
                                *Reservation time and special requests can be mentioned in 'Add comments about your order' section at the Checkout stage. (Limited to 30 characters)
                            </p>
                        </div>

                        {/* Reviews Section */}
                        <div className="mt-6 flex items-center gap-10">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="text-yellow-400 text-xl">★</span>
                                ))}
                            </div>
                            <span className="text-gray-600">6 Reviews</span>
                            <button className="text-[#8A1739] font-medium hover:underline">
                                Write a Review
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div>
                        {/* Title */}
                        <h1 className="text-4xl font-playfair font-bold text-[#8A1739] mb-4">
                            {meal.category}
                        </h1>

                        {/* Description */}
                        <div className="mb-6">
                            <p className="text-xl font-semibold mb-2">
                                {meal.fullDescription?.split('\n\n')[0] || meal.title}
                            </p>
                            <p className="text-gray-600">
                                {meal.fullDescription?.split('\n\n')[1] || meal.description}
                            </p>
                        </div>

                        {/* Schedule */}
                        <div className="mb-6 p-4 bg-[#8A1739] text-white rounded-tl-2xl rounded-br-2xl">
                            <p className="font-medium">{meal.schedule}</p>
                        </div>

                        {/* Price Info */}
                        <div className="mb-6">
                            <p className="text-gray-700 mb-2">
                                Price - USD {meal.adultPrice} net per adult & USD {meal.childPrice} net per child (6-11 years of age)
                            </p>
                            <p className="text-sm text-gray-600">
                                Availability: <span className="text-green-600 font-medium">{meal.availability}</span>
                            </p>
                        </div>

                        {/* Price Display */}
                        <div className="mb-6">
                            <p className="text-3xl font-bold text-[#8A1739]">
                                USD {meal.adultPrice}
                            </p>
                        </div>

                        {/* Available Options */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-4">Available Options</h3>
                            
                            <p className="text-sm text-gray-600 mb-3">*Ticket Type & Quantity</p>

                            {/* Ticket Counters */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {/* Kids Ticket */}
                                <div className="border-2 border-[#8A1739] rounded-tl-2xl rounded-br-2xl p-4">
                                    <p className="text-center font-medium mb-3 text-[#D4AF37]">Kids Ticket</p>
                                    <div className="flex items-center justify-center gap-4">
                                        <button
                                            onClick={() => setKidsTickets(Math.max(0, kidsTickets - 1))}
                                            className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="text-2xl font-bold w-12 text-center">{kidsTickets}</span>
                                        <button
                                            onClick={() => setKidsTickets(kidsTickets + 1)}
                                            className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Adults Ticket */}
                                <div className="border-2 border-[#8A1739] rounded-tl-2xl rounded-br-2xl p-4">
                                    <p className="text-center font-medium mb-3 text-[#D4AF37]">Adults Ticket</p>
                                    <div className="flex items-center justify-center gap-4">
                                        <button
                                            onClick={() => setAdultsTickets(Math.max(1, adultsTickets - 1))}
                                            className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="text-2xl font-bold w-12 text-center">{adultsTickets}</span>
                                        <button
                                            onClick={() => setAdultsTickets(adultsTickets + 1)}
                                            className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Date Selection */}
                            <div className="mb-6">
                                <p className="text-sm text-gray-600 mb-3">*Date Selection</p>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full p-3 border-2 border-[#8A1739] rounded-tl-2xl rounded-br-2xl focus:outline-none focus:border-[#8A1739]"
                                        placeholder="- Please Select -"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Total Cost */}
                        <div className="mb-6 pt-4 border-t-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium">Total Cost</span>
                                <span className="text-3xl font-bold text-[#D4AF37]">
                                    USD {totalCost} net
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={handleViewMenu}
                                className="flex-1 py-3 border-2 border-[#8A1739] text-[#8A1739] rounded-tl-2xl rounded-br-2xl font-medium hover:bg-[rgba(138,23,57,0.1)] transition-colors"
                            >
                                View Menu
                            </button>
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 py-3 bg-[#8A1739] text-white rounded-tl-2xl rounded-br-2xl font-medium hover:bg-[#8A1739]/90 transition-colors flex items-center justify-center gap-2"
                            >
                                <Image
                                    src="/cart.png"
                                    alt="cart"
                                    width={20}
                                    height={20}
                                />
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Modal */}
            <NotificationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                type={modalConfig.type}
                title={modalConfig.title}
                message={modalConfig.message}
            />
        </>
    );
}
