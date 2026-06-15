import React from 'react';
import { Layout, Menu } from 'antd';
import Logo from '../assets/images/logo.svg'
const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
    const menuItems = [
        { key: '1', label: 'الرئيسية' },
        { key: '2', label: 'الطقس' },
        { key: '3', label: 'عن التطبيق' }
    ];

    return (
        <Layout className="min-h-screen">
            {/* 1. الهيدر: شلنا bg-white والـ dark bg تماماً */}
            <Header className="flex items-center justify-between my-3 px-6 shadow-sm">
                <img src={Logo} alt="Logo" className='size-42' />
                {/* <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={menuItems}
                    className="flex-1 justify-end border-none min-w-0"
                /> */}
            </Header>

            {/* 2. المحتوى: شلنا bg-gray-50 والـ dark bg */}
            <Content className="py-6">
                {/* الصندوق الداخلي للمحتوى */}
                <div className="px-8 md:px-16 min-h-[85vh] shadow-sm transition-colors duration-300">
                    {children}
                </div>
            </Content>
        </Layout>
    );
};

export default MainLayout;