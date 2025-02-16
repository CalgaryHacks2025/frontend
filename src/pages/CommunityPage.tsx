import Nav from "../components/Nav";
import MainHeader from "../components/MainHeader";
import Button from "../components/Button";
import animalShelterCleanupDay from "../assets/animal-shelter-clean-up-day.png";
import petAdoptionDay from "../assets/pet-adoption-day.png";
import CalendarInfo from "../components/CalendarInfo";
import CommunityNumbers from "../components/CommunityNumbers";

const CommunityPage = () => {
  return (
    <>
      <MainHeader />

      <div className="px-6 pt-7">
        <section className="flex gap-4">
          <article className="bg-[#F1F0EA] px-5 py-4 rounded-md w-full">
            <h1 className="font-bold pt-1.5 pb-1">47</h1>
            <p>Total Hours</p>
          </article>
          <article className="bg-[#F1F0EA] px-5 py-4 rounded-md w-full">
            <h1 className="font-bold pt-1.5 pb-1">12</h1>
            <p>Animals Helped</p>
          </article>
        </section>

        <h1 className="font-bold pb-5.5 pt-10">Upcoming Events</h1>

        <section>
          <article className="flex justify-center">
            <img
              src={animalShelterCleanupDay}
              alt="nurse holding sick dog"
              className="w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none object-cover"
            />
          </article>

          <section className="bg-[#F1F0EA] px-5 py-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none">
            <h2 className="font-bold pb-3 pt-1">Animal Shelter Clean-up Day</h2>

            <div>
              <CalendarInfo date="March 15, 2025" location="Pet City Shelter" />
              <CommunityNumbers spots={23} />
            </div>

            <div className="pt-4 pb-1.5">
              <Button to="/event-details">Join Event</Button>
            </div>
          </section>
        </section>

        <section>
          <article className="flex justify-center mt-6">
            <img
              src={petAdoptionDay}
              alt="nurse with smiling golden retriever"
              className="w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none object-cover"
            />
          </article>

          <section className="bg-[#F1F0EA] px-5 py-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none">
            <h2 className="font-bold pb-3 pt-1">Pet Adoption Day</h2>

            <div>
              <CalendarInfo date="April 15, 2025" location="Toronto Shelter" />
              <CommunityNumbers spots={18} />
            </div>

            <div className="pt-4 pb-1.5">
              <Button to="/event-details">Join Event</Button>
            </div>
          </section>
        </section>
      </div>
      <Nav />
    </>
  );
};

export default CommunityPage;
