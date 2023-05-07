import React from 'react';


type ProfileStatusPropsType = {
    status?: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,

    }

    activateEditMode  ()  {
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode(){
        this.setState({
            editMode:false

        })
    }


    render() {
        return (
            <>
                {
                    this.state.editMode
                        ?
                        <div>
                             <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                        </div>
                }


            </>
        );
    }


};

