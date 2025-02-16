import { Link } from "react-router-dom";
import Alert from "../assets/alert.svg?react";
import HeartIcon from "../assets/heart.svg?react"; // New heart icon
import Pin from "../assets/location.svg?react";

interface Animal {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
}

const AnimalCard = ({ animal, isAdopted }: { animal: Animal; isAdopted: boolean }) => {
    const baseURL = import.meta.env.VITE_API_URL;
    const country = animal.location.split(', ')
  return (
    <article className="w-41 rounded-2xl overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="relative h-41 w-41">
        {/* Conditional Badge */}
        <div className={`flex items-center absolute right-2 top-3 py-1 px-2 rounded-4xl bg-white text-primary`}>
          {isAdopted ? (
            <>
              <HeartIcon className="mr-1 text-red-500" />
              <p className="text-buttons">Adopted</p>
            </>
          ) : (
            <>
              <Alert className="mr-1 text-blue-500" />
              <p className="text-buttons">Fundraising</p>
            </>
          )}
        </div>
        <img src={`${baseURL}/public/${animal.image}`} alt={animal.name} className="w-full h-full object-cover" />
      </div>

      {/* Card Content */}
      <div className="bg-background-card p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-primary font-semibold text-lg">{animal.name}</h2>
          <p className="text-secondary-text text-sm font-light">{animal.age} years</p>
        </div>
        <div className="flex items-center py-1 mb-2">
          <Pin height={12} />
          <p className="text-secondary-text px-2 text-sm font-light">{country[1]}</p>
        </div>
        <Link to={isAdopted ? `/updates/${animal.id}` : `/adopt/${animal.id}`}>
          <button
            className={`rounded-lg w-full py-2 transition ${
              isAdopted
          ? 'bg-green-500 text-white hover:bg-green-600'
          : 'bg-secondary text-primary hover:bg-secondary-dark'
            }`}
          >
            {isAdopted ? 'View Status' : 'Adopt'}
          </button>
        </Link>
      </div>
    </article>
  );
};

export default AnimalCard;
