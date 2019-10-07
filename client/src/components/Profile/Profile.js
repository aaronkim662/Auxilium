import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super()
    }
    // list = this.props.times && this.props.times.map((ele,i) => {
    //     return(
    //         <div key={i}>{ele.time}</div>
    //     )
    // })
    render(){
        console.log(this.props)
        return(
            <React.Fragment>
            <h2>Your Profile</h2>
            <div>{this.props.currentTeacher.username}</div>
            <form onSubmit={this.props.updateT} >
            <input type="text" placeholder="name" name='name' value={this.props.infoT.name} onChange={this.props.infoHCT}/>
            <input type="text" placeholder="Years of Experience" name='years_of_experience' value={this.props.infoT.years_of_experience} onChange={this.props.infoHCT}/>
            <form onSubmit={this.props.postT}>
            <input type="text" placeholder="Time" name='time_availability' value={this.props.infoT.time_availability} onChange={this.props.infoHCT}/>
            </form>
            <button>Update</button>
            </form>
            
            </React.Fragment>   
        )
    }
}

export default Profile;