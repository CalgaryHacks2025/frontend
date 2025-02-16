import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import SecondaryHeader from "../components/SecondaryHeader";
import HospitalIcon from "../assets/hospital.svg";
import DotIcon from "../assets/dot-yellow.svg";

const AnalysisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the result from navigation state
  const result = location.state?.result;

  // Handle missing data
  if (!result) {
    return (
      <div className="text-center p-6">
        <p className="text-red-500 text-lg mb-4">No analysis data available.</p>
        <button
          className="bg-primary text-white rounded-lg px-4 py-2"
          onClick={() => navigate("/assess")}
        >
          Go Back
        </button>
      </div>
    );
  }

  // Destructure result fields
  const { primary_species_detected, confidence } = result;

  return (
    <div className="bg-background min-h-screen">
      <Nav />
      <SecondaryHeader title="Analysis Results" backTo="/assess" />

      {/* Icon */}
      <div className="flex justify-center my-4">
        <img src={HospitalIcon} alt="hospital icon" className="h-16 w-16" />
      </div>

      <div className="container mx-auto p-4 flex-col">
        {/* Species Identification */}
        <h1 className="text-primary text-2xl font-bold mb-4">
          Species Identification
        </h1>
        <div className="bg-background-card p-6 rounded-lg shadow-md mb-4">
          <div className="mb-4">
            <h2 className="text-primary text-xl font-bold">Species:</h2>
            <p className="text-primary text-lg">
              {primary_species_detected || "Unknown"}
            </p>
          </div>
          <div>
            <h2 className="text-primary text-xl font-bold">Confidence</h2>
            <p className="text-primary text-lg">
              {confidence || "N/A"}
            </p>
          </div>
        </div>

        

          <div className="flex flex-col space-y-4">
            <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary-dark transition duration-300">
              Contact Emergency Services
            </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
