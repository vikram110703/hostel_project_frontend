import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { ChakraProvider, theme } from "@chakra-ui/react";


// export const server = "http://localhost:5000/api/v1";
export const server = "https://hostelprojectbackend-production.up.railway.app/api/v1";
// 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      {/* <AppWrapper /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
