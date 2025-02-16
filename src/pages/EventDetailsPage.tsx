import { Link } from "react-router-dom";
import "../App.css";
import Nav from "../components/Nav";
import arrowLeft from "../assets/arrow-left.svg";
import animalShelterCleanupDay from "../assets/animal-shelter-clean-up-day.png";
import calendarIcon from "../assets/calendar.svg";
import locationIcon from "../assets/location.svg";
import spotsRemainingIcon from "../assets/community-gray.svg";
import checkmarkIcon from "../assets/checkmark.svg";

const EventDetailsPage = () => {
  return (
    <>
      <div className="subpage-nav">
        <div className="flex items-center py-8 px-6 border-b">
          <Link to="/community">
            <img
              src={arrowLeft}
              alt="back button"
              className="w-5 h-5 cursor-pointer"
            />
          </Link>
          <div className="flex-grow text-center">
            <h1 className="font-bold">Event Details</h1>
          </div>
        </div>

        <article className="flex justify-center py-8">
          <img
            src={animalShelterCleanupDay}
            alt="nurse holding sick dog"
            className="w-9/10 rounded-md object-cover"
          />
        </article>

        <section className="event-logistics">
          <h1 className="pb-4 pt-1.5 px-6 font-bold">
            Animal Shelter Clean-up Day
          </h1>

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

        <section className="about-this-event">
          <h2 className="pb-3 pt-7 px-6 font-bold">About This Event</h2>
          <h2 className="px-6">
            Join us for our monthly shelter clean-up day! We'll be cleaning
            kennels, organizing supplies, and spending time with our furry
            friends. No experience necessary, all cleaning supplies provided.
          </h2>
        </section>

        <section className="requirements">
          <h2 className="pb-1.5 pt-7 px-6 font-bold">Requirements</h2>

          <div className="flex items-center py-1.5 px-6">
            <img
              src={checkmarkIcon}
              alt="yellow checkmark icon"
              className="w-5 h-5 cursor-pointer mr-3"
            />
            <div>
              <h2>Must be 18 or older</h2>
            </div>
          </div>

          <div className="flex items-center py-1.5 px-6">
            <img
              src={checkmarkIcon}
              alt="yellow checkmark icon"
              className="w-5 h-5 cursor-pointer mr-3"
            />
            <div>
              <h2>Closed-toe shoes required</h2>
            </div>
          </div>

          <div className="flex items-center py-1.5 px-6">
            <img
              src={checkmarkIcon}
              alt="yellow checkmark icon"
              className="w-5 h-5 cursor-pointer mr-3"
            />
            <div>
              <h2>Sign waiver form</h2>
            </div>
          </div>
        </section>

        <div className="px-6 py-6">
          <button className="bg-[#23453A] text-white rounded-md mr-3 w-full w-9/10 h-15 flex items-center justify-center font-bold">
            <Link to="/event-confirmed">Register for Event</Link>
          </button>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default EventDetailsPage;
