import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import SecondaryHeader from "../components/SecondaryHeader";
import HeartIcon from "../assets/heart-yellow.svg";
import HabitatIcon from "../assets/habitat-yellow.svg";
import MealIcon from "../assets/meal-yellow.svg";

interface UserData {
  name: string;
  username: string;
  id: number;
}

interface PhotoData {
  url: string;
}

const UpdatesPage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [photoData, setPhotoData] = useState<PhotoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: UserData = await response.json();
        setUserData(data);

        const photoResponse = await fetch(
          "https://jsonplaceholder.typicode.com/photos/1"
        );
        if (!photoResponse.ok) {
          throw new Error("Failed to fetch photo data");
        }
        const photoData: PhotoData = await photoResponse.json();
        setPhotoData(photoData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="font-inter bg-background min-h-screen pb-20">
      <SecondaryHeader />
      <div className="p-6">
        <div className="container mx-auto">
          <div className="bg-background p-0 rounded-lg">
            <div className="flex">
              <div className="flex items-center mb-4">
                {photoData && (
                  <img
                    src={photoData.url}
                    alt="Fubao"
                    className="w-24 h-24 rounded-full object-cover mr-4"
                  />
                )}
              </div>
              <div className="">
                <h2 className="text-primary font-bold text-xl mb-4">
                  {userData?.name}
                </h2>
                <p className="text-secondary-text mb-2">
                  {userData?.username} • {userData?.id} years old
                </p>
                <p className="text-secondary-text mb-4">
                  Adopted on {getCurrentDate()}
                </p>
              </div>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg mb-6 w-full">
              View certificate of adoption
            </button>
            <h3 className="text-primary font-bold text-lg mb-4">
              Recent Updates
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between">
                  <div className="flex justify-normal gap-2">
                    <img src={HeartIcon} alt="hearticon" className="h-5 w-5" />
                    <h4 className="text-primary font-bold">Health Check-up</h4>
                  </div>
                  <div>
                    <p className="text-secondary-text justify-self-end">
                      2 days ago
                    </p>
                  </div>
                </div>

                <p className="text-secondary-text mt-2">
                  Max had his regular check-up. All vitals are normal and he's
                  in excellent health!
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between">
                  <div className="flex justify-normal gap-2">
                    <img
                      src={HabitatIcon}
                      alt="hearticon"
                      className="h-5 w-5"
                    />
                    <h4 className="text-primary font-bold">Habitat Update</h4>
                  </div>
                  <div>
                    <p className="text-secondary-text justify-self-end">
                      1 week ago
                    </p>
                  </div>
                </div>
                <p className="text-secondary-text mt-2">
                  Living space cleaned and refreshed. New toys added to enrich
                  daily activities.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between">
                  <div className="flex justify-normal gap-2">
                    <img src={MealIcon} alt="hearticon" className="h-5 w-5" />
                    <h4 className="text-primary font-bold">Diet Report</h4>
                  </div>
                  <div>
                    <p className="text-secondary-text justify-self-end">
                      1 week ago
                    </p>
                  </div>
                </div>
                <p className="text-secondary-text mt-2">
                  Maintaining healthy appetite. Diet plan adjusted for winter
                  season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default UpdatesPage;
