import Nav from "../components/Nav"
import MainHeader from "../components/MainHeader"
import AnimalCard from "../components/AnimalCard"

const AdoptPage = () => {
  return (
    <>
        <MainHeader/>
        <section className="grid grid-cols-2 gap-6 p-6">
        <AnimalCard/>
        <AnimalCard/>
        <AnimalCard/>
        <AnimalCard/>
        
        </section>
        <div className="font-inter">AdoptPage</div>
        <Nav/>
    </>

  )
}

export default AdoptPage