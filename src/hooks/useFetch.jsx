import React, { useEffect, useState} from 'react'

function useFetch(url){
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const [response,setResponse]=useState(null);
    useEffect(()=>{
        async function fetchData(){
            try{
                const res=await fetch(url);
                setResponse(res)
                // console.log(response);
                if (res.ok){
                    const jsonData=await res.json();
                    setData(jsonData);
                }
                else{
                    setData(null);
                }
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url]);
    return {data,error,loading,response};
}
export default useFetch;

