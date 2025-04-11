import { useState } from 'react';
import './signin.css';
function Signin(){
    const[login,isloggedin] = useState(true)
    const loginChange = () =>{isloggedin(!login)}
    return(
       <div id="sign-in">
        <div className='logo'>
           <img src="https://gamingstreet.com/wp-content/uploads/2019/10/Instagram_logo_wordmark_logotype-1600x900.png"></img>
           </div>
           <div className="fields">
           <input hidden={login} type="text" placeholder="Phone number or oremail" id='hidden'></input>
           <input hidden={login} type="text" placeholder="Enter Your Name"></input>
            <input type="text" placeholder="Phone number,username,oremail"></input>
            <input type="password" placeholder="Password"></input>
            <button>{login?"Sign in":"Sign up"}</button>
            <p>Don't have account?<a onClick={loginChange}>Sign up</a></p>

           </div>
       </div>          

    );
}

export default Signin;