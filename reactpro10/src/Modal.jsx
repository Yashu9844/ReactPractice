import React from 'react'

const Modal = ({open,setOpen}) => {
  return (
    <div className="">
        
        <div
          className={`fixed top-0 left-0 right-0 flex justify-center items-center h-screen w-full ${
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
        </div> <style jsx>{`
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
      
  )
}

export default Modal
