import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../utils'
import { Search } from 'react-vant';
import {useNavigate} from 'react-router-dom'
import { ArrowLeft} from '@react-vant/icons';
import './searchRes.scss'

export default function SearchResult() {
    const nav=useNavigate()

    const loc=useLocation()
    const state=loc.state

    const [resList,setRes]=useState([])
    const [value, setValue] = useState('');


    const getSearch=async ()=>{
        const {data}=await axios.post('/wyj/searchRes',{state})
        console.log(data,'-----');
        data.res.forEach(item=>{
            // console.log(item,'每一项');
            if(item.length>0){
                item.forEach(item2=>{
                        item2.img='data:image/png;base64,'+item2.img
                        item2.headImg='data:image/png;base64,'+item2.headImg
                })
                setRes(item)
            }
          })
        // setRes(data)
    }
    // console.log(resList,'resList');

    useEffect(()=>{
        getSearch()
    },[])

    const goHome = () => {
        nav('/home')

    }

    const toSearch=(ev)=>{
            nav('/search')
    }


  return (
    <div className='searchRes'>
        <div className='search-ipt'>
            <ArrowLeft className='left-icon' onClick={goHome} />
            <Search value={value} 
            onFocus={toSearch}
            clearable placeholder="请输入搜索关键词" />
        </div>
        <div className='resList'>
        <ul>
                {
                    resList.map((item,index)=>(
                        <li key={index}>
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                            <div className='desc'>
                                <span className='sp1'>￥{item.price}</span>
                                <span className='sp2'>{item.starNum}人收藏</span>
                            </div>
                            <div className='user'>
                                <img src={item.headImg} alt="" />
                                <p>{item.name}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
