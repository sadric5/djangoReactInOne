
import React from 'react'
import ReactDOM, {render} from 'react-dom'

import App from "./components/App";

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
        like: 3,
        dislike:1,
        comment:['Cool', 'Inspiring', 'No sense', 'Hey buddy!!']
    },
   
]
// const val=['Millerol', 'Bradly', 'Kelley']
const val={
    id: 1,
    message:'Call me please'
}

ReactDOM.render(

    <React.StrictMode>
      <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
