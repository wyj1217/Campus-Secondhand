import React, { useEffect, useState } from 'react'
import './detail.scss'
import { Button,NavBar,Swiper } from 'react-vant'
import { useLocation,useNavigate } from 'react-router-dom'
import iphone from '../../../../../src/assets/Home-Images/iphone.png'
import { Arrow,LikeO} from '@react-vant/icons';

export default function Detail() {

    const loc=useLocation()
    const nav=useNavigate()

    const [detailList,setDetail]=useState([])

    const handleClickLeft=()=>{ 
        nav('/good')
    }
    useEffect(()=>{
        setDetail(loc.state)
    },[])
  return (
    <div className='detail'>
         <NavBar
            title="好物推荐"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
        <div className='userInfo'>
            <ul>
                {
                    detailList.map(item=>(
                       
                          <li className='li1'>
                                <div className='d1'>
                                    <img src={item.headImg} alt="" />
                                    <p>{item.username}</p>
                                    <button>关注TA</button>
                                </div>
                                <img src={iphone} alt="" />
                                <div className='desc'>
                                    <span className='price'>￥{item.price}</span>
                                    <div className='like'>
                                    <LikeO  />
                                    {item.likeNum}
                                    </div>
                                </div>
                                <div className='detail'>
                                <p>{item.desc}</p>
                                </div>
                          </li>
                      
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
