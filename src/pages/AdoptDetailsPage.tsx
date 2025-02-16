import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Pin from "../assets/location.svg?react";
import { fetchAnimalById, adoptAnimal } from '../apis/api';
import SecondaryHeader from '../components/SecondaryHeader';


interface Animal {
  id: number;
  name: string;
  species: string;
  location: string;
  gender: string;
  age: number;
  description: string;
  image: string;
}
const baseURL = import.meta.env.VITE_API_URL;

const AdoptDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAnimalDetails = async () => {
      try {
        const data = await fetchAnimalById(id!);
        setAnimal(data);
      } catch (error) {
        console.error('Failed to fetch animal details:', error);
      } finally {
        setLoading(false);
      }
    };

    getAnimalDetails();
  }, [id]);


  const navigate = useNavigate();

  const adopt = async() => {
    try {
        await adoptAnimal(`${1}`, `${animal.id}`);
        navigate('/adopt');

    } catch (error) {
        console.log('unable to update')
    }
  }

  if (loading) return <div className="text-center p-6">Loading animal details...</div>;

  if (!animal) return <div className="text-center p-6">Animal not found.</div>;

  return (
    <>
      <SecondaryHeader title="Adoption Details"/>
      <section className="p-6 pb-20"> 
        {/* Image */}
        <div className="w-85 h-85 overflow-hidden rounded-lg">
          <img
            src={`${baseURL}/public/${animal.image}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <article className="my-6">
          {/* Name and Age */}
          <div className="flex items-center justify-between">
            <h1 className="text-primary font-bold text-2xl">{animal.name}</h1>
            <p className="text-secondary-text font-light text-lg">{animal.age} years old</p>
          </div>

          {/* Species */}
          <div className="flex my-4 gap-4">
            <div className="px-4 py-2 text-primary border border-primary rounded-4xl">
              {animal.species}
            </div>
            <div className="px-4 py-2 text-primary border border-primary rounded-4xl">
              {animal.gender}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center mb-4">
            <Pin height={16} />
            <p className="text-secondary-text px-2 font-light">
              {animal.location}
            </p>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h1 className="my-4 text-lg font-semibold">About {animal.name}</h1>
            <p className="text-secondary-text">{animal.description}</p>
          </div>
        </article>
      </section>

      {/* Sponsor Button */}
      <div className="fixed bottom-0 left-0 p-6 w-full bg-background shadow-lg">
        <button onClick={adopt} className="bg-primary rounded-lg text-white font-semibold py-4 w-full hover:bg-primary-dark transition">
          Sponsor {animal.name}
        </button>
      </div>
    </>
  );
};

export default AdoptDetailsPage;
