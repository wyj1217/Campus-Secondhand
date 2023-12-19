import React, { useEffect, useState } from "react";
import "./book.scss";
import { NavBar, Cell, Popup, PopupPosition } from "react-vant";
import { useNavigate } from "react-router-dom";
import { Ellipsis } from "@react-vant/icons";
import { ImageUploader, Space, Toast, Dialog, Collapse } from "antd-mobile";
import { demoSrc, mockUpload } from "./utils";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from "axios";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

// 最多上传三张图片
// const LimitCount = () => {
//   const maxCount = 3;
//   const [fileList, setFileList] = useState([
//     {
//       url: demoSrc,
//     },
//   ]);
//   return (
//     <ImageUploader
//       value={fileList}
//       onChange={setFileList}
//       upload={mockUpload}
//       multiple
//       maxCount={3}
//       showUpload={fileList.length < maxCount}
//       onCountExceed={(exceed) => {
//         Toast.show(`最多选择 ${maxCount} 张图片，你多选了 ${exceed} 张`);
//       }}
//     />
//   );
// };

export default function Book() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/publish");
  };

  const mockContents = Array(5).fill(null);
  // 不显示分享弹框
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    console.log(formData);
    // formData.append('title', title);
    // formData.append('image', image);
    // formData.append('price', price);
    console.log(formData);

    try {
      const response = await axios.post("/hy/addbook", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <div className="book">
        <NavBar
          title="发布图书"
          onClickLeft={() => goBack()}
          rightText={
            <Ellipsis onClick={() => setShowCloseIcon(true)} fontSize={20} />
          }
        />

        {/* 分享 */}
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
          <h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="时间简史"
            />
          </h3>
          <div className="p">
            <textarea placeholder="速度加快恢复精神的粉红色的反抗撒旦解放，尽快核实大法师卡德加发士大夫" />
          </div>

          <div className="book-img">
            {/* 最多上传三张图片 */}
            <div className="img">
              {/* <Space direction="vertical">
                <LimitCount />
              </Space> */}

              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      width: "100%",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>

            <div className="collapse">
              <Collapse defaultActiveKey={[]}>
                <Collapse.Panel key="1" title="书本状况">
                  {mockContents[0]}
                </Collapse.Panel>
                <Collapse.Panel key="2" title="价格">
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="价格"
                  />
                </Collapse.Panel>
                <Collapse.Panel key="3" title="书名及ISBN">
                  {mockContents[2]}
                </Collapse.Panel>
              </Collapse>
            </div>
          </div>
        </div>

        <div className="book-btn" onClick={handleSubmit}>
          确认发布
        </div>
      </div>
    </div>
  );
}
