import React from "react";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-200 w-full">
      <div className="flex justify-center p-3">
        <button
          onClick={() => setOpen(!open)}
          className="bg-red-500 p-3 rounded text-white"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>
      <div className="h-screen w-full bg-black relative overflow-hidden">
        {open && (
          <div
            className={`fixed top-0 left-0 right-0 flex justify-center items-center h-screen w-full bg-black ${
              open ? "animate-slide-in" : "animate-slide-out"
            }`}
          >
            <div className="bg-white p-3 rounded">
              <h1 className="text-3xl text-center">Welcome to the Bored</h1>
              <p className="text-center">This is the bored</p>
              <button
                onClick={() => setOpen(!open) }
                className="bg-red-500 p-3 rounded text-white"
              >
                Close the bored
              </button>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes slide-out {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-in-out forwards;
        }

        .animate-slide-out {
          animation: slide-out 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
