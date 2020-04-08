import React, {Component} from 'react';
import './ForgetPassword.css'
class ForgetPassword extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            MockBack: false,
            ForgetPassword: false
        }
        this.SubmitForm = this.SubmitForm.bind(this)
    }

    onForgetPasswordChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state.email)
    }
    
    SubmitForm(event){
        event.preventDefault()
        const {email , MockBack, data} = this.state
        
        if (!MockBack){
            const requestOptions = {
                method: 'POST',
                headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',  
                'Accept': 'application/json'},
                body: new URLSearchParams({
                    'emailUsername':email,})
            };
            fetch('http://localhost:5000/password-reset', requestOptions)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then((result)=>{
                console.log("wrong email")
            })
            
        }
    
    }
    
    render(){
        return(
            <form onSubmit={this.SubmitForm}>
            <div class='forget-container'>
                <div> 
                <h1 className='forget-h1' >Password Reset</h1>
                <p className='forget-p' >Enter your Spotify username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>
                </div> 
                <div>
                    <label className='forget-label' > Email address or username </label>
                    <input
                        className='email'
                        type="text"
                        name='email'
                        placeholder='Email address or username'
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onForgetPasswordChange}
                    />
                </div>
                <br></br>
                <div>
                    <button type='submit' className="forget-button">SEND</button>
                    <p className='forget-p' >If you still need help, contact Spotify Support.</p>
                </div>
            </div>
            </form>
        )
    }
}

export default ForgetPassword;