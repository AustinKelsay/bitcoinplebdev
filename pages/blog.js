import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link';

export default function Blog() {
    const [posts, setPosts] = useState([
        {
            title: 'Hello World',
            date: '2020-01-01',
            url: "/blog/hello"
        },
        {
            title: 'Journey to my first Bitcoin FOSS contribution (and tips for the other plebdevs)',
            date: '2020-01-01',
            url: "/blog/journey"
        }
    ])
  return (
    <div className="container">
      <Head>
        <title>bitcoinplebdev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
            <div className='blogs'>
                {posts.map((post, index) => {
                    return(
                        <div className='blog' key={index}>
                            <h4 className="project-title">{post.title}</h4>
                            <p className="project-caption">{post.date}</p>
                            <Link href={post.url}>read</Link>
                        </div>
                    )
                })
            }
            </div>
        </Layout>
      </main>

        <style jsx>{`
            .container {
            min-height: 100vh;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            }
            main {
            height: 100%;
            margin: 1% auto;
            width: 80%;
            }

            span {
            text-align: center;
            font-size: 0.7rem;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
            .blogs {
                width: 80%;
                margin: 1% auto;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
            }
            .blog {
                margin: 1% auto;
                padding: 0.5%;
            }
        `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            transition: all ease-in 20s;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background: linear-gradient(-30deg, #df590bcc, #c43232c5, #2aafe0c7, #473b88c5);
            background-size: 400% 400%;
            animation: gradient 60s ease infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
