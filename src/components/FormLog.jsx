import logo from "../assets/Me.jpg";
import { KeyRound, Phone } from "lucide-react";

export default function FormLog() {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center gap-4 ">
          <label className=" font-bold text-4xl text-white">
            Welcome back!
          </label>
          <label className=" text-white">Join the warrio's community</label>
          <img
            className="w-[100px] h-[100px] rounded-xl mb-6"
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <form className="flex flex-col items-center gap-4 ">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <Phone color="rgb(156 163 175)" />
              </div>
              <input
                type="text"
                id="phone-input"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="  Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <KeyRound color="rgb(156 163 175)" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="  Password"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <div className="mt-6">
              <label
                for="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  sign up.
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
