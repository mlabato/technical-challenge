import Modal from "../UI/Modal";
import React from "react";

const ResetPassword = (props) => {
  const modalContent = (
    <React.Fragment>
      <form>
        <h1 className="text-black text-center  text-[10px] md:text-xl p-4">
          Forgot your password? Enter your email and we'll restore it
        </h1>

        <input
          type="email"
          placeholder="enter your email"
          className="bg-[#E6E6E6]  text-black text-[10px] my-8 md:text-xl border-b-2 w-full border-b-black outline-none "
        ></input>

      <div className="flex justify-center">
        <button
          type="submit"
          onClose={props.onClose}
          className=" bg-[#4AC4BF] w-1/2 md:w-1/4 text-[#E6E6E6] hover:text-[#897D70] text-[10px] md:text-xl  p-4 rounded-xl my-12 cursor-pointer "
        >
          Submit
        </button>
        <button
          type="submit"
          onClose={props.onClose}
          className="bg-[#4AC4BF] w-1/2 md:w-1/4 text-[#E6E6E6] [#4AC4BF] hover:text-[#897D70] text-[10px] md:text-xl p-4 rounded-xl my-12 cursor-pointer mx-2"
        >
          Close
        </button>
        </div>
      </form>
    </React.Fragment>
  );

  return <Modal onHide={props.onClose}>{modalContent}</Modal>;
};

export default ResetPassword;
