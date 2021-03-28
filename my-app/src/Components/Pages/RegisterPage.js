import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : '',
            occupation : '',
            email : '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        const { userName, occupation, email, password } = this.state
        event.preventDefault()
        axios.post('http://localhost:8080/api/v1/users', {
            name : userName,
            occupation : occupation,
            email : email,
            password : password
        }).then(function(response) {
            console.log(response)
        }).catch(function(error) {
            console.log(error);
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }

    render() {
        return (
            <div className="login-page row justify content-center">
            <div className="background col-6 d-md-block d-none">
            </div>
            <div className="col-md-6 col-12 justify-content-center">   
            <form className="login-form" onSubmit={this.handleSubmit}>
            <h1>Sign up</h1>
                <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="userName" onChange={this.handleChange} value={this.state.userName}/>
                </div>
                <div className="form-group">
                <label for="exampleInputEmail1">Occupation</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="occupation" onChange={this.handleChange} value={this.state.occupation} />
                </div>
                <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p>already have an account? <Link to="/login">Login here</Link></p>
            </form>
            </div>
            </div>
        )
    }
}

export default RegisterPage