import React from 'react'
import "./Loading.css";
function Loading() {
  return (
    <div className="loading-main d-flex justify-content-center align-items-center ">
      <div >
      <div class="loading-spinner">
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    </div>
  );
}

export default Loading

// const [loading, setLoading] = useState(false);

{/* 
<> 
  {loading && <Loading />}
</>  
*/}