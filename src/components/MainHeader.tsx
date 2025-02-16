import { useLocation } from "react-router-dom"

const MainHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;
  let title = ''

  if (pathname === '/') {
    title = 'EcoPulse';
  }
  else if (pathname === '/assess') {
    title = 'Assess Animal';
  }
  else if (pathname === '/adopt') {
    title = 'Find an Animal';
  }
  else if (pathname === '/community') {
    title = 'Community'
  }

  return (
    <div className=" bg-primary flex justify-between items-center px-6 py-6">

      <h1 className="font-bold text-secondary  ">{title}</h1>
      <img src="src/assets/img.png" className=" h-10 w-10 m-0 p-0"></img>
    </div>
  )
}

export default MainHeader