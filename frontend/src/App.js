import { useEffect, useState } from 'react'
import { PostsContext } from './context/postsContext'
import './index.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Outlet } from 'react-router-dom'

function App() {

  const [postsData, setPostsData] = useState([])
  const [featured] = useState(false)

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:3001/api/posts')
      const posts = await res.json()
      return setPostsData(posts)
    }
    getPosts()
    .catch(err => console.log(err))
  }, [])
  

  return (
    <main className="App bg-neutral-50">
      <PostsContext.Provider value={{featured, postsData, setPostsData}}>
        <Navbar />
        <Outlet/>
      </PostsContext.Provider>
      <Footer />
    </main>
  );
}

export default App;
