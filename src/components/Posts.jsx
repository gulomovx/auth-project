import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import { Link } from 'react-router-dom';
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      // console.log(data[0]);

    };
    getPosts();

  }, []);
  
  

  return (
    <div className='container mt-20 overflow-hidden'>
      <h1 className='text-center md:text-[50px] text-[40px] text-slate-700 font-extrabold'>Latest Posts</h1>
      <ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {posts.map(post => (
          <Link to={`/posts/${post.id}`} className=' border rounded-md py-6 px-4 ' key={post.id}>
            <h2 className='md:text-2xl text-[20px] font-semibold mb-2'>{post.title.slice(0,30)}...</h2>
            
            <p  className='   '>
              <p>{post.body.slice(0,100)}...</p>

            </p>
          </Link>
        ))} 
      </ul>
    </div>
  );
};

export default Posts;
