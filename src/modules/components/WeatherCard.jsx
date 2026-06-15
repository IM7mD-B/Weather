import React from 'react';
import { Card } from 'antd';
import { weatherCardThemes } from '../../antd/themeConfig';

const WeatherCard = ({ type = 'mainW', title, children, ...props }) => {
    const currentTheme = weatherCardThemes[type] || weatherCardThemes.mainW;

    return (
        <Card 
            // 1. 👇 أزلنا text-white الافتراضي لنسمح لملف الكونفيج بالتحكم بلون الخط
            className={`${currentTheme.bgClass} rounded-xl shadow-lg overflow-hidden`}
            bordered={false}
            // 2. 👇 هذا السطر السحري يجبر خلفية أنتد الداخلية على الاختفاء تماماً لتظهر ألوان تيلويند الشفافة خلفها
            styles={{ 
                body: { backgroundColor: 'transparent' },
                header: { backgroundColor: 'transparent', borderBottom: 'none' }
            }}
        >
            {/* عنوان الكارد - يقرأ اللون الممرر في الـ bgClass */}
            <div className="text-xl font-bold mb-3 opacity-90">{title}</div>
            
            {/* محتوى الكارد الداخلي */}
            <div className="opacity-90">
                {children}
            </div>
        </Card>
    );
};

export default WeatherCard;