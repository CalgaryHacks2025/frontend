import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import arrowLeft from "../assets/arrow-left.svg";
import animalShelterCleanupDay from "../assets/animal-shelter-clean-up-day.png";
import calendarIcon from "../assets/calendar.svg";
import locationIcon from "../assets/location.svg";
import spotsRemainingIcon from "../assets/community-gray.svg";

const EventDetailsPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center py-8 px-6 border-b">
          <Link to="/community">
            <img
              src={arrowLeft}
              alt="back button"
              className="w-5 h-5 cursor-pointer"
            />
          </Link>
          <div className="flex-grow text-center">
            <h1>Event Details</h1>
          </div>
        </div>

        <article className="flex justify-center py-8">
          <img
            src={animalShelterCleanupDay}
            alt="nurse holding sick dog"
            className="w-95vw rounded-md object-cover"
          />
        </article>

        <section>
          <h1 className="pb-4 pt-1.5 px-6">Animal Shelter Clean-up Day</h1>

          <div className="flex items-center py-1.5 px-6">
            <img
              src={calendarIcon}
              alt="calendar icon"
              className="w-5 h-5 cursor-pointer mr-3"
            />
            <div>
              <h2>Saturday, March 15, 2025 • 9:00 AM - 2:00 PM</h2>
            </div>
          </div>

          <div className="flex items-center py-1.5 px-6">
            <img
              src={locationIcon}
              alt="location icon"
              className="w-5 h-5 cursor-pointer mr-3"
            />
            <div>
              <h2>123 Shelter Street, Pet City</h2>
            </div>
          </div>

          <div className="flex items-center py-1.5 px-6">
            <img
              src={spotsRemainingIcon}
              alt="spots remaining icon"
              className="w-5 h-5 cursor-pointer mr-3"
            />
            <div>
              <h2>12 spots remaining</h2>
            </div>
          </div>
        </section>

        <button>
          <Link to="/event-confirmed">Register for Event</Link>
        </button>
      </div>
      <Nav />
    </>
  );
};

export default EventDetailsPage;
