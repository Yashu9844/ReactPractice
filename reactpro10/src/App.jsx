import React from "react";
import { useState } from "react";
import Modal from "./Modal";

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
        {open && <Modal open ={open} setOpen={setOpen} />}
      </div>
     
    </div>
  );
};

export default App;
