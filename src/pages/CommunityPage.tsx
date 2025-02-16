import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import MainHeader from "../components/MainHeader";

const CommunityPage = () => {
  return (
    <>
      <MainHeader />
      <button>
        <Link to="/event-details">Join Event</Link>
      </button>
      <Nav />
    </>
  );
};

export default CommunityPage;
