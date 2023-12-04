import React,{useEffect, useRef, useState} from 'react'
import './search.scss'
import { Search } from 'react-vant';
import { ArrowLeft} from '@react-vant/icons';
import {useNavigate} from 'react-router-dom'

export default function SearchPage() {
    const nav=useNavigate()
    const [value, setValue] = useState('');

    const searchRef=useRef(null)

    const [hotList,setHotList]=useState([
        {name:'二手电脑'},{name:'办公桌'},{name:'百年孤独'},
        {name:'玩具熊'},{name:'玩偶'},{name:'苹果手机'},
        {name:'纪念币'},{name:'音响'},{name:'鼠标垫'},
        {name:'衣物'},
      ])
     const [randomList,setRandomList]=useState([])

     const [hisList,setHisList]=useState(JSON.parse(sessionStorage.getItem('history'))|| []) || new Set()
    
     const getRandom=()=>{
        const copyList=[...hotList]
        const randomCopyList=copyList.sort(()=>Math.random()-0.5).slice(0,6)
        setRandomList(randomCopyList)
      }

    const goHome = () => {
        nav('/home')
    }

    useEffect(()=>{
        if(searchRef.current){
            searchRef.current.focus()
        }
    getRandom()

    },[])

    const handleKeyDown=(ev)=>{
    
        console.log(ev);
       
            // console.log(13);
          
            const copy_list=[...hisList]
            if(copy_list.length<=5){
              // copy_list.unshift(ev.target.value)
              const idx=copy_list.findIndex(item=>item===ev)
              console.log(idx,'找下标');
              if(idx!=-1){
                const val=copy_list.splice(idx,1)
                console.log(val,'删除');
                copy_list.unshift(...val)
                setHisList(copy_list)
              }else{
                copy_list.unshift(ev)
                setHisList(copy_list)
              }
              // copy_list.unshift(ev.target.value)
              
            }else if(copy_list.length>5){
              copy_list.pop()
              copy_list.unshift(ev)
            }
            console.log(copy_list,'copy');
            sessionStorage.setItem('history',JSON.stringify(copy_list))
            setHisList(copy_list)
            nav('/serachResult',{state:ev})
            
      
    }
  return (
    <div className='search'>
        <div className='search-ipt'>
            <ArrowLeft className='left-icon' onClick={goHome} />
            <Search value={value} 
            ref={searchRef}
            onSearch={(ev)=>handleKeyDown(ev)} 
            clearable placeholder="请输入搜索关键词" />
        </div>
        <div className='hot-search'>
            <p>热门搜索</p>
            <div className='hotSearch-content'>
                <ul>
                    {randomList.map(item=>(
                    <li>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='history-search'>
            <p>历史记录</p>
            <div className='searchHis-content'>
                <ul>
                    {hisList.map(item=>(
                    <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
