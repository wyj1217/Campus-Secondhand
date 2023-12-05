import React, { useEffect, useState } from 'react'
import bg from './imgs/bg.png'
import './InverstmentAndWithdrawal.scss'
import { Search ,Tabs} from 'react-vant';
import { useNavigate } from 'react-router';
import axios from '../../../utils/index'
import { ArrowLeft,LocationO,ClockO,Paid,Arrow,Edit,DeleteO} from '@react-vant/icons';

export default function InverstmentAndWithdrawal() {

    const [put,setPut]=useState([])
    const [get,setGet]=useState([])
    const [show,setShow]=useState(true)

    const getPut=async ()=>{
        const {data}=await axios.get('/wyj/putList')
        data.forEach(item=>{
            item.img='data:image/png;base64,'+item.img
            item.headImg='data:image/png;base64,'+item.headImg
        })
        setPut(data)
    }
    const getGet=async ()=>{
        const {data}=await axios.get('/wyj/getList')
        data.forEach(item=>{
            item.img='data:image/png;base64,'+item.img
            item.headImg='data:image/png;base64,'+item.headImg
        })
        setGet(data)
    }
    const navigate = useNavigate();
    const goHome=()=>{
        navigate('/home')
    }

    useEffect(()=>{
        getPut()
        getGet()
    },[])

    const handleChange=()=>{
        console.log(show);
        setShow(!show)
    }
    console.log(get);

    const tq=['投放物品','取出物品']
  return (
    <div className='InverstmentAndWithdrawal'>
        <div className='bg'>
            <img src={bg} alt="" />
            <div className='topbar'>
                <ArrowLeft className='left-icon' onClick={goHome} />
                <p className='topbar-text'>投取物品</p>
            </div>
        </div>
        <div className='info'>
            <p className='p1'>离你最近的柜子：1号柜</p>
            <div className='address'>
                <LocationO  />
                <p className='address-text'>南校区计算机楼1楼东侧</p>
            </div>
            <div className='time'>
                <ClockO  />
                <p className='time-text'>周一至周日8:00-22:00</p>
            </div>
            <div className='xiang'>
                <Paid  />
                <p className='xiang-text'>1号箱/2号箱/3号箱（可投递）</p>
                <p className='showAll'>查看所有柜子</p>
                <Arrow className='right-icon' />
            </div>
        </div>
        <div className='tq-div'>
            <Tabs color='#44B15D' className='tq-tab' align='start' onChange={handleChange}>
                    {tq.map((item,index) => (
                    <Tabs.TabPane key={index} title={item}>
                        {show?
                        <ul className='ul1'>
                            {put.map(item=>(
                                <li>
                                    <img src={item.img} alt="" />
                                    <div className='ul1-info'>
                                        <p className='ul1-info-text'>{item.title}</p>
                                        <p className='price'>￥{item.price}</p>
                                        <div className='edit_delete'>
                                            <div className='edit_div'>
                                                <Edit className='edit' />
                                                <span>编辑</span>
                                            </div>
                                            <div className='delte_div'>
                                                <DeleteO className='delte' />
                                                <span>下架</span>
                                            </div>
                                            <div className='state'>
                                                入柜码
                                            </div>  
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>:
                        <ul className='ul2'>
                            {get.map(item=>(
                                <li>
                                    <img src={item.img} alt="" />
                                    <div className='ul1-info'>
                                        <p className='ul1-info-text'>{item.title}</p>
                                        <p className='price'>￥{item.price}</p>
                                        <div className='edit_delete'>
                                            <div className='edit_div'>
                                                <Edit className='edit' />
                                                <span>编辑</span>
                                            </div>
                                            <div className='delte_div'>
                                                <DeleteO className='delte' />
                                                <span>下架</span>
                                            </div>
                                            <div className='state'>
                                                {show?'':'取物码'}
                                            </div>  
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        }
                    </Tabs.TabPane>
                    ))}
            </Tabs>
        </div>
    </div>
  )
}
