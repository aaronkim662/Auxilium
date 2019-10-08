import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super()
    }
    list = currentTeacher ? 
    <>
    <div>{this.props.currentTeacher && this.props.currentTeacher.username}</div>
            <form onSubmit={this.props.updateTeacher} >
            <input type="text" placeholder="name" name='name' value={this.props.infoTeacher.name} onChange={this.props.infoHandleChangeTeacher}/>
            <input type="number" placeholder="Years of Experience" name='years_of_experience' value={this.props.infoTeacher.years_of_experience} onChange={this.props.infoHandleChangeTeacher}/>
            <button>Update</button>
        </form>
        </> : ''

    list = currentStudent ? 
    <>
    <div>{this.props.currentTeacher && this.props.currentTeacher.username}</div>
        <form onSubmit={this.props.updateStudent} >
        <input type="text" placeholder="name" name='name' value={this.props.infoTeacher.name} onChange={this.props.infoHandleChangeTeacher}/>
        <input type="number" placeholder="Years of Experience" name='years_of_experience' value={this.props.infoTeacher.years_of_experience} onChange={this.props.infoHandleChangeTeacher}/>
        <button>Update</button>
    </form>
    </> : ''
    render(){
        console.log(this.props)
        return(
            <React.Fragment>
            <h2>Your Profile</h2>
            {list}
            <form onSubmit={this.props.postTeacherTime}>
            <input type="text" placeholder="Time" name='time_availability' value={this.props.infoTeacher.time_availability} onChange={this.props.infoHandleChangeTeacher}/>
            </form>
            <button onClick={this.props.deleteTeacher}>Delete Account</button>
            <button onClick={this.props.handleLogout}>Logout</button>
            
            </React.Fragment>   
        )
    }
}

export default Profile;