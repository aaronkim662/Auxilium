import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  state = {
    auth : {
      username : '',
      password : '',
    },

  }
  render (){
    return (
      <React.Fragment>
      <Header />
      <Main username={this.state.auth.username}
            password={this.state.auth.password}/>  
      <Footer />
      </React.Fragment>

    )
  }
}

export default App;
