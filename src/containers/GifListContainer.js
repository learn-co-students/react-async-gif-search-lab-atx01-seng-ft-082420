import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const url = 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'
export default class GifListContainer extends React.Component {

    constructor() {
        super()

        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        fetch(url)
        .then(res => res.json())
        .then(gifs =>  {
            let list = gifs.data.slice(0,3)
            this.setState({
                gifs: list
            })
        })
    }
    
    handleSubmit = () => {

    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}