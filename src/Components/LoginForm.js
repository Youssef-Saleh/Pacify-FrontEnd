import React, { Component } from 'react';
import './Login.css';
import {Link , Redirect} from 'react-router-dom'
class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            email:'',
            password:'',
            checked:true,
            MockBack: false,
            LoggedIn: false
        }
        this.SubmitForm = this.SubmitForm.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    onLoginChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state.data)
    }
    SubmitForm(event){
        event.preventDefault()
        const {email , password, MockBack,data} = this.state
        // let found = data[0].email
        if (email == 'found' && password == "admin" && MockBack ){
            this.setState({LoggedIn: true})
            sessionStorage.setItem("token","asdfjfskfbsfgyfewjsfdk")
        }
        else if (!MockBack){
            const requestOptions = {
                method: 'POST',
                headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',  
                'Accept': 'application/json'},
                body: new URLSearchParams({
                    'email':email,
                    'password':password})
            };
            console.log(requestOptions.body)
            fetch('http://localhost:5000/login', requestOptions)
            .then(console.log("fetching successfuly"))
            .then(response => {
                return response.json()
                console.log(response)
            })
            .then((token)=>{
                console.log('the token is ',token)
                sessionStorage.setItem('token',token)
                this.setState({LoggedIn:true})
            })
        }
    let token = sessionStorage.getItem('token')
    console.log(token)
    }
    componentDidMount(){
        if(this.state.MockBack){
        fetch('http://localhost:5000/song/5e8b7def535c4723f4666348')   

        .then(response=> {

            return response.json();
        })
        .then(users => {

            this.setState({  data: users })
        })
        }
    
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