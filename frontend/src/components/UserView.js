
import React, {useState, useEffect} from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'
import {BsChat, BsFillChatDotsFill} from 'react-icons/bs'
import Comments from './displayCommet'

const Userview = (props)=>{

    return (
        <div className=''>
            {
                props.data.map(data =>(
                    <div className='card text-center my-5' key={data.id}>

                        <div className=' card-body bg-light'>
                            <p className='text-center'>{data.content}</p>
                        </div>
                        <div className='card-footer text-muted'>
                            <ul className='nav'>

                                <li className='nav-item mx-5'>
                                    <div className='mx-5 text-muted'>
                                        <button className='btn' onClick={()=>props.onClick.handleLikeClick(data.like.id)}>
                                            <FaThumbsUp color={data.likeColor?'blue':''}/>
                                        </button>
                                        <b className='mx-2 text-primary'>{data.like.likes}</b>
                                        
                                    </div>
                                </li>

                                <li className='nav-item mx-5'>
                                    <div className='text-muted mx-5'>
                                    <button className='btn' onClick={()=>props.onClick.showCommentHandler(data.id)}><BsFillChatDotsFill/></button>
                                    </div>
                                </li>

                                <li className='nav-item mx-5'>
                                    <div className='mx-5 text-muted'>
                                    <button className='btn' onClick={()=>props.onClick.handleDislikeClick(data.like.id, true)}>
                                        <FaThumbsDown color={data.dislikeColor?'blue':''}/>
                                    </button>
                                    <b className='mx-2 text-primary'>{data.like.dislikes}</b>
                                    </div>
                                </li>

                            </ul>

                            {/* Comments */}
                            <div className='text-center'>
                                {data.id==props.showOrNot.tweetId
                                    ?(<div>
                                            <Comments
                                            value={data.comment}
                                            showOrNot={props.showOrNot.showComment}
                                            tweetId={data.id}
                                            />
                                        </div>
                                    )
                                    :''
                                    }    
                            </div>
                        </div>
                        </div>
                ))
            }   
        </div>
    )
}

export default Userview;