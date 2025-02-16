import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import SecondaryHeader from "../components/SecondaryHeader";
import HeartIcon from "../assets/heart-yellow.svg";
import HabitatIcon from "../assets/habitat-yellow.svg";
import MealIcon from "../assets/meal-yellow.svg";
import { fetchAnimalById, fetchAnimalActivities } from "../apis/api";

interface Animal {
  name: string;
  location: string;
  age: number;
  description: string;
  image: string;
}

interface Activity {
  activity: string;
  timestamp: string;
}

const baseURL = import.meta.env.VITE_API_URL;

const UpdatesPage = () => {
  const { id } = useParams<{ id: string }>(); 
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [activities, setActivities] = useState<Activity[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError("No ID provided");
        setLoading(false);
        return;
      }

      try {
        // Fetch animal details
        const animalData = await fetchAnimalById(id);
        setAnimal(animalData);

        // Fetch animal activities
        const activityData = await fetchAnimalActivities(id);
        setActivities(activityData);

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const getFormattedDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="font-inter bg-background min-h-screen pb-20">
      <SecondaryHeader title={`Updates for ${animal?.name}`} />
      <div className="p-6">
        <div className="container mx-auto">
          <div className="bg-background p-0 rounded-lg">
            <div className="flex">
              <div className="flex items-center mb-4">
                {animal?.image && (
                  <img
                    src={`${baseURL}/public/${animal.image}`}
                    alt={animal.name}
                    className="w-24 h-24 rounded-full object-cover mr-4"
                  />
                )}
              </div>
              <div className="">
                <h2 className="text-primary font-bold text-xl mb-4">
                  {animal?.name}
                </h2>
                <div className="mb-2">
                  <p className="text-secondary-text font-medium">{animal?.location}</p>
                </div>
                <div>
                  <p className="text-secondary-text font-light">{animal?.age} years old</p>
                </div>
                <p className="text-secondary-text mb-4">
                  Adopted on {getFormattedDate(activities?.[0]?.timestamp || new Date().toISOString())}
                </p>
              </div>
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-lg mb-6 w-full">
              View certificate of adoption
            </button>

            <h3 className="text-primary font-bold text-lg mb-4">
              Recent Updates
            </h3>

            {activities && activities.length > 0 ? (
              <div className="space-y-4">
                {/* Activity 1 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <div className="flex justify-normal gap-2">
                      <img src={HeartIcon} alt="heart icon" className="h-5 w-5" />
                      <h4 className="text-primary font-bold">
                        {activities[0].activity}
                      </h4>
                    </div>
                    <div>
                      <p className="text-secondary-text">
                        {getFormattedDate(activities[0].timestamp)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Activity 2 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <div className="flex justify-normal gap-2">
                      <img src={HabitatIcon} alt="habitat icon" className="h-5 w-5" />
                      <h4 className="text-primary font-bold">
                        {activities[1]?.activity || "No activity"}
                      </h4>
                    </div>
                    <div>
                      <p className="text-secondary-text">
                        {activities[1] ? getFormattedDate(activities[1].timestamp) : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Activity 3 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <div className="flex justify-normal gap-2">
                      <img src={MealIcon} alt="meal icon" className="h-5 w-5" />
                      <h4 className="text-primary font-bold">
                        {activities[2]?.activity || "No activity"}
                      </h4>
                    </div>
                    <div>
                      <p className="text-secondary-text">
                        {activities[2] ? getFormattedDate(activities[2].timestamp) : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-secondary-text text-center">No activities found.</p>
            )}
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default UpdatesPage;
