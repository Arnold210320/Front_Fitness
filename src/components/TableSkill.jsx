import logo from "../assets/Me.jpg";

export default function TableSkill() {
  return (
    <>
      <div className="grid grid-flow-col w-[80%] bg-[#040c1faf] mt-4 mb-4 rounded-md">
        <div className="flex flex-col items-center mt-6">
          <div>
            <img className="w-10 h-10 rounded-2xl my-4" src={logo} alt="logo" />
          </div>
          <div className=" my-1 mr-8">
            <label htmlFor="" className="text-green-500">
              FullName : {""}
            </label>
            <span className="text-slate-50 text-sm">Arnold Ben</span>
          </div>
          <div className=" my-1">
            <label htmlFor="" className="text-green-500">
              Birthday : {""}
            </label>
            <span className="text-slate-50 text-sm">21 MARS 2001 </span>
          </div>
          <div className=" my-1">
            <label htmlFor="" className="text-green-500">
              Phone Number : {""}
            </label>
            <span className="text-slate-50 text-sm">+237 657-935-713</span>
          </div>
          <div className=" my-1 mr-8">
            <label htmlFor="" className="text-green-500 ">
              Email : {""}
            </label>
            <span className="text-slate-50 text-sm">Ben313013@icloud.com</span>
          </div>
        </div>
        <div className=" text-left m-6">
          <h2 className=" text-2xl text-slate-50 text-center">SKILLS</h2>
          <label className="text-xl text-slate-50">HTML & CSS </label>
          <div className=" bg-[#040c1fc4] p-1 rounded-lg text-right text-slate-50">
            <div className="w-[90%] bg-green-600 p-1 rounded-lg">90%</div>
          </div>
          <label className="text-xl text-slate-50">React </label>
          <div className=" bg-[#040c1fc4] p-1 rounded-lg text-right text-slate-50">
            <div className="w-[70%] bg-green-600 p-1 rounded-lg">70%</div>
          </div>
          <label className="text-xl text-slate-50">Django </label>
          <div className=" bg-[#040c1fc4] p-1 rounded-lg text-right text-slate-50">
            <div className="w-[60%] bg-green-600 p-1 rounded-lg">60%</div>
          </div>
          <label className="text-xl text-slate-50">PHP </label>
          <div className=" bg-[#040c1fc4] p-1 rounded-lg text-right text-slate-50">
            <div className="w-[40%] bg-green-600 p-1 rounded-lg">40%</div>
          </div>
        </div>
      </div>
    </>
  );
}
