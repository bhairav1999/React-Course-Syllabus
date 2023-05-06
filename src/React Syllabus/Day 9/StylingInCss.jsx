import React, { Component } from 'react'
import './StylingInCss.css'
export class StylingInCss extends Component {

    

    

  render() {
    const getdata={
        color:"red"
    }
    return (
      <div>
      {/* this is inline css */}
        <h1 style={{color:"green"}}>hello i am ram</h1>

        {/* this is internal css */}
        <h1 style={getdata}>hii i am raj</h1>


        {/*  using external css */}

       <h1 className='externaldata'>i am rahul</h1>


      </div>
    )
  }
}

export default StylingInCss
