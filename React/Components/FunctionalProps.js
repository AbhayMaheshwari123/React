import react from 'react'


const Exm = props =>{
    return (
        <div>
            <h1>
                Hello {props.name} . How are you?
            </h1>
            I am {props.ans}
            {props.children}
        </div>
    )
}

export default Exm