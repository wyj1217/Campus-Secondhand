import React, { useState } from 'react'
import bg from './imgs/bg.png'
import './InverstmentAndWithdrawal.scss'
import { Search ,Tabs} from 'react-vant';
import { ArrowLeft,LocationO,ClockO,Paid,Arrow} from '@react-vant/icons';

export default function InverstmentAndWithdrawal() {

    const goHome=()=>{
        window.location.href='/home'
    }

    const tq=['投放物品','取出物品']
  return (
    <div className='InverstmentAndWithdrawal'>
        <div className='bg'>
            <img src={bg} alt="" />
            <div className='topbar'>
                <ArrowLeft className='left-icon' onClick={goHome} />
                <p className='topbar-text'>投取物品</p>
            </div>
        </div>
        <div className='info'>
            <p className='p1'>离你最近的柜子：1号柜</p>
            <div className='address'>
                <LocationO  />
                <p className='address-text'>南校区计算机楼1楼东侧</p>
            </div>
            <div className='time'>
                <ClockO  />
                <p className='time-text'>周一至周日8:00-22:00</p>
            </div>
            <div className='xiang'>
                <Paid  />
                <p className='xiang-text'>1号箱/2号箱/3号箱（可投递）</p>
                <p className='showAll'>查看所有柜子</p>
                <Arrow className='right-icon' />
            </div>
        </div>
        <div className='tq-div'>
            <Tabs color='#44B15D' className='tq-tab' align='start'>
                    {tq.map((item,index) => (
                    <Tabs.TabPane key={index} title={item}>
                        {item}
                    </Tabs.TabPane>
                    ))}
            </Tabs>
        </div>
    </div>
  )
}
