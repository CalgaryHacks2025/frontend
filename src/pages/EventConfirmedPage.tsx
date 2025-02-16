import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import arrowLeft from "../assets/arrow-left.svg";

const EventConfirmedPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center py-8 px-6 border-b--color-divider">
          <Link to="/event-details">
            <img
              src={arrowLeft}
              className="w-5 h-5 cursor-pointer"
              alt="left-arrow"
            />
          </Link>
          <div className="flex-grow text-center">
            <h1>Event Confirmed</h1>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default EventConfirmedPage;
