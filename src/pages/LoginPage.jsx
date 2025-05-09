import React, { useState, useEffect } from "react";
import users from "../users.json";

import LoginTitle from "../components/LoginTitle";
import LoginFooter from "../components/LoginFooter";
import LoginForm from "../components/LoginForm";
import { Lock } from "lucide-react";
import PageDecoration from "../components/PageDecoration";

import { useAuth } from "../context/AuthContext"; // <-- lägg till detta

const LoginPage = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("login");

  const { login } = useAuth(); // <-- lägg till detta

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const findUser = users.find(
        (user) => user.userid === userid && user.password === password
      );

      if (findUser) {
        login(findUser); // <-- logga in användaren
        navigate("/menu");
      } else {
        alert("Wrong ID or Password");
        setPassword("");
      }
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex min-h-screen justify-center">
      <PageDecoration />

      {loading && (
        <>
          <div className="absolute top-0 left-0 w-full h-full backdrop-blur bg-white/50 z-10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
            <span className="loader absolute"></span>
            <Lock className="w-12 h-12 z-10" />
          </div>
        </>
      )}

      <div
        className="w-full h-screen flex justify-center items-center h-full bg-gray-100 rounded-md p-4 bg-gradient-to-br from-[#0e4b5c] via-[#2958A9] to-[#ffecd2] shadow-md"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div className="w-full max-w-sm px-8 z-10">
          <LoginTitle mode={mode} />
          <LoginForm
            userid={userid}
            setUserid={setUserid}
            password={password}
            setPassword={setPassword}
            mode={mode}
            loading={loading}
            handleSubmit={handleSubmit}
          />
          <LoginFooter mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
