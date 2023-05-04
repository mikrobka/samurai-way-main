import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";


    ReactDOM.render(
        //оборачиваем все приложение чтоб можно было пользоваться роутингами
        // Провайдер передает стейт нашему прилодению
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );


