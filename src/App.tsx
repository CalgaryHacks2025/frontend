import { BrowserRouter, Routes, Route } from "react-router-dom"
import AssessPage from "./pages/AssessPage"
import AdoptPage from "./pages/AdoptPage"
import CommunityPage from "./pages/CommunityPage"
import ProfilePage from "./pages/ProfilePage"

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AssessPage />} />
        <Route path="/contract" element={<AdoptPage />} />
        <Route path="/loading" element={<CommunityPage />} />
        <Route path="/success/:propertyId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
