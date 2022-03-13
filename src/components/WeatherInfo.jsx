import React ,{useEffect, useState,useContext} from 'react';
import axios from 'axios';
import "../App.css"
import { AuthContext } from '../context/AuthContext';



const initState={
    query:"",
    data:[]
}

function WeatherInfo() {
//    const [quesry,setQuery] = useState("")
//    cosnt [data,setData] = useState([]);
//we are passing initSttae as object in useState so that we dont have to write again and again
///[....state] spread operation in setState means its adding all input that we pass.
//optional chaining(?)---is used when the value in object doesnot exist so instead of error it shows undefined

   const [state,setState] = useState(initState);

   const {token}=useContext(AuthContext)
   const handleChange = (e)=>{
       console.log(e.target.value)
       setState({...state,query:e.target.value})
   }
   //useEffect(callback,dependency array)
   useEffect(()=>{
       handleSearch()
   },[])

   const handleSearch = (e)=>{
    axios({
        method:"get",
        baseURL:"http://api.weatherapi.com/v1",
        url:"/current.json",
        params:{
            key:"dbbab5a32ab24868b2e92549220403",
            q:state.query || "Delhi"
        }
    }).then(res=>setState({...state,data:res.data})).catch(err=>console.log(err))

   }
   console.log(state.data,token,"state")
  return (

    <div className='container' style={{width: "25%",height:"500px",backgroundColor:"whitesmoke",margin:"auto",padding:"20px",lineHeight:"2"}}>

    <h1>Weather Forecast</h1>
     <input type="text" placeholder='Enter City' value={state.query} onChange = {handleChange}/>
     <button onClick={handleSearch}>Search</button>
     <div className='desc'>
     {state?.data?.location && 
     <h2>{state.data?.location?.name}</h2>}
     {state?.data?.current && 
     <>
     <h5>{state?.data?.current?.condition?.text}</h5>       
      <img src={state?.data.current?.condition?.icon} alt="weather icon"/>      
      </>
      }
      </div>
    </div>
    
  )
}

export default WeatherInfo

// useState--hooks-----let we have a state say const [state,setState]=useState[""]---
