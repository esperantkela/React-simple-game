import React, { Component } from 'react'
import vegeta from './vegeta.png'
import countHits from './CountHits';

export class Vegeta extends Component {

  render() {
    const {name, addOneHit, hocState} = this.props;
    return (
      <div className='col'>
        <img src={vegeta} alt="vegeta" style={{ height:400}} /> <br/>
        <button onClick={ addOneHit} className='btn btn-primary m-3'>{name} frappe</button>

        <table className='table table-striped'>
            <thead>
            <tr>
                <th scope='col'>{hocState.hits <=1 ? 'Coup' : 'Coups' }</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{hocState.hits}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default countHits(Vegeta)