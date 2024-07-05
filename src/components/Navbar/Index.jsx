import { Menu, QrCode } from "lucide-react";

export default function Index({ isOpen, setIsOpen }) {
  return (
    <>
      <nav
        className={`${
          isOpen
            ? "absolute left-0 top-0 z-50 w-full sm:left-[26%] sm:w-[75%] lg:left-[20%] lg:w-[80%]"
            : "fixed left-0 top-0 z-50 w-full "
        }`}
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between">
          <div className="">
            <div className="items-start">
              <button
                type="button"
                className=""
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <Menu color="white" size={40} />
                ) : (
                  <Menu color="white" size={40} />
                )}
              </button>
            </div>
          </div>
          <div className="">
            <div className="">
              <button type="button" className="">
                <QrCode color="white" size={40} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
