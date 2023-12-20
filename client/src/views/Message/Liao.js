import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Liao.css'
import { io } from "socket.io-client";

const Liao = () => {
  let location = useLocation()
  let { username } = location.state
  let [list, setlist] = useState([])
  let navi = useNavigate()
  let [nowtext, setnowtext] = useState('')
  const back = () => {
    navi('/message')
  }
  const getuse = async () => {
    let { data } = await axios.get('http://localhost:3000/lyl/gettalk')
    data.list.forEach(item => {
      item.img = 'data:image/png;base64,' + item.img
    })
    setlist(data.list)
  }

  const jiat = () => {
    document.getElementById('mao').scrollIntoView()
  }
  useEffect(() => {
    getuse()
    setTimeout(() => {
      jiat()
    }, 1000);
  }, [])

  const socket = io('http://localhost:3000', {
    autoConnect: true,   // 自动连接     
  })
  //消息发送
  const send = () => {
    socket.emit('chatMessage', {
      info: nowtext,
      username: username,
    });
    setnowtext('')
  }
  //接收消息
  socket.on('message', function () {
    getuse()
    jiat()
  });
  return <div>
    <div className='header_11'>
      <NavBar onBack={back}>{username}</NavBar>
    </div>
    <div className='header_12'></div>
    <div className='header_6'>
      {list.map((item, index) => {
        return (
          <div key={index} className={item.username == username ? 'header_7' : 'header_10'}>
            <img src={item.img} />
            <span className='header_9'>{item.info}</span>
          </div>
        )
      })}
      <div id='mao'></div>
    </div>
    <div className='header_8'>
      <p>
        <input type='text' value={nowtext} onChange={(e) => {
          setnowtext(e.target.value)
        }} />
      </p>
      <p>
        <button onClick={() => { send() }}>发送</button>
      </p>
    </div>
  </div>;
}


export default Liao;