import React, { useState } from 'react'
import './nowrecycling.scss'
import { Button,NavBar,Tabs,Dialog,Loading } from 'react-vant'
import { useNavigate } from 'react-router-dom'
import { Add } from '@react-vant/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs'
import axios from '../../../../utils'
import {Form,Input,  TextArea, DatePicker, Selector, 
    Slider, Stepper, Switch,ImageUploader, Space, Toast,Popup,
    } from 'antd-mobile'
import {Upload} from 'antd'
import q from '../wyj-imgs/q.svg'


export default function NowRecycling() {

    const nav=useNavigate()
    const maxCount = 3;
    const [visible1, setVisible1] = useState(false)
    const [visible,setVisible]=useState(false)

    const [fileList,setFileList]=useState([])
    const [curIndex,setCurIndex]=useState(-1)
    const [selected,setSelected]=useState([])

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };
      const handleUploadImg=(info)=>{
        console.log(info);
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (url) => {
            // setLoading(false);
            console.log(url);
            setImageUrl(url);
          });
        }
      }

      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </div>
      );

    const goodsCatrgory=[
        {name:'书本教材',children:[
            {name:'大学教材'},
            {name:'古今中外史'},
            {name:'散文'},
            {name:'杂志'},
            {name:'工具书'},
        ]},
        {name:'数码家器',children:[
            {name:'制冷空调'},
            {name:'清洁电器'},
            {name:'声响电器'},
            {name:'手机'},
            {name:'电脑'},
        ]},
        {name:'生活用品',children:[
            {name:'床上用品'},
            {name:'厨卫用品'},
            {name:'家具装饰'},
            {name:'美妆'},
            {name:'护肤'},
            {name:'衣物'},
        ]},
        
    ]

    const handleClickLeft=()=>{
        nav('/toDoorRecycling')
    }

    const onFinish = (values) => {
        console.log(values);
        // Dialog.alert({
        //     content: <pre>{JSON.stringify(values, null, 2)}</pre>,
        // });
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
    const selectCategory=(name,idx)=>{
        setCurIndex(idx)
        let copy_select=[...selected]
        const index=copy_select.findIndex(item=>item==name)

        if(copy_select.length==0){
            copy_select.push(name)
            setSelected(copy_select)
        }else{
            copy_select.splice(index,1)
            copy_select.push(name)
            setSelected(copy_select)
        }
    }
    const confirm=()=>{
        console.log(selected);
    }

    const [username,setUsername]=useState('')
    const [address,setAddress]=useState('')
    const [goodsName,setGoodsName]=useState('')
    const [time,setTime]=useState('')
    const [status,setStatus]=useState('')


    const handleUsername=ev=>{
        // console.log(ev);
        setUsername(ev)
    }
    const handleAddress=ev=>{
        setAddress(ev)
    }
    const handleGoodsName=ev=>{
        setGoodsName(ev)
    }
    const confirmTime=val=>{
        // console.log(val);
        const val2=dayjs(val).format('YYYY-MM-DD')
        console.log(val2);
        setTime(val2)
    }
    const selectStatus=(arr,extend)=>{
        console.log(extend.items);
        setStatus(extend.items[0].label)
    }
    const addMyGoods=async ()=>{
        console.log(username);
        console.log(address);
        console.log(goodsName);
        console.log(time);
        console.log(status);
        console.log(imageUrl);
        const data={
            username,
            address,
            goodsName,
            time,
            status,
            imageUrl
        }
        
        
        setTimeout(async ()=>{
            Toast.show({
                icon: 'loading',
                content: '请稍等...',
                duration: 1700,
            })
            await axios.post('/wyj/addMyGoods',{data})

            setTimeout(() => {
                Dialog.alert({
                    message: `添加成功！可在我的订单查看详情哦...`,
                  })
            }, 1700)
           
        })
    }
  
  return (

    <div className='nowRecycling'>
        <NavBar
            title="上门回收"
            onClickLeft={handleClickLeft}
            className='navbar'
            />
        {/* <div className='add_goods'>
            <p className='add_title'>选择添加的物品类型</p>
            <div className='add_btn'>
                <div className='add_icon'>+</div>
                <p onClick={()=>{
                    setVisible1(true)
                }}>立即添加</p>
            </div>
            <Popup
            className='popup'
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '40vh',
              }}
            >
              <div className='popup_div'>
                
                <Tabs color='#44B15D' align='start' onChange={()=>{
                    setCurIndex(-1)
                }} >
                {goodsCatrgory.map((item,index) => (
                <Tabs.TabPane key={index} title={item.name} name={item.name}>
                   <ul>
                    {item.children.map((item2,index)=>(
                        <li className={curIndex==index?'goodsCategory':'noselectCategory'}
                        onClick={()=>selectCategory(item2.name,index)}>
                            {item2.name}
                        </li>
                    ))}
                   </ul>
                </Tabs.TabPane>
                ))}
            </Tabs>
                <Button block={true} onClick={confirm}>确定</Button>
              </div>
            </Popup>
        </div> */}
        <div className='add_info'>
        <Form name='form' onFinish={onFinish}>
            <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
            <Input placeholder='请输入姓名' value={username} onChange={(ev)=>handleUsername(ev)} />
            </Form.Item>
            <Form.Item name='address' label='地址'  rules={[{ required: true }]}>
                <Input placeholder='请输入地址' onChange={(ev)=>handleAddress(ev)}/>
            </Form.Item>
            <Form.Item name='favoriteFruits' label='物品名称' rules={[{ required: true }]}>
                <Input placeholder='请输入物品名称' onChange={(ev)=>handleGoodsName(ev)}/>
            </Form.Item>
            <Form.Item name='birthday' label='回收时间' trigger='onConfirm' onClick={(e, datePickerRef) => {
                var _a;
                (_a = datePickerRef.current) === null || _a === void 0 ? void 0 : _a.open();
            }}>
            <DatePicker onConfirm={val=>confirmTime(val)}>
                {value => value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'}
            </DatePicker>
            </Form.Item>
            <Form.Item label='物品状态' name='status'>
            <Selector
                options={[
                    {label:'全新',value:'1'},
                    {label:'95新',value:'2'},
                    {label:'9成新',value:'3'},
                    {label:'8成新',value:'4'},
                    {label:'7成新',value:'5'},
                    {label:'6成新',value:'6'},
                    {label:'5成新',value:'7'},
                    {label:'旧',value:'8'}
                ]}
                defaultValue={['1']}
                onChange={(arr, extend) => selectStatus(arr,extend)}
                />
            </Form.Item>
            <Form.Item name='img'>
            <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="http://localhost:3000/wyj/upload"
                        // beforeUpload={beforeUpload}
                        onChange={(info)=>handleUploadImg(info)}
                    >
                        {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                            width: '100%',
                            }}
                        />
                        ) : (
                        uploadButton
                        )}
                    </Upload>
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
            <div className='now' onClick={addMyGoods}>
                立即回收
            </div>
        </div>
    </div>
  )
}
