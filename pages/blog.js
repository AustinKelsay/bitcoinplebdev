import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout'
import Hello from "../images/hello.jpg"
import Journey from "../images/journey.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Blog() {
  const [posts, setPosts] = useState([
      {
          title: 'Hello World',
          date: '2022-03-07',
          url: "/blog/hello",
          image: Hello.src,
          first_paragraph: "I’m Austin. Here I will be posting about my journey as a plebdev getting into Bitcoin/FOSS development. \n\ Expect to see: \n\ - Programming tips, tricks, and hard lessons learned. \n - Highlights of important FOSS developments in the Bitcoin space \n - High signal Bitcoin/dev resources \n - Tasteful memes"
      },
      {
          title: 'Journey to my first Bitcoin FOSS contribution (and tips for the other plebdevs)',
          date: '2022-03-07',
          url: "/blog/journey",
          image: Journey.src,
          first_paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }
  ])
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  return (
    <div className={windowWidth > 460 ? "container" : "mobile-container"}>
      <Head>
        <title>bitcoinplebdev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
                <InfiniteScroll
                    dataLength={posts.length}
                    height={'60vh'}
                >
                <div className='blogs'>
                    {posts.map((post, index) => {
                        return(
                            <Card style={{margin: "5% auto"}} key={index} sx={{ maxWidth: 450, maxHeight: 500, backgroundColor: "rgb(255, 255, 255, 0.8);" }}>
                                <CardActionArea href={post.url}>
                                    <CardMedia
                                        component="img"
                                        width="150"
                                        image={post.image}
                                        />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ wordWrap: 'break-word' }}>
                                            {post.first_paragraph}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            )
                        })
                    }
                </div>
            </InfiniteScroll>
        </Layout>
      </main>

        <style jsx>{`
            .container {
              min-height: 100vh;
              height: -webkit-fill-available;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .mobile-container {
              height: 100vh;
              height: -webkit-fill-available;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
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
            h4 {
                margin: 0 auto;
                text-align: center;
                margin-bottom: 2%;
                color: white;
            }
            a {
                color: inherit;
                text-decoration: none;
            }
            p {
                margin: 0 auto;
                color: white;
            }
            .blogs {
                width: 80%;
                margin: 1% auto;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                flex-wrap: wrap;
            }
            @media (max-width: 750px) {
                .blogs {
                  width: 100%;
                  margin-top: 5%;
                }
            }
        `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: auto;
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
