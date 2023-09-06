import React, { useState } from 'react';
import "./home.css" 


function Dropdown({ options }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown">
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    
    </div>
  );
}

export default function Home() {
  const options1 = ['Online Course', 'Option 2', 'Option 3'];
  const options2 = ['Offline Course', 'Item B', 'Item C'];
  const options3 = ['Crash Course', 'Banana', 'Orange'];
  const options4 = ['Advanced/ Diplomo', 'Banana', 'Orange'];


  return (
    <div id='home'>
    <div id='nav'>
      
      <div className='img'>
        <img src='http://womeainstituteoffinearts.com/assets/img/logo/logo.png' width='130px' height='40px' alt="Logo" />
      </div>
      <div id='navlist'>
      <p>Home</p>
      <div className='Drop'>
     <div className='opt1'> <Dropdown options={options1} /></div>
     <div className='opt2'><Dropdown options={options2} /></div>
     <div className='opt3'><Dropdown options={options3} /></div>
      <div className='opt4'><Dropdown options={options4} /></div>
      </div>
        <button className='log'>Login</button>
        <button className='reg'>Register</button>
      </div>
      <section className='about'>
        <div className='aboutpage'>
          <button className='btn'>The Boss in Learning</button>
          <br/>
          <br/>
          <h2>Engaging & Accessable Online, Offline Courses for All.</h2>
          <h6>Since, we womea give you the great learning experience. There is no time limit for any online courses.Our mantra is "LEARN UNTIL YOU SATISFIED". Worrying!! How about the classes will be, NO WORRY!!! we provide both live and recorded sessions.</h6>
          <h6>For all online course we provide products through couriers (doing INTERNATIONAL Shipping also).Great newa ! NO EXTRA (or) hidden charges for shipping (or) products!! Special for all courses provided government certification for all students and working for 12 hours a day.That I mean (10am - 10pm)</h6>
          


          <input type='' id='Text' placeholder='Search for Courses you like'></input>
<select id="courseDropdown">
    <option value="math">Math</option>
    <option value="science">Science</option>
    <option value="history">History</option>
</select>
<button class="arr">Search</button>
        </div>
      </section>
      
      <div className='imgr'>
      <img src='http://womeainstituteoffinearts.com/assets/img/slider/home-slider.png' width='400px' height='450px'></img>
      </div>
      <div>
        <section/>
      </div>
     
      </div>
   </div>
  );
}
