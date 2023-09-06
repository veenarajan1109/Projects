// import axios from "axios";
// import { useState } from "react";
// import { useNavigate} from "react-router-dom";

// export default function Veena(){
    
//     const navi2=useNavigate();
    // function change() {

    //     navi2('/')

    // }
//     const [name,setname]=useState('');
    // function ok(event)
    // {
    //     event.preventDefault();
    //     axios.post('https://64d1e921f8d60b17436116e4.mockapi.io/sampleTable',{username:name});
    //     setname('');
    // }
//     return(
//         <>
//             <h1>Second page</h1>

//             <form onSubmit={ok}>
                // <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
//                 <input type="submit"/>
//             </form>
//             <button onClick={change}>Home page</button>
//         </>
//     )
// }
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { API } from "./api";
// import { useNavigate } from "react-router-dom";
// import  PDF from "../router/Veena Rajan.pdf";


// export default function() {
//     const[name,setname]=useState('');
//     const[num,setnum]=useState('');
//     const[age,setage]=useState('');
//     const[resume,setresume]=useState([]);
//     const[view,setview]=useState([]);
    
//     const navi=useNavigate();

//     function submit(event)
//     {
//         event.preventDefault();
//         axios.post('https://64d1e921f8d60b17436116e4.mockapi.io/Applications',{username:name,userid:num,userage:age,});
//         setname('');
//         setnum('');
//         setage('');
        
    
//     }
    
//     useEffect(()=>{
//         axios.get('https://64d1e921f8d60b17436116e4.mockapi.io/Applications').then((s)=>{
//         setview(s.data)
//         })



//     },[]);

//     const del=(w)=>{
//         axios.delete(`${API}/${w}`).then(()=>{
//             axios.get('https://64d1e921f8d60b17436116e4.mockapi.io/Applications').then((s)=>{
//                 setview(s.data);
//             })
//             alert("Row will be deleted")
//         })
//     }

//     const update=(a,b,c,d)=>{
//         localStorage.setItem('id',a);
//         localStorage.setItem('username',b);
//         localStorage.setItem('userid',c);
//         localStorage.setItem('userage',d);
    

//         navi('/edit')
//     }

    

// return(
//     <>
//         <h1>Home page</h1>

//         <form onSubmit={submit}>

//             <table>
//                 <tr>
//             <td> <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/></td> 
//             <td> <input type="num" value={num} onChange={(e)=>setnum(e.target.value)}/></td>
//             <td> <input type="num" value={age} onChange={(e)=>setage(e.target.value)}/></td>
//             <td> <input type="file" value={resume} accept=".pdf" onChange={(e)=>setresume(e.target.value)}/></td>
//             </tr>
//             </table>
        
            
//             <input type="submit"/>
    

//         </form>
//         <table>
//             <tr>
//                 <th>Name</th>
//                 <th>Id</th>
//                 <th>Age</th>
//                 <th>Operation</th>
//                 <th>Update</th>
//                 <th>Download</th>
                

//             </tr>
//         {view.map((a)=>(
//         <tr>
//             <td>{a.username}</td>
//             <td>{a.userid}</td>
//             <td>{a.userage}</td>
//             <td>
//                 <button onClick={()=>del(a.id)}>Delete</button>
//             </td>
//             <td>
//                 <button onClick={()=>update(a.id,a.username,a.userid,a.userage)}>Update</button>
//             </td>
//             <td>
//         <a href={PDF} download="Veena Rajan.pdf" target="_blank" rel="noopener noreferrer">
//         <button>Download .pdf file</button>
//     </a>
// </td>
//         </tr>
//         ))}
//         </table>
        
//     </> 
// );
// }
import React from 'react'

export default function Calc() {
  return (
    <div className='App'>
        <h1>Calculator</h1>
    </div>
  )
}
