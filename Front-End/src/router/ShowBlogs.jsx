import { id } from "@rolldown/pluginutils";
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

function ShowBlogs(){

    const [posts,setPosts] = useState([
        {
            _id:"1",
            image:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
            caption:"Beautiful image",
        },
    ])

    useEffect(()=>{

        axios.get("http://localhost:3000/post")
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data);
        }).catch((err)=>{
            console.log(err);
        })

        
    },[])


    return (
        <section className="blog-section">
            {
               posts.map((post)=>(
                    <div key={post._id} className="post-card">
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
               ))
            }
        </section>
    )
}

export default ShowBlogs