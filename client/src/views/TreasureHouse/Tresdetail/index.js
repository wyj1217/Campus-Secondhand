import React,{useEffect, useState} from 'react'
import { Button, NavBar,Toast,Input } from 'react-vant'
import { Tabs,Avatar } from 'antd-mobile'
import './tresdetail.scss'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Tresdetail() {
  const navi = useNavigate()
  const state = useLocation()
  const [id,setid] = useState("")
  const [list,setlist] = useState([])
  const [ai,setai] = useState([])
  const jump=()=>{
    navi("/treasureHouse")
  }
  const style = {
    bgd:{
      backgroundImage:`url(${ai.img})`
    }
  }
  // const gettie = async()=>{
  //   setid(state.state._id)
  //   const {data} = await axios.get("/shr/gettie?id="+id)
  //   setlist(data.data)
  //   console.log(data.data,'111');
  //   console.log(list);
  // }
  useEffect(()=>{
    setlist(state.state[1])
    setai(state.state[0])
  },[])
  return (
    <div className='tsdetail'>
      <div className="back" style={style.bgd}>
        {
          console.log(list)
        }
      </div>
      <>
      <NavBar
      title='宝库详情'
      onClickLeft={() => jump()}
      rightText={<Button round type='info' size='small' >加入它</Button>}
      onCl
      />
      </>
      <div className='tsHead'>
        <div className='toux'>
        <Avatar src={ai.img} />
        </div>
        
        <div className='toumid'>
        <p>{ai.title}</p>
        <p>已有00000个库员</p>
        </div>
        <div className='touend'>
        <Button type="info">签到</Button>
        </div>
        
      </div>
      <div className='tsbody'>
      <Tabs>
        <Tabs.Tab title="宝库交流" key="o">
          <div>
            {
              list.map((item,index)=>{
                return (
                  <div>
                    <div>
                      <img src="" alt="" />
                      <p>GunnerJun</p>
                      <p>2天前</p>
                      <Button>关注TA</Button>
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <img src={item.image} alt="" style={{height:'100px'}}/>
                    </div>
                  </div>
                )
              })
            }
            {/* <div>
              <img src="" alt="" />
              <p>GunnerJun</p>
              <p>2天前</p>
              <Button>关注TA</Button>
            </div>
            <div>
              <p>挂一双科比9鸳鸯，支出幸福小学本校，科比死忠联系我哦</p>
              <img src="" alt="" />
            </div> */}
          </div>
        </Tabs.Tab>
        <Tabs.Tab title="足球装备" key="z">
        足球装备
        </Tabs.Tab>
        <Tabs.Tab title="球星手办" key="q">
        球星手办
        </Tabs.Tab>
        <Tabs.Tab title="运动防护" key="d">
        运动防护
        </Tabs.Tab>
      </Tabs>
      </div>
    </div>
  )
}
