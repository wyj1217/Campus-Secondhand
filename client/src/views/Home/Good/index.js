import React, { useEffect, useState } from 'react'
import './good.scss'
import { Button,NavBar,Tabs,ImagePreview, Cell} from 'react-vant'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft,LocationO,ClockO,Paid,Arrow,Edit,DeleteO,CommentO} from '@react-vant/icons';
import axios from 'axios'
import suggestIcon from '../../../../src/assets/Home-Images/suggest.png'

import bg from '../imgs/bg.png'


export default function Good() {

    const nav=useNavigate()
    
    const [suggest,setSuggest]=useState([])
    const [images,setImages]=useState([])

    const getSuggest=async ()=>{
        const {data}=await axios.get('/wyj/suggest')
        data.forEach(item=>{
            item.headImg='data:image/png;base64,'+item.headImg
        })
        setSuggest(data)
        setImages(data[0].img)
    }

    console.log(suggest);

    useEffect(()=>{
        getSuggest()
    },[])

    const goHome=()=>{
        nav('/home')
    }
    const toDetail=async (id)=>{
        const {data}=await axios.post('/wyj/detail',{id})
        data.forEach(item=>{
            item.headImg='data:image/png;base64,'+item.headImg
            item.img.map(item2=>{
                item2='data:image/png;base64,'+item2
            })
        })
        console.log(data);
        nav('/detail',{state:data})
    }
  return (
    <div className='good'>
        <div className='bg'>
            <img src={bg} alt="" />
            <div className='topbar'>
                <ArrowLeft className='left-icon' onClick={goHome} />
                <p className='topbar-text'>好物推荐</p>
            </div>
        </div>
        <div className='goods-area'>
       
            <ul>
                {
                    suggest.map(item=>(
                        <div className='d1'>
                            <li className='li1'>
                                <img src={item.headImg} alt="" />
                                <p className='username'>{item.username}</p>
                                
                            </li>
                            <p className='desc'>
                                    {item.desc}
                                </p>
                            {item.img.map(item2=>(
                                <img src={item2} alt="" className='imgs' onClick={() =>
                                    ImagePreview.open({
                                    images,
                                    onChange: (index) => console.log(`当前展示第${index + 1}张`),
                                    })
                                } />
                            ))}
                            <div className='detail'>
                                <p onClick={()=>toDetail(item._id)}>查看详情</p>
                            </div>
                            <div className='icon'>
                                <div className='d3'>
                                <img src={suggestIcon} alt=""  />
                                {item.likeNum}
                                </div>
                                <div className='d4'>
                                <CommentO />
                                {item.commentNum}
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
