import React from 'react';
import './App.css';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Appointment from './components/Appointment/Appointment';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Teachers from './components/Teachers/Teachers';
import { deleteTeacher,
         deleteStudent,
         deleteTimes,
         getAppointments, 
         getTeachers, 
         getTimes, 
         loginTeacher,
         loginStudent,
         postAppointments,
         postTime, 
         registerTeacher,
         registerStudent, 
         updateStudent,
         updateTeacher,
         verifyStudent, 
         verifyTeacher } from './services/api-helper.js';

class App extends React.Component {
  state = {
    appointments: '',
    currentStudent: '',
    currentTeacher: '',
    infoTeacher : {
        email: '',
        name: '',
        years_of_experience : '',
        time_availability : '',
    },
    infoStudent : {
        email: '',
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
    listStudent: [],
    oneTeacher: [],
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
}

deleteStudent = async () => {
  localStorage.removeItem('authToken')
  await deleteStudent(this.state.currentStudent.id);
  this.setState({
      currentStudent : ''
  });
  this.props.history.push('/');
};

deleteTeacher = async () => {
    localStorage.removeItem('authToken')
    await deleteTeacher(this.state.currentTeacher.id);
    this.setState({
        currentTeacher : ''
    });
    this.props.history.push('/');
};

deleteTime = async (time_id) => {
  await deleteTimes(this.state.currentTeacher.id, time_id);
  await this.getTime();
  this.props.history.push('/info');
}

getAllTeachers = async () => {
  const teachers = await getTeachers()
  this.setState({
      teachers: teachers
  });
};

getStudentAppointments = async () => {
  const appointments = await getAppointments(this.state.currentStudent.id)
  this.setState({
    appointments
  })
};

getTime = async () => {
  const times = await getTimes(this.state.currentTeacher.id)
  this.setState({
      teacherTimes: times
  });
};

handleClickType = (e) => {
    if (e.target.name === 'student'){
        this.setState({
            type: 'isStudent'
        });
    } else if(e.target.name === 'teacher'){
      this.setState({
        type: 'isTeacher'
      });
    };
    this.props.history.push('/login')
};

handleLogout = () => {
    localStorage.removeItem("authToken");
    if (this.state.currentTeacher){
    this.setState({
      currentTeacher: null
    });
  }else if (this.state.currentStudent){
    this.setState({
      currentStudent: null
    });
  };
    this.props.history.push('/')
  };


handleVerifyTeacher = async () => {
    if(this.state.currentTeacher === '' && this.state.currentStudent === ''){
      const currentTeacher = await verifyTeacher();
      this.setState({ currentTeacher })
    };
};

handleVerifyStudent = async () => {
  if(this.state.currentTeacher === '' && this.state.currentStudent === ''){
    const currentStudent = await verifyStudent();
    this.setState({ currentStudent })
  };
};

handleVerify = async () => {
  const role = localStorage.getItem('role');
  if (role === 'student') {
      await this.handleVerifyStudent()
  } else if (role === 'teacher') {
      await this.handleVerifyTeacher();
  } else {
      return null;
  }
}

infoHandleChangeStudent = (e) => {
  e.preventDefault();
  e.stopPropagation();
  let {name, value} = e.target;
  if (name === 'years_of_experience') {
      value = parseInt(value);
  };
  this.setState(prevState => ({
      infoStudent : {
          ...prevState.infoStudent,
          [name]: value
      }
  }));
};

infoHandleChangeTeacher = (e) => {
    e.preventDefault();
    let {name, value} = e.target;
    if (name === 'years_of_experience') {
        value = parseInt(value);
    };
    this.setState(prevState => ({
        infoTeacher : {
            ...prevState.infoTeacher,
            [name]: value
        }
    }));
};
// login teachers
logTeacher = async (e) => {
    e.preventDefault();
    const resp = await loginTeacher(this.state.loginTeacher)
    this.setState({
        currentTeacher: resp
    });
    this.props.history.push('/info')

};

loginHandleChangeTeacher = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => ({
        loginTeacher : {
            ...prevState.loginTeacher,
            [name]: value
        }
    }));
};
// login students
logStudent = async (e) => {
    e.preventDefault();
    const resp = await loginStudent(this.state.loginStudent)
    this.setState({
        currentStudent: resp
    });
    this.props.history.push('/info')

};

