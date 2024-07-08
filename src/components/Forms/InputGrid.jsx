export default function InputGrid({ inputState, setInputState, validation }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            id="cni"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="CNI"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            value={inputState.email}
            onChange={(e) =>
              setInputState({ ...inputState, email: e.target.value })
            }
            required
          />
          {validation.email && <p className="text-red-500">Email invalide</p>}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            id="phone-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="  Phone Number"
            value={inputState.phone}
            onChange={(e) =>
              setInputState({ ...inputState, phone: e.target.value })
            }
            required
          />
        </div>
        {validation.phone && (
          <p className="text-red-500">Numero de telephone invalide</p>
        )}
        <div className="flex items-center">
          <select
            id="account"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Type account</option>
            <option value="S">Secretaire</option>
            <option value="C">Coach</option>
          </select>
        </div>
      </div>
    </>
  );
}
