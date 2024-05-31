import React, { Suspense } from 'react'
import { Header } from '../components/header'
import { Posts } from '../components/posts'
import loading from '../images/loading.gif'

export const Home = () => {

  return (
    <section>
      <Header featuredPostID={'6654a170ac7231be49232621'}/>
      <Suspense fallback={<img src={loading} alt="loading" />}>
        <Posts />
      </Suspense>
    </section>
  )
}
