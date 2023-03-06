import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import state, {
    addMessage,
    addPost,
    subscribe,
    updateNewMessageText,
    updateNewPostsText,
} from "./SelfMadeRedux/state";








function App() {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/messages" render={()=> <Dialogs
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                    newMessageText={state.dialogsPage.newMessageText}
                    dialogsData={state.dialogsPage.dialogsData}
                    messagesData={state.dialogsPage.messagesData}/>}/>
                <Route path="/profile" render={()=> <Profile
                    updateNewPostsText={updateNewPostsText}
                    newPostText={state.profilePage.newPostsText}
                    profileState={state.profilePage.postsData}
                    addPost={addPost}/>}/>
                <Route path="/news" render={()=> <News/>}/>
                <Route path="/music" render={()=> <Music/>}/>
                <Route path="/settings" render={()=> <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
