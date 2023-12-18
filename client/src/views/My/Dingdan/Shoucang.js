import React from 'react'
import { ArrowLeft} from '@react-vant/icons';
import "./dingdan.scss"
import {useNavigate} from "react-router-dom"
import { Tabs, Badge } from 'antd-mobile'
export default function Shoucang() {
    let nav =  useNavigate()
  return (
    <div>
      <div className='header'>
            <ArrowLeft className='left-icon' onClick={()=>{nav("/my")}}/>
            <p>订单中心</p>
        </div>
        <div className='nav'>
        <Tabs
          activeLineMode='fixed'
          defaultActiveKey="4"
          style={{
            '--fixed-active-line-width': '20px',
          }}
        >
          <Tabs.Tab title='我买到的' key='1' onChange={()=>{nav("/goumai")}}>
            1
          </Tabs.Tab>
          <Tabs.Tab title='我卖出的' key='2' onChange={()=>{nav("/maichu")}}>
            2
          </Tabs.Tab>
          <Tabs.Tab title='我发布的' key='3' onChange={()=>{nav("/fabu")}}>
            3
          </Tabs.Tab>
          <Tabs.Tab title='我收藏的' key='4' onChange={()=>{nav("/shoucang")}}>
            4
          </Tabs.Tab>
        </Tabs>
        </div>
    </div>
  )
}
