import React, { useEffect, useState } from 'react'
// import store from './data' 
import $, { data } from "jquery"
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
import store from './data'
const Ajaxdata = () => 
{
  const[data1,setdata1] = useState([])
  useEffect(()=>
{
    $.ajax({
        url:"./data.js",
        method:"GET",
        dataType:"json",
        success:function(data)
        {
            setdata1(data)
        },
        error:function(e)
        {
            console.log(e)
        }
    })
})
return(
    <>
      <table style={{border:"1px,solid,black"}}>

      <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>

      </tr>
      </thead>
   {store.map((item)=>
   {
    return (<>
     
            <tr style={{border:"1px,solid,black"}}>
                <td>{item.id}</td>
            <td>{item.name}</td>
            </tr>
                    
    </>)
   })}
   </table>
    </>
)

}

export default Ajaxdata