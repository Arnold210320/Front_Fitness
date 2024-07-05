import logo from "../assets/Me.jpg";
import PasswordL from "../components/Forms/PasswordL";
import NameI from "../components/Forms/NameI";
import InputGrid from "../components/Forms/InputGrid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Photo from "../img/Bodybuilder.webp";

export default function FormSign() {
  const [inputState, setInputState] = useState({
    phone: "",
    password: "",
    name: "",
    email: "",
  });

  const [validation, setValidation] = useState({
    phone: false,
    password: false,
    name: false,
    email: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      console.log("Formulaire soumis");
      navigate("/");
    }
  };

  function validationCheck() {
    const areValid = {
      phone: false,
      password: false,
      name: false,
      email: false,
    };

    if (
      inputState.email.length < 6 ||
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputState.email)
    ) {
      setValidation((state) => ({ ...state, email: true }));
    } else {
      areValid.email = true;
      setValidation((state) => ({ ...state, email: false }));
    }

    if (inputState.name.length < 3 || inputState.name.length > 64) {
      setValidation((state) => ({ ...state, name: true }));
    } else {
      areValid.name = true;
      setValidation((state) => ({ ...state, name: false }));
    }

    if (inputState.password.length < 8 || !/\d/.test(inputState.password)) {
      setValidation((state) => ({ ...state, password: true }));
    } else {
      areValid.password = true;
      setValidation((state) => ({ ...state, password: false }));
    }
    if (
      inputState.phone.length < 9 ||
      !/^(\+?237)?(6[0-9])[0-9]{7}$/.test(inputState.phone)
    ) {
      setValidation((state) => ({ ...state, phone: true }));
    } else {
      areValid.phone = true;
      setValidation((state) => ({ ...state, phone: false }));
    }
    if (Object.values(areValid).every((value) => value)) {
      return true;
    }
    return false;
  }
  return (
    <>
      <section className="">
        <div className="h-[90vh] block max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="h-[100%] w-full md:w-[80%]">
              <div className="">
                <div className="flex flex-col items-center gap-4 ">
                  <label className=" font-bold text-4xl text-white">
                    Welcome back!
                  </label>
                  <label className=" text-white">
                    Join the warrio's community
                  </label>
                  <img
                    className="w-[100px] h-[100px] rounded-xl mb-6"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div>
                  <form
                    className="flex flex-col items-center gap-4 "
                    onSubmit={handleSubmit}
                  >
                    <NameI
                      inputState={inputState}
                      setInputState={setInputState}
                      validation={validation}
                    />
                    <InputGrid
                      inputState={inputState}
                      setInputState={setInputState}
                      validation={validation}
                    />
                    <PasswordL
                      inputState={inputState}
                      setInputState={setInputState}
                      validation={validation}
                    />
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                    <div className="">
                      <label
                        for="remember"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Already have an account?{" "}
                        <Link
                          to="/"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Log in.
                        </Link>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img className="h-[80vh]" src={Photo} alt="Fitness" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
