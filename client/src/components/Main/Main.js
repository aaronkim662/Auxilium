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
        teachers : ''
    }
    getTeach = async () => {
        const teachers = await getTeachers()
        this.setState({
            teachers: teachers
        })
    }

    componentDidMount = () => {
        this.getTeach();
    }
    render(){
        console.log('teacher', this.state.teachers)
        return(
            <div className='mainContainer'>
                <Switch>
                Main
                    <Route exact path='/'/>
                    <Route path='/login' render={() => (
                        <Form 
                        />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default Main;