logHandleChangeStudent = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => ({
        loginStudent : {
            ...prevState.loginStudent,
            [name]: value
        }
    })) ;
};

makeTeacher = async (e) => {
    e.preventDefault();
    if (this.state.registerTeacher.username !== "" && this.state.registerTeacher.password !== "") {
    const resp = await registerTeacher(this.state.registerTeacher)
    this.setState({
        currentTeacher: resp
    });
    await this.handleVerify();
    this.props.history.push('/info')
  };
};

makeStudent = async (e) => {
    e.preventDefault();
    if (this.state.registerStudent.username !== "" && this.state.registerStudent.password !== "") {
    const resp = await registerStudent(this.state.registerStudent);
    this.setState({
        currentStudent: resp,
        redirect: true
    });
    await this.handleVerify();
    // this.props.history.push('/info')
  };
};

postTeacherTime = async (data) => {
    data.preventDefault();
    await postTime(this.state.infoTeacher.time_availability, this.state.currentTeacher.id)
    await this.getTime();
    this.props.history.push('/info')
};

postStudentAppointments = async (teacher, time) => {
    if(time === undefined){
      time = teacher.availabilities[0].time
    }
    const appointments = await postAppointments(this.state.currentStudent.id, teacher.id, {time: time})
    await this.getStudentAppointments();
    this.setState({
      appointments: [...this.state.appointments, appointments]
    });
    await this.getStudentAppointments();

    this.props.history.push('/appointment')
};

registerHandleChangeTeacher = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => ({
        registerTeacher : {
            ...prevState.registerTeacher,
            [name]: value
        }
    }));
    
};

registerHandleChangeStudent = (e) => {
  const {name, value} = e.target;
  this.setState(prevState => ({
      registerStudent : {
          ...prevState.registerStudent,
          [name]: value
      }
  }));
};

updateTeacher = async (e) => {
    e.preventDefault();
    this.props.history.push('/info');
    const infoTeacher = this.state.infoTeacher
    Object.keys(infoTeacher).forEach((ele) => !infoTeacher[ele] ? delete infoTeacher[ele] : null);
    await updateTeacher(infoTeacher, this.state.currentTeacher.id);
    const currentTeacher = await verifyTeacher();
    this.setState({ currentTeacher })
    await this.getAllTeachers();
};

updateStudent = async (e) => {
  e.preventDefault();
  this.props.history.push('/info')

  const infoStudent = this.state.infoStudent
  Object.keys(infoStudent).forEach(ele => !infoStudent[ele] ? delete infoStudent[ele] : null);
  await updateStudent(this.state.infoStudent, this.state.currentStudent.id);
  const currentStudent = await verifyStudent();
  this.setState({ currentStudent })
};


componentDidMount = async () => {
  await this.getAllTeachers();
  await this.handleVerify();
  await this.getTime();
  if (this.state.currentStudent){
    await this.getStudentAppointments()
    }
};

render(){
  let redirect = this.state.redirect && <Redirect to={"/info"}/>
    return(
      <div className='app'>
        {redirect}
        <Header type={this.state.type}
        currentTeacher={this.state.currentTeacher}
        currentStudent={this.state.currentStudent}
        handleLogout={this.handleLogout}
        getAllTeachers={this.getAllTeachers}
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
                    currentStudent={this.state.currentStudent}
                    postStudentAppointments={this.postStudentAppointments}
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
                  appointments={this.state.appointments}
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
                    appointments={this.state.appointments}
                    getStudentAppointments={this.getStudentAppointments}
                  />
              )} /> : null }
              {this.state.currentTeacher ? 
              <Route path='/info' render={() => (
                <Info 
                currentTeacher={this.state.currentTeacher}
                teacherTimes={this.state.teacherTimes}
                deleteTime={this.deleteTime}
                />
              )} /> : null }

              {this.state.currentStudent ? 
              <Route path='/info' render={() => (
                <Info 
                currentStudent={this.state.currentStudent}
                />
              )} /> : null }
              
                <Route path='/appointment' render={() => (
                  <Appointment 
                  appointments={this.state.appointments}
                  oneTeacher = {this.state.oneTeacher}/>
                )} /> : ''
                
            </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
