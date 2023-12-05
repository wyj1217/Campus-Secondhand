import React,{useEffect, useRef, useState} from 'react'
import './search.scss'
import { Search } from 'react-vant';
import { ArrowLeft} from '@react-vant/icons';

export default function SearchPage() {
    const [value, setValue] = useState('');

    const searchRef=useRef(null)

    const handleSearch = (ev) => {
        setValue(ev.target.value)
    }

    const goHome = () => {
        window.location.href='/home'
    }

    useEffect(()=>{
        if(searchRef.current){
            searchRef.current.focus()
        }
    },[])
  return (
    <div className='search'>
        <div className='search-ipt'>
            <ArrowLeft className='left-icon' onClick={goHome} />
            <Search value={value} 
            ref={searchRef}
            onChange={(ev)=>handleSearch(ev)} 
            clearable placeholder="请输入搜索关键词" />
        </div>
        <div className='hot-search'>
            <p>热门搜索</p>
        </div>
        <div className='history-search'>
            <p>历史记录</p>
        </div>
    </div>
  )
}
