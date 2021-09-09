import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure COmponent rendered")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
