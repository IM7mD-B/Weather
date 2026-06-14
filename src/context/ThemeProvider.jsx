import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { getThemeConfig } from '../antd/themeConfig';

const ThemeProvider = ({ children }) => {
    // حالة لمراقبة وضع الثيم الحلي (false = فاتح، true = داكن)
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        // الـ ConfigProvider يغلف التطبيق بالكامل
        // أي مكون داخل Ant Design يقرأ الثيم مباشرة من هنا بشكل ديناميكي
        <ConfigProvider theme={getThemeConfig(isDarkMode)}>
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider;