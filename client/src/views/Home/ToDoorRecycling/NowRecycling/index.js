import React, { useState } from 'react'
import './nowrecycling.scss'
import { Button,NavBar} from 'react-vant'
import { useNavigate } from 'react-router-dom'
import { Add } from '@react-vant/icons';
import dayjs from 'dayjs'
import axios from '../../../../utils'
import {Form,Input, Dialog, TextArea, DatePicker, Selector, 
    Slider, Stepper, Switch,ImageUploader, Space, Toast} from 'antd-mobile'
import q from '../wyj-imgs/q.svg'


export default function NowRecycling() {

    const nav=useNavigate()
    const maxCount = 3;

    const [fileList,setFileList]=useState([])

    const handleClickLeft=()=>{
        nav('/toDoorRecycling')
    }

    const onFinish = (values) => {
        Dialog.alert({
            content: <pre>{JSON.stringify(values, null, 2)}</pre>,
        });
    };

    const handleFileList = (newFileList) => {
        console.log(newFileList);
        // setFileList(newFileList);
    };

    const mockUpload=async (file)=> {
        // await sleep(3000)
        console.log(file);
        // return {
        //   url: URL.createObjectURL(file),
        // }
      }
  return (
    <div className='nowRecycling'>
        <NavBar
            title="上门回收"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
        <div className='add_goods'>
            <p className='add_title'>请添加你需要回收的物品</p>
            <div className='add_btn'>
                <div className='add_icon'>+</div>
                <p>立即添加</p>
            </div>
        </div>
        <div className='add_info'>
        <Form name='form' onFinish={onFinish}>
            <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
            <Input placeholder='请输入姓名'/>
            </Form.Item>
            <Form.Item name='address' label='地址'  rules={[{ required: true }]}>
                <Input placeholder='请输入地址'/>
            </Form.Item>
            <Form.Item name='birthday' label='回收时间' trigger='onConfirm' onClick={(e, datePickerRef) => {
                var _a;
                (_a = datePickerRef.current) === null || _a === void 0 ? void 0 : _a.open();
            }}>
            <DatePicker>
                {value => value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'}
            </DatePicker>
            </Form.Item>
            <Form.Item name='favoriteFruits' label='物品属性'>
                <Input placeholder='请描述物品状态'/>
            </Form.Item>
        </Form>
        </div>
        <div className='fuwu'>
            <p className='p1'>服务费</p>
            <img src={q} alt="" className='question' />
            <p className='p2'>首单减免</p>
        </div>
        <div className='operation'>
            <div className='price'>
                <p className='yugu'>预估价：<span>xxx</span></p>
                <p></p>
            </div>
            <div className='now'>
                立即回收
            </div>
        </div>
    </div>
  )
}
