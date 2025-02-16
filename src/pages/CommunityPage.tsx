import Nav from "../components/Nav";
import arrowLeft from "../assets/arrow-left.svg";

const CommunityPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center py-8 px-6 border-b">
          <img
            src={arrowLeft}
            className="w-5 h-5 cursor-pointer"
            alt="left-arrow"
          />
          <div className="flex-grow text-center">
            <h1>Event Details</h1>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default CommunityPage;
