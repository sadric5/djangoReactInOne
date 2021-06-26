
import React from 'react'

// import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userview from './UserView'



const App = (props)=>{
    const data =[
        {
            id: 1,
            tweet: 'Philosophy is main racine of all discipline',
            like: 3,
            dislike:1,
            comment:['That make sense', 'Inspiring', 'No I think is Probability', 'Hey buddy!!']
        },
        {
            id: 2,
            tweet: 'Love code every that what keep me motivated',
            like: 5,
            dislike:9,
            comment:['Cool', 'Inspiring', 'No sense', 'Hey buddy!!']
        },
       
    ]
    
   
    return (


        <div className='container'>
            <Userview data={data}/>
        </div>
        
    )
}


export default App;
