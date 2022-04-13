import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'
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

  const handleSearch = e => {
    posts.forEach((post, i) => {
      if (!post.title.includes(e.target.value)) {
        document.querySelectorAll('.post')[i].classList.add('hide')
      } else document.querySelectorAll('.post')[i].classList.remove('hide')
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <input 
          type='text' 
          placeholder='Search' 
          className='search-bar' 
          onChange={handleSearch}
        />
        <FaSearch className='fa-search'/>
      </div>
      <div className='posts'>
      {
        posts.map(post => <Post key={post.id} post={post} users={users} />)
      }
      </div>
    </div>
  );
}

export default App;