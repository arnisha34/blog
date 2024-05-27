import {useEffect, useState} from 'react'
import './index.css'
import {Posts} from './components/posts'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { Footer } from './components/footer'

function App() {

  const [postData, setPostData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
    .then(res => res.json())
    .then(data => setPostData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <main className="App bg-neutral-50">
      <Navbar />
      <Header />
      <Posts data={postData}/>
      <Footer />
    </main>
  );
}

export default App;
