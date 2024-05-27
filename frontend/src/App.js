import {useEffect, useState} from 'react'
import './App.css'
import {Posts} from './components/posts'

function App() {

  const [postData, setPostData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
    .then(res => res.json())
    .then(data => setPostData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <main className="App container max-w-screen-2xl">
     <Posts data={postData}/>
    </main>
  );
}

export default App;
