import React, { useEffect, useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import logo from '../../../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';


const items = [
  {
    label: 'Home',
    key: '',
  },
  {
    label: 'About',
    key: 'about',
    disabled: false,
  },
  {
    label: 'Download',
    key: 'threeScene',
    disabled: false,
  },
  
];

const NavBarAnt = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('');
  const [visible, setIsVisible] = useState(false);
  const [fontSize, setFontSize] = useState(24)

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
    setIsVisible(false)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newFontSize = Math.min(24 + scrollY / 10, 40);
      setFontSize(newFontSize)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <div className="w-full bg-transparent z-10 bottom-0 h-20">
      <div className=" bg-black flex items-center justify-between">
        {/* Logo Section */}
        <div className="logo flex space-x-4">
          {/* <img className="h-8" src={logo} alt="Logo" /> */}
          <h1 className='text-yellow-400' style={{fontSize: `${fontSize}px`}}>Spotlyt</h1>
        </div>
        {/*Desktop Menu Section */}
        <div className='hidden md:flex flex-1 justify-end items-center'>
        <Menu
          onClick={onClick}
          theme="dark"
          selectedKeys={[current]}
          mode="horizontal"
          className="flex-1 justify-end"
          style={{ backgroundColor: 'transparent' }}
        >
          {items.map(item => (
            <Menu.Item
              key={item.key}
              style={{
                borderRadius: 5,
                backgroundColor: current === item.key ? 'green' : 'transparent',
                color: current === item.key ? 'white' : 'white',
              }}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        <Button className='bg-green-600 hover:bg-yellow-500 text-white hover:text-white border-none' type='secondary'>WhatsApp Channel</Button>
        </div>
       {/* Mobile Menu Toggle */}
       <div className='md:hidden flex items-center'>
        <Button 
        type='text'
        icon={<MenuOutlined/>}
        onClick={() => setIsVisible(true)}
        style={{color:'white'}}
        />
       </div>
      </div>
{/* Mobile Menu Drawer */}
<Drawer
title="Menu"
placement="right"
onClose={() => setIsVisible(false)}
visible={visible}
bodyStyle={{padding: 0}}
>
<Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          style={{ borderRight: 0 }}
        >
          {items.map(item => (
            <Menu.Item
              key={item.key}
              style={{
                backgroundColor: current === item.key ? 'green' : 'transparent',
                color: current === item.key ? 'white' : 'black',
              }}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
</Drawer>
    </div>
  );
}

export default NavBarAnt;
