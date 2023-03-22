import React,{useState} from 'react'

const HigherOrderComponent = (OriginalComponent) => {

const Newcomp =()=>{

    const [count , setcount]=useState(0)
const handleclick=()=>{
    setcount(count+1)
}

return <OriginalComponent count={count} handleclick={handleclick}/>



}

// return the new comp
return <Newcomp/>

}

export default HigherOrderComponent
