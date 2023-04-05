import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import selfMadeStore, {RootStateType} from "./redux/self-made-store";
import {store} from "./redux/store";

export const rerenderEntierTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store) }/>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntierTree(store.getState())
store.subscribe(rerenderEntierTree);
