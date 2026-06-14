    import { theme } from 'antd'; // تأكد من إبقاء الاستيراد إذا كنت تستخدم الـ algorithm

    export const lightTheme = {
        algorithm: theme.defaultAlgorithm,
        token: {
            colorPrimary: '#3B82F6',
            colorError: '#e72230',
            borderRadius: 8,
            fontFamily: 'IBMPlexSansArabic',
        },
    };

    export const darkTheme = {
        algorithm: theme.darkAlgorithm,
        token: {
            colorPrimary: '#3B82F6',
            colorBgContainer: '#282a2e',
            colorTextBase: '#ffffff',
            colorBgLayout: '#37373d',
        },
    };

    export const getThemeConfig = (isDark) => {
        return isDark ? darkTheme : lightTheme;
    };