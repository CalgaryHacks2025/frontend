import Pin from "../assets/location.svg?react"
import MainHeader from "../components/MainHeader";

const AdoptDetailsPage = () => {
  return (
    <>
    <MainHeader/>
    <section className="p-6">
        {/* Image */}
        <div className="w-85 h-85 overflow-hidden rounded-lg">
            <img
                src={'src/assets/elephant.png'}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Card Content */}
        <article className="my-6">
            <div className="flex items-center justify-between">
                <h1 className="text-primary font-bold">Name</h1>
                <p className=" text-secondary-text font-light">2 years old</p>
            </div>
            <div className="flex my-4">
                <div className="px-4 py-2 text-primary border-1 rounded-4xl"> Elephant</div>
            </div>
            <div className="flex items-center mb-1">
                <Pin height={16}/>
                <p className="text-secondary-text px-2 font-light">Happy Paws Shelter, India</p>
            </div>
            <div className="">
                <h1 className="my-6">About Luna</h1>
                <p>Luna is a frienly and energetic passionate.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>
        </article>
        <div className="fixed bottom-0 left-0 p-6 w-full bg-background">
            <button className=" bg-primary rounded-lg text-white font-semibold py-4 w-full">
                Sponsor Luna
            </button>
        </div>
        </section>

        </>
  );
};

export default AdoptDetailsPage