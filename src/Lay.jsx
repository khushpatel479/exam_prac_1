import React from 'react'
import  {Link} from 'react-router-dom'

const Lay = () => {
  return (
<>
    <nav>
        <Link to="/form"><li>FORM</li></Link>
        <Link to="/data"><li>DATA</li></Link>
        <Link to="/data2"><li> Data2</li></Link>
    </nav>
</>
  )
}

export default Lay