
import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

// import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userview from './UserView'
import axios from 'axios'



function App(props){

   
    
    const [tweets, setTweets] = useState([])

    const [like, setLike] = useState(false)

    const [likeColor, setLikeColor] = useState(false)

    const [commentsClick, setCommentsClick] = useState(false)

    const [dislikeColor, setDislikeColor] = useState(false)

    const [returnId, setReturnId] = useState()

    const [urlsForTweets, setUrlsForTweets] = useState('http://localhost:8000/api/tweets')

    
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

    const handleCommetsClick = ()=>{
        setCommentsClick(!commentsClick)
    }

    return (

        <div className='container'>
           {console.log(Cookies.get())}
            <Userview data={tweets?tweets:data} onClick={{handleLikeClick, handleDislikeClick, handleCommetsClick}} likecolor={{likeColor, dislikeColor}} returnId={returnId}/>
        </div>
        
    )
}


export default App;
