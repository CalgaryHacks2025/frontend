import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssessPage from "./pages/AssessPage";
import AdoptPage from "./pages/AdoptPage";
import CommunityPage from "./pages/CommunityPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import UpdatesPage from "./pages/UpdatesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assess" element={<AssessPage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/updates" element={<UpdatesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
