import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
          }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');


const CreateTweetForm = (props)=>{
    return (
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea" className="form-label">Your tweet</label>
            <textarea className="form-control" id="exampleFormControlTextarea" rows="3" onChange={(e)=>props.onChange.handleChange(e)}></textarea>
          </div>
          <div className="mb-3">
            <button type='submit' name='csrftoken' className='m-2'>Tweet</button>
          </div>
        </form>
    )
}


export default CreateTweetForm