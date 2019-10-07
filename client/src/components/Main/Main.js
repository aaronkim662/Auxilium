import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getTeachers, registerTeacher } from '../../services/api-helper.js';
import './main.css';
import Form from '../Form/Form';

class Main extends React.Component {
    constructor(props){
        super()
    }
    state = {
        teacher: '',
        regTeacher : {
            username: '',
            password: ''
        },

    }
    getTeach = async () => {
        const teachers = await getTeachers()
        this.setState({
            teachers: teachers
        });
    };

    makeTeacher = async (data) => {
        data.preventDefault();
        const resp = await registerTeacher(this.state.regTeacher)
        this.setState({
            teacher: resp
        });
    };

    regHCuser = (data) => {
        this.setState(prevState => ({
            
            regTeacher : {
                ...prevState.regTeacher,
                username: data.target.value
            }
        }))
    }
    regHCpass = (data) => {
        this.setState(prevState => ({
            regTeacher : {
            ...prevState.regTeacher,
                password: data.target.value
            }
        }))
    }
   

    componentDidMount = () => {
        this.getTeach();
    }

    render(){
        console.log('teacher', this.state.teacher)
        console.log('test', this.state.regTeacher.username)
        console.log('test', this.state.regTeacher.password)

        return(
            <div className='mainContainer'>
                <Switch>
                Main
                    <Route path='/login' render={(props) => (
                        <Form {...props}
                        regHCuser={this.regHCuser}
                        regHCpass={this.regHCpass}
                        regTeacher={this.state.regTeacher}
                        makeTeacher={this.makeTeacher}
                        />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default Main;