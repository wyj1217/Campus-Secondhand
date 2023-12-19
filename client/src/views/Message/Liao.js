import React,{useEffect,useState,useRef} from 'react';
import {useLocation} from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Liao.css'

const Liao = () => {
    let location=useLocation()
    let {username}=location.state.item
    let [list, setlist] = useState([])
  let [talk,settalk]=useState([])
    let navi=useNavigate()
    const back = () =>{
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
        console.log(data,'111111');
        settalk(data.data)
      }
      useEffect(() => {
        getuse()
        gettalk()
      }, [])
    return <div>
        <NavBar onBack={back}>{username}</NavBar>
        <div className='header_6'>
        {list.map((item, index) => {
          return (
            <div className='header_7' key={item._id}>
              <p><img src={item.img}/></p>
              <div>
                <p>
                    woshilinyul
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='header_8'>
        <p>
        <input type='text'/>
        </p>
        <p>
            <button>发送</button>
        </p>
      </div>
    </div>;
}


export default Liao;