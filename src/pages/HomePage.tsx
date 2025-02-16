import MainHeader from "../components/MainHeader"
import Nav from "../components/Nav"
import { useState, useEffect } from "react";
import { fetchAllAnimals, fetchAdoptionsByUserId } from "../apis/api";
import AnimalCard from "../components/AnimalCard";

interface Animal {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
}

export const HomePage = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [adoptedAnimalIds, setAdoptedAnimalIds] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasAdoptions, setHasAdoptions] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const [allAnimals, adoptions] = await Promise.all([
          fetchAllAnimals(),
          fetchAdoptionsByUserId(1) 
        ]);

        setAnimals(allAnimals);
        if (adoptions.length === 0) {
          setHasAdoptions(false);
        }

        const adoptedIds: Set<number> = new Set(adoptions.map((adoption: any) => adoption.animal_id));
        setAdoptedAnimalIds(adoptedIds);
      } catch (error) {
        setError('Failed to load animals.');
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading animals...</div>;

  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <>
        <MainHeader/>
        <section className="p-6">
          <h1 className="text-primary font-bold">Featured Animals</h1>
          <div className="grid grid-cols-2 gap-6 my-6">
          {animals.length > 0 ? (
          animals.slice(0,2).map((animal) => (
            <AnimalCard 
              key={animal.id} 
              animal={animal} 
              isAdopted={adoptedAnimalIds.has(animal.id)} 
            />
          ))
        ) : (
          <p className="text-center text-lg">No animals available for adoption.</p>
        )}
          </div>
        <h1 className="text-primary font-bold">Community Activities Near You</h1>
        </section>
        <Nav/>
    </>
  )
}

export default HomePage