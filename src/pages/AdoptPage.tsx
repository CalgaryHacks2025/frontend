import Nav from "../components/Nav"
import MainHeader from "../components/MainHeader"
import AnimalCard from "../components/AnimalCard"
import axios from "axios"
import { useEffect } from "react"

const AdoptPage = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  console.log(baseURL)

  async function getAnimals() {
    try {
      const results = await axios.get(`${baseURL}/animals`);
      console.log(results);
    } catch (error) {
      console.log('some issues with getting animal')
    }

  }

  useEffect(()=>{getAnimals()},[])
  

  return (

    <>
        <MainHeader/>
        <section className="">
          
        </section>
        <section className="grid grid-cols-2 gap-6 p-6">
        <AnimalCard/>
        <AnimalCard/>
        <AnimalCard/>
        <AnimalCard/>
        
        </section>

        <Nav/>
    </>

  )
}

export default AdoptPage