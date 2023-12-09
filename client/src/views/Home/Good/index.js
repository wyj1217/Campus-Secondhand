import React from 'react'
import './good.scss'
import { Button,NavBar,Tabs} from 'react-vant'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft,LocationO,ClockO,Paid,Arrow,Edit,DeleteO} from '@react-vant/icons';


import bg from '../imgs/bg.png'


export default function Good() {

    const nav=useNavigate()

    const goHome=()=>{
        nav('/home')
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
    </div>
  )
}
