import {useEffect, useState} from "react";
import { Link } from "react-router-dom";


export default function Posts() {
    const [posts, setPosts] = useState({});
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        async function fetchPosts() {
          try {
            const res = await fetch('http://localhost:3000/posts', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });
            const data = await res.json();
            setPosts(data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchPosts();
      }, [token]);

      return (
        <div>
          <h1>These are latest posts</h1>
          {posts.length ? (
            [...posts].reverse().map((post) => (
              <div key={post.id}>
                <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.author.username} {new Date(post.createdAt).toLocaleString()}</p>
                <p>{post.body.slice(0, 50)}</p>
                <hr />
                </Link>
              </div>
            ))
          ) : (
            <p>No posts</p>
          )}
        </div>
      );
}