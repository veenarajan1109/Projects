import React, { useState } from 'react'


const Login=()=>{
	const[mail,setmail]=useState('');
	const[passw,setpassw]=useState('');
	const [checked, setChecked] = React.useState(false); 

	function handleChange(e){
		setChecked(e.target.checked);
	}

	return(

		<div>
			<form action=""> 
			<div className='log1'>
				<div> 
					<label>Email</label><br/>
				<input type="email" placeholder='Enter your Email' name="email" id="email" value={mail} onChange={(e)=>setmail(e.target.value)}/>
				</div> 
				<div id='passw'> 
					<label>Password</label><br/>
				<input type="password" placeholder='Enter your Password ' name="passw" id="passw" value={passw} onChange={(e)=>setpassw(e.target.value)}/> 
				</div> 
				<input value="test" type="checkbox" onChange={handleChange}/>
				<label>Remember me</label><br/>
				<button className='btn' type="submit">Sign In</button>
				</div>
			</form>

		</div>
	)
}

export default Login