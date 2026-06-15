import React from 'react'
import { Row, Col, Input, Button, Space, Typography,ConfigProvider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { buttonThemes } from '../../antd/themeConfig';
import WeatherCard from '../components/WeatherCard'; // استيراد كاردك الذكي الموحد

const { Title } = Typography;
const Weather = () => {
    return (
        <>
            <Title level={2} className='flex justify-center'>How's the sky looking today?</Title>

            <Row gutter={[16, 16]} justify="center" className="w-full">
                {/* في الشاشات الصغيرة يأخذ الحقل 18 عمود، وفي الكبيرة 12 عمود */}
                <Col xs={18} sm={16}>
                    <Input placeholder="Search for a place..." size="large" prefix={<SearchOutlined className='mx-2' />} />
                </Col>
                {/* الزر يأخذ بقية المساحة المتناسقة */}
                <Col xs={6} sm={4}>
                    <ConfigProvider theme={{ 
                            components: { 
                                Button: buttonThemes.searchButton 
                            } 
                        }}>
                        <Button type="primary" size="large" block>Search</Button>
                    </ConfigProvider>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className="w-full p-6">
            {/* 1. كارد الطقس المشمس */}
            <Col xs={24} sm={12} md={6}>
                <WeatherCard type="mainW" title="Makkah">
                    <p className="text-3xl font-semibold mb-1">38°C</p>
                    <p>Sunny & Clear Sky</p>
                </WeatherCard>
            </Col>

            {/* 2. كارد الطقس الممطر */}
            <Col xs={24} sm={12} md={6}>
                <WeatherCard type="infoW" title="London">
                    <p className="text-3xl font-semibold mb-1">16°C</p>
                    <p>Heavy Rain / 80%</p>
                </WeatherCard>
            </Col>

            {/* 3. كارد الطقس الغائم */}
            <Col xs={24} sm={12} md={6}>
                <WeatherCard type="dayW" title="Paris">
                    <p className="text-3xl font-semibold mb-1">22°C</p>
                    <p>Partly Cloudy</p>
                </WeatherCard>
            </Col>

            {/* 4. كارد الطقس الثلجي */}
            <Col xs={24} sm={12} md={6}>
                <WeatherCard type="hourW" title="Moscow">
                    <p className="text-3xl font-semibold mb-1">-4°C</p>
                    <p>Snow Storm</p>
                </WeatherCard>
            </Col>
        </Row>

        </>
    )
}
export default Weather;
