import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/store';
import {SnackbarProvider} from'notistack'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <SnackbarProvider anchorOrigin={{
    vertical:'top',
    horizontal:'center'
   }}>

    <App />
   
   
   </SnackbarProvider>
   
    
   
  </Provider>
  
);



