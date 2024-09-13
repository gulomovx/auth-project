import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      console.log(data[0]);

    };
    getPosts();

  }, []);

  return (
    <div className='container overflow-hidden'>
      <h1 className='text-center text-[50px] text-slate-700 font-extrabold'>Latest Posts</h1>
      <ul className='grid'>
        {posts.map(post => (
          <li key={post.id}>
            <h2 className='text-2xl'>{post.title}</h2>
            <hr />
            <div className='p-2 rounded-md border'>{post.body.slice(0,120)}...</div>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Posts;
