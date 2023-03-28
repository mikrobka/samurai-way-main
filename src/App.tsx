import React, { FC } from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import  {StoreType} from "./SelfMadeRedux/state";


type AppPropsType = {
    store:StoreType
}

const  App:React.FC<AppPropsType> = ({store}) => {

    const state = store.getState()
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/messages" render={()=> <Dialogs
                    dispatch={store.dispatch.bind(store)}
                    newMessageText={state.dialogsPage.newMessageText}
                    dialogsData={state.dialogsPage.dialogsData}
                    messagesData={state.dialogsPage.messagesData}/>}/>
                <Route path="/profile" render={()=> <Profile
                    newPostText={state.profilePage.newPostsText}
                    profileState={state.profilePage.postsData}
                    dispatch={store.dispatch.bind(store)}/>}/>
                <Route path="/news" render={()=> <News/>}/>
                <Route path="/music" render={()=> <Music/>}/>
                <Route path="/settings" render={()=> <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
