import React, { useState } from 'react';
import Files1 from './Files1';
export const a=React.createContext([])

export default function IndexContext() {
    const [name,setname]=useState('');
    const[view,setview]=useState([]);
    
    function ok(event)
    {
        event.preventDefault();
        setview(names=>[...names,name]);
        setname('')
    }
  return (
    <div>
        <form onSubmit={ok}>
            <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
            <button type='submit' className='btn btn-pr'>Submit</button>
        </form>
        <a.Provider value={view}>
            <Files1/>
        </a.Provider>
    </div>
  )
}
