import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import PublishBg from "../../assets/Publish-Images/bg.png";
import Absoluteimg1 from "../../assets/Publish-Images/图片 3 DGpmkJY@1x.png";
import Absoluteimg2 from "../../assets/Publish-Images/图片 4 1zgl74W@1x.png";
import Absoluteimg3 from "../../assets/Publish-Images/图片 5 NyI7DCT@1x.png";
import PublishBtn from "../../assets/Publish-Images/ci-yql-close ASirS4a@1x.png";

export default function Publish() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/home");
  };

  const gobook = () =>{
    navigate('/book')
  }

  const gounused = () =>{
    navigate('/unused')
  }

  const gorecycle = () =>{
    navigate('/recycle')
  }

  return (
    <div>
      <div className="publish">
        {/* 背景图 */}
        <div className="bg-img">
          <img src={PublishBg} alt="" />
        </div>
        {/* 绝对定位 */}
        <div className="absolute">
          <h1>
            优尼，
            <br />
            让你的闲置更COOL。
          </h1>
        </div>
        <div className="absolute-img">
          <div className="absolute-img1">
            <img src={Absoluteimg1} alt="" onClick={gobook} />
            <span>扫码发书</span>
          </div>
          <div className="absolute-img2">
            <img src={Absoluteimg2} alt="" onClick={gounused} />
            <span>发送闲置</span>
          </div>
          <div className="absolute-img3">
            <img src={Absoluteimg3} alt="" onClick={gorecycle} />
            <span>官方回收</span>
          </div>
        </div>
        {/* 关闭按钮 */}
        <div className="publish-btn">
          <img src={PublishBtn} alt="" onClick={goBack} />
        </div>
      </div>
    </div>
  );
}
