import React from 'react'
import bg from './imgs/bg.png'
import './InverstmentAndWithdrawal.scss'
import { Search } from 'react-vant';
import { ArrowLeft} from '@react-vant/icons';

export default function InverstmentAndWithdrawal() {

    const goHome=()=>{
        window.location.href='/home'
    }
  return (
    <div className='InverstmentAndWithdrawal'>
        <div className='bg'>
            <img src={bg} alt="" />
            <div className='topbar'>
                <ArrowLeft className='left-icon' onClick={goHome} />
                <p>投取物品</p>
            </div>
        </div>
        <div className='info'>
            <p className='p1'>离你最近的柜子</p>
        </div>
    </div>
  )
}
