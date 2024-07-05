import Line from "./Line";
import Tarte from "./Tarte";
import Gridd from "./Gridd";

export default function Dash() {
  return (
    <>
      <div className="p-4 sm:ml-[10rem]">
        <div className="p-4 rounded-lg mt-14">
          <div className="grid grid-cols-1 sm:flex sm:flex-row">
            <div className="flex items-center justify-center rounded-lg bg-gray-50 mb-4 sm:mb-0 sm:mr-4 sm:w-[85%]">
              <Line />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-8">
            <div className="flex items-center justify-center rounded-lg bg-gray-50">
              <Gridd />
            </div>
            <div className="flex items-center justify-center rounded">
              <Tarte />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
