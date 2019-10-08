import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './main.css';
import Form from '../Form/Form';
import Teachers from '../Teachers/Teachers'
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { deleteTeacher,
         getTeachers, 
         getTimes, 
         loginTeacher,
         loginStudent,
         postTime, 
         registerTeacher,
         registerStudent, 
         updateTeacher, 
         verifyTeacher } from '../../services/api-helper.js';

// data render from backend 
class Main extends React.Component {

    state = {
        currentStudent: '',
        currentTeacher: '',
        infoT : {
            name: '',
            years_of_experience : 0,
            time_availability : ''
        },
        infoS : {
            name: '',
            cohort: '',
            program: '',
        },
        isStudent: false,
        isTeacher: false,
        logTeacher : {
            username: '',
            password: ''
        },
        regTeacher : {
            username: '',
            password: ''
        },
        teachers: '',
        teacherTimes : '',
        logStudent : {
            username: '',
            password: ''
        },
        regStudent : {
            username: '',
            password: ''
        },
        

    }

    deleteT = async () => {
        localStorage.removeItem('authToken')
        await deleteTeacher(this.state.currentTeacher.id);
        this.setState({
            currentTeacher : ''
        })
    }

    handleClickType = (e) => {
        if (e.target.name === 'student'){
            this.setState({
                isStudent: true
            })
        }else if (e.target.name === 'teacher'){
            this.setState({
                isTeacher: true
            })
        }
    }

    handleLogout = () => {
        localStorage.removeItem("authToken");
        this.setState({
          currentTeacher: null
        })
        this.props.history.push('/')
      };

    handleVerify = async () => {
        const currentTeacher = await verifyTeacher();
        if(currentTeacher){
        this.setState({ currentTeacher })
        }
    }

    getTeach = async () => {
        const teachers = await getTeachers()
        this.setState({
            teachers: teachers
        });
    };

    getTime = async (data) => {
        const times = await getTimes(data, this.state.currentUser.id)
        this.setState({
            teacherTimes: times
        })
    }

    infoHCT = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let {name, value} = e.target;
        if (name === 'years_of_experience') {
            value = parseInt(value);
        }
        this.setState(prevState => ({
            infoT : {
                ...prevState.infoT,
                [name]: value
            }
        }))
    }
    // login teachers
    loginT = async (e) => {
        e.preventDefault();
        const resp = await loginTeacher(this.state.logTeacher)
        console.log('res', resp)
        this.setState({
            currentTeacher: resp
        })
    }

    logHC = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => ({
            logTeacher : {
                ...prevState.logTeacher,
                [name]: value
            }
        }))
    }
    // login students
    loginS = async (e) => {
        e.preventDefault();
        const resp = await loginStudent(this.state.logStudent)
        
        console.log('res', resp)
        this.setState({
            currentStudent: resp
        })
    }

    logHCS = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => ({
            logStudent : {
                ...prevState.logStudent,
                [name]: value
            }
        }))
    }

    makeTeacher = async (e) => {
        e.preventDefault();

        if (this.state.regTeacher.username !== "" && this.state.regTeacher.password !== "") {

        const resp = await registerTeacher(this.state.regTeacher)
        this.setState({
            currentTeacher: resp
        });

        this.props.history.push('/profile')
    }
    };

    makeStudent = async (e) => {
        e.preventDefault();
        const resp = await registerStudent(this.state.regStudent);
        this.setState({
            currentStudent: resp
        });
    };
    

    postT = async (data) => {
        data.preventDefault();
        await postTime(this.state.infoT.time_availability)
    }

    regHC = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => ({
            regTeacher : {
                ...prevState.regTeacher,
                [name]: value
            }
        }))
    }

    updateT = async (e) => {
        e.preventDefault();
        await updateTeacher(this.state.infoT, this.state.currentTeacher.id)
    }

    componentDidMount = () => {
        this.handleVerify();
        this.getTeach();
        // this.getTime();
    }

    render(){
        console.log('teacher', this.state.currentTeacher)
        console.log('info', this.state.infoT)


        return(
            <div className='mainContainer'>
                <button name='student' onClick={this.handleClickType}>Student</button>
                <button name='teacher' onClick={this.handleClickType}>Teacher</button>

                <Switch>
                    <Route path='/register' render={(props) => (
                        <Form {...props}
                        // regHCuser={this.regHCuser}
                        // regHCpass={this.regHCpass}
                        regHC={this.regHC}
                        regTeacher={this.state.regTeacher}
                        makeTeacher={this.makeTeacher}
                        />
                        )} />

                    <Route path='/teachers' render={(props) => (
                    <Teachers {...props} 
                        allTeachers={this.state.teachers}
                        />)}
                    />
                    <Route path='/login' render={(props) => (
                        <Login {...props}
                        logTeacher={this.state.logTeacher} 
                        logHC={this.logHC}
                        loginT={this.loginT}
                        currentTeacher={this.state.currentTeacher}
                        />)} 
                    />
                    <Route path='/profile' render={() => (
                        <Profile 
                        currentTeacher={this.state.currentTeacher}
                        infoT={this.state.infoT}
                        infoHCT={this.infoHCT}
                        postT={this.postT}
                        updateT={this.updateT}
                        times={this.state.teacherTimes}
                        deleteT={this.deleteT}
                        handleLogout={this.handleLogout}
                        />
                    )} />
                    <Route path='/studentprofile' render={() => (
                        <Profile 
                        currentStudent={this.state.currentStudent}
                        infoS={this.state.infoS}
                        infoHCS={this.infoHCS}                        
                        />
                    )} />
                    <Route path='/teacherprofile' render={() => (
                        <Profile 
                        currentTeacher={this.state.currentTeacher}
                        infoT={this.state.infoT}
                        infoHCT={this.infoHCT}
                        postT={this.postT}
                        updateT={this.updateT}
                        times={this.state.teacherTimes}
                        />
                    )} />
                    <Route path='/teacherlogin' render={(props) => (
                        <Login {...props}
                        logStudent={this.state.logStudent} 
                        logHC={this.logHC}
                        loginT={this.loginT}
                        />)} 
                    />
                    <Route path='/studentlogin' render={(props) => (
                        <Login {...props}
                        logTeacher={this.state.logTeacher} 
                        logHCS={this.logHCS}
                        loginS={this.loginS}
                        />)} 
                    />
                    
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);