import React, { useEffect, useState } from 'react'
import { ArrowLeft} from '@react-vant/icons';
import "./dingdan.scss"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { Tabs, Badge } from 'antd-mobile'
import { Button,NavBar } from 'react-vant'
import {DeleteO} from  '@react-vant/icons';
import { Steps,Picker,CascadePicker,CascadePickerView,
  Toast,Modal,Dialog } from 'antd-mobile'
export default function Maichu() {
    let nav =  useNavigate()

    const [order,setOrder]=useState([])

const handleClickLeft=()=>{ 
    nav('/toDoorRecycling')
}
const getMyOrder=async ()=>{
  const {data}=await axios.get('/wyj/myOrder')
  setOrder(data)
}
useEffect(()=>{
  getMyOrder()
},[])

const delOrder=async id=>{
  Dialog.show({
    content: '确定删除该订单？',
    closeOnAction: true,
    closeOnMaskClick:true,
    actions: [
      [
        {
          key: 'cancel',
          text: '取消',
        },
        {
          key: 'delete',
          text: '删除',
          bold: false,
          danger: true,
          onClick:async ()=>{
            // console.log(_id);
            await axios.post('/wyj/delOrder',{id})
            
            Toast.show({
                content: '删除成功',
                position: 'bottom',
                duration:1000,
                })
  getMyOrder()

           
          }
        },
      ],
    ],
  })

}

  return (
    <div>
      <div className='header'>
            <ArrowLeft className='left-icon' onClick={()=>{nav("/my")}}/>
            <p>订单中心</p>
        </div>
        <div className='nav'>
        <Tabs
          activeLineMode='fixed'
          defaultActiveKey="2"
          style={{
            '--fixed-active-line-width': '20px',
          }}
        >
          <Tabs.Tab title='我买到的' key='1' onClick={()=>{nav("/goumai")}}>
            1
          </Tabs.Tab>
          <Tabs.Tab title='我卖出的' key='2' onClick={()=>{nav("/maichu")}}>
              <div className='myorder'>
                      <div className='order_div'>
                        <ul>
                          {
                            order.map((item,index)=>(
                              <li key={index}>
                                <img src={item.img} alt="" />
                                <div className='order_info'>
                                  <p className='order_title'>{item.title}</p>
                                  <p className='order_status'>{item.status}</p>
                                  <p className='order_time'>订单时间:  {item.time}</p>
                                </div>
                                <DeleteO  className='delete_icon' onClick={()=>delOrder(item._id)} />
                              </li>
                            ))
                          }
                        </ul>
                      </div>
              </div>
          </Tabs.Tab>
          <Tabs.Tab title='我发布的' key='3' onClick={()=>{nav("/fabu")}}>
            3
          </Tabs.Tab>
          <Tabs.Tab title='我收藏的' key='4' onClick={()=>{nav("/shoucang")}}>
            4
          </Tabs.Tab>
        </Tabs>
        </div>
    </div>
  )
}
