import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to React World!</h1>
      <button onClick={() => navigate("/registration")}>
        Go to Registration
      </button>
      <button onClick={() => navigate("/login")}> Go to Login</button>
    </div>
  );
}

export default Home;
