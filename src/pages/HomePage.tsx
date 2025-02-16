import MainHeader from "../components/MainHeader";
import Nav from "../components/Nav";
import animalShelterCleanupDay from "../assets/animal-shelter-clean-up-day.png";
import CommunityNumbers from "../components/CommunityNumbers";
MainHeader;

export const HomePage = () => {
  return (
    <>
      <MainHeader />
      <div className="px-6 pt-7">
        <h1 className="font-bold pb-5.5">Community Activities Near You</h1>

        <article className="flex justify-center">
          <img
            src={animalShelterCleanupDay}
            alt="nurse holding sick dog"
            className="w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none object-cover"
          />
        </article>

        <section className="bg-[#F1F0EA] px-5 py-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none">
          <h2 className="font-bold pb-1.5 pt-1">Animal Shelter Clean-up Day</h2>
          <CommunityNumbers spots={23} />
        </section>
      </div>
      <Nav />
    </>
  );
};

export default HomePage;
