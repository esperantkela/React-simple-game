import React,{ Component } from 'react';
import Goku from './Goku';
import Vegeta from './Vegeta';

class App extends Component {
  render(){
    return(
      <div className='container text-center'>
        <h1>Goku vs Vegeta</h1>
        <hr/>

        <div className='row'>
        <Vegeta name="Vegeta"/>
        <Goku name="Goku"/>
        </div>
      </div>
    );
  }
}

export default App;
