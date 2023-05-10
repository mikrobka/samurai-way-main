import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatus:(status:string)=>void
}


 class ProfileStatus extends React.Component<ProfileStatusPropsType> {



    state = {
        editMode: false,
        status:this.props.status

    }

    activateEditMode =   () => {
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode = () =>{
        this.setState({
            editMode:false
        })

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: {editMode:boolean,status:string}) {
        // if(prevProps){
        //     this.setState({
        //         status:this.props.status
        //     })
        // }

    }


     render() {
        return (
            <>
                {
                    this.state.editMode
                        ?
                        <div>
                             <input onChange={this.onStatusChange}  autoFocus onBlur={this.deactivateEditMode} value={this.state.status}></input>
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{!this.props.status ? "Status" : this.props.status}</span>
                        </div>
                }


            </>
        );
    }

}

export default ProfileStatus
