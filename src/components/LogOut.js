import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function LogOut() {
  const navigate = useNavigate();
  const hadler = () => {
    navigate("/login");
  };

  return (
    <div>
      <Button onClick={() => hadler()}>LogOut</Button>
    </div>
  );
}

export default LogOut;
