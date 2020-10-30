import React from 'react'

export default class GifList extends React.Component {

    render() {
         this.props.gifs[0] ? console.log(this.props.gifs[0].url) : null
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => (
                    <li><img key={gif.id} src={gif.images.original.url} alt={gif.title}/></li>))}
                </ul>
            </div>
        )
    }
}