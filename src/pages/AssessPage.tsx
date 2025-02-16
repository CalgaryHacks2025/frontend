import Nav from "../components/Nav"
import MainHeader from "../components/MainHeader"
import CameraIcon from "../assets/camera.svg?react"
import PhotoIcon from "../assets/photo.svg?react"

const AssessPage = () => {
  return (
    <>
        <MainHeader/>
        <section className="px-6">
          <p className="text-secondary-text text-center my-6">Take a photo or upload an existing one to <br></br> assess the animal's condition</p>
        <article className="rounded-lg bg-background-card p-6 my-6">
          <CameraIcon className="place-self-center mx-auto"/>
          <button className="bg-primary text-white rounded-lg w-full py-3 my-4">Take Photo</button>
          <p className="text-secondary-text text-center text-sm">Use your camera to capture the animal</p>
        </article>
        <article className="rounded-lg bg-background-card p-6 my-6">
          <PhotoIcon className="place-self-center mx-auto"/>
          <button className="bg-background text-primary rounded-lg w-full py-3 my-4 border-1 border-primary">Upload Photo</button>
          <p className="text-secondary-text text-center text-sm">Choose from your gallery</p>
        </article>
        <div className="">
          <p className="text-primary mb-2">Photo Guidelines: </p>
          <p className="py-2 text-secondary-text"> ✓  Ensure good lighting</p>
          <p className="py-2  text-secondary-text">✓  Clear view of injury</p>
          <p className="py-2  text-secondary-text"> ✓  Keep the animal in focus</p>
        </div>
        </section>
        <Nav/>
    </>
  )
}

export default AssessPage