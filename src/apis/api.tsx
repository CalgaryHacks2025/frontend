    import axios from 'axios';

    const API_URL = import.meta.env.VITE_API_URL;

    export const fetchAllAnimals = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/animals`);
            return response.data;
        } catch (error) {
            console.error('Error fetching all animals:', error);
            throw error;
        }
    };

    export const fetchAnimalById = async (id: string) => {
        try {
            const response = await axios.get(`${API_URL}/api/animals/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching animal with id ${id}:`, error);
            throw error;
        }
    };

    export const adoptAnimal = async (animalId: string, userId: string) => {
        try {
            const response = await axios.post(`${API_URL}/api/animals/adopt`, {
                animalId,
                userId,
            });
            return response.data;
        } catch (error) {
            console.error('Error adopting animal:', error);
            throw error;
        }
    };