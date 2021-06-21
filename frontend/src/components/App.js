
import React from 'react'
// import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = (props)=>{
    return (
        <div className='container'>
            {
                props.data.map(data =>(
                    <div className='card text-center bg-light m-3' key={data.id}>
                        <h1 className='text-center'>{data.tweet}</h1>
                    </div>
                ))
            }   
        </div>
        
    )
}


export default App;
