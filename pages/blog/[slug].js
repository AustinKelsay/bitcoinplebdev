import React, {useEffect, useState} from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'

function PostTemplate({ content, data }) {
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
  }, [])
  return (
    <div className={windowWidth > 460 ? "container" : "mobile-container"}>
      <main>
        <Layout>
          <div className='markdown-container'>
            <InfiniteScroll
              dataLength={content.length}
              height={'70vh'}
            >
              <ReactMarkdown className='markdown'>{content}</ReactMarkdown>
            </InfiniteScroll>
          </div>
        </Layout>
      </main>
      <style jsx>{`
            .container {
              min-height: 100vh;
              height: 100%;
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
              justify-content: space-evenly;
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

            a {
              color: inherit;
              text-decoration: none;
            }
            .markdown-container {
              padding: 1%;
              margin-top: 3%;
              border: 2px solid black;
              border-radius: 10px;
              background-color: rgb(255, 255, 255, 0.3);
            }
            .markdown {
              margin: 0 auto;
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
          
          .btn-text {
              font-family: Inconsolata, monospace;
              font-size: 1rem;
              margin: 0;
              color: black;
          }
          @media (max-width: 1400px) {
            main {
              width: 90%;
              margin-top: 3%;
            }
            .markdown-container {
              width: 100%;
            }
            .markdown {
              width: 100%;
            }
          }
          @media (max-width: 625px) {
            main {
              width: 98%;
              margin-top: 10%;
            }
            .markdown-container {
              margin: 0 auto;
            }
          }
          @media (max-width: 565px) {
            main {
              margin-top: 10%;
            }
            .markdown-container {
              width: 98%;
              margin: 0 auto;
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

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`)
  
  // Parse .md data through `matter`
  const data = matter(content.default)
  
  // Pass data to our component props
  return { ...data }

  return { slug }
}

export default PostTemplate