import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Form from './components/Form/Form';
import Teachers from './components/Teachers/Teachers'
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import { deleteTeacher,
         deleteStudent,
         getTeachers, 
         getTimes, 
         loginTeacher,
         loginStudent,
         postTime, 
         registerTeacher,
         registerStudent, 
         updateStudent,
         updateTeacher, 
         verifyTeacher } from './services/api-helper.js';

class App extends React.Component {
  state = {
    currentStudent: '',
    currentTeacher: '',
    infoTeacher : {
        name: '',
        years_of_experience : 0,
        time_availability : ''
    },
    infoStudent : {
        name: '',
        cohort: '',
        program: '',
    },
    isStudent: false,
    isTeacher: false,
    loginTeacher : {
        username: '',
        password: '',
    },
    registerTeacher : {
        username: '',
        password: '',
    },
    registerStudent: {
        username: '',
        password: '',
    },
    teachers: '',
    teacherTimes : '',
    loginStudent : {
        username: '',
        password: ''
    },
    type: '',
    registerStudent : {
        username: '',
        password: ''
    },
    

}

deleteStudent = async () => {
  localStorage.removeItem('authToken')
  await deleteStudent(this.state.currentStudent.id);
  this.setState({
      currentStudent : ''
  })
}

deleteTeacher = async () => {
    localStorage.removeItem('authToken')
    await deleteTeacher(this.state.currentTeacher.id);
    this.setState({
        currentTeacher : ''
    })
}

getTeach = async () => {
  const teachers = await getTeachers()
  this.setState({
      teachers: teachers
  });
};

getTime = async (data) => {
  const times = await getTimes(data, this.state.currentTeacher.id)
  this.setState({
      teacherTimes: times
  })
}

handleClickType = (e) => {
    if (e.target.name === 'student'){
        this.setState({
            type: 'isStudent'
        })
    }else if(e.target.name === 'teacher'){
      this.setState({
        type: 'isTeacher'
      })
    }
    this.props.history.push('/login')
}

handleLogout = () => {
    localStorage.removeItem("authToken");
    if (this.state.currentTeacher){
    this.setState({
      currentTeacher: null
    })
  }else if (this.state.currentStudent){
    this.setState({
      currentStudent: null
    })
  }
    this.props.history.push('/')
  };

handleVerifyTeacher = async () => {
    const currentTeacher = await verifyTeacher();
    if(currentTeacher){
    this.setState({ currentTeacher })
    }
}

infoHandleChangeStudent = (e) => {
  e.preventDefault();
  e.stopPropagation();
  let {name, value} = e.target;
  if (name === 'years_of_experience') {
      value = parseInt(value);
  }
  this.setState(prevState => ({
      infoStudent : {
          ...prevState.infoStudent,
          [name]: value
      }
  }))
}

infoHandleChangeTeacher = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let {name, value} = e.target;
    if (name === 'years_of_experience') {
        value = parseInt(value);
    }
    this.setState(prevState => ({
        infoTeacher : {
            ...prevState.infoTeacher,
            [name]: value
        }
    }))
}
// login teachers
logTeacher = async (e) => {
    e.preventDefault();
    const resp = await loginTeacher(this.state.loginTeacher)
    console.log('res', resp)
    this.setState({
        currentTeacher: resp
    })
}

loginHandleChangeTeacher = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => ({
        loginTeacher : {
            ...prevState.loginTeacher,
            [name]: value
        }
    }))
}
// login students
logStudent = async (e) => {
    e.preventDefault();
    const resp = await loginStudent(this.state.loginStudent)
    
    console.log('res', resp)
    this.setState({
        currentStudent: resp
    })
}

logHandleChangeStudent = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => ({
        loginStudent : {
            ...prevState.loginStudent,
            [name]: value
        }
    })) 
}

makeTeacher = async (e) => {
    e.preventDefault();
    if (this.state.registerTeacher.username !== "" && this.state.registerTeacher.password !== "") {
    const resp = await registerTeacher(this.state.registerTeacher)
    this.setState({
        currentTeacher: resp
    });

    this.props.history.push('/profile')
}
};

makeStudent = async (e) => {
    e.preventDefault();
    if (this.state.registerStudent.username !== "" && this.state.registerStudent.password !== "") {
    const resp = await registerStudent(this.state.registerStudent);
    this.setState({
        currentStudent: resp
    });
    this.props.history.push('/profile')
  }
};

