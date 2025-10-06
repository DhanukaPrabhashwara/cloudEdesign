export const cities = [
    { 
        id: 'city-a', 
        name: 'City A',
        fullName: 'ABC Ventures - City A',
        description: 'The best city view Dining',
        slug: 'city-a'
    },
    { 
        id: 'city-b', 
        name: 'City B',
        fullName: 'ABC Ventures - City B',
        description: 'Premium dining experience',
        slug: 'city-b'
    },
    { 
        id: 'city-c', 
        name: 'City C',
        fullName: 'ABC Ventures - City C',
        description: 'Luxury waterfront dining',
        slug: 'city-c'
    },
    { 
        id: 'city-d', 
        name: 'City D',
        fullName: 'ABC Ventures - City D',
        description: 'Rooftop dining excellence',
        slug: 'city-d'
    }
];

// Helper functions
export const getCityById = (id) => cities.find(city => city.id === id);
export const getAllCities = () => cities;
export const getCityBySlug = (slug) => cities.find(city => city.slug === slug);
