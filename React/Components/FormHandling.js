import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             gender:'Male'
        }
    }

    change=event=>{
        this.setState({
            username:event.target.value
        })
    }

    changegender=event =>{
        this.setState({
            gender:event.target.value
        })
    }
    
    submithandler=event=>{
        alert(`submit`)
    }

    render() {
        return (
            <form onSubmit={this.submithandler}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.change}></input>
                </div>  
                <div>
                    <label >Gender</label>
                    <select value={this.state.gender} onChange={this.changegender}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>

        )
    }
}

export default FormHandling
