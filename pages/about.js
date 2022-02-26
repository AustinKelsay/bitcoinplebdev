import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head'
import Layout from '../components/layout'


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
                <p>To participate in building software around the Bitcoin ecosystem. To focus on impacting and empowering individuals, To be surounded by colleagues and teams building impactful software.</p>

                <h4>My history:</h4>
                <p>I began my journey self taught after my interest in Bitcoin grew to a passion along with my understanding of money and software. Quickly my pursuit outgrew my means, and I got serious enough about my interest 2 years ago to enter Lambda School (now Bloomtech) as a Full Stack Web student. While continuing my studies, I worked as a Team Lead for 1 year helping other students learn to code. After graduation, in 2021, I accepted a position at Forethought as an AI Solutions Engineer.</p>
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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .text-container {
            margin: 0 auto;
            overflow: hidden;
            width: 100%;
            border-radius: 10px;
        }
        h4 {
            text-align: center;
            font-family: Inconsolata, monospace;
            padding-top: 5%;
        }
        p {
            text-align: center;
            font-family: Inconsolata, monospace;
            padding-bottom: 10%;
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
