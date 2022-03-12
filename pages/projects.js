import React, {useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Layout from '../components/Layout'
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

export default function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    return(
        <div className='container'>
            <main>
                <Layout>
                    <div className="embla" ref={emblaRef}>
                        <div className='embla__container'>
                        {projects.map((project, index) => {
                            return(
                                <div key={index} className='embla-project-container'>
                                    <div className='slide-container'>
                                        <button className="arrow left" onClick={scrollPrev} />
                                        <img src={project.src} className="embla__slide"/>
                                        <button className="arrow right" onClick={scrollNext} />
                                    </div>
                                    <h4 className="project-title">{project.header}</h4>
                                    <p className='project-caption'>{project.caption}</p>
                                    <div className='project-button-container'>
                                        <a href={project.link} target='_blank'>
                                            <button className='project-button'>
                                                <p className='btn-text'>
                                                    deployment link
                                                </p>
                                            </button>
                                        </a>
                                        <a href={project.github} target="_blank">
                                            <button className="project-button">
                                                <p className='btn-text'>
                                                    github link
                                                </p>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
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
                    margin-top: 2%;
                  }
                  a {
                    color: inherit;
                    text-decoration: none;
                  }
                  span {
                      width: 6%;
                      margin: 0 auto;
                      margin-top: 0;
                      text-align: center;
                      margin-top: 1%;
                      margin-bottom: 1rem;
                      border-bottom: 2px solid transparent;
                  }
                  span:hover {
                      border-bottom: 2px solid #FF9900;
                      cursor: pointer;
                      transition: all 0.4s ease-in-out;
                  }
                  h3 {
                    text-align: center;
                  }
                .embla {
                    margin: 0 auto;
                    overflow: hidden;
                    width: 100%;
                    border-radius: 10px;
                }
                .embla__container {
                    display: flex;
                    flex-direction: row;
                    border-radius: 10px;
                }
                .embla-project-container {
                    margin: 0 auto;
                    position: relative;
                    flex: 0 0 100%;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    border-radius: 10px;
                }
                .project-title {
                    margin: 0 auto;
                    margin-top: 1%;
                    text-align: center;
                }
                .project-caption {
                    width: 70%;
                    margin: 1% auto;
                    text-align: center;
                }
                .slide-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    width: 50%;
                }
                .embla__slide {
                    width: 100%;
                    margin: 1% auto;
                    height: auto;
                    border-radius: 10px;
                }
                .arrow {
                    border: solid black;
                    border-width: 0 10px 10px 0;
                    display: inline-block;
                    padding: 8px;
                    background:none;
                }
                .arrow:hover {
                    border: solid #FF9900;
                    border-width: 0 10px 10px 0;
                    display: inline-block;
                    padding: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                }
                .right {
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    margin-left: 2%;
                }
                  
                .left {
                    transform: rotate(135deg);
                    -webkit-transform: rotate(135deg);
                    margin-right: 2%;
                }
                .project-button-container {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                }
                .project-button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    line-height: 1.5;
                    padding: 0.5em 1.5em;
                    color: black;
                    border: 4px solid black;
                }
                .project-button:hover {
                    background: #FF9900;
                    transition: all 0.4s ease-in-out;
                }

                .btn-text {
                    font-family: Inconsolata, monospace;
                    font-size:1rem;
                    margin: 0;
                    color: black;
                }
                .embra-button-container {
                    width: 60%;
                    margin: 0 auto;
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
                @media (max-width: 1850px) {
                    .slide-container {
                        width: 60%;
                    }
                }
                @media (max-width: 1650px) {
                    .slide-container {
                        width: 65%;
                    }
                }
                @media (max-width: 1400px) {
                    .slide-container {
                        width: 75%;
                    }
                }
                @media (max-width: 975px) {
                    .slide-container {
                        width: 85%;
                    }
                    .arrow {
                        border-width: 0 6px 6px 0;
                    }
                    .arrow:hover {
                        border: solid #FF9900;
                        border-width: 0 6px 6px 0;
                        display: inline-block;
                        cursor: pointer;
                        transition: all 0.2s ease-in-out;
                    }
                    .right {
                        margin-left: 0;
                    }
                    .left {
                        margin-right: 0;
                    }
                    .project-title {
                        margin-top: 5%;
                    }
                    .project-caption {
                        width: 100%;
                        margin-bottom: 10%;
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