import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


import {  Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    teacher: '',
    regTeacher : {
        username: '',
        password: ''
    },

}

  render (){
    return (
      <div className='app'>
      <Header />
      <Switch>
      <Main />
      </Switch>
      <Footer />
      </div>

    )
  }
}

export default App;
