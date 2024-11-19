export function setdata(uname,pass)
{
    localStorage.setItem(`uname1_${uname}`,JSON.stringify({pass}))
    
}

export function getdata(uname)
{
    let vb = localStorage.getItem(`uname1_${uname}`)
    return vb ?  JSON.parse(vb):null
}