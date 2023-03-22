// import React, { Component } from 'react'

// export class Revision_1 extends Component {
//   render() {
//     return (
//       <div>
//         <hi>hiiiii</hi>
//       </div>
//     )
//   }
// }

// export default Revision_1



// --------------------fun

// import React from 'react'

// function Revision_1() {
//   return (
//     <div>
//       hello fun
//     </div>
//   )
// }

// export default Revision_1

// import React from 'react'

// const Revision_1 =function(){
//     return(
//         <div>fiiii</div>
//     )
// }
// export default Revision_1


// import React from 'react'

// const Revision_1 =()=>{
//     return(
//         <div>fiiii</div>
//     )
// }
// export default Revision_1

// import React from 'react'

// const Revision_1 =()=>(
//     <div>hiiii</div>
// )
    

// export default Revision_1


// import React from 'react'

// function Revision_1() {
//   return (
//     <>
//         hiiiii
//     </>
//   )
// }

// export default Revision_1




//----------------------------jsx

// import React, { Component } from 'react'

// export class Revision_1 extends Component {
   
//   render() {
//     var a=5
//     return (
//       <div>
//         <h1>hiiii</h1>
//         <h2>{1+1}</h2>
//         <h3>{a>10 ? "a grteher tan":"a is less than"}</h3>
//       </div>
//     )
//   }
// }

// export default Revision_1



// ----------------propsin class

// import React, { Component } from 'react'

// export class Revision_1 extends Component {
//   render() {
//     const {name}=this.props
//     return (
//       <div>
//         <h1>hiii {name}</h1>
//       </div>
//     )
//   }
// }

// export default Revision_1



//---------------------

// import React from 'react'

// function Revision_1({name}) {
//   return (
//     <div>
//       <hi>hiiii {name}</hi>
//     </div>
//   )
// }

// export default Revision_1


//-----------------state--------------

import React, { Component } from 'react'

export class Revision_1 extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      msg:"mayur"
   }
 }
 changemsg(){
    this.setState({
        msg:"Bhairav"
    })
 }


  render() {
    return (
      <div>
        <h1>hiiii {this.state.msg}</h1>
        <button onClick={()=>{this.changemsg()}}>changevalue</button>
      </div>
    )
  }
}

export default Revision_1





