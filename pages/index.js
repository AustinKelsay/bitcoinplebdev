import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import gameOfLife from "../images/gameOfLife.jpg";
import fbExplorer from "../images/fbexplorer.jpg";
import Reclaim from "../images/reclaimWide.png";
import KnowledgeBot from "../images/bitcoinKnowledgeBot.png";
import Sats4tips from "../images/sats4tips.png";
import PlebDevCourse from "../images/plebdev-course.png";
import PlebDevs from "../images/plebdevs.png";

const projects = [
  // {
  //   src: PlebDevs.src,
  //   altText: "PlebDevs",
  //   header: "PlebDevs Community",
  //   github: "https://github.com/pleb-devs",
  //   caption:
  //     "A scrappy group of developers focused on Bitcoin/Lightning app development. Let's level up together!",
  //   role: "Founder / Organizer",
  //   link: "https://discord.gg/FWkaBXmr",
  // },
  // {
  //   src: PlebDevCourse.src,
  //   altText: "PlebDevs course 1",
  //   header: "PlebDevs course 1",
  //   github: "https://github.com/pleb-devs/plebdev-course-1",
  //   caption:
  //     "Introducing the PlebDev course. One-stop course to build your first lightning app! We'll take you from a beginner to a capable front-end developer focusing on Bitcoin/Lightning projects.",
  //   role: "Instructor / Creator",
  //   link: "https://www.udemy.com/course/pleblabaustin/",
  // },
  {
    src: KnowledgeBot.src,
    altText: "Bitcoin Knowledge Bot",
    header: "Bitcoin Knowledge Bot",
    github: "https://github.com/bitcoin-knowledge/bitcoin-knowledge-bot",
    caption:
      "A question & answer AI bot that also suggests articles/podcasts. Powered by GPT-3 and trained on an open source dataset of established Bitcoin knowledge",
    link: "https://bitcoin-knowledge-bot-frontend.vercel.app",
  },
  {
    src: Sats4tips.src,
    altText: "Sats4Tips",
    header: "Sats4Tips",
    github: "https://github.com/cmdruid/lightning-tip-jar",
    caption: "Your own personalized space for collecting tips in Bitcoin.",
    link: "https://sats4.tips",
  },
  {
    src: Reclaim.src,
    altText: "Reclaim app image",
    header: "Reclaim",
    github: "https://github.com/ReclaimApp/Reclaim",
    caption:
      "Reclaim is an open source desktop app for collecting and storing your online information. With Reclaim you can collect your social media data in a few clicks and explore every photo, friend, and interaction from your digital life.",
    link: "https://github.com/ReclaimApp/Reclaim",
  },
  {
    src: fbExplorer.src,
    altText: "fb-explorer app image",
    header: "fbexplorer",
    github: "https://github.com/AustinKelsay/fb-explorer",
    caption:
      "fbexplorer is a tool that lets you reclaim, search, and explore all of your Facebook data. This is a single page application built with React and utilizing Redux/hooks for state management. fbexplorer does not collect any user's Facebook data or personal information.",
    link: "https://fbexplorer.app/",
  },
  {
    src: gameOfLife.src,
    altText: "austin's game of life app image",
    header: "Austin's game of life",
    github: "https://github.com/AustinKelsay/austins-game-of-life",
    caption:
      "An implementation of Conway’s Game of Life. This is a React single page application with a random cell placement feature, speed settings for the simulation, and the ability to step through each generation with a visual counter! I have always been fascinated by celular automata and conways game of life in paticular!",
    link: "https://austins-game-of-life.vercel.app/",
  },
];

