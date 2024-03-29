import React, { useEffect, useState, useCallback } from "react";
import Layout from "../components/Layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Button } from "@mui/material";
import gameOfLife from "../images/gameOfLife.jpg";
import fbExplorer from "../images/fbexplorer.jpg";
import Reclaim from "../images/reclaimWide.png";
import KnowledgeBot from "../images/bitcoinKnowledgeBot.png";
import Alby from "../images/alby.png";
import Sats4tips from "../images/sats4tips.png";
import PlebDevCourse from "../images/plebdev-course.png";
import PlebDevs from "../images/plebdevs.png";

const projects = [
  {
    src: PlebDevs.src,
    altText: "PlebDevs",
    header: "PlebDevs Community",
    github: "https://github.com/pleb-devs",
    caption:
      "A scrappy group of developers focused on Bitcoin/Lightning app development. Let's level up together!",
    role: "Founder / Organizer",
    link: "https://discord.gg/FWkaBXmr",
  },
  {
    src: PlebDevCourse.src,
    altText: "PlebDevs course 1",
    header: "PlebDevs course 1",
    github: "https://github.com/pleb-devs/plebdev-course-1",
    caption:
      "Introducing the PlebDev course. One-stop course to build your first lightning app! We'll take you from a beginner to a capable front-end developer focusing on Bitcoin/Lightning projects.",
    role: "Instructor / Creator",
    link: "https://www.udemy.com/course/pleblabaustin/",
  },
  {
    src: Sats4tips.src,
    altText: "Sats4Tips",
    header: "Sats4Tips",
    github: "https://github.com/cmdruid/lightning-tip-jar",
    caption:
      "Your own personalized space for collecting tips in Bitcoin. \n I helped build out the frontend and styles with my team at the Bitcoin++ hackathon",
    role: "Frontend Developer",
    link: "https://sats4.tips",
  },
  {
    src: Alby.src,
    altText: "Alby",
    header: "Alby",
    github: "https://github.com/getAlby",
    caption:
      "Contributed feature that allows users to tip on reddit and recognize lightning adresses on reddit user descriptions as well as extending the LUD-18 payer data capabilities for the wallet/extension.",
    role: "Open Source Contributor",
    link: "https://getalby.com",
  },
  {
    src: KnowledgeBot.src,
    altText: "Bitcoin Knowledge Bot",
    header: "Bitcoin Knowledge Bot",
    github: "https://github.com/bitcoin-knowledge/bitcoin-knowledge-bot",
    caption:
      "A question & answer AI bot that also suggests articles/podcasts. Powered by GPT-3 and trained on an open source dataset of established Bitcoin knowledge",
    role: "Creator and Developer",
    link: "https://bitcoin-knowledge-bot-frontend.vercel.app",
  },
  {
    src: Reclaim.src,
    altText: "Reclaim app image",
    header: "Reclaim",
    github: "https://github.com/ReclaimApp/Reclaim",
    caption:
      "Reclaim is an open source desktop app for collecting and storing your online information. With Reclaim you can collect your social media data in a few clicks and explore every photo, friend, and interaction from your digital life.",
    role: "Creator and Developer",
    link: "https://github.com/ReclaimApp/Reclaim",
  },
  {
    src: fbExplorer.src,
    altText: "fb-explorer app image",
    header: "fbexplorer",
    github: "https://github.com/AustinKelsay/fb-explorer",
    caption:
      "fbexplorer is a tool that lets you reclaim, search, and explore all of your Facebook data. This is a single page application built with React and utilizing Redux/hooks for state management. fbexplorer does not collect any user's Facebook data or personal information.",
    role: "Creator and Developer",
    link: "https://fbexplorer.app/",
  },
  {
    src: gameOfLife.src,
    altText: "austin's game of life app image",
    header: "Austin's game of life",
    github: "https://github.com/AustinKelsay/austins-game-of-life",
    caption:
      "An implementation of Conway’s Game of Life. This is a React single page application with a random cell placement feature, speed settings for the simulation, and the ability to step through each generation with a visual counter! I have always been fascinated by celular automata and conways game of life in paticular!",
    role: "Creator and Developer",
    link: "https://austins-game-of-life.vercel.app/",
  },
];

export default function Experience() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);
  return (
    <div className={windowWidth > 460 ? "container" : "mobile-container"}>
      <main>
        <Layout>
          <InfiniteScroll dataLength={projects.length} height={"60vh"}>
            <div className="blogs">
              {projects.map((project, index) => {
                return (
                  <Card
                    style={{ margin: "3% auto" }}
                    key={index}
                    sx={{
                      maxWidth: 450,
                      maxHeight: 550,
                      backgroundColor: "rgb(255, 255, 255, 0.8);",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="auto"
                      height="auto"
                      image={project.src}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {project.header}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ wordWrap: "break-word" }}
                      >
                        {project.caption}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        href={project.link}
                        target={"_blank"}
                        size="small"
                      >
                        deployment
                      </Button>
                      <Button
                        href={project.github}
                        target={"_blank"}
                        size="small"
                      >
                        github
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
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
