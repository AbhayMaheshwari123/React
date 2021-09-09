import React, { Component } from 'react'
class RegularComp extends Component {
    render() {
        console.log("Regular COmponent rendered")
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
