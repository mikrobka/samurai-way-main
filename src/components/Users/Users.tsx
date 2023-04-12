import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

 export class Users extends React.Component<UsersPropsType>{
     componentDidMount() {
         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
             this.props.setUsers(response.data.items)
         });
     }
     render(){
        return (

            <>
                {this.props.usersPage.users.map(u => <div key={u.id}>
                    <div>
                        <div><img className={s.avatar} src={u.photos.small && u.photos.large} alt=""/></div>
                        {u.followed ? <button onClick={() => this.props.unfollowUser(u.id)}>Unfollow</button> : <button onClick={() => this.props.followUser(u.id)}>Follow</button>}
                    </div>
                    <div>
                        <div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div>
                            <div>
                                {"u.location.city"}
                            </div>
                            <div>
                                {"u.location.country"}
                            </div>
                        </div>
                    </div>
                </div>)}
            </>
        );
    }
}