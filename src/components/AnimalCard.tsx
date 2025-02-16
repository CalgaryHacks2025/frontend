import { Link } from "react-router-dom"
import Alert from "../assets/alert.svg?react"
import Pin from "../assets/location.svg?react"

const AnimalCard = () => {



  return (
    <article className="w-41 rounded-2xl overflow-hidden">
        {/* Photo section */}
        <div className=" relative h-41 w-41">
            <div className="flex items-center absolute right-2 top-3 py-1 px-2 rounded-4xl bg-white text-primary"> 
                <Alert className="mr-1"/>
                <p className="text-buttons">Fundraising</p>
            </div>
        <img src="src/assets/elephant.png"></img>
        </div>
        {/* Card Content*/}
        <div className="bg-background-card p-3">
            <div className="flex justify-between">
                <h2 className="text-primary font-semibold">Max</h2>
                <p className="text-secondary-text text-sm font-light">2 years</p>
            </div>
            <div className="flex items-center py-1 mb-1">
                <Pin height={12}/>
                <p className="text-secondary-text px-1 text-sm font-light">India</p>
            </div>
            <Link to={'/'}>
            <button className="bg-secondary text-primary rounded-lg w-full py-2 hover:bg-ligh">Adopt</button>
            </Link>
        </div>

    </article>
  )
}

export default AnimalCard