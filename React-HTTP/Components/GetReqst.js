import React, { Component } from 'react'
import axios from 'axios'
 class GetReqst extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              arr:[],
              errorMsg:''
         }
     }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            this.setState({arr: response.data})
        })
        .catch(error=>{
            this.setState({errorMsg:'Error while retrieving data'})
        })
    }
    render() {
        const {arr,errorMsg}=this.state
        return (
            <div>
                List of items
                {arr.length? arr.map(dataitems=><div key={dataitems.id}>{dataitems.title}</div>):null}
                {errorMsg?<div>{errorMsg}</div>:null}
            </div>
        )
    }
}

export default GetReqst
