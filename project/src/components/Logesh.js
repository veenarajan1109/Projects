// import React, { useState } from 'react'

// export default function Logesh() {
//     const [name,idm] = useState("Veena rajan")
//   return (
// //     <div>
// //         <h1> hello Ms. {name}</h1>
// //         <Veena user="javascript" />
// //     </div>
// //   )
// // }
// // const Veena = (props)=>{
// //     return(
// //         <div>
// //             <h2> am studying {props.user}</h2>
// //             <Veenaone const="now"/>
// //         </div>
        
// //     )
// // }
// // const Veenaone = (props)=>{
// //     return(
// //         <h2> am sleeping {props.const} </h2>
         
// //     )
// // }

import React, { useState } from 'react'

export default function() {
    const[name,setName]= useState("IDM");
  return (
    <div>
        <h1>Hello !!</h1>
        <Veena name={name}/>
     </div>
  )
}
function Veena({name}){
    return(
        <div>
        <h2>I am studying in</h2>
        <Veenar name={name}/>
        </div>
        )
}
function Veenar({name}){
    return(
        <div>
        <h2>Portions Provided by</h2>
        <Veenara name={name}/>
        </div>
    )
}
function Veenara({name}){
    return(
        <div>
            <h2>Portions Completed by</h2>
        </div>
    )
}
function Veenaraj({name}){
    return(
        <div>
            <h2>Currently studying in</h2>
            <h2>{name} !!!</h2>
        </div>
    )
}
