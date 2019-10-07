import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { getTeachers, getTimes, loginTeacher, postTime, registerTeacher, updateTeacher, verifyTeacher } from '../../services/api-helper.js';
import './main.css';
import Form from '../Form/Form';
import Teachers from '../Teachers/Teachers'
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Proptypes from 'prop-types';
// data render from backend 
class Main extends React.Component {

    state = {
        currentTeacher: '',
        infoT : {
            name: '',
            years_of_experience : '',
            time_availability : ''
        },
        logTeacher : {
            username: '',
            password: ''
        },
        regTeacher : {
            username: '',
            password: ''
        },
        teachers: '',
        teacherTimes : ''
        

    }
    handleVerify = async () => {
        const currentTeacher = await verifyTeacher();
        this.setState({ currentTeacher })
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
        const {name, value} = e.target;
        this.setState(prevState => ({
            infoT : {
                ...prevState.infoT,
                [name]: value
            }
        }))
    }

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

    makeTeacher = async (data) => {
        data.preventDefault();
        const resp = await registerTeacher(this.state.regTeacher)
        this.setState({
            currentTeacher: resp
        });

        this.props.history.push('/profile')
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
        await updateTeacher(this.state.infoT)
    }

    componentDidMount = () => {
        this.handleVerify();
        this.getTeach();
        // this.getTime();
    }

    render(){
        const { match, location, history } = this.props

        console.log('teacher', this.state.currentTeacher)
        console.log('info', this.state.infoT)


        return(
            <div className='mainContainer'>
                <Switch>
                Main
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
                        />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);