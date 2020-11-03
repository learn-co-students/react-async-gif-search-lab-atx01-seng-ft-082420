import React from 'react'

export default class GifSearch extends React.Component {
    constructor() {
        super()

        this.state = {
            url: ""
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.state)}>
                    <h3>Add Gif:</h3>
                    <input type="text" name="url" placeholder="Enter a Gif URL..."/>
                </form>
            </div>
        )
    }
}