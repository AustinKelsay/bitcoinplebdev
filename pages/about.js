import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);
  return (
    <div className={windowWidth > 460 ? "container" : "mobile-container"}>
      <Head>
        <title>bitcoinplebdev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <InfiniteScroll dataLength={3} height={"60vh"}>
            <div className="text-container">
              <div className="text-block">
                <h3>ABOUT</h3>
                <p>
                  My name is Austin, I'm a fullstack developer with a passion
                  for Bitcoin. My mission is to build software that empowers
                  individuals and makes a positive impact in the Bitcoin
                  ecosystem. I work as a Frontend engineer at Fold and I am also
                  dedicated to developer education and have founded the PlebDevs
                  community, a scrappy group of developers focused on
                  Bitcoin/Lightning app development. Recently I launched the
                  first PlebDev course, a beginners frontend development course
                  focused on lightning. The course has helped over 350 students
                  across 42 countries and has been well-received by the
                  community. By combining my skills and passion for Bitcoin, I
                  am committed to building software that makes a difference in
                  people's lives.
                </p>
                <span>Location: Austin TX, or remote</span>
                <span>Email: bitcoinplebdev@protonmail.com</span>
              </div>
              <div className="text-block">
                <h3>MY HISTORY</h3>
                <p>
                  I began my journey self taught after my interest in Bitcoin
                  and software grew to a passion. Quickly I got serious enough
                  to enter Lambda School (now Bloomtech) as a Full Stack Web
                  student. While continuing my studies, I worked as a Team Lead
                  for 1 year helping other students learn to code. After
                  graduation, in 2021, I accepted a position at Forethought as
                  an AI Solutions Engineer. Although the experience was
                  valuable, my passion for Bitcoin led me to pursue a new
                  opportunity as a frontend engineer at Fold. There, I have been
                  working on developing user-friendly interfaces to help
                  individuals learn about and earn Bitcoin in their day-to-day
                  lives. In addition to my work at Fold, I have founded and lead
                  the PlebDevs community, which is dedicated to developer
                  education in the Bitcoin ecosystem. Recently, I launched the
                  first PlebDev course, which has been well-received and has
                  helped many developers learn the basics of building
                  Bitcoin/Lightning apps. Through my experiences as a
                  self-taught developer, Lambda School graduate / Team Lead, AI
                  Solutions Engineer, frontend engineer at Fold, and founder of
                  PlebDevs, I have built a strong foundation of skills and
                  knowledge. With a focus on empowering individuals and creating
                  impactful software in the Bitcoin ecosystem.
                </p>
              </div>
            </div>
            <div className="skills">
              <h3>MY SKILLS</h3>
              <div className="skill-columns">
                <div className="skill-column">
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  />
                  <p className="skill-category-text">frontend</p>
                </div>
                <div className="skill-column">
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  />
                  <p className="skill-category-text">UI/UX</p>
                </div>
                <div className="skill-column">
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg"
                  />
                  <p className="skill-category-text">backend</p>
                </div>
                <div className="skill-column">
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                  />
                  <span>(Jest)</span>
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />
                  <span>(RTL)</span>
                  <img
                    className="skill-icon"
                    src="https://avatars2.githubusercontent.com/u/8908513?s=400&v=4"
                  />
                  <span>(Cypress)</span>
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
                  />
                  <span>(Python UnitTest)</span>
                  <img
                    className="skill-icon"
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/selenium-2-570545.png"
                  />
                  <span>(Selenium)</span>
                  <p className="skill-category-text">testing</p>
                </div>
                <div className="skill-column">
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
                  />
                  <img
                    className="skill-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
                  />
                  <p className="skill-category-text">miscellaneous</p>
                </div>
              </div>
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
          padding-top: 2%;
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
          margin-top: 5%;
          display: flex;
        }
        .text-block {
          display: flex;
          flex-direction: column;
          width: 48%;
          margin: 1%;
          padding: 1%;
          border: 2px solid black;
          border-radius: 10px;
          background-color: rgb(255, 255, 255, 0.5);
          margin-top: 0;
        }
        .text-block span {
          margin-top: 2%;
        }
        h3 {
          text-align: center;
          margin-top: 0;
        }
        p {
          text-align: center;
          font-size: 1rem;
          margin: 0 auto;
        }
        .skill-columns {
          margin: 0 auto;
          padding: 0.5%;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          border: 2px solid black;
          border-radius: 10px;
          background-color: rgba(247, 149, 29, 0.85);
        }
        .skill-column {
          display: flex;
          flex-direction: column;
          width: 10%;
          min-height: 100%;
          justify-content: space-around;
          align-items: center;
          padding-bottom: 1%;
        }
        .skill-column span {
          text-align: center;
        }
        .skill-icon {
          margin: 0 auto;
          margin-top: 10%;
          width: 55px;
          height: 55px;
        }
        .skill-category-text {
          border-top: 2px solid black;
          font-size: 0.8rem;
          margin-top: 10%;
          margin-bottom: 0;
        }
        @media (max-width: 1024px) {
          .text-container {
            margin-top: 10%;
            flex-direction: column;
            width: 100%;
          }
          .text-block {
            width: 99%;
          }
          .skill-columns {
            width: 100%;
            flex-wrap: wrap;
          }
          .skill-column {
            width: 50%;
          }
          h3 {
            margin-top: 5%;
            margin-bottom: 1%;
          }
          .skill-category-text {
            font-size: 1rem;
            border-top: 2px solid #ff9900;
          }
        }
        @media (max-width: 500px) {
          main {
            width: 90%;
          }
          .text-container {
            margin-top: 12%;
            flex-direction: column;
            width: 100%;
          }
          .text-block {
            width: 99%;
          }
          .skill-columns {
            width: 100%;
            flex-wrap: wrap;
          }
          .skill-column {
            width: 50%;
          }
          h3 {
            margin-top: 2%;
            margin-bottom: 1%;
          }
          .skill-category-text {
            font-size: 1rem;
            border-top: 2px solid #ff9900;
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
