import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import arrowLeft from "../assets/arrow-left.svg";
import confirmationCheckmarkIcon from "../assets/event-confirmed-checkmark.png";
import addCalendarIcon from "../assets/add-calendar.svg";

const EventConfirmedPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center py-8 px-6 border-b">
          <Link to="/event-details">
            <img
              src={arrowLeft}
              alt="back button"
              className="w-5 h-5 cursor-pointer"
            />
          </Link>
          <div className="flex-grow text-center">
            <h1 className="font-bold">Event Confirmed</h1>
          </div>
        </div>

        <article className="flex items-center justify-center px-6 pt-10 pb-7">
          <img
            src={confirmationCheckmarkIcon}
            alt="checkmark icon for event confirmation"
            className="w-2/10 "
          />
        </article>

        <section className="bg-white rounded-md w-9/10 mx-6 py-6">
          <h1 className="font-bold px-6 py-2">Animal Shelter Clean-up Day</h1>
          <p className="px-6 py-1">
            Saturday, March 15, 2025 • 9:00 AM - 2:00 PM
          </p>
          <p className="px-6 py-1">123 Shelter Street, Pet City</p>
        </section>

        <div className="px-6 py-7.5">
          <button className="bg-[#23453A] text-white rounded-md mr-3 w-full w-9/10 h-15 flex items-center justify-center">
            <img
              src={addCalendarIcon}
              alt="add to calendar icon"
              className="mr-3"
            ></img>
            <a href="https://calendar.google.com/">Add to Calendar </a>
          </button>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default EventConfirmedPage;
