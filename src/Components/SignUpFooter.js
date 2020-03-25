import React, { Component } from 'react';
import './SignUp.css';

class SignUpFooter extends Component{
    render(){
        return(
            <div className='tc'>            
                <div>
                    <p className="tc" className="SignUp_p_black">
                        By clicking on Sign up, you agree to Spotify's <a className="SignUp_a" href="#" >Terms and Conditions of Use</a>.
                        <br></br>
                    </p>
                    <p className="tc" className="SignUp_p_black">  To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's <a className="SignUp_a" href="#" >Privacy Policy</a>. </p>
                </div>
                <div >
                    <a href="#"> <button className=" SignUp_button SignUp_button_Signup"> SIGN UP </button></a>
                </div>
                <div>
                    <p className='tc' className="SignUp_p_black" >
                        Already have an account? 
                        {/* <Link to="/Login/" target="_blank"> Login </Link> */}
                        <a className="SignUp_a" href="#"> Login</a>
                    </p>
                </div>
            </div>
        );
    }
}
export default SignUpFooter;