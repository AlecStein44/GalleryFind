import React from 'react'

class Messenger extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user1: sessionStorage.getItem('username'),
            messages: [],
            users : []
        }
    }

    componentDidMount() {
        fetch(`https://galleryfind-server.herokuapp.com/messages?user1=${this.state.user1}`)
      .then(response => response.json())
        .then(data => {
          this.setState({
              messages: data
          })
          this.handleUsers(data)
         });
    }

    handleUsers(data) {
        let arr = []
        let newusers = data
        for(let i = 0; i < newusers.length; i++) {
            if(newusers[i].user1 !== this.state.user1) {
                arr.push(newusers[i].user1)
            }
        }

        for(let t = 0; t < newusers.length; t++) {
            if(newusers[t].user2 !== this.state.user1) {
                arr.push(newusers[t].user2)
            }
        }

        this.setState({
            users: arr
        })
        console.log(this.state.users)
    }



    render() {
        return(
            <main>
                {this.state.users.map(data => {return ( <p>{data}</p>) })}
            </main>
        )
    }
}

export default Messenger