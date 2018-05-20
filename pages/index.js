import React, { Component } from 'react';
import Link from 'next/link'
import axios from 'axios';
import Layout from './components/MyLayout.js'

const PostLink = ({ post}) => {
  return (
      <li>
        <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
          <a>{post.name}</a>
        </Link>
      </li>
  )
}

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <PostLink key={show.id} post={show}/>
      ))}
    </ul>
    
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await axios('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.data

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index


