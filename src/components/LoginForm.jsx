import React from "react";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({
  userid,
  setUserid,
  password,
  setPassword,
  mode,
  setMode,
  loading,
  handleSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label
        htmlFor="userid"
        className="block text-md font-medium text-[#000000]/57 font-semibold"
      >
        ID/E-post
      </label>
      <div className="flex items-center border rounded-md bg-white shadow-md">
        <span className="px-2 text-gray-500">
          <User className="w-6 h-6 text-[#2958A9]" />
        </span>
        <input
          id="userid"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          required
          autoComplete="off"
          className="p-3 bg-white rounded w-full outline-none focus:ring-2 focus:ring-cyan-700/50 text-xl text-gray-800"
          type="text"
          placeholder="ID/E-post"
        />
      </div>

      {mode !== "reset" && (
        <>
          <label
            htmlFor="password"
            className="pt-4 block text-md font-medium text-[#000000]/57 font-semibold"
          >
            Lösenord
          </label>
          <div className="flex items-center border rounded-md bg-white shadow-md">
            <span className="px-2 text-gray-500">
              <Lock className="w-6 h-6 text-[#2958A9]" />
            </span>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
              className="p-3 bg-white rounded w-full outline-none focus:ring-2 focus:ring-cyan-700/50 text-xl text-gray-800"
              type="password"
              placeholder={
                mode === "register" ? "Välj ett säkert lösenord" : "Lösenord"
              }
            />
          </div>
        </>
      )}

      <div>
        <div className="text-center mt-4">
          {mode === "login" && (
            <div className="flex justify-center space-x-4 mb-4 flex-wrap">
              <p className="text-sm">
                <span
                  onClick={() => setMode("reset")}
                  className="text-[#2958A9] font-semibold cursor-pointer hover:underline"
                >
                  Glömt lösenord?
                </span>
              </p>
              <p className="text-sm text-gray">
                <span
                  onClick={() => setMode("register")}
                  className="text-[#2958A9] font-semibold cursor-pointer hover:underline"
                >
                  Skapa konto
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md font-semibold text-base py-4 transition-all duration-300 ease-in-out shadow-md cursor-pointer loginBtn"
        disabled={loading}
      >
        {loading
          ? "Loggar In..."
          : mode === "login"
            ? "Logga in"
            : mode === "register"
              ? "Registrera"
              : "Skicka återställningslänk"}
      </button>

      <div className="text-center mt-4">
        {(mode === "register" || mode === "reset") && (
          <p className="text-sm">
            <span
              onClick={() => setMode("login")}
              className="text-[#000000]/57 font-semibold cursor-pointer hover:underline hover:underline"
            >
              Tillbaka till login
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
