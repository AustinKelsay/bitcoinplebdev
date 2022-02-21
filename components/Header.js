import Link from "next/link"

export default function Header({ Component, pageProps }) {
  return (
      <div>
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
        <style jsx>{`
            .title {
                margin-top: 2%;
                line-height: 1.15;
                font-size: 4rem;
                margin-bottom: 1%;
                text-align: center;
              }
      
              .column-container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 1% auto;
                margin-bottom: 0;
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
                font-family: 'Roboto Mono', monospace;
                font-size: 0.9rem;
                margin: 0;
                color: black;
              }
        `}</style>
      </div>
  )
}