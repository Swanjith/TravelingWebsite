export interface Destination {
    id: number;
    name: string;
    country: string;
    image: string;
    description: string;
    category: string[];
    rating: number;
    attractions: string[];
    bestTimeToVisit: string;
    averageCost: {
        budget: string;
        medium: string;
        luxury: string;
    };
}