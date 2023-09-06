// import React, { useState } from 'react'

// export default function() {
//     const[name,setName]=useState("Veena Rajan");
//   return (
//     <div>
        // <h2>What is Your Name?</h2>
        // <h2>Which institute you are persuing your course?</h2>
        // <h2>Which course you have been choosen?</h2>
        // <h2>What is your recently completed Topic?</h2>
        // <h2>What is your current Topic?</h2>
    
//         </div>
//   )
// }

// import React, { useState } from 'react';

// const Quiz = () => {
//   const [answers, setAnswers] = useState({
//     answer1: 'Veena Rajan',
//     answer2: 'IDM',
//     answer3: 'Full Stack',
//     answer4: 'JavaScript',
//     answer5: 'React',
//   });

//   const handleSubmit = () => {
//     console.log('Submitted Answers:', answers);
//   };

//   return (
//     <div>
//         <h2>1.What is Your Name?</h2>
//         <h2>2.Which institute you are persuing your course?</h2>
//         <h2>3.Which course you have been choosen?</h2>
//         <h2>4.What is your recently completed Topic?</h2>
//         <h2>5.What is your current Topic?</h2>
//         <button onClick={handleSubmit}>Submit</button>
      
//       <h3>Answers</h3>
//       <p>1.{answers.answer1}</p>
//       <p>2.{answers.answer2}</p>
//       <p>3.{answers.answer3}</p>
//       <p>4.{answers.answer4}</p>
//       <p>5.{answers.answer5}</p>



//     </div>
//   );
// };

// export default Quiz;
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function() {
const[value,setValue]=useState(0);
const[count3,setCount3]=useState();


useEffect(()=>{
  console.log("increased");
  console.log("decreased");
  console.log("stable");

})
const resetButtons = () => {
  setValue(0);
  
};

const increaseValue =()=>{
  setValue(value+1);
}

const decreaseValue =()=>{
  setValue(value-1);
}



  return (
    <div>
      <button onClick={increaseValue}>Increase Button</button><br/>
      <button onClick={decreaseValue}>Decrease Button</button><br/>
      <button onClick={()=>setCount3(resetButtons)}>Reset{count3}</button><br/>
      <p>{value}</p>
    </div>
  )
}

