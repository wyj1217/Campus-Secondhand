import React, { useEffect, useState } from 'react'
import './topicDetail.scss'
import { useNavigate,useLocation } from 'react-router-dom'
import { Button,NavBar} from 'react-vant'
import {ShareO,CommentO} from  '@react-vant/icons';
import suggest from '../../../../assets/Home-Images/like.svg'
import suggest2 from '../../../../assets/Home-Images/like2.svg'
import axios from '../../../../utils';





export default function TopicDetail() {

    const nav=useNavigate()
    const loc=useLocation()

    const getDetail=async ()=>{
      const {data}=await axios.get('/wyj/detail')
      data.forEach(item=>{
        item.headImg='data:image/png;base64,'+item.headImg
        item.topicImg='data:image/png;base64,'+item.topicImg
      })
      console.log(data,);
      setDetail(data)
    }

    const [topic_id,setTopicId]=useState(loc.state[0]._id)
    const [isLike,setIsLike]=useState(false)
    const [detail,setDetail]=useState([])
    // const [likeList,setLikeList]=useState([])

    // console.log(detail,likeList);

    const handleClickLeft=()=>{
      nav('/hotTopic')
  }
  useEffect(()=>{
    // setLikeList(loc.state[0].likeList)
    // setDetail(loc.state)
    getDetail()
  },[])
  
  const addLove=async ()=>{
    setIsLike(true)
    const {data}=await axios.post('/wyj/addLove',{id:topic_id,num:1,username:'123'})
    console.log(123);
    data.forEach(item=>{
      item.headImg='data:image/png;base64,'+item.headImg
      item.topicImg='data:image/png;base64,'+item.topicImg
      item.likeList.unshift({username:'123'})
      if(item.likeList.length>2){
        item.likeList.splice(2)
      }
    })
    setDetail(data)
    

    // const copy_detail=[...detail]
    // console.log(copy_detail,'copy_detail');
    // copy_detail[0].likeList.unshift({username:'123'})
    // console.log(copy_detail,'之后');

    // if(copy_detail[0].likeList.length>2){
    //   copy_detail[0].likeList.splice(2)
    //   console.log(copy_detail[0].likeList,'删除之后');
    //   // setLikeList(copy_detail)
    // }
    // getDetail()

    // setDetail()
    // setDetail(copy_detail)
    // getDetail()
    // window.location.reload()
  }

  console.log(detail,'detail');
  
  return (
    <div className='topicDetail'>
       <NavBar
            title="话题详情"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
        {
          detail.map(item=>(
            <div>
              <div className='top'>
                <img src={item.topicImg} alt="" className='img1' />
                <div className='d1'>
                  <h2>{item.title}</h2>
                  <h3>阅读{item.readCount}次</h3>
                </div>
              </div>
              <div className='detail'>
                <div className='userInfo'>
                  <img src={item.headImg} alt="" />
                  <p className='username'>{item.username}</p>
                  <button className='btn'>关注TA</button>
                </div>
                <div className='desc'>
                  <div className='desc-title'>
                      <span className='p1'>{item.title}</span>
                      <span className='p2'>{item.desc}</span>
                  </div>
                  <div className='icons'>
                    <div className='icons-d1'>
                      <ShareO className='share' />
                      <span>{item.shareNum}</span>
                    </div>
                    <div className='icons-d2' onClick={addLove}>
                    {isLike? <img src={suggest2} alt="" />: <img src={suggest} alt=""/>}
                      <span>{item.likeNum}</span>
                    </div>
                    <div className='icons-d2'>
                      <CommentO className='comment' />
                      <span>{item.commentNum}</span>
                    </div>
                  </div>
                  <div className='likeAndComment'>
                    <div className='lc_d1'>
                     <img src={suggest} alt="" />
                      <ul>
                        
                        {
                          item.likeList.map(item=>(
                            <li>
                              {item.username+'、'}
                            </li>
                          ))
                        }
                        等赞过
                      </ul>
                    </div>
                    <div className='lc_d2'>
                      <CommentO className='lc_icon' />
                      <ul>
                        {item.comment.map(item=>(
                          <li>
                            <span className='sp1'>{item.username}</span>：
                            <span className='sp2'>{item.comment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}
