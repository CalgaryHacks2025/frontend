import { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import MainHeader from "../components/MainHeader";
import AnimalCard from "../components/AnimalCard";
import { fetchAllAnimals } from "../apis/api";

interface Animal {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
}

const AdoptPage = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const data = await fetchAllAnimals();
        setAnimals(data);
      } catch (error) {
        console.error('Failed to fetch animals:', error);
      }
    };

    getAnimals();
  }, []);

  return (
    <>
      <MainHeader />
      <section className="grid grid-cols-2 gap-6 p-6">
        {animals.length > 0 ? (
          animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))
        ) : (
          <p>Loading animals...</p>
        )}
      </section>
      <Nav />
    </>
  );
};

export default AdoptPage;
