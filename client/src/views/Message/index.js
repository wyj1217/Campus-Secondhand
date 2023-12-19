import React, { useEffect, useState } from 'react'
import './Message.css'
import { Tabs } from 'antd-mobile'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Message() {
  let [list, setlist] = useState([])
  let [talk, settalk] = useState([])
  let navi = useNavigate()
  const getuse = async () => {
    let { data } = await axios.get('http://localhost:3000/lyl/getusers')
    data.data.forEach(item => {
      item.img = 'data:image/png;base64,' + item.img
    })
    setlist(data.data)
  }
  const gettalk = async () => {
    let { data } = await axios.get('http://localhost:3000/lyl/getta')
    settalk(data.data)
  }
  useEffect(() => {
    getuse()
    gettalk()
  }, [])
  const tiao = async (item) => {
    let msg = {
      username: item.username,
      password: item.password
    }
    let { data } = await axios.post('http://localhost:3000/lyl/login', msg)
    if (data.code == 200) {
      let username = item.username
      navi('/liao', { state: { username } })
    }
  }
  return (
    <div className='header_1'>
      <div className='header_2'>
        <p>消息中心</p>
      </div>
      <div className='header_3'>
        <Tabs>
          <Tabs.Tab title='订单消息' key='a'>

          </Tabs.Tab>
          <Tabs.Tab title='互动消息' key='b'>
           
          </Tabs.Tab>
          <Tabs.Tab title='宝库消息' key='c'>
            
          </Tabs.Tab>
          <Tabs.Tab title='平台消息' key='d'>
            
          </Tabs.Tab>
        </Tabs>
      </div>
      <div className='header_4'>
        {list.map((item, index) => {
          return (
            <div className='header_5' key={item._id} onClick={() => tiao(item)}>
              <p><img src={item.img} /></p>
              <p>{item.username}</p>
              <div>
                {talk.slice(-1).map((item1, index) => {
                  if (item.username == item1.username) {
                    return (
                      <div key={index}>
                        {item1.info}
                      </div>
                    )
                  } else {
                    return (
                      <div key={index}>
                        {item1.username}:{item1.info}
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
