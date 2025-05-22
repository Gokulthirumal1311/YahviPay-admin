import React, { useEffect, useState } from 'react'


function useFetch(url){
    const[data,setData]=useState({});
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            console.log('Data:', data);
        })
        .catch(console.error);

    },[url]);
    return data;

}


export default useFetch;
