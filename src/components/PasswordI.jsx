import { KeyRound, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordI({ inputState, setInputState, validation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <KeyRound color="rgb(156 163 175)" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            value={inputState.password}
            onChange={(e) =>
              setInputState({ ...inputState, password: e.target.value })
            }
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-1 top-0 flex items-center ps-3.5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff color="rgb(156 163 175)" />
            ) : (
              <Eye color="rgb(156 163 175)" />
            )}
          </button>
        </div>
        {validation.password && (
          <p className="text-red-500">
            Mot de passe invalide : au moins un chiffre et 7 caractères
          </p>
        )}
      </div>
    </>
  );
}
