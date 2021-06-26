
import React, {useState, useEffect} from 'react'
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import {BsChat, BsFillChatDotsFill} from 'react-icons/bs'

const Userview = (props)=>{
    return (
        <div className='container'>
            {
                props.data.map(data =>(
                    <div className='card text-center m-3 my-5' key={data.id}>

                        <div className=' card-body bg-light'>
                            <p className='text-center'>{data.tweet}</p>
                        </div>
                        <div className='card-footer text-muted'>
                            <ul className='nav'>
                                <li className='nav-item mx-5'>
                                    <div className='mx-5 text-muted'>
                                        <button className='btn'><FaRegThumbsUp/></button>
                                        <b className='mx-2 text-primary'>{data.like}</b>
                                    </div>
                                </li>
                                <li className='nav-item mx-5'>
                                    <div className='text-muted mx-5'>
                                        <BsFillChatDotsFill/>
                                    </div>
                                </li>
                                <li className='nav-item mx-5'>
                                    <div className='mx-5 text-muted'>
                                    <button className='btn'><FaRegThumbsDown/></button>
                                        <b className='mx-2 text-primary'>{data.dislike}</b>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        </div>
                ))
            }   
        </div>
    )
}

export default Userview;