import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByid } from '../api'; 
import { BiSolidLike } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";

const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPostsByid(id); 
        console.log('Fetched Post Data:', data)
        setPost(data); 
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false); 
      }
    };

    getPost();
  }, [id]);

  

  

  return (
    <div className="max-w-4xl container h-screen  md:text-start mx-auto md:mt-32 mt-20 ">
      <div className=' '>
        <h1 className="md:text-5xl text-xl font-bold mb-4">{post?.title}</h1>
        <p className="text-gray-600 text-lg ">{post?.body}</p>
        <div className="flex items-center justify-between text-sm  mt-8 border px-2 md:px-6 py-2 rounded-3xl  ">
    
          {/* like  */}
          <div className="flex items-center justify-between gap-2 text-gray-400 italic">
          <p>{post?.reactions.likes}</p>
          <BiSolidLike size={24}/>
          

          </div>
          {/* views */}
          <div className="flex items-center justify-between gap-2 text-gray-400 italic">
          <p>{post?.views}</p>
          <FaRegEye size={24}/>
          

          </div>
          {/* tags */}
        <div className="flex items-center gap-4 text-gray-400 italic">
         
         {post?.tags.map(item=>(
          <p className=''>{item}</p>
            
         ))}
        </div>
        </div>
       


      </div>
    </div>
  );
};

export default PostDetail;
