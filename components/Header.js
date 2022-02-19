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
      </div>
  )
}