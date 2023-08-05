import React, {Component, Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import {Preloader} from "./components/common/Preloader/Preloader";
import Login from "./components/Login/Login";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))


type PropsType = MapDispatchToPropsType & MapStateToPropsType
type MapStateToPropsType = {
    isInitialized: boolean
    id: number
}
type MapDispatchToPropsType = { // типизация функции что пришли в контейнер
    initializeApp: () => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isInitialized: state.app.isInitialized,
        id: state.auth.id,
    };
};


class App extends Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        } else {
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Suspense fallback={<Preloader/>}>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path={`/profile/:userId?`} render={() => <ProfileContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                        </Suspense>
                    </div>
                </div>
            );
        }

    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);


