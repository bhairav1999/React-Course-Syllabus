import axios from 'axios'
import React,{useState,useEffect} from 'react'

const LoginForm = () =>{
    const [mapdata,setData] = useState([])
    useEffect(() => {
   (
    async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(resp.data)
        setData(resp.data)
    }
   )()
    }, [])
    return (
<ul>
      {mapdata.map((item) =><h1> {item.title}</h1>)
      }
    </ul>
    )
}
export default LoginForm