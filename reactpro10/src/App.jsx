import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { toggleModal } from "./store/modal.js";
import { useSelector } from "react-redux";

const App = () => {
  const open = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  return (
    <div className="h-screen bg-gray-200 w-full">
      <div className="flex justify-center p-3">
        <button
          onClick={() => dispatch(toggleModal())}
          className="bg-red-500 p-3 rounded text-white"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>
      <div className="h-screen w-full bg-black relative overflow-hidden">
        {open && <Modal open={open} />}
      </div>
    </div>
  );
};

export default App;
