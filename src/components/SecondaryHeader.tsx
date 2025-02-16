import BackArrow from "../assets/back.svg";
import { Link } from "react-router-dom";

interface SecondaryHeaderProps {
  title: string;
  backTo?: string;
}

const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({ title, backTo }) => {
  return (
    <header className="bg-background p-6">
      <div className="container mx-auto flex items-center">
        <Link to={backTo || "#"}>
          <img src={BackArrow} alt="Back" className="h-7 w-7 cursor-pointer" />
        </Link>
        <h1 className="text-primary font-bold text-2xl flex-grow text-center ml-[-28px]">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default SecondaryHeader;
