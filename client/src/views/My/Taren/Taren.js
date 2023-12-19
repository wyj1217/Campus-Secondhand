import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Tabs, Badge } from 'antd-mobile'
import { ArrowLeft} from '@react-vant/icons';
import "./Taren.scss"
export default function Taren() {
  let nav = useNavigate()
  let [gz,setgz] = useState(false)
  return (
    <div>
      <div className='header1'>
            <ArrowLeft className='left-icon' onClick={()=>{nav("/my")}}/>
            <img src={require("../../My/imgs/img13.png")} alt="" />
        </div>
      <div className='head1'>
        <div className='img'>
          <img src={require("../../My/imgs/img14.png") } alt="" />
        </div>
        <div className='user'>
          <div>
          <p className='name'>42运动家</p>
          <div>
            <div className='gz'>
            <span>关注</span><p>9</p>
            </div>
            <div className='fs'>
            <span>粉丝</span><p>9000</p>
            </div>
          </div>
          </div>
        </div>
        <div>
              {gz==false&&<button className='wgz' onClick={()=>{setgz(!gz)}}>未关注</button>}
              {gz==true&&<button className='ygz' onClick={()=>{setgz(!gz)}}>已关注</button>}
        </div>
      </div>
      <div className='two'>
          <ul className='num'>
            <li>42</li>
            <li>28</li>
            <li>￥289</li>
            <li>99</li>
          </ul>
          <ul className='str'>
            <li>已购入</li>
            <li>点赞</li>
            <li>赚入</li>
            <li>信誉分</li>
          </ul>
      </div>
      <div>
        <button className='zhanwei'></button>
      </div>
      <div>
      <Tabs
          activeLineMode='fixed'
          style={{
            '--fixed-active-line-width': '20px',
          }}
        >
          <Tabs.Tab title='他的闲置' key='1'>
            1
          </Tabs.Tab>
          <Tabs.Tab title='帖子' key='2'>
            2
          </Tabs.Tab>
          <Tabs.Tab title='评价' key='3'>
            3
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  )
}
