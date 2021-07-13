import React from 'react'

const NewTweetButton = (props)=>{
    return (
        <div>
            <button className='text-primary ms-0 btn bg-secondary my-3 rounded ' onClick={()=>props.onClick.handleNewTweetControleur()}>New Tweet</button>
        </div>
    )
}

export default NewTweetButton