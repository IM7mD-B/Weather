import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs'; 
import ThemeProvider from './context/ThemeProvider'; 
import Weather from './modules/pages/Weather';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <StyleProvider layer>
      <ThemeProvider>
        
        <MainLayout>
          <Weather />
        </MainLayout>

      </ThemeProvider>
    </StyleProvider>
  );
};

export default App; 