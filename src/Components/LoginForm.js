import React, { Component } from 'react';
import './Login.css';

class LoginForm extends Component{
    constructor(){
        super()
        this.state={
            email: '',
            password:'',
            checked:true
        }
    }
    onLoginChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
    }
    render(){
        return(
            <div className="Login_container">            
                <form className='tl'>
                    <div class="row">
                        <input
                            className='Login_inText'
                            type="text"
                            name='email'
                            placeholder='Email address or username'
                            className="form-control"
                            value={this.state.email}
                            onChange={event=>this.onLoginChange(event)}
                        />
                    </div>
                    <br></br>
                    <div class="row">
                        <input
                            className="Login_input"
                            type="password"
                            name='password'
                            placeholder='Password'
                            className="form-control"
                            value={this.state.password}
                            onChange={event=>this.onLoginChange(event)}
                        />
                    </div>
                    <br></br>
                    <div class="row" class="form-check" >
                        <input 
                            type="checkbox" 
                            className="Login_input_check" 
                            name='checked'
                            value={this.state.checked}
                            onChange={event=>this.onLoginChange(event)}
                        />
                        <label className='Login_rememberme' > Remember me </label>
                        <a href="#"> <button className="Login_button Login_button_login">LOG IN</button> </a>
                    </div>
                </form>
            </div>
        );
    }
}
export default LoginForm;