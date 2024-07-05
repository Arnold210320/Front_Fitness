import { Phone } from "lucide-react";

export default function PhoneI({ inputState, setInputState, validation }) {
  return (
    <>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <Phone color="rgb(156 163 175)" />
          </div>
          <input
            type="text"
            id="phone-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={inputState.phone}
            onChange={(e) =>
              setInputState({ ...inputState, phone: e.target.value })
            }
            placeholder="  Phone Number"
            required
          />
        </div>
        {validation.phone && (
          <p className="text-red-500">Numero de telephone invalide</p>
        )}
      </div>
    </>
  );
}
