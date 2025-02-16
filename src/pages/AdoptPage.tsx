import { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import MainHeader from "../components/MainHeader";
import AnimalCard from "../components/AnimalCard";
import { fetchAllAnimals, fetchAdoptionsByUserId } from "../apis/api";

interface Animal {
  id: number;
  name: string;
  age: number;
  location: string;
}

const AdoptPage = () => {
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
          fetchAdoptionsByUserId(2) 
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
      <MainHeader />
      <section className="grid grid-cols-2 gap-6 p-6">
        {animals.length > 0 ? (
          animals.map((animal) => (
            <AnimalCard 
              key={animal.id} 
              animal={animal} 
              isAdopted={adoptedAnimalIds.has(animal.id)} 
            />
          ))
        ) : (
          <p className="text-center text-lg">No animals available for adoption.</p>
        )}
      </section>

      {!hasAdoptions && (
        <div className="text-center text-blue-500 p-4">
          You haven't adopted any animals yet. Start your journey today! 🐾
        </div>
      )}

      <Nav />
    </>
  );
};

export default AdoptPage;
