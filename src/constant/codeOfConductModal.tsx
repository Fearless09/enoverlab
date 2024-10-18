import { useState } from 'react';
import { PiSealCheck } from "react-icons/pi";//i preffer icon and can be removed

interface CodeOfConductModalProps {
  open: boolean;
  handleClose: () => void;
}

const CodeOfConductModal: React.FC<CodeOfConductModalProps> = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false); // To track loading state
  const [agreed, setAgreed] = useState(false); // To track the agreement

  if (!open) return null;

  const handleAgreeClick = () => {
    setLoading(true); // Set loading state to true
    setAgreed(false); // Reset agreed state

    // Set a timeout to simulate loading and show the checkmark icon after 3 seconds
    setTimeout(() => {
      setLoading(false); // Reset loading state
      setAgreed(true); // Show the checkmark

      // Set another timeout to close the modal after showing the checkmark for 1 second
      setTimeout(() => {
        setAgreed(false); // Clear the checkmark
        handleClose(); // Close the modal
      }, 1000); 
    }, 3000); // 3 seconds delay for loading
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-xl p-4 mx-auto bg-white rounded-lg shadow-lg">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center text-primary-300">Code of Conduct</h2>

        <div className="mt-4">
          <h3 className="font-bold">1. Culture</h3>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Interns are expected to respect everyone’s different backgrounds and experiences.</li>
            <li>Interns must be curious, eager to learn, and open to feedback.</li>
            <li>Interns will work under the supervision of professional Mentors.</li>
            <li>Interns must conduct themselves professionally at all times.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">2. Communication</h3>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Interns are expected to communicate clearly with the team.</li>
            <li>Interns should be responsive and available at all times.</li>
            <li>Interns must collaborate effectively and listen to others’ ideas.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">3. Readiness</h3>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Interns are expected to provide all tools and resources required.</li>
            <li>Interns must be punctual and attend all scheduled activities.</li>
            <li>Interns must commit 2-3 hours daily to their tasks.</li>
          </ul>
        </div>

        <div className="mt-4 flex justify-center items-center">
          {!loading && (
            <button
              onClick={handleAgreeClick}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              I Agree
            </button>
          )}

          {/* Display loading indicator while loading */}
          {loading && (
            <div className="flex items-center">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce200"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce400"></div>
              </div>
            </div>
          )}

          {/* Display checkmark icon after loading */}
          {agreed && (
            <PiSealCheck className="ml-3 text-blue-600 animate-fade-in" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeOfConductModal;
