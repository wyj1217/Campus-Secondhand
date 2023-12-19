import React, { useEffect, useState } from 'react'
import './myorder.scss'
import { Button,NavBar } from 'react-vant'
import {ShareO,DeleteO} from  '@react-vant/icons';
import { useNavigate } from 'react-router-dom'
import axios from '../../../../utils'
import { Steps,Picker,CascadePicker,CascadePickerView,
  Toast,Modal,Dialog } from 'antd-mobile'


export default function MyOrder() {

    const nav=useNavigate()

    const [order,setOrder]=useState([])

    const handleClickLeft=()=>{ 
        nav('/toDoorRecycling')
    }
    const getMyOrder=async ()=>{
      const {data}=await axios.get('/wyj/myOrder')
      // data.forEach(item=>{
      //   item.img='data:image/png;base64,'+item.img
      // })
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
    <div className='myorder'>
         <NavBar
            title="我的订单"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
            <div className='order_div'>
              <ul>
                {
                  order.map(item=>(
                    <li>
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
  )
}
