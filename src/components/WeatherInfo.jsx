import React ,{useEffect, useState} from 'react';
import axios from 'axios';


const initState={
    query:"",
    data:[]
}

function WeatherInfo() {
//    const [quesry,setQuery] = useState("")
//    cosnt [data,setData] = useState([]);
   const [state,setState] = useState(initState);
   const handleChange = (e)=>{
       console.log(e.target.value)
       setState({...state,query:e.target.value})
   }
   useEffect(()=>{
       handleSearch()
   },[])

   const handleSearch = (e)=>{
    axios({
        method:"get",
        baseURL:"http://api.weatherapi.com/v1",
        url:"/current.json",
        params:{
            key:"Api_key",
            q:state.query || "Delhi"
        }
    }).then(res=>setState({...state,data:res.data})).catch(err=>console.log(err))

   }
   console.log(state.data,"state")
  return (
    <>
    <h1>Weather Information</h1>
     <input type="text" placeholder='Enter City' value={state.query} onChange = {handleChange}/>
     <button onClick={handleSearch}>Search</button>
     {state?.data?.location && 
     <h2>{state.data?.location?.name}</h2>}
     {state?.data?.current && <>
     <h5>{state?.data?.current?.condition?.text}</h5>
       
      <img src={state?.data.current?.condition?.icon} alt="weather icon"/>
      </>
      }
    </>
  )
}

export default WeatherInfo

// useState--hooks-----let we have a state say const [state,setState]=useState[""]---
