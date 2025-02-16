import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Community from '../../src/assets/community.svg?react'
import Home from '../../src/assets/home.svg?react'
import Adopt from '../../src/assets/heart.svg?react'
import Assess from '../../src/assets/assess.svg?react'


const Nav = () => {
  const location = useLocation();
  console.log(location);


  return (
    <div className="bg-background fixed bottom-0 p-4 grid grid-cols-4 text-center gap-10 text-xs h-16">
        <Link to={'/'} className={location.pathname === '/'? 'text-nav fill-nav': 'text-secondary-text'}>
          <Home className='place-self-center' />
          <p>Home</p>
        </Link>
        <Link to={'/assess'} className={location.pathname === '/assess'? 'text-nav fill-nav': 'text-secondary-text'}>
          <Assess className='place-self-center'/>
          <p>Assess</p>
        </Link>
        <Link to={'/adopt'} className={location.pathname === '/adopt'? 'text-nav fill-nav': 'text-secondary-text'}>
          <Adopt className='place-self-center'/>
          <p>Adopt</p>
        </Link>
        <Link to={'/community'} className={location.pathname === '/community'? 'text-nav fill-nav': 'text-secondary-text'}>
          <Community className='place-self-center'/>
          <p>Community</p>
        </Link>      
    </div>
  )
}

export default Nav