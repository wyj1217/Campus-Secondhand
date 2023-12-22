import React,{useState,useEffect} from 'react'
import './treasureHouse.scss'
import { Tabs,Button } from 'antd-mobile'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function TreasureHouse() {
  const navi = useNavigate()
  const [list,setlist] = useState([])
  const [allin,setallin] = useState([])
  const getlist = async()=>{
    let {data} = await axios.get("/shr/getbk")
    console.log(data.data);
    setlist(data.data)
  }
  const mine = async(item)=>{
    let {data} = await axios.get("/shr/gettie?id=" + item._id)
    const ab = data.data
    navi("/Tresdetail",{state:[item,ab]})
  }
  useEffect(()=>{
    getlist()
  },[])
  return (
    <div className='trbg'>
      <div className='trtop'>
        1213
      <Tabs>
        <Tabs.Tab title="我加入的" key="my">
        <div className='trcg'>
          <p className='changguang'>常逛的宝库</p>
          <div className="added">
            {
              list.slice(0,4).map((item,index)=>{
                return(
                  <div className='xie' key={index}>
                    <img className='img-hs' src={item.img} onClick={()=>{
                      mine(item)
                    }} alt="" />
                    <div className='p-hs'>{item.title}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
          <div className='trbot'>
            <p>我加入的宝库</p>
            {
              list.map((item,index)=>{
                return <div className='jiaru' key={index}  onClick={()=>{
                  mine(item)
                }}>
                  <div className='trip0'>
                  <img className='img-hs' src={item.img} alt="" />
                  </div>
                  <div>
                    {item.title}
                  </div>
                  <div>
                  <Button color='primary' fill='outline'>
                    去宝库
                  </Button>
                  </div>
                </div>
              })
            }
          </div>
        </Tabs.Tab>
        <Tabs.Tab title="找宝库" key="boki">
          早宝库
        </Tabs.Tab>
        <Tabs.Tab title="找宝库" key="bok">
          
        </Tabs.Tab>
      </Tabs>
      <button onClick={()=>{
        navi("/tsfabu")
      }}>发布</button>
      </div>
      
    </div>
  )
}
