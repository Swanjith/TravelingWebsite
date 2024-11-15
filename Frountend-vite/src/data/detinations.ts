import { Destination } from '../types/destination';

export const destinations: Destination[] = [
    {
        id: 1,
        name: 'Paris',
        country: 'France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
        description: 'The City of Light awaits with its iconic architecture and world-class cuisine.',
        category: ['culture', 'romance', 'food'],
        rating: 4.8,
        attractions: [
            'Eiffel Tower',
            'Louvre Museum',
            'Notre-Dame Cathedral',
            'Arc de Triomphe',
            'Champs-Élysées'
        ],
        bestTimeToVisit: 'June to September',
        averageCost: {
            budget: '$75-100/day',
            medium: '$200-300/day',
            luxury: '$500+/day'
        }
    },
    {
        id: 2,
        name: 'Bali',
        country: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
        description: 'A tropical paradise with stunning beaches, vibrant culture, and spiritual retreats.',
        category: ['relaxation', 'adventure', 'culture'],
        rating: 4.7,
        attractions: [
            'Uluwatu Temple',
            'Ubud Monkey Forest',
            'Rice Terraces',
            'Nusa Dua Beach',
            'Mount Batur'
        ],
        bestTimeToVisit: 'April to October',
        averageCost: {
            budget: '$30-50/day',
            medium: '$100-200/day',
            luxury: '$300+/day'
        }
    },
    {
        id: 3,
        name: 'Tokyo',
        country: 'Japan',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
        description: 'Experience the perfect blend of tradition and modern technology.',
        category: ['culture', 'food', 'family'],
        rating: 4.9,
        attractions: [
            'Shibuya Crossing',
            'Senso-ji Temple',
            'Tokyo Skytree',
            'Tsukiji Fish Market',
            'Akihabara'
        ],
        bestTimeToVisit: 'March to May or September to November',
        averageCost: {
            budget: '$70-100/day',
            medium: '$200-300/day',
            luxury: '$500+/day'
        }
    }
];