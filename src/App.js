import React,{ Component } from 'react';
import Goku from './Goku';
import Vegeta from './Vegeta';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       vegeta :100,
       goku : 100
    }
  }
  render(){
    return(
      <div className='container text-center'>
        <h1>Goku vs Vegeta</h1>
        <hr/>

        <div className='row'>
        <Vegeta name="Vegeta" life={this.state.vegeta}/>
        <Goku name="Goku" life={this.state.goku}/>
        </div>
      </div>
    );
  }
}

export default App;
