import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };

        // this.handleUser = this.handleUser.bind(this);
        // this.handlePass = this.handlePass.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    handleUser(name) {
        this.setState({
            username: name
        })
    }

    handlePass(pass) {
        this.setState({
            password: pass
        })
    }

    clicked() {
        alert('Username: ${ this.state.username } Password: ${ this.state.password }')
    }

    render() {


        return (
            <div>
                <input placeholder='Username goes here'
                    onChange={(e) => this.handleUser( e.target.value )} type='text' />
                <input placeholder='Password goes here'
                    onChange={(e) => this.handlePass( e.target.value )} type='text' />
                <button onClick={this.clicked}>Log In</button>
            </div>
        )
    }
}


export default Login;