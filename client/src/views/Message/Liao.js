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
  let [talk, settalk] = useState([])
  let navi = useNavigate()
  let [nowtext, setnowtext] = useState('')
  let talklist = useState([])
  let [falg,setfalg]=useState(true)
  const back = () => {
    navi('/message')
  }
  const getuse = async () => {
    let { data } = await axios.get('http://localhost:3000/lyl/getusers')
    data.data.forEach(item => {
      item.img = 'data:image/png;base64,' + item.img
    })
    setlist(data.data)
  }
  const gettalk = async () => {
    let { data } = await axios.get('http://localhost:3000/lyl/gettalk')

    settalk(data.data)
  }
  useEffect(() => {
    getuse()
    gettalk()
  }, [falg])

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
    setfalg(!falg)
  }
  //接收消息
  socket.on('message', function (msg) {
    talklist.push(msg.data)
  });
  return <div>
    <NavBar onBack={back}>{username}</NavBar>
    <div className='header_6'>
      {list.map((item, index) => {
        if (item.username == username) {
          return (
            <div className='header_7' key={item._id}>
              <p><img src={item.img} /></p>
              {talk.map((item1, index) => {
                if (item.username == item1.username) {
                  return (
                    <div key={index}>
                      <p>{item1.info}</p>
                    </div>
                  )
                }
              })}
            </div>
          )
        }
      })}
      {list.map((item, index) => {
        if (item.username != username) {
          return (
            <div className='header_7' key={item._id}>
              <p><img src={item.img} /></p>
              {talk.map((item1, index) => {
                if (item.username == item1.username) {
                  return (
                    <div key={index}>
                      <p>{item1.info}</p>
                    </div>
                  )
                }
              })}
            </div>
          )
        }
      })}
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