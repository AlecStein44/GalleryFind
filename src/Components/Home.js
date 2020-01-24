import React from 'react'
import ArtGall from './ArtGall'

class Home extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return(
            <main>
                <ArtGall />
                <ArtGall />
                <ArtGall />
                <ArtGall />
            </main>
        )
    }
}

export default Home