import React from "react";
import "./unused.scss";
import { useNavigate } from "react-router-dom";
import { NavBar, Space, Toast } from "antd-mobile";
import BookMore from '../../../assets/Publish-Images/antOutline-more CM9BuSo@1x.png'
import UnusedPublish from '../../../assets/Publish-Images/矩形 3 Copy 7wIqqac@1x.png'

export default function Unused() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/publish");
  };

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px", marginTop: "6px" }}>
        <img src={BookMore} alt="" />
      </Space>
    </div>
  );

  return (
    <div>
      <div className="unused">
        <NavBar right={right} onBack={goBack}>
          发布
        </NavBar>
        <div className="unused-btn">
          <img src={UnusedPublish} alt="" />
        </div>
      </div>
    </div>
  );
}
