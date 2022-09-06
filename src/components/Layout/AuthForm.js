import { useState, useRef } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";

const AuthForm = () => {
  //HOOKS FOR SHOWING THE PASSWORD
  const [visiblePassword, setVisiblePassword] = useState(false);

  const visiblePasswordHandler = () => {
    setVisiblePassword(!visiblePassword);
  };

  //HOOKS FOR SHOWING THE RESET PASSWORD MODAL
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  //HOOKS FOR CATCHING THE INPUT DATA
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const navigate = useNavigate();

  //HOOKS FOR SHOWING BACK END VALIDATING ERRORS
  const [isValidated, setIsValidated] = useState(true);

  const validatingHandler = () => {
    setIsValidated(false);
  };

  //HOOKS FOR SUBMITTING THE DATA TO THE BACKEND
  const submitHandler = async () => {
    const submittedEmail = enteredEmail.current.value;
    const submittedPassword = enteredPassword.current.value;

    const submittedData = {
      email: submittedEmail,
      password: submittedPassword,
    };

    //As the challenge doesn't require to develop a back-end service, nor a database, I wrote the possible code for sending data to it,
    //but instead I show the submitted data on the console.

    console.log(submittedData);
    // try {
    //   const response = await fetch({
    //     url: "api/login",
    //     method: "POST",
    //     body: JSON.stringify(submittedData),
    //   });

    //   if (response.status === 201) {
    //     navigate("/");
    //     if (!isValidated) {
    //       validatingHandler();
    //     }
    //   }
    // } catch (error) {
    //   validatingHandler();
    //   console.log(error);
    // }
  };

  //FRONT END VALIDATIONS
  const [emailError, setEmailError] = useState(false);
  const emailValidatingHandler = () => {
    const array = [...enteredEmail.current.value];
    const arrayControl = array.includes("@");
    if (enteredEmail.current.value.length === 0 || !arrayControl) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const [passwordError, setPasswordError] = useState(false);
  const passwordValidatingHandler = () => {
    if (
      enteredPassword.current.value.length === 0 ||
      enteredPassword.current.value.length < 6
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <section className="p-12 h-[1000px] my-auto">
      <h1 className="text-[#E6E6E6] font-bold text-center text-4xl">Login</h1>

      <form
        className="flex flex-col w-3/4 md:w-1/2 mx-auto p-4"
        onSubmit={submitHandler}
      >
        <input
          type="email"
          name="email"
          placeholder="Email Adress"
          className="bg-[#081114] text-[#897D70] text-2xl p-4 border-b-2 border-b-[#897D70] outline-none"
          ref={enteredEmail}
          onChange={(e) => {
            emailValidatingHandler();
          }}
          onBlur={(e) => {
            emailValidatingHandler();
          }}
        ></input>

        {emailError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            You must enter a valid email
          </p>
        ) : (
          ""
        )}

        <div className="flex flex-row relative w-full">
          <input
            type={visiblePassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="bg-[#081114] text-[#897D70] text-2xl p-4 border-b-2 w-full border-b-[#897D70] outline-none"
            ref={enteredPassword}
            onChange={(e) => {
              passwordValidatingHandler();
            }}
            onBlur={() => passwordValidatingHandler()}
          ></input>

          <i
            onClick={visiblePasswordHandler}
            className="text-[#897D70] text-2xl last:absolute right-2 bottom-5"
          >
            {visiblePassword ? <FaEye /> : <FaEyeSlash />}
          </i>
        </div>

        {passwordError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Password must have at least 6 characters
          </p>
        ) : (
          ""
        )}

        {isValidated === false ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            The email or the password is invalid
          </p>
        ) : (
          ""
        )}

        <div
          onClick={showModalHandler}
          className="text-[#4AC4BF] hover:text-[#897D70] p-4"
        >
          Forgot Password?
        </div>
        <button className="bg-[#4AC4BF] text-[20px] before:md:text-2xl text-white hover:text-[#897D70] p-4 rounded-xl my-12 cursor-pointer">
          {" "}
          Sign in
        </button>
        {showModal && <ResetPassword onClose={hideModalHandler} />}
      </form>
    </section>
  );
};

export default AuthForm;
