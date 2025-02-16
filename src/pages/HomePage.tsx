import MainHeader from "../components/MainHeader";
import Nav from "../components/Nav";
import animalShelterCleanupDay from "../assets/animal-shelter-clean-up-day.png";
import spotsRemainingIcon from "../assets/community-gray.svg";
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

        <section className="bg-[#F1F0EA] px-6 py-5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none">
          <h2 className="font-bold pb-1.5 pt-1">Animal Shelter Clean-up Day</h2>
          <div className="flex items-center pb-1">
            <img
              src={spotsRemainingIcon}
              alt="spots remaining icon"
              className="w-5 h-5 cursor-pointer mr-3"
            />
            <div>
              <p>23 volunteers</p>
            </div>
          </div>
        </section>
      </div>
      <Nav />
    </>
  );
};

export default HomePage;
