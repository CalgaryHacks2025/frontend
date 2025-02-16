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

    export const adoptAnimal = async (userId: string, animalId: string ) => {
        try {
            const response = await axios.post(`${API_URL}/api/animals/adopt`, 
                {
                animal_id: animalId,
                user_id: userId,
            });
            return response.data;
        } catch (error) {
            console.error('Error adopting animal:', error);
            throw error;
        }
    };

    export const fetchAdoptionsByUserId = async (userId = 1) => {
        try {
            const response = await axios.get(`${API_URL}/api/animals/adopt/${userId}`);
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                console.warn(`No adoptions found for user ID ${userId}`);
                return []; 
            }
            console.error(`Error fetching adoptions for user ID ${userId}:`, error);
            throw error;
        }
    };

    export const detectImage = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            const response = await axios.post(`${API_URL}/api/proxy/detect`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error detecting image:', error);
            throw error;
        }
    };

    export const fetchAnimalActivities = async (animalId: string) => {
        try {
            const response = await axios.get(`${API_URL}/api/animals/${animalId}/activities`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching activities for animal ID ${animalId}:`, error);
            throw error;
        }
    };