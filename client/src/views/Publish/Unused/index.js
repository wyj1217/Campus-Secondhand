import React from "react";
import "./unused.scss";
import { Toast, NavBar } from "react-vant";
import { useNavigate } from "react-router-dom";
import { Ellipsis } from '@react-vant/icons';
import BookMore from "../../../assets/Publish-Images/antOutline-more CM9BuSo@1x.png";

export default function Unused() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/publish");
  };

  return (
    <div>
      <div className="unused">
        <NavBar
          title="发布闲置"
          onClickLeft={() => goBack()}
          rightText={<Ellipsis fontSize={20} />}
        />

        <div className="unused-btn">确认发布</div>
      </div>
    </div>
  );
}
