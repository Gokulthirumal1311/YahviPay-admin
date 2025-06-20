import React from 'react';
import './CustomScrollbar.css'; 
function scroll(count){
    return [...Array(count)].map((_, i)=>(
        <p key={i} className='mb-2'>Item:{i+1}</p>
    ));
}

export const SmallScrollBar = () => {
  return (
    <div className="h-60 w-72 overflow-y-scroll p-4 border rounded custom-scroll">
       {scroll(30)}
    </div>
  );
};