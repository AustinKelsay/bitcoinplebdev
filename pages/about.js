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
                <h3>My mission:</h3>
                <p>To participate in building software in the Bitcoin ecosystem, to focus on impacting and empowering individuals, to be surounded by colleagues and teams building impactful software.</p>

                <h3>My history:</h3>
                <p>I began my journey self taught after my interest in Bitcoin grew to a passion along with my understanding of money and software. Quickly my pursuit outgrew my means, and I got serious enough about my interest 2 years ago to enter Lambda School (now Bloomtech) as a Full Stack Web student. While continuing my studies, I worked as a Team Lead for 1 year helping other students learn to code. After graduation, in 2021, I accepted a position at Forethought as an AI Solutions Engineer.</p>
            </div>
            <div className="skills">
                <h3>My skills:</h3>
                <div className="skill-columns">
                    <div className="skill-column">
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
                    </div>
                    <div className='skill-column'>
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                    </div>
                    <div className="skill-column">
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
                    </div>
                    <div className="skill-column">
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" />
                    </div>
                    <div className="skill-column">
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                        <span>(Jest)</span>
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <span>(React Testing Library)</span>
                        <img className='skill-icon' src="https://avatars2.githubusercontent.com/u/8908513?s=400&v=4" />
                        <span>(Cypress)</span>
                        <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" />
                        <span>(Python UnitTest)</span>                        
                    </div>
                </div>
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
          font-size: 0.8rem;
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
        h3 {
            text-align: center;
            font-family: Inconsolata, monospace;
        }
        p {
            text-align: center;
            font-family: Inconsolata, monospace;
            font-size: 1rem;
        }
        .skill-columns {
            width: 70%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
        .skill-column {
            display: flex;
            flex-direction: column;
        }
        .skill-icon {
            margin: 1% auto;
            margin-top: 20%;
            width: 55px;
            height: 55px;
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
