import React from 'react'
import './myorder.scss'
import { Button,NavBar } from 'react-vant'
import {ShareO} from  '@react-vant/icons';
import { useNavigate } from 'react-router-dom'

export default function MyOrder() {

    const nav=useNavigate()

    const handleClickLeft=()=>{ 
        nav('/toDoorRecycling')
    }
  return (
    <div className='myorder'>
         <NavBar
            title="我的订单"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
    </div>
  )
}
