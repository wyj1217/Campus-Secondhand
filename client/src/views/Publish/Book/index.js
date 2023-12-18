import React, { useEffect, useState } from "react";
import "./book.scss";
import { NavBar, Cell, Popup, PopupPosition } from "react-vant";
import { useNavigate } from "react-router-dom";
import { Ellipsis } from "@react-vant/icons";
import { ImageUploader, Space, Toast, Dialog, Collapse } from "antd-mobile";
import { demoSrc, mockUpload } from "./utils";

import axios from "axios";

const LimitCount = () => {
  const maxCount = 3;
  const [fileList, setFileList] = useState([
    {
      url: demoSrc,
    },
  ]);
  return (
    <ImageUploader
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
      multiple
      maxCount={3}
      showUpload={fileList.length < maxCount}
      onCountExceed={(exceed) => {
        Toast.show(`最多选择 ${maxCount} 张图片，你多选了 ${exceed} 张`);
      }}
    />
  );
};

export default function Book() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/publish");
  };

  const mockContents = Array(5).fill(null);

  const [showCloseIcon, setShowCloseIcon] = useState(false);

  return (
    <div>
      <div className="book">
        <NavBar
          title="发布图书"
          onClickLeft={() => goBack()}
          rightText={<Ellipsis onClick={() => setShowCloseIcon(true)} fontSize={20} />}
        />

        <Popup
          visible={showCloseIcon}
          closeable
          style={{ height: "30%" }}
          position="bottom"
          round
          title="分享到你的圈子"
          onClose={() => setShowCloseIcon(false)}
        />

        <div className="book-center">
          <h3>时间简史</h3>
          <div className="p">
            <textarea placeholder="速度加快恢复精神的粉红色的反抗撒旦解放，尽快核实大法师卡德加发士大夫" />
          </div>

          <div className="book-img">
            <div className="img">
              <Space direction="vertical">
                <LimitCount />
              </Space>
            </div>

            <div className="collapse">
              <Collapse defaultActiveKey={[]}>
                <Collapse.Panel key="1" title="书本状况">
                  {mockContents[0]}
                </Collapse.Panel>
                <Collapse.Panel key="2" title="价格">
                  {mockContents[1]}
                </Collapse.Panel>
                <Collapse.Panel key="3" title="书名及ISBN">
                  {mockContents[2]}
                </Collapse.Panel>
              </Collapse>
            </div>
          </div>
        </div>

        <div className="book-btn">确认发布</div>
      </div>
    </div>
  );
}
