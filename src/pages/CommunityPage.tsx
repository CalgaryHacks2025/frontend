import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import MainHeader from "../components/MainHeader";
import animalShelterCleanupDay from "../assets/animal-shelter-clean-up-day.png";
import CalendarInfo from "../components/CalendarInfo";
import CommunityNumbers from "../components/CommunityNumbers";

const CommunityPage = () => {
  return (
    <>
      <MainHeader />

      <div className="px-6 pt-7">
        <h1 className="font-bold pb-5.5">Upcoming Events</h1>

        <article className="flex justify-center">
          <img
            src={animalShelterCleanupDay}
            alt="nurse holding sick dog"
            className="w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none object-cover"
          />
        </article>

        <section className="bg-[#F1F0EA] px-6 py-5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none">
          <h2 className="font-bold pb-3 pt-1">Animal Shelter Clean-up Day</h2>

          <div>
            <CalendarInfo date="March 15, 2025" location="Pet City Shelter" />
            <CommunityNumbers spots={23} />
          </div>
        </section>
      </div>

      <button>
        <Link to="/event-details">Join Event</Link>
      </button>
      <Nav />
    </>
  );
};

export default CommunityPage;
