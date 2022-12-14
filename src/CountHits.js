import React, { Component } from 'react'

const countHits = (WrappedComponent)=>{
    class CountHits extends Component {

        state = {
            hits:0
        }
    
        addOne = ()=>{
            this.setState({
                hits: this.state.hits + 1
            })
        }

        componentDidUpdate(prevProps, prevState) {
            if(this.state !== prevState){
                const compName = WrappedComponent.name
                this.props.reduceHandler(compName)
            }
        }
    
        render() {
          return <WrappedComponent addOneHit={this.addOne} hocState={this.state} {...this.props}/>
        }
       
      }
      return CountHits;
}


export default  countHits
