
import React, {useState, useEffect} from 'react'


const Comments = (props)=>{
    
    return (
        <div className='container bg-secondary'>
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
}




export default Comments;