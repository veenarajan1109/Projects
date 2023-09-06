import React, { useState } from 'react';


const NavBar = () => {
  const [dropdown1Value, setDropdown1Value] = useState(''); 
  const [dropdown2Value, setDropdown2Value] = useState(''); 
  const [dropdown3Value, setDropdown3Value] = useState(''); 
  const [dropdown4Value, setDropdown4Value] = useState(''); 
  const [dropdown5Value, setDropdown5Value] = useState(''); 

  const handleDropdown1Change = (event) => {
    setDropdown1Value(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Value(event.target.value);
  };
  
  const handleDropdown3Change = (event) => {
    setDropdown3Value(event.target.value);
  };

  const handleDropdown4Change = (event) => {
    setDropdown4Value(event.target.value);
  };

  const handleDropdown5Change = (event) => {
    setDropdown5Value(event.target.value);
  };

  return (
    <div>
<img src='data:image/jpeg;base64,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' width='30px' height='30px'></img>
      <h2>TutorialRepublic</h2>
      <select value={dropdown1Value} onChange={handleDropdown1Change}>
      <option value="">Web Tutorial</option>
        <option value="option1">HTML Tutorial</option>
        <option value="option2">CSS Tutorial</option>
        <option value="option3">JavaScript Tutorial</option>
        <option value="option3">JQuery Tutorial</option>
        <option value="option3">PHP Tutorial</option>
        <option value="option3">SQL Tutorial</option>
      </select>
      <select value={dropdown2Value} onChange={handleDropdown2Change}>
      <option value="">Practice Examples</option>
        <option value="option1">HTML Examples</option>
        <option value="option2">CSS Examples</option>
        <option value="option3">JavaScript Examples</option>
        <option value="option3">JQuery Examples</option>
        <option value="option3">PHP Examples</option>
        <option value="option3">SQL Examples</option>
      </select>
      <select value={dropdown3Value} onChange={handleDropdown3Change}>
      <option value="">HTML References</option>
        <option value="option1">HTML Tags\Elements</option>
        <option value="option2">HTML Global Attributes</option>
        <option value="option3"> HTML Event Attributes</option>
        <option value="option3">HTML Color Picker</option>
        <option value="option3">HTML Language Codes</option>
        <option value="option3">HTML Status Codes</option>
      </select>
      <select value={dropdown4Value} onChange={handleDropdown4Change}>
      <option value="">CSS References</option>
        <option value="option1">CSS At Rules</option>
        <option value="option2">CSS Properties</option>
        <option value="option3">CSS Animatable Properties</option>
        <option value="option3">CSS Color Properties</option>
        <option value="option3">CSS Color Names</option>
        <option value="option3">CSS Web Safe Fonts</option>
      </select>
      <select value={dropdown2Value} onChange={handleDropdown2Change}>
      <option value="">PHP References</option>
        <option value="option1">PHP Array Function</option>
        <option value="option2">PHP String Function</option>
        <option value="option3">PHP File System Function</option>
        <option value="option3">PHP Date/Time Function</option>
        <option value="option3">PHP Calender Function</option>
        <option value="option3">PHP MySQLi Function</option>
      </select>

   </div> 
          
) }       
export default NavBar;