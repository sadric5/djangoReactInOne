import React from 'react'

const NewTweetButton = (props)=>{
    return (
        <div className='container'>
            {console.log(props)}
            <button className='text-primary' onClick={()=>props.onClick.handleNewTweetControleur()}>New Tweet</button>
        </div>
    )
}

export default NewTweetButton