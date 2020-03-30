import React from 'react'

class Account extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            data: []
        }
    }

    componentDidMount() {
        fetch(`https://galleryfind-server.herokuapp.com/account?username=${this.state.username}`)
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
    }

    render() {
        return(
            <p>test</p>
        )
    }
}

export default Account