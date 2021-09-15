import React from 'react'
import styled from 'styled-components';
import background from '../images/landing12.jpg';
import nahaku from '../images/nahaku.jpg'
import meller from '../images/meller.jpg'
import quartz from '../images/quartz.jpg'
import crypto from '../images/crypto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom';

const MainWrapper = styled.div`
    transition: all 0.3s ease-in-out;
`
const Projects = styled.div`
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 20vh;
        background-color: #000;
        color: #FFFFFF;
        font-size: 8vw;
    }
    display: flex;
    flex-direction: column;
    .project {
        &-1 {
            background-color: #4F5D75;
        }
        &-2 {
            background-color: #f1faee;
        }
        &-3 {
            background-color: #000;
        }
        &-4 {
            background-color: #669bbc;
        }
    }
`
const About = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 90vh;
    .info {
        padding: 5vw;
        font-size: 2vw;
        width:50vw;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #3D405B;
        color: #e9e9e9;
        h3 {
         font-weight: 100;   
        }
        

        span {
            font-weight: 900;
            
        }
    }
    img {
        width: 50vw;
        object-fit: cover;
        
    }
`
const WorkPage = styled.div`
    display: flex;
    height: 50vw;
    align-items: center;
    .img {
        padding: 5vw;
        width: 50vw;
        img {
            width: 100%;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            border-radius: 1vw;
        }
    }
    .project-desc {
        width: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 5vw;
        color: #E2E2E2;
        .links {
            display: flex;
            align-items: center;
            a {
                text-decoration: none;
                p {
                    font-size: 1.7vw;
                    color: #fee440;
                    font-weight: 700;
                    transition: all 0.1s ease-in-out;
                    :hover{
                        color: #00bbf9;
                    }
                }
            }
        }
        p {
            text-align: justify;
            font-size: 1.7vw;
            font-weight: 500;
        }
        h3 {
            font-size: 5vw;
            font-weight: 400;
            span {
                font-weight: 800;
            }
        }
        a {
            font-size: 4vw;
            margin: 1rem;
        }
    }
    .prone {
        color: #fff;
        a {
            color: #fff;
        }
        
    }
    .prtwo {
        color: #e63946;
        a {
            color: #e63946;
        }
    }
    .prthree {
        color: #ffba08;
        a {
            color: #ffba08;
        }
    }
    .prfour {
        color: #fdf0d5;
        .links {
            .disabled {
                cursor: default;
                pointer-events: none;
            }             
        }
    a {
        color: #fdf0d5;  
    }  
}
`
const Main = () => {
    return (
        <MainWrapper>
            <About>
                <div className="info">
                    <h3><span>Front-end</span> developer based in <span>London</span>. This is just the beginning for me.</h3>
                    <h3><span>Simple</span>, spacious designs and easy peasy <span>lemon squeezy</span> builds. That's what I do best.</h3>
                </div>
                <img src={background} alt="" />
            </About>
            <Projects >
                <h1>Projects</h1>
                <WorkPage className="project-1" id="projects">
                    <div className="img">
                        <Slide left>
                            <img src={nahaku} alt="nahaku" />
                        </Slide>
                    </div>
                    <div className="project-desc prone">
                        <Zoom clear>
                            <h3><span>na</span>haku</h3>
                            <p>Design, build and management of the website. Future development will involve converting it into e-commerce platform with its own shop for all the arts and crafts. Website built with React and Sass using styled components. Work in progress</p>
                        </Zoom>
                        <div className="links">
                            <a href="https://github.com/laterinthepast/nahaku-v2" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://nahakutestv2.netlify.app/" rel="noopener noreferrer" target="_blank"><p>visit the site</p></a>
                        </div>
                    </div>
                </WorkPage>
                <WorkPage className="project-2">
                    <div className="project-desc prtwo">
                        <Zoom>
                            <h3><span>me</span>llerdramatic</h3>
                            <p>One of the first projects built with React. Design, build and management of the website. Website will be updated with new designs and tattoo photos. Future development may involve adding a shop for selling Bry's artwork and possibility for NFTs. Website built with React and Sass using styled components.</p>
                        </Zoom>
                        <div className="links">
                            <a href="https://github.com/laterinthepast/bry-react" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://mellerdramatic.netlify.app/" rel="noopener noreferrer" target="_blank"><p>visit the site</p></a>
                        </div>
                    </div>
                    <div className="img">
                        <Slide right>
                            <img src={meller} alt="nahaku" />
                        </Slide>
                    </div>
                </WorkPage>
                <WorkPage className="project-3">
                    <div className="img">
                        <Slide left>
                            <img src={quartz} alt="nahaku" />
                        </Slide>
                    </div>
                    <div className="project-desc prthree">
                        <Zoom>
                            <h3>quartz sc<span>i</span>en<span>t</span>ific</h3>
                            <p>Simple landing website for a local business. Design, build and management. Currently awaiting client update. Work in progress</p>
                        </Zoom>
                        <div className="links">
                            <a href="https://github.com/laterinthepast/quartz-v3" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://quartz-scientific.netlify.app/" rel="noopener noreferrer" target="_blank"><p>visit the site</p></a>
                        </div>
                    </div>
                </WorkPage>
                <WorkPage className="project-4">
                    <div className="project-desc prfour">
                        <Zoom>
                            <h3>crypt<span>o</span>fol<span>i</span>o</h3>
                            <p>Cryptofolio is my latest project. Cryptocurrencies wallet with charts and all the necesarry info about your fauvorites coins. Will be built on React with Node.js... work in progress</p>
                        </Zoom>

                        <div className="links">
                            <a href="https://github.com/laterinthepast/cryptofolio" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="/" className="disabled"><p>visit the site</p></a>
                        </div>
                    </div>
                    <div className="img">
                        <Slide right>
                            <img src={crypto} alt="nahaku" />
                        </Slide>
                    </div>
                </WorkPage>
                <h1>more to come...</h1>
            </Projects>
        </MainWrapper>
    )
}

export default Main
