export const categories = [
    { id: 'all', name: 'All', slug: 'all' },
    { id: 'breakfast', name: 'Breakfast', slug: 'breakfast' },
    { id: 'lunch', name: 'Lunch', slug: 'lunch' },
    { id: 'dinner', name: 'Dinner', slug: 'dinner' },
    { id: 'events', name: 'Events', slug: 'events' },
    { id: 'offers', name: 'Offers', slug: 'offers' }
];

// Helper functions
export const getCategoryById = (id) => categories.find(cat => cat.id === id);
export const getCategoryBySlug = (slug) => categories.find(cat => cat.slug === slug);
export const getAllCategories = () => categories;
