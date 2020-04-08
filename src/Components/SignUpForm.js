import React, { Component } from 'react';
import './SignUp.css';
import {Link,Redirect} from 'react-router-dom'


class SignUpForm extends Component{
    constructor(){
        super()
        this.state={
            email: '',
            confirmEmail: '',
            password:'',
            nickName: '',
            date:'',
            gender:'',
            checked: true,
            MockBack: false,
            SignedUp: false
        }
        this.SubmitForm = this.SubmitForm.bind(this)
    }

    onSignUpChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
    }
    SubmitForm(event){
        event.preventDefault()
        const {email ,confirmEmail, password, nickName,date,gender, MockBack,data} = this.state
        // if (email == 'found' && confirmEmail == 'found' && password == 'admin' && nickName == 'found' && date=='06/07/1999' && gender=='Male'  && MockBack ){
        //     this.setState({SignedUp: true})
        //     sessionStorage.setItem("token","asdfjfskfbsfgyfewjsfdk")
        // }
        if (!MockBack){
            const requestOptions = {
                method: 'POST',
                headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',  
                'Accept': 'application/json'},
                body: new URLSearchParams({
                    'email':email,
                    'confirmEmail':confirmEmail,
                    'password':password,
                    'nickName': nickName,
                    'date':date,
                    'gender':gender
                })
            };
            console.log(requestOptions.body)
            fetch('http://localhost:5000/signup', requestOptions)
            .then(console.log("fetching successfuly"))
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            }).catch(function(error){
                console.log(error)
            })
            .then((token)=>{
                console.log('the token is ',token)
                sessionStorage.setItem('token',token)
                if(token){this.setState({SignedUp:true})}
            })
        }
    let token = sessionStorage.getItem('token')
    console.log(token)
    }
    // componentDidMount(){
    //     if(this.state.MockBack){
    //     fetch('http://localhost:5000/song/5e8c31dc3d162e0ea00780f3')   

    //     .then(response=> {

    //         return response.json();
    //     })
    //     .then(users => {

    //         this.setState({  data: users })
    //     })
    //     }

    // }
    render(){
        if (this.state.SignedUp == true){
            return <Redirect to='/WebFrame'></Redirect>
        }
        return(
            <div className="tl">            
                <form onSubmit={this.SubmitForm} className="tl" >
                    <div class="row" >
                        <input
                            className="SignUp_input"
                            type="text"
                            name='email'
                            placeholder='Email address '
                            className="form-control"
                            value={this.state.email}
                            onChange={event=>this.onSignUpChange(event)}       
                        />
                    </div>
                    <br></br>
                    <div class="row" >
                        <input
                            type="text"
                            className="tl"
                            name='confirmEmail'
                            placeholder='Confirm email'
                            className="form-control"
                            value={this.state.confirmEmail}
                            onChange={event=>this.onSignUpChange(event)}
                        />
                    </div>
                    <br></br>
                    <div class="row">
                        <input
                            type="password"
                            className="SignUp_input"
                            name='password'
                            placeholder='Password'
                            className="form-control"
                            value={this.state.password}
                            onChange={event=>this.onSignUpChange(event)}
                        />
                    </div>
                    <br></br>
                    <div class="row" >
                        <input
                            className="SignUp_input"
                            type="text"
                            name='nickName'
                            placeholder='What should we call you?'
                            className="form-control"
                            value={this.state.nickName}
                            onChange={event=>this.onSignUpChange(event)}
                        />
                    </div>

                    <div class="row">
                        <label className="SignUp_birth_label"> Date of birth    </label>
                        <input
                            type="date"
                            name='date'
                            className="SignUp_input"
                            placeholder='Date'
                            className="form-control"
                            value={this.state.date}
                            onChange={event=>this.onSignUpChange(event)}
                        />
                    </div>
                    <br></br>
                    <div class="row" className='tl'>
                        <p className="SignUp_p_gray" className='tl'>
                            <label class="SignUp_radiolabel"><input className="SignUp_input" type="radio"  name="gender" value="male" onChange={event=>this.onSignUpChange(event)}/>Male</label>
                            <label class="SignUp_radiolabel"><input className="SignUp_input" type="radio" name="gender" value="female" onChange={event=>this.onSignUpChange(event)}/>Female</label>
                        </p> 
                    </div>
                    <div class="row" class="form-check" >
                        <p className="SignUp_p_gray_label"><label> 
                        <input
                            className="SignUp_input" 
                            type="checkbox"
                            name='checked'
                            value={this.state.checked}
                            onChange={event=>this.onSignUpChange(event)}  
                        />
                        Share my registration data with Spotify's content providers for marketing purposes. 
                        </label></p>
                    </div>
                    <div className='tc'>            
                <div>
                    <p className="tc" className="SignUp_p_black">
                        By clicking on Sign up, you agree to Spotify's <a className="SignUp_a" href="#" >Terms and Conditions of Use</a>.
                        <br></br>
                    </p>
                    <p className="tc" className="SignUp_p_black">  To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's <a className="SignUp_a" href="#" >Privacy Policy</a>. </p>
                </div>
                <div >
                   <button type='submit' className=" SignUp_button SignUp_button_Signup"> SIGN UP </button>
                </div>
                <div>
                    <p className='tc' className="SignUp_p_black" >
                        Already have an account? 
                        {/* <Link to="/Login/" target="_blank"> Login </Link> */}
                        <Link to='Login'><a className="SignUp_a" href="#"> Login</a></Link>
                    </p>
                </div>
            </div>
                </form>
            </div>
        );
    }
} 
export default SignUpForm;