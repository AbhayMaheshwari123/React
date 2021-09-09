import React, { Component } from 'react'
import { Userconsumer } from './userContext'
 class ComponentC extends Component {
    render() {
        return (
           <Userconsumer>
               {username =>{
                   return <div>Hello {username}</div>
               }}
           </Userconsumer>
        )
    }
}

export default ComponentC
