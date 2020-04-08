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
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    onForgetPasswordChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state.data)
    }
    
    SubmitForm(event){
        event.preventDefault()
        const {email , MockBack, data} = this.state
        if (email == 'found' && MockBack ){
            this.setState({ForgetPassword: true})
            sessionStorage.setItem("token","asdfjfskfbsfgyfewjsfdk")
        }
        else if (!MockBack){
            const requestOptions = {
                method: 'POST',
                headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',  
                'Accept': 'application/json'},
                body: new URLSearchParams({
                    'email':email,})
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
                this.setState({ForgetPassword:true})
            })
        }
    let token = sessionStorage.getItem('token')
    console.log(token)
    }
    componentDidMount(){
        if(this.state.MockBack){
        fetch('http://localhost:5000/song/5e8c31dc3d162e0ea00780f3')   

        .then(response=> {

            return response.json();
        })
        .then(users => {

            this.setState({  data: users })
        })
        }
    
    }
    render(){
        return(
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
        )
    }
}

export default ForgetPassword;