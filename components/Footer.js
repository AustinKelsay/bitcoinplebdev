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
            background-color: rgba(255, 255, 255, 0.1);
            width: 30%;
            display: flex;
            border-top: 1px solid #eaeaea;
            justify-content: space-around;
            align-items: center;
            position: absolute;
            left: 35%;
            bottom: 0;
            height: 80px;
            overflow: hidden;
        }
        `}</style>
    </div>
  )
}