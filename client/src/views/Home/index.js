import React,{useState} from 'react'
import './home.scss'
import { Search,Swiper,Tabs } from 'react-vant';
import { NavLink,Outlet,useNavigate } from 'react-router-dom';
import lb1 from './imgs/lb1.png'
import lb2 from './imgs/lb2.png'
import lb3 from './imgs/lb3.png'
import touqu from '../../assets/Home-Images/touqu.png'
import shangmen from '../../assets/Home-Images/shangmen.png'
import xianzhi from '../../assets/Home-Images/xianzhi.png'
import jiaoyi from '../../assets/Home-Images/jiaoyi.png'
import youzhi from '../../assets/Home-Images/youzhi.png'
import haowu from '../../assets/Home-Images/haowu.png'
import hot from '../../assets/Home-Images/hot.png'
import yz from '../../assets/Home-Images/yz.png'
import hw from '../../assets/Home-Images/hw.png'
import rm from '../../assets/Home-Images/rm.png'


export default function Home() {
    const [value, setValue] = useState('')

    const [curIdx,setCurIdx]=useState(0)

    const category=[
        '电子产品','书籍','服饰','家具','美妆','玩具'
    ]

    const nav=useNavigate()

    
    const toSearch=()=>{
        nav('/search')
    }
    const toTouqu=()=>{
        nav('/InverstmentAndWithdrawal')
    }
  return (
    <div className='home'>
        <Search value={value} 
        onFocus={toSearch} 
        
        clearable placeholder="请输入搜索关键词"
        className='search' />

        <div className='swiper-area'>
            <Swiper loop autoplay={3500} className='swiper'>
                <Swiper.Item>
                    <img src={lb1} alt="" />
                </Swiper.Item>
                <Swiper.Item>
                    <img src={lb2} alt="" />
                </Swiper.Item>
                <Swiper.Item>
                    <img src={lb3} alt="" />
                </Swiper.Item>
            </Swiper>
        </div>
        <div className='four-function'>
            <div onClick={toTouqu}>
                <img src={touqu} alt="" />
                <h5>投取物品</h5>
            </div>
            <div>
                <img src={shangmen} alt="" />
                <h5>上门回收</h5>
            </div>
            <div>
                <img src={xianzhi} alt="" />
                <h5>闲置求购</h5>
            </div>
            <div>
                <img src={jiaoyi} alt="" />
                <h5>交易指南</h5>
            </div>
        </div>
        <div className='thr-function'>
            <div className='youzhi'>
                <img src={youzhi} alt="" className='text' />
                <img src={yz} alt="" className='img' />
            </div>
            <div className='d1'>
                <div className='haowu'>
                    <img src={haowu} alt="" className='text' />
                    <img src={hw} alt="" className='img' />
                </div>
                <div className='hot'>
                    <img src={hot} alt="" className='text' />
                    <img src={rm} alt="" className='img' />
                </div>
            </div>
        </div>
        <div className='category-area'>
            <Tabs color='#44B15D'>
                {category.map((item,index) => (
                <Tabs.TabPane key={index} title={item}>
                    {item}
                </Tabs.TabPane>
                ))}
            </Tabs>
        </div>
       
    </div>
  )
}