postTeacherTime = async (data) => {
    data.preventDefault();
    await postTime(this.state.infoTeacher.time_availability, this.state.currentTeacher.id)
}

registerHandleChangeTeacher = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => ({
        registerTeacher : {
            ...prevState.registerTeacher,
            [name]: value
        }
    }))
}

registerHandleChangeStudent = (e) => {
  const {name, value} = e.target;
  this.setState(prevState => ({
      registerStudent : {
          ...prevState.registerStudent,
          [name]: value
      }
  }))
}

updateTeacher = async (e) => {
    e.preventDefault();
    await updateTeacher(this.state.infoTeacher, this.state.currentTeacher.id)
}

updateStudent = async (e) => {
  e.preventDefault();
  await updateStudent(this.state.infoStudent, this.state.currentStudent.id)
}

componentDidMount = () => {
    this.handleVerifyTeacher();
    this.getTeach();
    this.getTime();
}

render(){

    return(
      <div className='app'>
        <Header type={this.state.type}
        currentTeacher={this.state.currentTeacher}
        currentStudent={this.state.currentStudent}
        handleLogout={this.handleLogout}
        />
        <div className='mainContainer'>
        <Switch>
            <Route exact path='/' render={() => (
              <>
              <Home 
              handleClickType={this.handleClickType}/>
              </>
              )} />

              {/* Register */}
                <Route path='/register' render={(props) => (
                    <Register {...props}
                    registerHandleChangeTeacher={this.registerHandleChangeTeacher}
                    registerHandleChangeStudent={this.registerHandleChangeStudent}
                    registerTeacher={this.state.registerTeacher}
                    registerStudent={this.state.registerStudent}
                    makeTeacher={this.makeTeacher}
                    makeStudent={this.makeStudent}
                    type={this.state.type}
                    />
                    )} />
                {/* Map through teachers */}
                <Route path='/teachers' render={(props) => (
                <Teachers {...props} 
                    allTeachers={this.state.teachers}
                    />)}
                />

                {/* Render login paths */}

                {this.state.type === 'isTeacher' ? 
                <Route path='/login' render={(props) => (
                  <Login {...props}
                  loginTeacher={this.state.loginTeacher} 
                  loginHandleChangeTeacher={this.loginHandleChangeTeacher}
                  logTeacher={this.logTeacher}
                  currentTeacher={this.state.currentTeacher}
                  type={this.state.type}
                  />)} 
              /> 
               : null } 

                {this.state.type === 'isStudent' ? 
                  <Route path='/login' render={(props) => (
                    <Login {...props}
                    loginStudent={this.state.loginStudent} 
                    logHandleChangeStudent={this.logHandleChangeStudent}
                    logStudent={this.logStudent}
                    currentStudent={this.state.currentStudent}
                    type={this.state.type}
                    />)} 
                /> : null }

                {/* Render profile paths */}

                {this.state.currentTeacher  ? 
                <Route path='/profile' render={() => (
                  
                  <Profile 
                  currentTeacher={this.state.currentTeacher}
                  infoTeacher={this.state.infoTeacher}
                  infoHandleChangeTeacher={this.infoHandleChangeTeacher}
                  postTeacherTime={this.postTeacherTime}
                  updateTeacher={this.updateTeacher}
                  times={this.state.teacherTimes}
                  deleteTeacher={this.deleteTeacher}
                  handleLogout={this.handleLogout}
                  />
              )} /> : null }

                {this.state.currentStudent  ? 
                  <Route path='/profile' render={() => (

                    <Profile 
                    currentStudent={this.state.currentStudent}
                    infoStudent={this.state.infoStudent}
                    infoHandleChangeStudent={this.infoHandleChangeStudent}
                    updateStudent={this.updateStudent}
                    deleteStudent={this.deleteStudent}
                    handleLogout={this.handleLogout}
                  />
              )} /> : null }
                
                <Route path='/studentprofile' render={() => (
                    <Profile 
                    currentStudent={this.state.currentStudent}
                    infoStudent={this.state.infoStudent}
                    infoHCS={this.infoHCS}                        
                    />
                )} />
                
            </Switch>
        </div>
        <Footer />
      </div>
    )
}
}

export default withRouter(App);
