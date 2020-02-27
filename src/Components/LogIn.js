import React from 'react'

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            logData: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://galleryfind-server.herokuapp.com/login?username=${this.state.username}&password=${this.state.password}`, {
            method: "GET"
        })
        .then(response => {response.json()})
        .then(data => {
            this.setState({
                logData: data
            })
        })
        .then(console.log(this.state.logData))
        console.log('Submited!')
    }

    render() {
        return(
            <main>
                <form onSubmit={this.handleSubmit}>
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

export default LogIn