import React, { Component } from 'react';
import './Login.css';
import {Link , Redirect} from 'react-router-dom'
class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            email: '',
            password:'',
            checked:true,
            MockBack: true,
            LoggedIn: false
        }
        this.SubmitForm = this.SubmitForm.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    onLoginChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
    }
    SubmitForm(event){
        console.log("func called")
        //event.preventDefault()
        let find = ''
        const {email , password, MockBack,data} = this.state
        let found = data[1].email
        if (email == found && password == "admin" && MockBack ){
            this.setState({LoggedIn: true})
            sessionStorage.setItem("token","asdfjfskfbsfgyfewjsfdk")
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=>{
        this.setState({ data: users })
        })
    console.log(this.state.data)

    }
    render(){
        const {data}=this.state
        if (this.state.LoggedIn == true){
            // console.log("logged")
            return <Redirect to='/WebFrame'></Redirect>
        }
        return(
            <div className="Login_container">            
                <form onSubmit={this.SubmitForm} className='tl'>
                    <div class="row">
                        <input
                            className='Login_inText'
                            type="text"
                            name='email'
                            placeholder='Email address or username'
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onLoginChange}
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
                            onChange={this.onLoginChange}
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
                        <button type='submit' className="Login_button Login_button_login">LOG IN</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default LoginForm;