import React, { useEffect, useState } from "react";
import "./unused.scss";
import { NavBar, Cell, Popup, PopupPosition, Form, Selector } from "react-vant";
import { useNavigate } from "react-router-dom";
import { Ellipsis } from "@react-vant/icons";
import { ImageUploader, Space, Toast, Dialog, Collapse } from "antd-mobile";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import axios from "../../../utils";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

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

  const mockContents = Array(5);
  // 不显示分享弹框
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    const data = {
      title,
      content,
      price,
      imageUrl,
      // headerImg,
    };
    await axios.post("/hy/addbook", data);
    try {
      const response = await axios.post("/hy/addbook");
      console.log(response.data);
      // alert('发布成功')
    } catch (error) {
      console.error(error);
    }

    Toast.show({
      icon: "success",
      content: "发布成功",
    });
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        console.log(url);
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

  const options = [
    {
      label: '电子类型',
      value: '1',
    },
    {
      label: '服饰',
      value: '2',
    },
    {
      label: '家具',
      value: '3',
    },
    {
      label: '美妆',
      value: '4',
    },
    {
      label: '玩具',
      value: '5',
    },
  ]

  return (
    <div>
      <div className="book">
        <NavBar
          title="发布闲置"
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
              placeholder="添加宝贝标题"
            />
          </h3>
          <div className="p">
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="描述型号，入手渠道，转手原因…"
            />
          </div>

          <div className="book-img">
            {/* 最多上传三张图片 */}
            <div className="img">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="http://localhost:3000/hy/upload"
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
            <div className="book-price">
              价格:{" "}
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="输入价格"
              />
            </div>

            <div className="collapse">


              <Form.Item name="single" label="商品类型">
                <Selector
                  selector-margin={"10px"}
                  options={options}
                  defaultValue={["1"]}
                  onChange={(arr, extend) => console.log(arr, extend.items)}
                />
              </Form.Item>
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
