import Head from 'next/head'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';


export default function Home() {
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
          transition: all ease-in 2s;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background: linear-gradient(-30deg, #df590bcc, #c43232c5, #2aafe0c7, #473b88c5) no-repeat center center fixed;
          background-size: 300% 300%;
          animation-name: background;
          animation-duration: 300s;
          animation-iteration-count: infinite;
          animation-timing-function: ease;
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

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin-top: 10%;
          line-height: 1.15;
          font-size: 4rem;
          margin-bottom: 5%;
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
          font: 700 1.2rem 'Open Sans', sans-serif;
          padding: 0.5em 1.5em;
          letter-spacing: 0.05rem;
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
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
