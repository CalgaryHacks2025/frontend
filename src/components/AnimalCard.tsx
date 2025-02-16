import { Link } from "react-router-dom";
import Alert from "../assets/alert.svg?react";
import Pin from "../assets/location.svg?react";

interface Animal {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
}

const AnimalCard = ({ animal }: { animal: Animal }) => {
    const baseURL = import.meta.env.VITE_API_URL;
    const country = animal.location.split(', ')
  return (
    <article className="w-41 rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-41 w-41">
        <div className="flex items-center absolute right-2 top-3 py-1 px-2 rounded-4xl bg-white text-primary">
          <Alert className="mr-1" />
          <p className="text-buttons">Fundraising</p>
        </div>
        <img src={`${baseURL}/public/${animal.image}`} alt={animal.name} className="w-full h-full object-cover" />
      </div>

      <div className="bg-background-card p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-primary font-semibold text-lg">{animal.name}</h2>
          <p className="text-secondary-text text-sm font-light">{animal.age} years</p>
        </div>
        <div className="flex items-center py-1 mb-2">
          <Pin height={12} />
          <p className="text-secondary-text px-2 text-sm font-light">{country[1]}</p>
        </div>
        <Link to={`/adopt/${animal.id}`}>
          <button className="bg-secondary text-primary rounded-lg w-full py-2 hover:bg-secondary-dark transition">
            Adopt
          </button>
        </Link>
      </div>
    </article>
  );
};

export default AnimalCard;
