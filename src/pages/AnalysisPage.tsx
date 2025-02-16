import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import SecondaryHeader from "../components/SecondaryHeader";
import HospitalIcon from "../assets/hospital.svg";
import DotIcon from "../assets/dot-yellow.svg";

const AnalysisPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Nav />
      <SecondaryHeader title="Analysis Results" backTo="/assess" />
      <div className="justify-self-center">
        <img src={HospitalIcon} alt="hospitalicon" className="h-10 w-10" />
      </div>
      <div className="container mx-auto p-4 flex-col">
        <h1 className="text-primary text-2xl font-bold mb-4">
          Species Identification
        </h1>
        <div className="bg-background-card p-6 rounded-lg shadow-md mb-4">
          <div className="mb-4">
            <h2 className="text-primary text-xl font-bold">Species:</h2>
            <p className="text-primary text-lg">Domestic Cat (Felis catus)</p>
          </div>
          <div>
            <h2 className="text-primary text-xl font-bold">Confidence</h2>
            <p className="text-primary text-lg">98%</p>
          </div>
        </div>
        <h1 className="text-primary text-2xl font-bold mb-4">
          Injury Assessment
        </h1>
        <div className="bg-background-card p-6 rounded-lg shadow-md">
          <div className="mb-4 ">
            <h2 className="text-primary text-xl font-bold">Severity:</h2>
            <div className="flex items-center gap-2">
              <img src={DotIcon} alt="doiticon" className="h-3 w-3" />
              <p className="text-primary text-lg">High</p>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-primary text-xl font-bold">Location:</h2>
            <p className="text-primary text-lg">Right hind leg</p>
          </div>
          <div className="mb-4">
            <h2 className="text-primary text-xl font-semibold">Type:</h2>
            <p className="text-primary text-lg">Possible fracture</p>
          </div>
          <div className="mb-6">
            <p className="text-primary text-lg font-bold">
              Immediate veterinary care recommended
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary-dark transition duration-300">
              Contact Emergency Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
