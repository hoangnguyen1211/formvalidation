import React, { Component } from 'react'

export default class Demo extends Component {

    
    render() {
        return (
            <div>
                {this.props.render(this.props.name)}  
            </div>
        )
    }
}
