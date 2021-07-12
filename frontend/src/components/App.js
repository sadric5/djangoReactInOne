
import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import { IoSend } from "react-icons/io";


// import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userview from './UserView'
import axios from 'axios'
import getCookie from './csrfCookis'
import NewtTweetButton from './heaaderButton'
import CreateTweetForm from './form'



function App(props){

   
    const [controlNewTweet, setControlNewTweet] = useState(true)

    const [newTweet, setNewTweet] = useState('sadric')

    const [tweets, setTweets] = useState([])

    const [like, setLike] = useState(false)

    const [likeColor, setLikeColor] = useState(false)

    const [commentsClick, setCommentsClick] = useState(false)

    const [dislikeColor, setDislikeColor] = useState(false)

    const [returnId, setReturnId] = useState()

    const [urlsForTweets, setUrlsForTweets] = useState('http://localhost:8000/api/tweets')

    axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken')
    
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
            console.log(er.request.response)
        }
    }

    // Update like
    const updateLike =  async (url, id, dislike=false) =>{
        if(id){
            url = `${url}${id}`
        }
        try{
            let response = await axios.get(url)
            let data1 = {...response.data, likes:response.data.likes+1}
            let data2 = {...response.data, dislikes:response.data.dislikes+1}

            
            //Update the like
            let response2 = await axios.put(url, dislike?data2:data1)
            let data = await response2.data
            console.log(data)
            if(dislike){
                setTweets(tweets.map(item=>(
                    id===item.like.id?{...item, like:data, dislikeColor:true}:{...item}
                )
                ))
            }else{
                setTweets(tweets.map(item=>(
                    id===item.like.id?{...item, like:data, likeColor:true}:{...item}
                )
                ))
            }
            console.log(tweets)
            setLike(true)
            setLikeColor(true)
            setDislikeColor(true)

        }catch(er){
            console.log(er.request)
        }

    }

    //Handle onclik
   const handleLikeClick = (id)=>{
       //Change the like color
       //Return id
        setLikeColor(false)
        setReturnId(id)
        updateLike('http://localhost:8000/api/like/',id)
   }

   const handleDislikeClick = (id, dislike=true)=>{
    //Change the like color
    //Return id
    setDislikeColor(false)
    setReturnId(id)
    updateLike('http://localhost:8000/api/like/',id, dislike)
    }

    // Create a new Tweets
    const handleCommetsClick = ()=>{
        setCommentsClick(!commentsClick)
    }

    const handleNewTweetControleur = ()=>{
        console.log("Hello")
        setControlNewTweet(!controlNewTweet)
    }
    const handleChange = (ev)=>{
        setNewTweet(ev.target.value)
    }

    const handleOnSubmit = ()=>{
        
    }
    return (

        <div className='container'>
            {console.log(newTweet)}
            <NewtTweetButton onClick={{handleNewTweetControleur, handleChange}}/>
            {controlNewTweet?
                <CreateTweetForm onChange={{handleChange}}/>
                :null}
            <Userview data={tweets?tweets:data} onClick={{handleLikeClick, handleDislikeClick, handleCommetsClick}} likecolor={{likeColor, dislikeColor}} returnId={returnId}/>
        </div>
        
    )
}
export default App;
