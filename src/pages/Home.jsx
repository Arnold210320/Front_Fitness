import Photo from "../img/Bodybuilder.webp";
import FormLog from "../components/FormLog";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="h-[90vh] block max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex items-center justify-between ">
            <div className="h-[100%] w-[80%] mt-[5%]">
              <FormLog />
            </div>
            <div className="">
              <img className="h-[80vh]" src={Photo} alt="Fitness" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
