import React, { Component } from 'react'
import goku from './goku.png'

export class Goku extends Component {

    state = {
        hits:0
    }

    addOne = ()=>{
        this.setState({
            hits: this.state.hits + 1
        })
    }

  render() {
    return (
      <div className='col'>
        <img src={goku} alt="goku" style={{ height:400}} /> <br/>
        <button onClick={this.addOne} className='btn btn-primary m-3'>Frapper</button>

        <table className='table table-striped'>
            <thead>
            <tr>
                <th scope='col'>{this.state.hits <=1 ? 'Coup' : 'Coups' }</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.hits}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Goku