import { useState, useEffect } from 'react'
import './App.css'
import { getBlogPosts, type BlogPost } from './api/blogPosts';

function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadPostList = () => {
    setLoading(true);
    getBlogPosts().then((postList) => {
      if (postList) {
        setTimeout(() => {
          setPosts(postList.data);
        }, 1000);
      }
    }).finally(() => setLoading(false));
  }

  useEffect(() => {
    loadPostList()
  }, []);

  return (
    <>
      <section id="center">
        <div>
          <h1>Blog posts list</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => loadPostList()}
        >
          Update post list
        </button>
        <div className='usersContainer'>
          {loading && <h1>Blog posts loading...</h1>}
          {!loading && posts.map((post) => (
            <div key={post.id} className='userCard'>
              <div><b>{post.title}</b></div>
              <div>Status: {post.status}</div>
              <div>Category id: {post.category?.id}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App