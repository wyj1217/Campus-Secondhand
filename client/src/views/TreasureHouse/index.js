import React from 'react'
import './treasureHouse.scss'
import { Tabs } from 'antd-mobile'


export default function TreasureHouse() {
  return (
    <div className='trbg'>
      <div className='trtop'>
      <Tabs>
        <Tabs.Tab title="O" key="o">
          123
        </Tabs.Tab>
        <Tabs.Tab title="我加入的" key="my">
        <div className='trcg'>
          <p>常逛的宝库</p>
          <ul>
            <li>球鞋装备营</li>
            <li>计算机学院</li>
            <li>LAmER粉</li>
            <li>阿迪达斯</li>
          </ul>
        </div>
          <div className='trbot'>
            <p>我加入的宝库</p>
            <ul>
              <li>
                球鞋装备营<button>进宝库</button>
              </li>
              <li>
                球鞋装备营<button>进宝库</button>
              </li>
              <li>
                球鞋装备营<button>进宝库</button>
              </li>
              <li>
                球鞋装备营<button>进宝库</button>
              </li>
            </ul>
          </div>
        </Tabs.Tab>
        <Tabs.Tab title="找宝库" key="boki">
          早宝库
        </Tabs.Tab>
        <Tabs.Tab title="找宝库" key="boki">
          
        </Tabs.Tab>
        <Tabs.Tab title="发布" key="boki">
          
        </Tabs.Tab>
      </Tabs>
      </div>
      
    </div>
  )
}
