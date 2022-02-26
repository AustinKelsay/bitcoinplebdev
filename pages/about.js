import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { SocialIcon } from 'react-social-icons';
import gameOfLife from "../images/gameOfLife.jpg"
import fbExplorer from "../images/fbexplorer.jpg"
import Reclaim from "../images/reclaimWide.png"
import KnowledgeBot from "../images/bitcoinKnowledgeBot.png"


export default function About() {
  return (
    <div className="container">
      <Head>
        <title>bitcoinplebdev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
            <div className='text-container'>
                <h4>My mission:</h4>
                <p>To participate in software that is meaningful for individuals. To be surounded by colleagues and teams building impactful software.</p>

                <h4>My history:</h4>
                <p>I began my journey self taught after my interest in Bitcoin grew to a passion along with my understanding of money and software. Quickly my pursuit outgrew my means, and I got serious enough about my interest 2 years ago to enter Lambda School (now Bloomtech) as a Full Stack Web student. While continuing my studies, I worked as a Team Lead for 1 year helping other students learn to code. After graduation, in 2021, I accepted a position at Forethought as an AI Solutions Engineer.</p>
            </div>
        </Layout>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        span {
          text-align: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        .text-container {
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
