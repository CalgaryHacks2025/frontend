import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="fixed bottom-1 p-4 grid grid-cols-4 text-center gap-10 text-xs h-16 border-1 text-baseGray">
        <Link to={'/'} className="">
          <img src="/home.svg" className="place-self-center"></img>
          Home
        </Link>
        <Link to={'/adopt'} className="">
          <img src="/frame.svg" className="place-self-center"></img>
          Assess
        </Link>
        <Link to={'/community'}>
          <img src="/heart.svg" className="place-self-center"></img>
          Adopt
        </Link>
        <Link to={'/profile'}>
          <img src="/community.svg" className="place-self-center"></img>
          Community
        </Link>       
    </div>
  )
}

export default Nav