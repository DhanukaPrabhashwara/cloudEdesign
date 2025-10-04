'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error loading cart:', error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = useCallback((item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }

            return [...prevItems, { ...item, quantity: 1 }];
        });
    }, []);

    // Remove item from cart
    const removeFromCart = useCallback((itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }, []);

    // Update item quantity
    const updateQuantity = useCallback((itemId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    }, []);

    // Increment quantity
    const incrementQuantity = useCallback((itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }, []);

    // Decrement quantity
    const decrementQuantity = useCallback((itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)
        );
    }, []);

    // Clear cart
    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    // Get total price
    const getCartTotal = useCallback(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

    // Get total items count
    const getCartCount = useCallback(() => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    }, [cartItems]);

    // Toggle cart visibility
    const toggleCart = useCallback(() => {
        setIsCartOpen((prev) => !prev);
    }, []);

    // Close cart
    const closeCart = useCallback(() => {
        setIsCartOpen(false);
    }, []);

    // Open cart
    const openCart = useCallback(() => {
        setIsCartOpen(true);
    }, []);

    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        toggleCart,
        closeCart,
        openCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
