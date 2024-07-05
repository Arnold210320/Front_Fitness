export default function NameI({ inputState, setInputState, validation }) {
  return (
    <>
      <input
        type="text"
        id="textName"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-[91%] w-[82%] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Nom et Prenom"
        value={inputState.name}
        onChange={(e) => setInputState({ ...inputState, name: e.target.value })}
        required
      />
      {validation.name && <p className="text-red-500">Plus de 3 caracteres</p>}
    </>
  );
}
