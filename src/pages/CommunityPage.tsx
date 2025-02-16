import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import MainHeader from "../components/MainHeader";
import animalShelterCleanupDay from "../assets/animal-shelter-clean-up-day.png";

const CommunityPage = () => {
  return (
    <>
      <MainHeader />

      <div>
        <article className="flex justify-center py-8">
          <img
            src={animalShelterCleanupDay}
            alt="nurse holding sick dog"
            className="w-9/10 rounded-md object-cover"
          />
        </article>

        <section></section>
      </div>

      <button>
        <Link to="/event-details">Join Event</Link>
      </button>
      <Nav />
    </>
  );
};

export default CommunityPage;
