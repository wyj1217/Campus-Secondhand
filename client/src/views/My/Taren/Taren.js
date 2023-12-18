import React from 'react'
import {useNavigate} from "react-router-dom"
export default function Taren() {
  let nav = useNavigate()
  return (
    <div>
      <div className='head'>
        <div className='img'>
          <img src={require("../../My/imgs/img14.png") } alt="" />
        </div>
        <div className='user'>
          <div>
          <p className='name'>斯文Jun_</p>
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
        <div className='xyf'>
              <button>信誉分：80</button>
            </div>
      </div>
      <div className='xinxi'>
        <div className='bz'>
          <p>12</p>
          <span>被赞</span>
        </div>
        <div className='ynb'>
          <p>120</p>
          <span>优尼币</span>
        </div>
        <div className='zr'>
          <p>￥1000</p>
          <span>赚入</span>
        </div>
      </div>



    </div>
  )
}
