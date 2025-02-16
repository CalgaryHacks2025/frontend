import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import arrowLeft from "../assets/arrow-left.svg";
import confirmationCheckmarkIcon from "../assets/event-confirmed-checkmark.png";
import addCalendarIcon from "../assets/add-calendar.svg";

const EventConfirmedPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center py-8 px-6">
          <Link to="/event-details">
            <img
              src={arrowLeft}
              alt="back button"
              className="w-5 h-5 cursor-pointer"
            />
          </Link>
          <div className="flex-grow text-center">
            <h1 className="font-bold text-primary">Event Confirmed</h1>
          </div>
        </div>

        <article className="flex items-center justify-center px-6 pt-10 pb-7">
          <img
            src={confirmationCheckmarkIcon}
            alt="checkmark icon for event confirmation"
            className="w-2/10 "
          />
        </article>

        <div className="w-9.5/10 mx-6">
          <section className="bg-white rounded-md py-6">
            <h1 className="font-bold px-6 py-2 text-primary">Animal Shelter Clean-up Day</h1>
            <p className="px-6 py-1 text-secondary-text">
              Saturday, March 15, 2025 • 9:00 AM - 2:00 PM
            </p>
            <p className="px-6 py-1 text-secondary-text">123 Shelter Street, Pet City</p>
          </section>

          <div className="py-7.5">
            <button className="bg-[#23453A] text-white rounded-md w-full h-15 flex items-center justify-center">
              <img
                src={addCalendarIcon}
                alt="add to calendar icon"
                className="mr-3"
              ></img>
              <a href="https://calendar.google.com/">Add to Calendar </a>
            </button>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default EventConfirmedPage;
