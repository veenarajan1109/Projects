
// import Navbar from './components/Navbar';

// import Navbar2 from './components/Navbar2';
// import Navbar3 from './components/Navbar3';


// import "./Navbar.css"




// function App() {

  // return (
    // <>
      
     
    //  </>
//   )

// }
// export default App;


// import React, { useState } from 'react';

// const ImageDisplay = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
  

//   const handleButtonClick = (imageName) => {
//     setSelectedImage(imageName);
//   };
  

//   return (
//     <div>
//       <button onClick={() => handleButtonClick('image1')}>Button 1</button>
//       <button onClick={() => handleButtonClick('image2')}>Button 2</button>
//       {selectedImage === 'image1' && (
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyuryTDT_bh6BB-s-4cCa5UzpZJY_syPj6OKFiwzZ9A&s" alt="Image 1" />
//       )}
//       {selectedImage === 'image2' && (
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34qS8uwlWl9UZtt85s0DC6EkDMwH9vdzLCJqfsqIilA&s" alt="Image 2" />
//       )}
      
//     </div>
//   );
// };

// export default ImageDisplay;

import React, { useState } from 'react'
import './App.css'

export default function App() {
  const[result,setresult]=useState('');


  const handleClick=(e)=>{
    setresult(result.concat(e.target.value));

  }

  const Clear=()=>{
    setresult("");

  }

  function handleDelete() {
    setresult(result.slice(0,-1));
  }
  
  const Calculate=()=>{
    try{
      setresult(eval(result).toString());
    }catch{
      setresult('Error');
    }
    

  }
  
  return (
    <div className='App'>
        <h1>Modern Calculator</h1>
        
      <div className='container'>
        <form>
      <input type='text' value={result}></input>
        </form>
        
      <div className='keypad'>
      <button onClick={Clear} className='highlight'>Ac</button>
      <button onClick={handleDelete} className='highlight'>C</button>
      <button value='%'onClick={handleClick} className='highlight'>%</button>
      <button value='/'onClick={handleClick} className='highlight'>/</button>
      <button value='7'onClick={handleClick}>7</button>
      <button value='8'onClick={handleClick}>8</button>
      <button value='9'onClick={handleClick}>9</button>
      <button value='*'onClick={handleClick} className='highlight'>*</button>
      <button value='4'onClick={handleClick}>4</button>
      <button value='5'onClick={handleClick}>5</button>
      <button value='6'onClick={handleClick}>6</button>
      <button value='-'onClick={handleClick} className='highlight'>-</button>
      <button value='1'onClick={handleClick}>1</button>
      <button value='2'onClick={handleClick}>2</button>
      <button value='3'onClick={handleClick}>3</button>
      <button value='+'onClick={handleClick} className='highlight'>+</button>
      <button value='0'onClick={handleClick}>0</button>
      <button value='.'onClick={handleClick}>.</button>
      <button onClick={Calculate} id='equal' className='highlight'>=</button>




      </div>
      

        </div>
      
    </div>
  )
}

