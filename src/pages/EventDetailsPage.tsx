import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import arrowLeft from "../assets/arrow-left.svg";

const EventDetailsPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center py-8 px-6 border-b--color-divider">
          <Link to="/community">
            <img
              src={arrowLeft}
              className="w-5 h-5 cursor-pointer"
              alt="left-arrow"
            />
          </Link>
          <div className="flex-grow text-center">
            <h1>Event Details</h1>
          </div>
        </div>

        <button>
          <Link to="/event-confirmed">Register for Event</Link>
        </button>
      </div>
      <Nav />
    </>
  );
};

export default EventDetailsPage;
