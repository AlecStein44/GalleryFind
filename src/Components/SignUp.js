import React, {Component} from 'react'

class SignUp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: "",
            res: "",
            failed: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('email', this.state.email)
        formData.append('username', this.state.username)
        formData.append('password', this.state.password)
        fetch(`https://galleryfind-server.herokuapp.com/signup`, {
            method: 'POST',
            body: formData
        })
        .then(data => data.text())
        .then(data => JSON.parse(data))
        .then(data => {
            if(data.name === 'error') {
                this.setState({
                    res: data.name
                })
            } else {
                return(
                    window.location.assign('http://localhost:3000/login')
                )
            }
        })
    }
    render() {
        console.log(this.state.res)
        return(
            <main>
                {this.state.res === 'error' ? <p>error</p> : null }
                <form onSubmit={this.handleSubmit}>
                    <label for="email">Email</label>
                    <input type="email" id="email" onChange={e => this.setState({email: e.target.value})} required />
                    <label for="username">Username</label>
                    <input type="text" id="username" onChange={e => this.setState({username: e.target.value})} required />
                    <label for="password">Password</label>
                    <input type="password" id="password" onChange={e => this.setState({password: e.target.value})} required />
                    <input type="submit" />
                </form>
            </main>
        )
    }
}

export default SignUp