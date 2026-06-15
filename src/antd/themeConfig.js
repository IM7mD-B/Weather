import { theme } from 'antd';

export const lightTheme = {
    algorithm: theme.defaultAlgorithm,
    token: {
        colorPrimary: '#3B82F6',
        colorError: '#e72230',
        borderRadius: 8,
        colorTextBase: '#ffffff',
        fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        // هنا نحدد ألوان الفاتح إذا أردت تخصيصها، أو اترك Antd يختارها تلقائياً
        colorBgLayout: '#f9fafb', // يعادل bg-gray-50 في تيلويند
        colorBgContainer: 'hsl(243, 96%, 9%)', // يعادل bg-white
    },
    components: {
        Layout: {
            headerBg: 'hsl(243, 96%, 9%)', 
            bodyBg:'hsl(243, 96%, 9%)'// نحدد لون خلفية الهيدر بنفس درجتك بالضبط
        },
        Input: {
            // لون الخلفية: رمادي فاتح جداً مع شفافية (باستخدام rgba)
            colorBgContainer: 'rgba(243, 244, 246, 0.3)', 
            
            // لون الحواف الافتراضية: رمادي خفيف جداً شبه شفاف
            colorBorder: 'rgba(209, 213, 219, 0.3)', 
            
            // لون الحواف عندما تضغط بداخل الحقل لتكتب (Hover/Focus)
            colorPrimaryHover: '#3B82F6', 
        }
        
    },
    
};

export const buttonThemes = {
    searchButton: {
        colorPrimary: 'hsl(233, 67%, 56%)',     // أصفر لزر البحث
        colorPrimaryHover: 'hsl(248, 70%, 36%)',
        lineWidth: 0,                   // يمسح البوردر في جميع الحالات
    },
    optionsButton: {
        colorPrimary: '#3B82F6',    // أزرق لزر الخيارات
        colorPrimaryHover: '#2563EB',
        
    }
};

export const darkTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
        colorPrimary: '#3B82F6',
        borderRadius: 8,
        fontFamily: 'IBMPlexSansArabic',
        
        // الألوان للثيم الغامق التي كنت تستخدمها في التيلويند:
        colorBgLayout: '#1f2023', // الخلفية العامة الطاغية بالخلف
        colorBgContainer: '#282a2e', // لون الهيدر وصندوق المحتوى الداخلي
        colorTextBase: '#ffffff',
    },
    components: {
        Layout: {
            headerBg: '#282a2e', // نحدد لون خلفية الهيدر بنفس درجتك بالضبط
        },
    },
};

export const getThemeConfig = (isDark) => {
    return isDark ? darkTheme : lightTheme;
};

export const weatherCardThemes = {
    mainW: {
        bgContainer: 'linear-gradient(135deg, rgba(220, 38, 38, 0.4), rgba(159, 18, 57, 0.5))',
        borderColor: 'rgba(239, 68, 68, 0.4)',
        textColor: '#fef2f2',
    },
    hoursW: {
        bgContainer: 'linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(49, 46, 129, 0.5))',
        borderColor: 'rgba(59, 130, 246, 0.3)',
        textColor: '#eff6ff',
    },
    infoW: {
        bgContainer: 'linear-gradient(135deg, rgba(71, 85, 105, 0.4), rgba(15, 23, 42, 0.5))',
        borderColor: 'rgba(100, 116, 139, 0.3)',
        textColor: '#f8fafc',
    },
    dayW: {
        bgContainer: 'linear-gradient(135deg, rgba(8, 145, 178, 0.4), rgba(30, 58, 138, 0.5))',
        borderColor: 'rgba(6, 182, 212, 0.3)',
        textColor: '#ecfeff',
    }
}