import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/layout'
import InfiniteScroll from 'react-infinite-scroll-component'

function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data

  return (
    <div className='container'>
      <main>
        <Layout>
          <div className='markdown-container'>
            <InfiniteScroll
              dataLength={content.length}
              height={'650px'}
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