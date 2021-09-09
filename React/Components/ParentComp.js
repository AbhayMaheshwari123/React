import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
 class ParentComp extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:"Abhay"
    }
}

    componentDidMount(){
        setInterval(()=>
        this.setState({
            name:"Abhay"
        }),2000)
    }
    render() {
        console.log("********Parent COmp renderd******")
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
