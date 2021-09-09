import react from 'react'

const Hello = () =>{
    // Below is the example for JSX Format
    // return(
    //     <div>
    //         <h1>Hello there!</h1>
    //     </div>
    // )

     //Below is the example of non-JSX Format
    return react.createElement('div',{id:'demoid', className:'democlass'}, react.createElement('h1',null,'Hellww there!'))
}

export default Hello