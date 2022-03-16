import { SocialIcon } from "react-social-icons"

export default function Footer({ Component, pageProps }) {
  return (
    <div className="container">
        <footer>
            <SocialIcon style={{border: "2px solid white", borderRadius: "25px"}} fgColor="white" url="https://github.com/austinkelsay" />
            <SocialIcon style={{border: "2px solid white", borderRadius: "25px"}} fgColor="white" url="https://twitter.com/ASeries_ofTubes" />
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
        @media (max-width: 750px) {
            footer {
                width: 70%;
                left: 15%;
                height: 60px;
            }
        }
        `}</style>
    </div>
  )
}