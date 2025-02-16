import BackArrow from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

interface SecondaryHeaderProps {
  title: string;
}

const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = (): void => {
    navigate(-1);
  };

  return (
    <header className="bg-background p-6">
      <div className="container mx-auto flex items-center">
        <img
          src={BackArrow}
          alt="Back"
          className="h-7 w-7 cursor-pointer"
          onClick={handleBackClick}
        />
        <h1 className="text-primary font-bold text-2xl flex-grow text-center ml-[-28px]">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default SecondaryHeader;
