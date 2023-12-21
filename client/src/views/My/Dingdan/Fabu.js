import React, { useEffect, useState } from 'react'
import { ArrowLeft} from '@react-vant/icons';
import "./dingdan.scss"
import axios from "axios"
import {Button} from "react-vant"
import {useNavigate} from "react-router-dom"
import { Tabs, Badge } from 'antd-mobile'
export default function Fabu() {
    let nav =  useNavigate()
    let [books,setbooks] = useState([])
    let fabu = async()=>{
      const {data} = await axios.get("/hy/book")
      
      sessionStorage.setItem("books",JSON.stringify(data))
      setbooks(data)
    }
    useEffect(()=>{
      fabu()
    },[])
  return (
    <div>
      <div className='header'>
            <ArrowLeft className='left-icon' onClick={()=>{nav("/my")}}/>
            <p>订单中心</p>
        </div>
        <div className='nav'>
        <Tabs
          activeLineMode='fixed'
          defaultActiveKey="3"
          style={{
            '--fixed-active-line-width': '20px',
          }}
        >
          <Tabs.Tab title='我买到的' key='1' onClick={()=>{nav("/goumai")}}>
            1
          </Tabs.Tab>
          <Tabs.Tab title='我卖出的' key='2' onClick={()=>{nav("/maichu")}}>
            2
          </Tabs.Tab>
          <Tabs.Tab title='我发布的' key='3' onClick={()=>{nav("/fabu")}}>
            {
              books.map((item,index)=>{
                return <div className='books' key={index}>
                  <dl>
                    <dt><img src={item.img} alt="" /></dt>
                    <dd>商品：{item.title}</dd>
                    <dd>内容：{item.content}</dd>
                    <dd>价格：{item.price}</dd>
                  </dl>
                  <Button round type='warning' style={{marginRight:"2%",marginLeft:"60%"}}>修改</Button>
                  <Button round type='danger'>删除</Button>
                </div>
              })
            }
          </Tabs.Tab>
          <Tabs.Tab title='我收藏的' key='4' onClick={()=>{nav("/shoucang")}}>
            4
          </Tabs.Tab>
        </Tabs>
        </div>
    </div>
  )
}
