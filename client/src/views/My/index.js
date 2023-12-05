import React from 'react'
import "./My.css"

export default function My() {

  return (
    <div>
      <div className='one'>
        <div className='one_left'>
          <img src={require("../My/"+"user1.jpg")} alt="" />
        </div>
        <div className='one_right'>
          <div className='one_right_left'>
            <p className='one_right_head'>斯文Jun_</p>
            <p className='one_right_bottom'>关注<span>9</span></p>
            <p className='one_right_bottom2'>粉丝<span>9000</span></p>
          </div>
          <div className='one_right_right'>
            <button><p>信誉分：80</p></button>
          </div>
        </div>
      </div>
      <div className='two'>
        123
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
