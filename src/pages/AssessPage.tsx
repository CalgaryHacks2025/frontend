import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { detectImage } from '../apis/api';
import Nav from "../components/Nav";
import MainHeader from "../components/MainHeader";
import CameraIcon from "../assets/camera.svg?react";
import PhotoIcon from "../assets/photo.svg?react";

const AssessPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // 🆕 Add navigation hook

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };

  // Upload photo and detect objects
  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first.');
      return;
    }

    setLoading(true);
    try {
      const response = await detectImage(file);
      console.log('Detection response:', response);

      // 🆕 Navigate to the analysis page with the result
      navigate('/analysis', { state: { result: response } });

    } catch (err) {
      console.error('Failed to detect objects:', err);
      setError('Failed to detect objects. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MainHeader />
      <section className="px-6">
        <p className="text-secondary-text text-center my-6">
          Take a photo or upload an existing one to <br /> assess the animal's condition
        </p>

        {/* Camera Section */}
        <article className="rounded-lg bg-background-card p-6 my-6">
          <CameraIcon className="place-self-center mx-auto" />
          <button className="bg-primary text-white rounded-lg w-full py-3 my-4">
            Take Photo
          </button>
          <p className="text-secondary-text text-center text-sm">
            Use your camera to capture the animal
          </p>
        </article>

        {/* Upload Photo Section */}
        <article className="rounded-lg bg-background-card p-6 my-6">
          <PhotoIcon className="place-self-center mx-auto" />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="my-2 w-full"
          />
          <button
            className="bg-background text-primary rounded-lg w-full py-3 my-4 border-1 border-primary"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload Photo'}
          </button>
          <p className="text-secondary-text text-center text-sm">
            Choose from your gallery
          </p>
        </article>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 mt-4 text-center">
            {error}
          </div>
        )}

        {/* Guidelines */}
        <div className="mt-6">
          <p className="text-primary mb-2">Photo Guidelines:</p>
          <p className="py-2 text-secondary-text">✓ Ensure good lighting</p>
          <p className="py-2 text-secondary-text">✓ Clear view of injury</p>
          <p className="py-2 text-secondary-text">✓ Keep the animal in focus</p>
        </div>
      </section>

      <Nav />
    </>
  );
};

export default AssessPage;
