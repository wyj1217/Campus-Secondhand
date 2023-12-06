import React from 'react'
import './todoor.scss'
import iphone from './wyj-imgs/iphone.png'
import computer from './wyj-imgs/com.png'
import ipad from './wyj-imgs/ipad.png'
import yiwu from './wyj-imgs/yiwu.png'
import hufu from './wyj-imgs/hufu.png'
import yizi from './wyj-imgs/yizi.png'
import renjian from './wyj-imgs/renjian.png'
import bainian from './wyj-imgs/bainian.png'
import book3 from './wyj-imgs/book3.png'
import { Button,NavBar } from 'react-vant'
import {ShareO} from  '@react-vant/icons';
import { useNavigate } from 'react-router-dom'


export default function Todoorrecycling() {
    const ul1=[{img:iphone},{img:computer},{img:ipad}]
    const ul2=[{img:yiwu},{img:hufu},{img:yizi}]
    const ul3=[{img:renjian},{img:bainian},{img:book3}]

    const nav=useNavigate()

    const handleClickLeft=()=>{ 
        nav('/home')
    }

    const handleNowRecycling=()=>{
        nav('/nowRecycling')
    }
  return (
    <div className='todoor'>
         <NavBar
            title="回收分类"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
        <div className='category'>
            <ul className='ul1'>
                <div className='title'>
                    <p>数码电器</p>
                </div>
                {
                    ul1.map(item=>(
                        <li> 
                            <img src={item.img} alt="" />
                        </li>
                    ))
                }
            </ul>
            <ul className='ul2'>
                <div className='title'>
                    <p>生活用品</p>
                </div>
                {
                    ul2.map(item=>(
                        <li>
                            <img src={item.img} alt="" />
                        </li>
                    ))
                }
            </ul> 
            <ul className='ul3'>
                <div className='title'>
                    <p>书本教材</p>
                </div>
                {
                    ul3.map(item=>(
                        <li>
                            <img src={item.img} alt="" />
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='footer'>
            <div className='share'>
                <ShareO className='share-icon' />
                <p className='share-title'>分享</p>
            </div>
            <div className='btn'>
            <Button plain type='primary' round={true} className='myOrder'>
                我的订单
            </Button>
            <Button className='nowRecycling' onClick={handleNowRecycling}>
                立即回收
            </Button>
            </div>
        </div>
    </div>
  )
}
