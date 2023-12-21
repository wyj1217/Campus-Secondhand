import React, { useEffect, useState } from 'react'
import { Button, NavBar,Toast,Input } from 'react-vant'
import { Radio,Space } from 'antd-mobile'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd'
import { Search,Edit,FireO } from '@react-vant/icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const getBase64 = (img,callback)=>{
  const reader = new FileReader();
  reader.addEventListener('load',()=>callback(reader.result))
  reader.readAsDataURL(img)
}

export default function Trfabu() {
  const navi = useNavigate()
  const [filelist,setfilelist] = useState([])
  const [loading,setLoading] = useState(false)
  const [list,setlist] = useState([])
  const [bid,setbid] = useState("")
  const [tit,settit] = useState("")
  const [imageUrl,setImageUrl] = useState("")
  const getlist = async()=>{
    let {data} = await axios.get("/shr/getbk")
    console.log(data.data);
    setlist(data.data)
  }
  const st=((id)=>{
    setbid(id)
  })
  const Go = async()=>{
    console.log({title:tit,bid:bid,image:imageUrl});
    await axios.post("shr/addtie",{title:tit,bid:bid,image:imageUrl})
  }
  const Jo = async()=>{
    
    await axios.post("shr/addbaoku",{title:tit,img:imageUrl})
  }
  const jump=()=>{
    navi("/treasureHouse")
  }
  const handleChange = (info)=>{
    if (info.file.status==='uploading'){
      setLoading(true);
      return;
    }
    if(info.file.status==='done'){
      getBase64(info.file.originFileObj,(url)=>{
        setLoading(false);
        setImageUrl(url)
        console.log(imageUrl);
      })
    }
  }

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

  useEffect(()=>{
    getlist()
  },[])


  return (
    <>
        <NavBar
      title='帖子/闲置'
      onClickLeft={() => jump()}
      rightText={<Button round type='info' size='small' ><Edit />发布</Button>}
      onClickRight={() => Go()}
      />
      <div>
      <input value={tit} onChange={(e)=>{
        
        settit(e.target.value)
      }} placeholder="分享好货，聊些新鲜事，发布精品帖子"></input>
      </div>
       <div>
        <Radio.Group defaultValue='1'>
        <Space direction='vertical'>
          {
            list.map((item,index)=>{
              return (
                <Radio value={item._id} onClick={()=>{
                  st(item._id)
                }}>{item.title}</Radio>
              )
            })
          }
        </Space>
        </Radio.Group>
        <Upload
          name = "avatar"
          listType='picture-circle'
          showUploadList={false}
          onChange={(e)=>{handleChange(e)}}
          action = "http://localhost:3000/shr/upload"
        >
          {
            imageUrl?(
              <img src={imageUrl} alt="" style={{width:'100%'}}/>
            ):(uploadButton)
          }
        </Upload>
        <button onClick={()=>{
          Jo()
        }}>提交吧</button>
       </div>
    </>
    
  )
}
