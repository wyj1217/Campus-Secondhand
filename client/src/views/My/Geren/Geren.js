import React from 'react'
import { ArrowLeft} from '@react-vant/icons';
import {useNavigate} from "react-router-dom"
import { Button   } from 'react-vant' 
import { SystemQRcodeOutline } from 'antd-mobile-icons'
import { Arrow } from '@react-vant/icons'
import Webcam from "react-webcam"
import "./Geren.scss"
export default function Geren() {
    let nav =  useNavigate()
  return (
    <div>
        <div className='header' >
            <ArrowLeft className='left-icon' onClick={()=>{nav("/my")}}/>
            <p>个人中心</p>
        </div>
        <div>
            <div className='gerentwo' onClick={()=>{nav("/touxiang")}}>
              <p>头像</p>
              <img src={require("../imgs/img2.png")} alt="" />
              <Arrow style={{float:"right",paddingTop:"30px",width:"20px"}}  />
            </div>
            <div className='gerentwo'>
              <p>名字</p>
              <p className='gerentwop'>斯文Jun_</p>
              <Arrow style={{float:"right",paddingTop:"30px",width:"20px"}}  />
            </div>
            <div className='gerentwo'>
              <p>二维码名片</p>
              <SystemQRcodeOutline style={{float:"right",width:"20px",height:"20px",paddingLeft:"62%",paddingTop:"6%"}} />
              <Arrow style={{float:"right",paddingTop:"26px",paddingLeft:"5px",width:"20px"}}  />
              </div>
            <div className='gerentwo'>
              <p>优尼币</p>
              <p style={{paddingLeft:"68%"}}>120</p>
              <Arrow style={{float:"right",paddingTop:"28px",width:"20px",paddingLeft:"1.5%"}}  />
            </div>
            <div className='gerentwo'>
              <p>我的地址</p>
              <Arrow style={{float:"right",paddingTop:"29px",width:"20px",paddingLeft:"72%"}}  />
            </div>
            <div className='gerentwo'>
              <p>更多信息</p>
              <Arrow style={{float:"right",paddingTop:"29px",width:"20px",paddingLeft:"72%"}}  />
            </div>
            <div className='gerentwo'>
              <p>修改密码</p>
              <Arrow style={{float:"right",paddingTop:"29px",width:"20px",paddingLeft:"72%"}}  />
            </div>
        </div>

    </div>
  )
}
