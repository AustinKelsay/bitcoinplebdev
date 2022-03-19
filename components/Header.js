import React, {useEffect} from 'react';
import Link from "next/link"
import {useRouter} from 'next/router'

export default function Header() {
    const router = useRouter()
    let url = ""
    if (typeof window !== 'undefined') {
        url = window.location.href.split('/');
    }
    const page = url[url.length - 1];
    return (
        <div>
            <h1 className="title">
                {page === "" ? "plebdev" : page}
            </h1>
            {page === "" ?
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
                    <Link href='experience'>
                    <button className='btn draw-border'>
                        <p className='btn-text'>
                        Experience
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
            :
            <div className='column-container-alt'>
                <div className='column'>
                    <button onClick={() => router.back()} className='btn draw-border'>
                        <p className='btn-text'>
                            back
                        </p>
                    </button>
                </div>
                <div className='column'>
                    <Link href='/'>
                        <button className='btn draw-border'>
                            <p className='btn-text'>
                            Home
                            </p>
                        </button>
                    </Link>
                </div>
            </div>
        }
            <style jsx>{`
            .title {
                width: 100%;
                font-family: Inconsolata, monospace;
                margin-top: 0%;
                line-height: 1.15;
                font-size: 4rem;
                margin-bottom: 1%;
                text-align: center;
                position: absolute;
                right: 0;
                top: 0;
                overflow: hidden;
            }
        
                .column-container {
                    width: 70%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 1% auto;
                    position: absolute;
                    right: 15%;
                    top: 8%;
                    overflow: hidden;
                }

                .column-container-alt {
                    width: 30%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 1% auto;
                    position: absolute;
                    right: 35%;
                    top: 8%;
                    overflow: hidden;
                }
        
                .column {
                    margin: 0% auto;
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
                    font-family: Inconsolata, monospace;
                    font-size: 1rem;
                    margin: 0;
                    color: black;
                }
                @media (max-width: 1250px) {
                    .column-container {
                        width: 80%;
                        right: 10%;
                    }
                }
                @media (max-width: 700px) {
                    .title {
                        font-size: 2.5rem;
                    }
                    .column-container {
                        width: 100%;
                        top: 8%;
                        left: 0;
                        right: 0;
                    }
                    .column-container-alt {
                        width: 80%;
                        top: 8%;
                        left: 0;
                        right: 0;
                    }
                    .btn {
                        padding: 0.3em 0.8em;
                    }
                    .btn-text {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </div>
    )
}