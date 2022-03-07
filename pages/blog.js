import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image';
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
        },
        {
            title: 'Journey to my first Bitcoin FOSS contribution (and tips for the other plebdevs)',
            date: '2022-03-07',
            url: "/blog/journey",
            image: Journey.src,
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
                <InfiniteScroll
                    dataLength={posts.length}
                    height={'600px'}
                >
                <div className='blogs'>
                    {posts.map((post, index) => {
                        return(
                            <Card style={{margin: "5% auto"}} key={index} sx={{ maxWidth: 300 }}>
                                <CardActionArea href={post.url}>
                                    <CardMedia
                                        component="img"
                                        width="100"
                                        image={post.image}
                                        />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.date}
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
