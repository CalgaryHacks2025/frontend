import BackArrow from "../assets/back.svg";

const SecondaryHeader = () => {
  return (
    <header className="bg-background p-6">
      <div className="container mx-auto flex items-center">
        <img src={BackArrow} alt="Back" className="h-7 w-7" />
        <h1 className="text-primary font-bold text-2xl flex-grow text-center ml-[-28px]">
          Max's Updates
        </h1>
      </div>
    </header>
  );
};

export default SecondaryHeader;
