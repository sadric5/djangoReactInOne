
import React, {useState, useEffect} from 'react'

// import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userview from './UserView'
import axios from 'axios'



function App(props){

   
    
    const [tweets, setTweets] = useState([])
    const [like, setLike] = useState(false)
    const [likeColor, setLikeColor] = useState(false)
    const [returnId, setReturnId] = useState()
    const [urlsForTweets, setUrlsForTweets] = useState('http://localhost:8000/api/tweets')

    useEffect( ()=>{
        setLike(false)
    },[like])



    useEffect( async()=>{
        await fetchTweetData(urlsForTweets);
        return console.log("Hi outside!!")
    }, [urlsForTweets])

    //Fetch Tweets
    const fetchTweetData = async (urls) =>{
        try{
            let response = await axios.get(urls)
            setTweets(response.data)
        }catch(er){
            console.log(er.request.statusText)
        }
    }

    // Update like
    const updateLike =  async (url, valueToUpdate) =>{
        if(valueToUpdate){
            url = `${url}${valueToUpdate}`
        }
        console.log(url)
        try{
            let response = await axios.get(url)
            let data = {...response.data, likes:response.data.likes+1}

            //Update the like
            let response2 = await axios.put(url, data)
            console.log(data)
            console.log(tweets)

            setLike(true)
        }catch(er){
            console.log(er.request.statusText)
        }

    }

    //Handle onclik
   const handleOnclick = (id)=>{
       //Change the like color
       setLikeColor(!likeColor)
       //Return id
       setReturnId(id)
        updateLike('http://localhost:8000/api/like/',id )
   }
    return (

        <div className='container'>
            <Userview data={tweets?tweets:data} onClick={handleOnclick} likecolor={likeColor} returnId={returnId}/>
        </div>
        
    )
}


export default App;
