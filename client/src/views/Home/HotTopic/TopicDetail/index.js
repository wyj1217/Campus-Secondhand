import React, { useState } from 'react'
import './topicDetail.scss'
import { useNavigate,useLocation } from 'react-router-dom'
import { Button,NavBar} from 'react-vant'
import {ShareO,CommentO} from  '@react-vant/icons';
import suggest from '../../../../assets/Home-Images/suggest.png'




export default function TopicDetail() {

    const nav=useNavigate()
    const loc=useLocation()
    
    const [detail,setDetail]=useState(loc.state)

    const handleClickLeft=()=>{
      nav('/home')
  }
  
  return (
    <div className='topicDetail'>
       <NavBar
            title="话题详情"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
        <div className='top'>
          <img src={loc.state[0].topicImg} alt="" className='img1' />
          <div className='d1'>
            <h2>{loc.state[0].title}</h2>
            <h3>阅读{loc.state[0].readCount}次</h3>
          </div>
        </div>
        <div className='detail'>
          <div className='userInfo'>
            <img src={loc.state[0].headImg} alt="" />
            <p className='username'>{loc.state[0].username}</p>
            <button className='btn'>关注TA</button>
          </div>
          <div className='desc'>
            <div className='desc-title'>
                <span className='p1'>{loc.state[0].title}</span>
                <span className='p2'>{loc.state[0].desc}</span>
            </div>
            <div className='icons'>
              <div className='icons-d1'>
                <ShareO className='share' />
                <span>{loc.state[0].shareNum}</span>
              </div>
              <div className='icons-d2'>
                <img src={suggest} alt=""/>
                <span>{loc.state[0].likeNum}</span>
              </div>
              <div className='icons-d2'>
                <CommentO className='comment' />
                <span>{loc.state[0].commentNum}</span>
              </div>
            </div>
            <div className='likeAndComment'>
              <div className='lc_d1'>
                <img src={suggest} alt="" />
                <p>程序狂123、阿尔卑斯等23人赞过</p>
              </div>
              <div className='lc_d2'>
                <CommentO className='lc_icon' />
                <ul>
                  {loc.state[0].comment.map(item=>(
                    <li>
                      <span className='sp1'>{item.username}</span>：
                      <span className='sp2'>{item.comment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
