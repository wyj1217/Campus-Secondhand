import React from "react";
import "./book.scss";
import { useNavigate } from "react-router-dom";
import { NavBar, Space, Toast } from "antd-mobile";
import { SearchOutline, MoreOutline, CloseOutline } from "antd-mobile-icons";
import BookMore from '../../../assets/Publish-Images/antOutline-more CM9BuSo@1x.png'

export default function Book() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/publish");
  };

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" , "marginTop": "6px"}}>
        <img src={BookMore} alt="" />
      </Space>
    </div>
  );


  return (
    <div>
      <div className="book">
        
        <NavBar right={right} onBack={goBack}>
          发布
        </NavBar>
      </div>
    </div>
  );
}
