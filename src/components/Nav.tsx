import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
        <Link to={'/'} className="">Home</Link>
        <Link to={'/adopt'}>Adopt</Link>
        <Link to={'/community'}>Community</Link>
        <Link to={'/profile'}>Profile</Link>       
    </div>
  )
}

export default Nav