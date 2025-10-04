'use client';

import React, { useState, useEffect } from 'react';

export default function NotificationModal({ 
    isOpen, 
    onClose, 
    title, 
    message, 
    type = 'success' // 'success', 'error', 'warning', 'info'
}) {
    const [isAnimating, setIsAnimating] = useState(false);

    // Handle animation state
    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        } else {
            setIsAnimating(false);
        }
    }, [isOpen]);

    // Configuration for different notification types
    const typeConfig = {
        success: {
            borderColor: 'border-green-500',
            textColor: 'text-green-500',
            icon: (
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
            )
        },
        error: {
            borderColor: 'border-red-500',
            textColor: 'text-red-500',
            icon: (
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
            )
        },
        warning: {
            borderColor: 'border-yellow-500',
            textColor: 'text-yellow-500',
            icon: (
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        },
        info: {
            borderColor: 'border-blue-500',
            textColor: 'text-blue-500',
            icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    };

    if (!isOpen) return null;

    const config = typeConfig[type] || typeConfig.success;

    return (
        <>
            {/* Backdrop with fade animation */}
            <div 
                className={`fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300 ease-in-out ${
                    isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={onClose}
            />

            {/* Modal with scale and fade animation */}
            <div 
                className={`fixed top-1/2 left-1/2 z-[101] transition-all duration-300 ease-in-out ${
                    isAnimating 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                }`}
                style={{
                    transform: `translate(-50%, -50%) scale(${isAnimating ? 1 : 0.95})`
                }}
            >
                <div className="bg-white rounded-tl-2xl rounded-br-2xl shadow-2xl p-8 min-w-[400px] max-w-[500px] relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-2 border-gray-800 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close"
                    >
                        <span className="text-gray-800 text-xl font-bold">×</span>
                    </button>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <div className={`w-16 h-16 rounded-full border-4 ${config.borderColor} flex items-center justify-center`}>
                            {config.icon}
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-playfair font-bold text-[#8A1739] text-center mb-4">
                        {title}
                    </h2>

                    {/* Message */}
                    <p className="text-gray-700 text-center leading-relaxed">
                        {message}
                    </p>
                </div>
            </div>
        </>
    );
}