export default function Home() {
  const options = { delay: 3000 }; // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement; // Root node
  const autoplay = Autoplay(options, autoplayRoot);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>bitcoinplebdev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {projects.map((project, index) => {
                return (
                  <div key={index} className="embla-project-container">
                    <img
                      onClick={() => window.open(project.link, "_blank")}
                      src={project.src}
                      className="embla__slide"
                    />
                    <h4 className="project-title">{project.header}</h4>
                  </div>
                );
              })}
            </div>
            <div className="text-container">
              <p className="welcome-text">Hello world!</p>
              <p className="welcome-text">
                I'm Austin, a Bitcoin plebdev, this is my project portfolio and
                blog.
              </p>
            </div>
          </div>
        </Layout>
      </main>

      <style jsx>{`
        main {
          height: 100vh;
          flex: 1 0 auto;
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
          width: 40%;
          border-radius: 25px;
        }

        .embla__slide:hover {
          box-shadow: 0 0 5px 3px #ff9900, 0 0 5px 3px #fff;
          transition: box-shadow 0.5s;
          cursor: pointer;
        }

        .project-title {
          margin: 0 auto;
          text-align: center;
          opacity: 0.8;
          font-size: 1.5rem;
        }

        .text-container {
          width: 60%;
          margin: 0 auto;
          margin-top: 1%;
          border-top: 2px solid black;
        }

        .welcome-text {
          padding-top: 1%;
          width: 60%;
          margin: 0 auto;
          text-align: center;
          opacity: 0.8;
          font-family: Inconsolata, monospace;
          font-size: 1.2rem;
          margin-top: 1%;
        }

        .embla__slide {
          width: 45%;
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
          font: 700 1.2rem "Open Sans", sans-serif;
          padding: 0.5em 1.5em;
          letter-spacing: 0.05rem;
          border: 2px solid black;
        }

        .embla__prev:focus,
        .embla__next:focus {
          box-shadow: inset 0 0 0 4px #e0ffff;
          border: 1px solid #2f4f4f;
        }

        .embla__prev:hover,
        .embla__next:hover {
          border: 2px solid #ccc;
        }
        @media (max-width: 1450px) {
          .embla-project-container {
            width: 100%;
          }
          .embla__slide {
            width: 70%;
          }
          .project-title {
            width: 80%;
            margin-top: 1%;
            font-size: 1.6rem;
          }
          .text-container {
            width: 70%;
          }
          .welcome-text {
            width: 80%;
            margin-top: 2%;
            font-size: 1.3rem;
          }
        }
        @media (max-width: 1350px) {
          .embla-project-container {
            width: 100%;
          }
          .embla__slide {
            width: 70%;
          }
          .project-title {
            width: 80%;
            margin-top: 1%;
            font-size: 1.6rem;
          }
          .welcome-text {
            width: 80%;
            margin-top: 2%;
            font-size: 1.3rem;
          }
        }
        @media (max-width: 1200px) {
          .embla-project-container {
            width: 100%;
          }
          .embla__slide {
            width: 80%;
          }
          .project-title {
            width: 100%;
            margin-top: 1%;
            font-size: 1.6rem;
          }
          .welcome-text {
            width: 100%;
            margin-top: 2%;
            font-size: 1.3rem;
          }
        }
        @media (max-width: 1024px) {
          .embla-project-container {
            width: 100%;
          }
          .embla__slide {
            width: 90%;
          }
          .project-title {
            width: 100%;
            margin-top: 1%;
            font-size: 1.3rem;
          }
          .text-container {
            width: 80%;
            margin-top: 5%;
          }
          .welcome-text {
            width: 100%;
            margin-top: 3%;
            font-size: 1.2rem;
          }
        }
        @media (max-height: 900px) and (max-width: 1500px) {
          .embla-project-container {
            width: 100%;
          }
          .embla__slide {
            width: 35%;
            margin-top: 3%;
          }
          .project-title {
            margin-top: 1%;
          }
          .text-container {
            font-size: 1rem;
            margin: 0.5% auto;
          }
        }
        @media (max-width: 650px) {
          .embla-project-container {
            width: 100%;
          }
          .embla__slide {
            width: 90%;
          }
          .project-title {
            width: 100%;
            margin-top: 5%;
            font-size: 1.3rem;
          }
          .text-container {
            width: 90%;
            margin-top: 5%;
          }
          .welcome-text {
            width: 100%;
            margin-top: 5%;
            font-size: 1.2rem;
          }
        }
        @media (max-width: 600px) {
          .embla-project-container {
            width: 100%;
          }
          .embla__slide {
            width: 80%;
          }
          .project-title {
            width: 100%;
            margin-top: 5%;
            font-size: 1.3rem;
          }
          .text-container {
            width: 90%;
            margin-top: 5%;
          }
          .welcome-text {
            width: 80%;
            font-size: 1.2rem;
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
          background: linear-gradient(
            -30deg,
            #df590bcc,
            #c43232c5,
            #2aafe0c7,
            #473b88c5
          );
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
  );
}
