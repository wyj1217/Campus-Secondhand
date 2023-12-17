import React from 'react'
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO,GiftO,ChatO,Contact } from '@react-vant/icons'
import publishLogo from '../assets/Publish-Images/publishLogo.png'
import './footer.scss'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    const nav=useNavigate()

    const handleUrl=ev=>{
        console.log(ev);
        nav(ev)
        sessionStorage.path=ev
    }

  return (
    <div className='footer'>
        <Tabbar 
        activeColor='#44B15D' 
        inactiveColor='#000' 
        className='tabbar'
        defaultValue='/home'
        onChange={handleUrl}
        >
            <Tabbar.Item icon={<HomeO />} name='/home'>主页</Tabbar.Item>
            <Tabbar.Item icon={<GiftO />} name='/treasureHouse'>宝库</Tabbar.Item>
            <Tabbar.Item name='/publish'>
                <img src={publishLogo} alt="" />
            </Tabbar.Item>
            <Tabbar.Item icon={<ChatO  />} name='/message'>消息</Tabbar.Item>
            <Tabbar.Item icon={<Contact  />} name='/my'>我的</Tabbar.Item>
        </Tabbar>
    </div>
  )
}
