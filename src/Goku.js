import React, { Component } from 'react'
import goku from './goku.png'
import countHits from './CountHits';

export class Goku extends Component {

   
  render() {
    const {name, addOneHit, hocState, life} = this.props;

    const lifeValue = life>0 ? `${life}%` : 'Vous êtes mort';
    return (
      <div className='col'>
        <img src={goku} alt="goku" style={{ height:400}} /> <br/>
        <button onClick={addOneHit} className='btn btn-primary m-3'>{name} frappe</button>

        <table className='table table-striped'>
            <thead>
            <tr>
                <th scope='col'>{hocState.hits <=1 ? 'Coup' : 'Coups' }</th>
                <th scope='col'>Vie</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{hocState.hits}</td>
                    <td>{lifeValue}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default countHits(Goku) 