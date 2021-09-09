import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.cbref=null
        this.setref=element =>{
            this.cbref=element
        }
        console.log(this.cbref);
        console.log("1")
    }

    componentDidMount(){
        if(this.cbref){
            this.cbref.focus()
        }
        console.log("3")
        console.log(this.cbref)

    }
    componentWillMount(){
        console.log(this.cbref)
      }    
    render() {
        console.log('4')
        return (
            <div>
                <input type="text" ref={this.setref}></input>
            </div>
        )
    }
}

export default RefsDemo