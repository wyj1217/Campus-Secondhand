import React, { useRef, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { ArrowLeft,PhotoO,Photograph} from '@react-vant/icons';
import { Popup, Cell,Uploader ,Button ,Toast  } from 'react-vant' 
import Webcam from "react-webcam"
import "./Touxiang.scss"
export default function Touxiang() {
    
    const [visible, setVisible] = useState(false)
    let nav =  useNavigate()
    const webcamRef = useRef(null);
    const captureImage = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        // 将图像数据发送到服务器
        // uploadPic(imageSrc);
    };
     
    // //将base64格式的图片转换成formdata格式，并上传到后台并获取本地图像
    // const uploadPic = async (base64String) => {
    //     // 下面将要把 base64 转换成formdata
    //     // 这里对base64串进行操作，去掉url头，并转换为byte
    //     let bytes = window.atob(base64String.split(',')[1]);
    //     let array = [];
    //     for (let i = 0; i < bytes.length; i++) {
    //       array.push(bytes.charCodeAt(i));
    //     }
    //     let blob = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    //     // 生成FormData对象
    //     let fd = new FormData();
    //     // 注：此处 file 应和后台接收参数匹配
    //     fd.append('file', blob, Date.now() + '.jpg');
    //     let config = {
    //       headers: { 'Content-Type': 'multipart/form-data' },
    //     };
    //     const resp = await axios.post('http://localhost:3000/uploadImg', fd,config)
    //     let img = resp.data.path
    //     let info = { id: user._id, img }
    //     let { data } = await axios.post('http://localhost:3000/eduserimg', info)
    //     if (data.code === 200) {
    //       Toast.success(data.msg)
    //       localStorage.setItem('user', JSON.stringify(data.newuser))
    //       setIstrue(false)
    //       setShow(false)
    //     }
    //   };

    // const upload = async (file) => {
    //     const body = new FormData()
    //     body.append('file', file)
    //     // 将图片传递给后端进行存储
    //     const resp = await axios.post('http://localhost:3000/uploadImg', body)
    //     let img = resp.data.path
    //     let info = { id: user._id, img }
    //     // 将存储的图片获取通过当前用户信息，确定用户，更改头像
    //     let { data } = await axios.post('http://localhost:3000/eduserimg', info)
    //     if (data.code === 200) {
    //       Toast.success(data.msg)
    //       // 替换已存储的用户信息
    //       localStorage.setItem('user', JSON.stringify(data.newuser))
    //       setShow(false)
    //     }
    //     return false
    //   }
  return (
    <div>
        <div className='header'>
            <ArrowLeft className='left-icon' onClick={()=>{nav("/geren")}}/>
            <p>个人头像</p>
        </div>
        <div>
            <img src={require("../imgs/img2.png")} alt="" style={{width:"100%",height:"50%",padding:"5% 0% 10% 0%"}}/>
        </div>
        <div className='touxiang'>
            
            <Uploader
                previewImage={false}
                accept='image/*'
                onChange={v => console.log(v)}
                // upload={upload}
                className='touxiang1'
            >
                <button ><PhotoO />相册中选取</button> 
            </Uploader>
            <button isLink onClick={() => setVisible(true)}><Photograph />拍照</button>
            <Popup visible={visible} onClose={() => setVisible(false)}>
                <div>
                    <div className="camera">
            <Webcam audio={false}  style={{width: '100%',}}
                ref={webcamRef}
            />
            
     <Button block color="primary" size="large" onClick={captureImage}>
         拍照
     </Button>
        </div>
                </div>
            </Popup>
        </div>
    </div>
  )
}
