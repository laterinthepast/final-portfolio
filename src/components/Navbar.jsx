import React from 'react'
import styled from 'styled-components';
import mummy from '../images/svgs/mummy.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const NavWrapper = styled.div`
    padding: 1vw;
    background: #EF8354;
    position: relative;
    height: 7vw;
    @media (max-width:760px){
        height: 15vw;
    }
`
const Links = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 100%;
`
const LeftNav = styled.div`
    display:flex;
    align-items: center;
    font-weight: 900;
    color: #FFF;
    .icons {
        a {
            color: #FFF;
            padding-left: 4vw;
            font-size: 3vw;
            transition: all 0.15s ease-in-out;
            :hover { 
                color: #000;
            }
        }
    }
    img {
        width: 5vw;
    }
    @media (max-width:760px){
        .icons {
            a {
                font-size: 8vw;
            }
        }
        img {
            width: 8vw;
        }
    }
`
const RightNav = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    p {
        color: #ffe;
        text-decoration: underline;
        :hover {
            color: #fff;
        }
    }
    a {
      text-decoration:none; 
      color: #FFF;
      padding: 1vw;
      font-weight: 700;
      transition: all 0.15s ease-in-out;
      :hover {
          border-bottom: 0.3vw solid #fff;
          color: #000;
      }
    }
    @media (max-width:760px){
        flex-direction: column;
        p {
            font-size: 3vw;
        }
    }
`
const Navbar = () => {
    return (
        <NavWrapper>
            <Links>
                <LeftNav>
                    <a href="/"><img src={mummy} alt="mummy" /></a>
                    <div className="icons">
                        <a href="https://github.com/laterinthepast" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        
                        <a href="https://www.linkedin.com/in/rafal-wrona/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </LeftNav>
                <RightNav>
                    <p>r.t.wrona@gmail.com</p>
                    <a href="#projects">my projects</a>
                    {/* <a href="#about">about</a> */}
                </RightNav>
            </Links>
        </NavWrapper>
    )
}

export default Navbar
