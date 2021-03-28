import { Link, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        const { email, password } = this.state
        event.preventDefault()
        axios.post('http://localhost:8080/api/v1/session', {
            email : email,
            password : password
        }).then(response => {
            // if (response.data.meta.status == 'error') {
            //     console.log('ERROR')
            //     return
            // }else {
            //     console.log(response.data.data.occupation)
            // }
            console.log(response);
        }).catch(error => {
            this.setState({
                isError : true
            })
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }

    isError(param){
        let errorMessage = ''
        if (param == true) {
            errorMessage = <p>Username atau password salah</p>
        }
        return errorMessage
        
    }

    render() {
        return (
            <div className="login-page row justify content-center">
            <div className="background col-6 d-md-block d-none">
            </div>
            <div className="col-md-6 col-12 justify-content-center">   
            <form className="login-form" onSubmit={this.handleSubmit}>
            <h1>Sign In</h1>    
            {this.isError(this.state.isError)}
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p>no account yet? <Link to="/register">Register here</Link></p>
            </form>
            </div>
            </div>
        )
    }
}

export default LoginPage