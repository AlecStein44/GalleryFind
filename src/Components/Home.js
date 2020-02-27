import React from 'react'
import ArtGall from './ArtGall'
import PopUp from './PopUp'

class Home extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            seen: true,
            type: 'artistpro',
            results: [],
            sugnum: [0, 3]
        }
    }

    componentDidMount() {
        fetch(`https://galleryfind-server.herokuapp.com/${this.state.type}`)
      .then(response => response.json())
      .then(data => 
        this.setState({
            results: data
        })
      );
    }

    handleSug(e) {
        e.preventDefault()
        console.log(e.target.value)
        if(e.target.value === 'prevButton' && this.state.sugnum[0] > 0) {
            return(
                this.setState({
                    sugnum: this.state.sugnum.map(add => {return add - 3})
                }),
                console.log(this.state.sugnum[0],this.state.sugnum[1])
            )
        } else {
            console.log('do nothing')
        }
        if(e.target.value === 'nextButton' && this.state.sugnum[1] < this.state.results.length) {
            return(
                this.setState({
                    sugnum: this.state.sugnum.map(add => {return add + 3})
                }),
                console.log(this.state.sugnum[0],this.state.sugnum[1])
            )
        } else {
            console.log('do nothing')
        }
    }

    inputArtGal = (e) => {
        e.preventDefault()
        console.log(this.state.seen)
        this.forceUpdate(); 
        fetch(`https://galleryfind-server.herokuapp.com/${this.state.type}`)
      .then(response => response.json())
      .then(data => 
        this.setState({
            results: data,
            seen: true
        })
      );
    }

    render() {
        //console.log(this.state.seen) {this.state.seen ? null : <PopUp toggle={this.state.togglePop} onSubmit={this.state.inputArtGal} />}
        return(
            <main>
                {this.state.seen ? null : <PopUp toggle={this.state.togglePop} onSubmit={this.state.inputArtGal} />}
                <h2 className="Home-SlideP">Suggested</h2>
                <div className="ArtGall-Slide">
                    <button value="prevButton" onClick={this.handleSug.bind(this)}>prev</button>
                    {this.state.results.slice(this.state.sugnum[0],this.state.sugnum[1]).map(data => {
                        return <ArtGall name={data.name} location={data.location} style={data.style} />
                    })}
                    <button value="nextButton" onClick={this.handleSug.bind(this)}>next</button>
                </div>
                <h2 className="Home-SlideP">Local Galleries</h2>
                <div className="ArtGall-Slide">
                    <ArtGall />
                    <ArtGall />
                    <ArtGall />
                </div>
                <h2 className="Home-SlideP">Popular Locations</h2>
                <div className="ArtGall-Slide">
                    <ArtGall />
                    <ArtGall />
                    <ArtGall />
                </div>
            </main>
        )
    }
}

export default Home