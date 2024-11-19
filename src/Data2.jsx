import React, { useEffect, useState } from "react";
import $ from "jquery"
// import book from "./books";
const Data2 = ()=>
{
    const [data1,setdata1] = useState([])

    useEffect(()=>{
   
    $.ajax({
        url:"/books.json",
        method:"GET",
        success:function(data)
        {
            setdata1(data)
        }

    })
})


    return(<>
    {data1.map((item)=>
    {
        return(
            <>
                <h1>{item.id}</h1>
            </>
        )
    })}
    </>)
}

export default Data2


