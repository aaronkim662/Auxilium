import React from 'react';
import './profile.css'

class Profile extends React.Component {
    
    render(){
        const teacher = this.props.currentTeacher ? 
        <>
        <div className='profileT'>
        <div className='profileTeacher'>Welcome Teacher {this.props.currentTeacher && this.props.currentTeacher.username}</div>
        <h2>Update your profile</h2>
                <form className='profileForm'onSubmit={this.props.updateTeacher} >
                <input className='profileInput' type="text" placeholder="email" name='email' value={this.props.infoTeacher.email} onChange={this.props.infoHandleChangeTeacher}/>
                <input className='profileInput' type="text" placeholder="name" name='name' value={this.props.infoTeacher.name} onChange={this.props.infoHandleChangeTeacher}/>
                <input className='profileInput'type="number" placeholder="years of Experience" name='years_of_experience' value={this.props.infoTeacher.years_of_experience} onChange={this.props.infoHandleChangeTeacher}/>
                <button className='profileUpdate'>Update</button>
            </form>
            <form onSubmit={this.props.postTeacherTime}>
                <h4>Post your times</h4>
                <input className='profileInput' type='text' placeholder='Your available times' name='time_availability' value={this.props.infoTeacher.time_availablility} onChange={this.props.infoHandleChangeTeacher} />
            </form>
            <button className='profileDelete' onClick={this.props.deleteTeacher}>Delete Account</button>
        </div>
        </> 
        : '';

        const student = this.props.currentStudent ? 
        <>
        <div className='profileS'>        
        <div className='profileStudent'>Welcome Student {this.props.currentStudent && this.props.currentStudent.username}</div>
        <h2>Update your profile</h2>
            <form className='profileForm' onSubmit={this.props.updateStudent} >
                <input className='profileInput' type="text" placeholder="email" name='email' value={this.props.infoStudent.email} onChange={this.props.infoHandleChangeStudent}/>
                <input className='profileInput' type="text" placeholder="name" name='name' value={this.props.infoStudent.name} onChange={this.props.infoHandleChangeStudent}/>
                <input className='profileInput' type="text" placeholder="program" name='program' value={this.props.infoStudent.program} onChange={this.props.infoHandleChangeStudent}/>
                <input className='profileInput' type="text" placeholder="cohort" name='cohort' value={this.props.infoStudent.cohort} onChange={this.props.infoHandleChangeStudent}/>
                <button className='profileUpdate'>Update</button>
            </form>
            <button className='profileDelete' onClick={this.props.deleteStudent}>Delete Account</button>
        </div>

        </> 
        : '';

        return(
        <>
            {student}
            {teacher}
        </> 
        )
    }
}

export default Profile;