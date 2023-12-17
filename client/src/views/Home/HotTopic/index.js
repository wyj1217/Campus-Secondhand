import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Button,NavBar} from 'react-vant'
import axios from '../../../utils/index'
import './hotTopic.scss'

export default function HotTopic() {

    const nav=useNavigate()
    const [topicList,setTopicList]=useState([])

    const getTopic=async ()=>{
        const {data}=await axios.get('/wyj/hotTopic')
        setTopicList(data)
    }
    useEffect(()=>{
        getTopic()
    },[])

    const handleClickLeft=()=>{
        nav('/home')
    }
    const toDetail=async id=>{
        const {data}=await axios.post('/wyj/topicDetail',{id})
        console.log(data);
        nav('/topicDetail',{state:data})
    }
  return (
    <div className='hotTopic'>
        <NavBar
            title="热门话题"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
        <ul className='topic'>
            {
                topicList.map((item,index)=>(
                    <li onClick={()=>toDetail(item._id)}>
                        <p className='no'>{index+1}</p>
                        <p className='title'>{item.title}</p>
                        <p className='readCount'>{item.readCount}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
