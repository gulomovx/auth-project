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
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <hr />
            <p className='bg-slate-200'>{post.body}</p>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Posts;
