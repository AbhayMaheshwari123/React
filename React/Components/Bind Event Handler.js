import React, {Component} from 'react'

class Abc extends Component {
    constructor(){
        super()
        this.state={
            message:'Hello'
        }
    }
    clickHandler(){
        this.setState({
            message:'Thnku'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1> 
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default Abc 