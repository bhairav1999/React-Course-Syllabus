import React, { Component } from 'react'
import counter from './counter'
export class ErrorBoundries extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:null,
         errorinfo:null
      }
    }
    componentDidCatch(error,errorinfo){
        // parent child reletion ....sathi call 
        this.setState({
            error:error,
            errorinfo:errorinfo
        })
    }


  render() {
    if (this.state.errorinfo) {
        return (
            <div>
              <h2>an error</h2>
              <details>
                {this.state.error && this.error.toString()}
                <br />
                {this.state.errorinfo.ComponentStack}
              </details>
            </div>
          )  
    }
    
  }
}

export default ErrorBoundries
