import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
      const [post, setPost]=useState({
            title:'',
            body:''
      })
      const handleInput=(e)=>{
            setPost({...post, [e.target.name]: e.target.value})
            // adds input value to post 
            
            console.log(post);
            
      }

      const handleSubmit=(e)=>{
          e.preventDefault()
          axios.post('https://dummyjson.com/auth/login', {post})
          .then(response=>{console.log(response)
            setPost({
                  title:'',
                  body:''
            })
          })
          .catch(err=> console.log(err))
          
          
     
      }
  return (
    <div className='container mx-auto text-center mt-12'>
      <form onSubmit={handleSubmit} action="">
            title: <input onChange={handleInput} value={post.title} name='title' type="text" /> <br/>
            body: <input onChange={handleInput} value={post.body} name='body' type="text" /> <br/>
            <button className="p-2  bg-blue-100">submit</button>
      </form>


      {/*  */}
      emilyspass
    </div>
  )
}

export default Login
