import React from 'react'
import {Link} from 'react-router-dom';

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            logData: [],
            redirectFire: false,
            failed: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://galleryfind-server.herokuapp.com/login?username=${this.state.username}&password=${this.state.password}`, {
            method: "GET",
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                logData: data,
                redirectFire: true
            })
            this.handleData(data)
        })
        .catch(err => {
            console.log(err)
        })
        console.log('Submited!')
    }

    handleData = (data) => {
        if(data.length === 0) {
            this.setState({
                failed: true
            })
        } else {
            sessionStorage.setItem('id', this.state.logData[0].id)
            sessionStorage.setItem('username', this.state.logData[0].username)
            sessionStorage.setItem('password', this.state.logData[0].password)
            window.location.assign(`http://localhost:3000/`)
        }
    }
    render() {
        return(
            <main>
                {this.state.failed ? <h3>Failed</h3> : null}
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Username</label>
                    <input type="text" id="username" onChange={e => this.setState({username: e.target.value})} required />
                    <label for="password">Password</label>
                    <input type="password" id="password" onChange={e => this.setState({password: e.target.value})} required />
                    <input type="submit" />
                </form>
                <Link to="/signup" className="signupsmall">Don't have an account? Sign up here.</Link>
            </main>
        )
    }
}

export default LogIn