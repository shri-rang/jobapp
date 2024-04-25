
import { useState, useEffect } from "react";
import axios from "axios";



 const useFetch  = (endpoint, query) => {

  const [data, setData] = useState([]);
  const [isLoading ,setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  
 
  const axios = require('axios');

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '7819533005mshb3d588ffeb56addp10a960jsnd69891c51208',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
      ...query
    }
    
  };
  
  
   const fetchData =  async()=> {
    
     setLoading(true);
     try {
       const  response = await axios.request(options)
      
        setData(response.data.data);
    
         setLoading(false)
     } catch (error) {
      setError(error);
        console.log(error);
       alert('There is an error ${error}')    
      

     } finally{
      setLoading(false);
     }
      
 

   }
 


    useEffect( ()=>{
       
       fetchData();

    },[] )

    const refetch = () => {
      
       setLoading(true);
       fetchData();

        
    }

//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }


  return { data, isLoading, error, refetch };  
 
 }

 export default useFetch;