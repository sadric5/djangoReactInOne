
import React, {useState, useEffect} from 'react'
import {CreateCommentForm} from './form'
import './comment.css'


const Comments = (props)=>{
    if(props.showOrNot){
        return (
            <div className='container commetBg'>
                <CreateCommentForm/>
                <div className='text-primary text-uppercase ms-0'>Comments :<br/> <br/></div>
                {
                    props.value.map(item =>(
                    <p className='sm text-white ' key={item.id}>
                        {item.comment}<br/>
                        <span className='text-muted text-white'>
                            {item.comment_date}
                        </span>
                    </p>
    
                    ))
                }
            </div>
        )
    }else{
        return null;
    }
}




export default Comments;