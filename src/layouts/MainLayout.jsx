import React from 'react';
import { Layout, Menu } from 'antd';
import Logo from '../assets/images/logo.svg'
const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
    // هنا نحدد عناصر القائمة في الهيدر
    const menuItems = [
        { key: '1', label: 'الرئيسية' },
        { key: '2', label: 'الطقس' },
        { key: '3', label: 'عن التطبيق' }
    ];

    return (
        <Layout className="min-h-screen">
            {/* 1. الهيدر الثابت في الأعلى */}
            <Header className="flex items-center justify-between bg-white dark:bg-[#282a2e] px-6 shadow-sm">
                <img src={Logo} alt="" />
                {/* <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={menuItems}
                    className="flex-1 justify-end border-none min-w-0"
                /> */}
            </Header>

            {/* 2. المحتوى المتغير (الصفحات مثل الطقس وغيره) */}
            <Content className="p-6 bg-gray-50 dark:bg-[#37373d]">
                <div className="bg-white dark:bg-[#282a2e] p-6 rounded-lg min-h-[80vh] shadow-sm">
                    {children} {/* هنا ستظهر صفحة Weather تلقائياً */}
                </div>
            </Content>

            {/* 3. الفوتر الثابت في الأسفل (اختياري) */}
            <Footer className="text-center bg-gray-100 dark:bg-[#282a2e] text-gray-500">
                جميع الحقوق محفوظة © 2026
            </Footer>
        </Layout>
    );
};

export default MainLayout;