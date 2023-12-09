import React, { useEffect, useState } from 'react'
import { Button,NavBar,Tabs} from 'react-vant'
import { useNavigate } from 'react-router-dom'
import './youzhi.scss'
import axios from '../../../utils'

export default function Youzhi() {

    const nav=useNavigate()
    const [seller,setSeller]=useState([])
    const [title,setTitle]=useState('认证卖家')

    const getSeller=async ()=>{
        const {data}=await axios.get('/wyj/seller')
        data.forEach(item=>{
            item.children.forEach(item2=>{
                item2.img='data:image/png;base64,'+item2.img
                item2.headImg='data:image/png;base64,'+item2.headImg
            })
        })
        setSeller(data)
    }
    useEffect(()=>{
        getSeller()
    },[])
    

    const handleClickLeft=()=>{
        nav('/home')
    }
  return (
    <div className='youzhi'>
        <NavBar
            title="优质卖家"
            onClickLeft={handleClickLeft}
            className='navbar'
            />

        <Tabs color='#44B15D' align='start' className='tabs'>
                {seller.map((item,index) => (
                <Tabs.TabPane key={index} title={item.name} name={item.name}>
                   <ul>
                    {item.children.map(item2=>(
                        <li>
                            <img src={item2.headImg} alt="" className='headImg' />
                               <p className='name'>{item2.name}</p>
                               <p className='desc'>{item2.desc}</p>
                               <Button type='info' className='guanzhu'>{item.guanzhu?'已关注':'关注TA'}</Button>
                            <img src={item2.img} alt="" className='img' />
                        </li>
                    ))}
                   </ul>
                </Tabs.TabPane>
                ))}
        </Tabs>
    </div>
  )
}
