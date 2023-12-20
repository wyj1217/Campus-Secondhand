import React from "react";
import "./recycle.scss";
import { useNavigate } from "react-router-dom";
import { NavBar, Space, Toast } from "antd-mobile";

export default function Recycle() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/publish");
  };

  return (
    <div>
      <div className="recycle">
        <NavBar  onBack={goBack}>
          回收分类
        </NavBar>

        
      </div>
    </div>
  );
}
