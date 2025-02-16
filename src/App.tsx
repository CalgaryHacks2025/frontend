import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import AssessPage from "./pages/AssessPage"
import AdoptPage from "./pages/AdoptPage"
import CommunityPage from "./pages/CommunityPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage";
import AdoptDetailsPage from "./pages/AdoptDetailsPage";

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/assess" element={<AssessPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/test" element={<AdoptDetailsPage />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
