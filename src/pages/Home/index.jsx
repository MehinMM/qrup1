import './style.css';
import 'antd/dist/reset.css';
import {logo,city} from '../../img/export';
import React from 'react'

import {Layout, Col, Row, Menu} from 'antd';
import {MailOutlined, PhoneOutlined, CustomerServiceOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;



const items = [
  {
    label: 'Haqqimizda',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Elaqe',
    key: 'app',
    icon: <PhoneOutlined />,
    disabled: false,
  },
  {
    label: 'Xidmetlerimiz',
    key: 'SubMenu',
    icon:<CustomerServiceOutlined />,
    children: [
      // {
      //   type: 'group',
      //   label: 'Item 1',
      //   children: [
      //     {
      //       label: 'Option 1',
      //       key: 'setting:1',
      //     },
      //     {
      //       label: 'Option 2',
      //       key: 'setting:2',
      //     },
      //   ],
      // },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    icon:<InfoCircleOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Informasiya
      </a>
    ),
  },
];

const Home= () => {

  return (
    <Layout style={{gap:'10px'}}>
      <Header>
        <Row style={{color:'white'}}>
          <Col span={4} style={{}}> 

            <img src={logo} alt="" className='home-logo'/>

          </Col>

          <Col  span={20}  style={{}}> 
          
          <Menu mode="horizontal" items={items}
           style={{
              display:'flex',
              justifyContent:'space-between'
          }}/>
          
          </Col>

        </Row>
       
      </Header>

      <Content style={{backgroundColor:'pink',height:'400px'}}>
  
          <img src={city} alt="" style={{
            width:'100%',
            height:'400px'
          }}/>
      
      </Content>

      <Footer style={{backgroundColor:'green',height:'50px'}}>
       Footer
      </Footer>
    </Layout>
  );
};
export default Home;