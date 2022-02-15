import { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPostsFromServer();
      const users = await fetchUsersFromServer();
      setPosts(posts);
      setUsers(users);
    };
    getPosts();
  }, []);

  const fetchPostsFromServer = async () => {
    const res = await fetch(postsUrl);
    const data = await res.json();
    return data;
  };

  const fetchUsersFromServer = async () => {
    const res = await fetch(usersUrl);
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      {
        posts.map(post => <Post key={post.id} post={post} users={users} />)
      }
    </div>
  );
}

export default App;