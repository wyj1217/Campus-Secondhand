import React from 'react'
import "./my.scss"
import {useNavigate} from "react-router-dom"
export default function My() {
  let nav = useNavigate()
  return (
    <div>
      <div className='head'>
        <div className='img'>
          <img src={require("./imgs/img2.png") } alt="" />
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
      <div className='qd'>
        <p>每日签到，领福利</p>
      </div>
      <div className='dd'>
        <p>我的订单</p>
        <div className='gm' onClick={()=>{nav("/goumai")}}>
          <img src={require("../My/imgs/img6.png")} alt="" />
          <p>购买</p>         
        </div>
        <div className='gm' onClick={()=>{nav("/maichu")}}>
          <img src={require("../My/imgs/img7.png")} alt="" />
          <p>卖出</p>         
        </div>
        <div className='gm' onClick={()=>{nav("/fabu")}}>
          <img src={require("../My/imgs/img5.png")} alt="" />
          <p>发布</p>         
        </div>
        <div className='gm' onClick={()=>{nav("/shoucang")}}>
          <img src={require("../My/imgs/img4.png")} alt="" />
          <p>收藏</p>         
        </div>
      </div>
      <div className='jy'>
          <div className='jy_head'>
            <p>最近交易</p>
            <p>01-30</p>
          </div>
          <div className='jy_content'>
            <img src={require("../My/imgs/img8.png")} alt="" />
            <p>待入柜</p>
            <p>幸福小学南校区1号柜可入柜</p>
          </div>
      </div>
      <div>
        <div className='gn'>
          <img src={require("../My/imgs/img3.png")} alt="" />
          <p>邀请得币</p>
          <img src={require("../My/imgs/img12.png")} alt="" />
        </div>
        <div className='gn'>
          <img src={require("../My/imgs/img11.png")} alt="" />
          <p>回收分类</p>
          <img src={require("../My/imgs/img12.png")} alt="" />
        </div>
        <div className='gn'>
          <img src={require("../My/imgs/img10.png")} alt="" />
          <p>平台规则</p>
          <img src={require("../My/imgs/img12.png")} alt="" />
        </div>
        <div className='gn'>
          <img src={require("../My/imgs/img9.png")} alt="" />
          <p>帮助中心</p>
          <img src={require("../My/imgs/img12.png")} alt="" />
        </div>
      </div>
    </div>
  )
}
