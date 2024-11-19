import React, { useState } from 'react'
import { setdata,getdata } from './local';
import Lay from './Lay';
const Form = () => {

  const[name , setname] = useState("")
  const[email , setemail] = useState("");
  const[pass , setpass] = useState("");
const[gender,setgender] = useState("")
  const[ename , setename] = useState("")
  const[eemail , seteemail] = useState("")
  const[epass , setepass] = useState("")
function onname(e)
{

  setname(e.target.value)
  let val = e.target.value
  console.log(val)  
  if(val.length==0)
  {
    setename(<p style={{color:"red"}}>ENTER THE NAME PLEASE</p>)
  }
  if(val.length>10)
  {
    setename(<p style={{color:"red"}}>NAME IS GREATER</p>)
  }
  if(val.length>0 && val.length<10)
  {
    setename(<p style={{color:"green"}}>NAME IS CORRECT</p>)
  }
}
function onemail(e)
{
    let val = e.target.value
    setemail(e.target.value)
    let vb = new RegExp("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/")
    if(vb.test(val)==true)
    {
      seteemail(<p style={{color:"green"}}>EMAIL IS CORRECT</p>)
    }
    else
    {
      seteemail(<p style={{color:"red"}}>EMAIL IS NOT CORRECT</p>)
    }
}
function onpass(e)
{
  let val = e.target.value
  setpass(e.target.value)
  if(val.length==0)
  {
    setepass(<p style={{color:"red"}}>PASSWORD IS EMPTY</p>)
  }
  if(val.length>10)
  {
    setepass(<p style={{color:"red"}}>PASSWORD IS GREATER</p>)
  } 
  if(val.length>0 && val.length<10)
  {
    setepass(<p style={{color:"green"}}>PASSWORD IS CORRECT</p>)
  }
}
function sub()
{
  setdata(name,email,pass)
}

function male(e)
{
  let val= e.target.value
  setgender(val)
}
function female(e)
{
  let val = e.target.value
  setgender(val)
}
  return (
    <>
    <Lay/>
        <div className='frm'>
        <form>
    ENTER THE NAME : <input type='text' onChange={onname}  placeholder='ENTER THE NAME'/>
    <br/>{ename}
    ENTER THE EMAIL : <input type='text' onChange={onemail} placeholder='ENTER THE EMAIL'/>
    <br/>{eemail}
    ENTER THE PASSWORD :   <input type='text' onChange={onpass} placeholder='ENTER THE PASSWORD'/>
    <br/>{epass}
    MALE <input type='radio' value="male" name='male' checked={gender==="male"} onChange={male} />
    <br/>
    FEMALE <input type='radio' value="female"  name="female" checked={gender==="female"} onChange={female}/>

 <input type='submit' onClick={()=>sub()} value="SUBMIT"/>
</form>
        </div>

    </>
  )
}

export default Form