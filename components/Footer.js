import { SocialIcon } from "react-social-icons"

export default function Footer({ Component, pageProps }) {
  return (
    <div className="container">
        <footer>
            <SocialIcon url="https://github.com/austinkelsay" />
            <SocialIcon url="https://twitter.com/ASeries_ofTubes" />
        </footer>
        <style jsx>{`
        container {
            width: 100%;
            margin: 0 auto;
        }

        footer {
            width: 20%;
            margin: 0 auto;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        `}</style>
    </div>
  )
}