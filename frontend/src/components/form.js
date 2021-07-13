import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom';
import { IoMdSend } from "react-icons/io";
import './form.css'

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
        <form className='myform'>
          <div className="mb-3">

            <div className='row'>

              <div className='col-10 mr-0 pr-0'>
                <label htmlFor="exampleFormControlTextarea" className='container-fluid m-0 p-0'>
                  <textarea className="form-control mystyle textarea" id="exampleFormControlTextarea" rows="6" onChange={(e)=>props.onChange.handleChange(e)}></textarea>
                </label>
              </div>
 
              <div className=' ml-0 col-2 pl-0 pt-5 mybnt'>
                <button className='m-0 col-2 subm p-0' type='submit' name='csrftoken'><IoMdSend style={{color:"#ADC8FF"}} size={60} className='mx-0 px-0'/></button>
              </div>

            </div>

          </div>
        </form>
    )
}


export default CreateTweetForm