import React from 'react';

class Profile extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        const teacher = this.props.currentTeacher ? 
        <>
        <div>{this.props.currentTeacher && this.props.currentTeacher.username}</div>
                <form onSubmit={this.props.updateTeacher} >
                <input type="text" placeholder="name" name='name' value={this.props.infoTeacher.name} onChange={this.props.infoHandleChangeTeacher}/>
                <input type="number" placeholder="Years of Experience" name='years_of_experience' value={this.props.infoTeacher.years_of_experience} onChange={this.props.infoHandleChangeTeacher}/>
                <button>Update</button>
            </form>
            <form onSubmit={this.props.postTeacherTime}>
                <h4>Post your times</h4>
                <input type='text' placeholder='Your available times' name='time_availability' value={this.props.infoTeacher.time_availablility} onChange={this.props.infoHandleChangeTeacher} />
            </form>
            <button onClick={this.props.deleteTeacher}>Delete Account</button>
        </> 
        : ''

        const student = this.props.currentStudent ? 
        <>
        <div>{this.props.currentStudent && this.props.currentStudent.username}</div>
            <form onSubmit={this.props.updateStudent} >
                <input type="text" placeholder="name" name='name' value={this.props.infoStudent.name} onChange={this.props.infoHandleChangeStudent}/>
                <input type="text" placeholder="program" name='program' value={this.props.infoStudent.program} onChange={this.props.infoHandleChangeStudent}/>
                <input type="text" placeholder="cohort" name='cohort' value={this.props.infoStudent.cohort} onChange={this.props.infoHandleChangeStudent}/>
                <button>Update</button>
            </form>
            <button onClick={this.props.deleteStudent}>Delete Account</button>
        </> 
        : ''
        return(
            <React.Fragment>
            <h2>Your Profile</h2>
            {student}
            {teacher}
            </React.Fragment>   
        )
    }
}

export default Profile;