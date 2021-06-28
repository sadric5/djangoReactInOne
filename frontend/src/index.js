
import React from 'react'
import ReactDOM, {render} from 'react-dom'

import App from "./components/App";

const data =[
    {
        id: 1,
        content: 'Philosophy is main racine of all discipline',
        like: 3,
        dislike:1,
        comment:['That make sense', 'Inspiring', 'No I think is Probability', 'Hey buddy!!']
    },
    {
        id: 2,
        content: 'Love code every that what keep me motivated',
        like: 5,
        dislike:9,
        comment:['Cool', 'Inspiring', 'No sense', 'Hey buddy!!']
    },
   
]


ReactDOM.render(

    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );
