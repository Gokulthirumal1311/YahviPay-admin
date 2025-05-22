import React from 'react'
import useFetch from '../hooks/useFetch'

export const Ex = () => {
    const  data=useFetch('/Exjson.json')
     return (
    <div>
        { data.length ? data.map((item,index)=> (
            <div key={index} className="border border-black p-4 m-4 rounded-lg shadow-sm">
            {Object.entries(item).map(([key,value])=> (
              <div>
              <p key={key}><strong>{key}</strong>: {value} </p>
              {console.log(key,value)}
              </div>
              
        ))}
            </div>
      )): 's'}
    </div>
  )
}
