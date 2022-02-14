import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { SocialIcon } from 'react-social-icons';
import gameOfLife from "../images/gameOfLife.jpg"
import fbExplorer from "../images/fbexplorer.jpg"
import Reclaim from "../images/reclaimWide.png"
import KnowledgeBot from "../images/bitcoinKnowledgeBot.png"

const projects = [
  {
      src: KnowledgeBot.src,
      altText: 'Bitcoin Knowledge Bot',
      header: "Bitcoin Knowledge Bot",
      github: "https://github.com/bitcoin-knowledge/bitcoin-knowledge-bot",
      caption: "A question & answer AI bot that also suggests articles/podcasts. Powered by GPT-3 and trained on an open source dataset of established Bitcoin knowledge",
      link: "https://bitcoin-knowledge-bot.vercel.app"
  },
  {
      src: Reclaim.src,
      altText: "Reclaim app image",
      header: "Reclaim",
      github: 'https://github.com/ReclaimApp/Reclaim',
      caption: "Reclaim is an open source desktop app for collecting and storing your online information. With Reclaim you can collect your social media data in a few clicks and explore every photo, friend, and interaction from your digital life.",
      link: "https://github.com/ReclaimApp/Reclaim"
  },
  {
      src: fbExplorer.src,
      altText: "fb-explorer app image",
      header: "fbexplorer",
      github: 'https://github.com/AustinKelsay/fb-explorer',
      caption: "fbexplorer is a tool that lets you reclaim, search, and explore all of your Facebook data. This is a single page application built with React and utilizing Redux/hooks for state management. fbexplorer does not collect any user's Facebook data or personal information.",
      link: 'https://fbexplorer.app/'
  },
  {
      src: gameOfLife.src,
      altText: "austin's game of life app image",
      header: "Austin's game of life",
      github: 'https://github.com/AustinKelsay/austins-game-of-life',
      caption: 'An implementation of Conway’s Game of Life. This is a React single page application with a random cell placement feature, speed settings for the simulation, and the ability to step through each generation with a visual counter! I have always been fascinated by celular automata and conways game of life in paticular!',
      link: 'https://austins-game-of-life.vercel.app/'
    }
]


export default function Home() {
  const options = { delay: 3000 } // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
  const autoplay = Autoplay(options, autoplayRoot)
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [autoplay])
  return (
    <div className="container">
      <Head>
        <title>bitcoinplebdev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          plebdev
        </h1>
        <div className='column-container'>
          <div className='column'>
            <Link href='/about'>
              <button className='btn draw-border'>
                <p className='btn-text'>
                  About
                </p>
              </button>
            </Link>
          </div>
          <div className='column'>
            <Link href='projects'>
              <button className='btn draw-border'>
                <p className='btn-text'>
                  Projects
                </p>
              </button>
            </Link>
          </div>
          <div className='column'>
            <Link href='/blog'>
              <button className='btn draw-border'>
                <p className='btn-text'>
                  Blog
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div className="embla" ref={emblaRef}>
            <div className='embla__container'>
                {projects.map((project, index) => {
                    return(
                        <div key={index} className='embla-project-container'>
                            <img onClick={() => window.open(project.link, "_blank")} src={project.src} className="embla__slide"/>
                            <h4 className="project-title">{project.header}</h4>
                            <p className="project-caption">{project.caption}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
      </main>

      <footer>
        <SocialIcon url="https://github.com/austinkelsay" />
        <SocialIcon url="https://twitter.com/ASeries_ofTubes" />
      </footer>

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
          width: 50%;
        }

        footer {
          width: 10%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        span {
          text-align: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin-top: 2%;
          line-height: 1.15;
          font-size: 4rem;
          margin-bottom: 1%;
        }

        .title,
        .description {
          text-align: center;
        }

        .column-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 1% auto;
        }

        .column {
          margin: 2% auto;
          width: 60%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .draw-border {
          box-shadow: inset 0 0 0 4px black;
          color: #5E54EA;
          transition: color 0.15s 0.0833333333s;
          position: relative;
        }

        .draw-border::before, .draw-border::after {
          border: 0 solid transparent;
          box-sizing: border-box;
          content: '';
          pointer-events: none;
          position: absolute;
          width: 0;
          height: 0;
          bottom: 0;
          right: 0;
        }

        .draw-border::before {
          border-bottom-width: 4px;
          border-left-width: 4px;
        }

        .draw-border::after {
          border-top-width: 4px;
          border-right-width: 4px;
        }

        .draw-border:hover {
          color: #FF9900;
        }

        .draw-border:hover::before, .draw-border:hover::after {
          border-color: #FF9900;
          transition: border-color 0s, width 0.25s, height 0.25s;
          width: 100%;
          height: 100%;
        }

        .draw-border:hover::before {
          transition-delay: 0s, 0s, 0.25s;
        }

        .draw-border:hover::after {
          transition-delay: 0s, 0.25s, 0s;
        }

        .btn {
          background: none;
          border: none;
          cursor: pointer;
          line-height: 1.5;
          padding: 0.5em 1.5em;
          letter-spacing: 0.05rem;
          color: black;
          font-size: 1.3rem;
        }

        .btn:focus {
          box-shadow: inset 0 0 0 4px #E0FFFF;
          border: 1px solid #2F4F4F
        }
        
        .btn p {
          font-family: 'Roboto Mono', monospace;
          font-size: 0.9rem;
          margin: 0;
          color: black;
        }

        .embla {
          margin: 0 auto;
          margin-top: 2%;
          padding-bottom: 2%;
          overflow: hidden;
          width: 100%;
          border-radius: 10px;
      }

      .embla__container {
          display: flex;
          border-radius: 10px;
      }

      .embla-project-container {
          margin: 0 auto;
          position: relative;
          flex: 0 0 100%;
          display: flex;
          flex-direction: column;
          width: 90%;
          border-radius: 25px;
          padding-bottom: 2%;
      }

      .embla__slide:hover {
        box-shadow:
        0 0 5px 3px #FF9900,
        0 0 5px 3px #fff;
          transition: box-shadow 0.5s;
          cursor: pointer;
      }

      .project-title {
          margin: 0 auto;
          margin-top: 1%;
          text-align: center;
          opacity: 0.8;
      }

      .project-caption {
          margin: 0 auto;
          text-align: center;
          opacity: 0.8;
          font-family: Inconsolata, monospace;
      }

      .embla__slide {
          width: 99%;
          margin: 1% auto;
          height: auto;
          border-radius: 10px;
      }

      .embra-button-container {
          width: 60%;
          margin: 0 auto;
          margin-top: 2%;
          display: flex;
          justify-content: space-around;
      }

      .embla__prev,
      .embla__next {
          margin: 1% auto;
          background: none;
          border: none;
          cursor: pointer;
          line-height: 1.5;
          font: 700 1.2rem 'Open Sans', sans-serif;
          padding: 0.5em 1.5em;
          letter-spacing: 0.05rem;
          border: 2px solid black;
      }

      .embla__prev:focus,
      .embla__next:focus {
          box-shadow: inset 0 0 0 4px #E0FFFF;
          border: 1px solid #2F4F4F
        }

      .embla__prev:hover,
      .embla__next:hover {
          border: 2px solid #ccc;
      }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
            background-size: 300% 300%;
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
