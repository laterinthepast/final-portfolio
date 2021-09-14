import React, { useState } from 'react'
import styled from 'styled-components';
import mummy from '../images/svgs/mummy.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const NavWrapper = styled.div`
    padding: 1rem;
    background: #EF8354;
    position: relative;

`

const Links = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const LeftNav = styled.div`
    display:flex;
    align-items: center;
    font-weight: 900;
    color: #FFF;
    .icons {
        a {
            color: #FFF;
            padding-left: 2rem;
            font-size: 2rem;
            transition: all 0.15s ease-in-out;
            :hover {
                
                color: #000;
            }
        }
    }
    img {
        width: 50px;
    }
`
const RightNav = styled.div`
    a {
      text-decoration:none; 
      color: #FFF;
      padding: 1rem;
      font-weight: 700;
      transition: all 0.15s ease-in-out;
      :hover {
          border-bottom: 1px solid #fff;
          color: #000;
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
                        <a href="https://www.instagram.com/lookmummyicancode/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.linkedin.com/in/rafal-wrona/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>

                </LeftNav>
                <RightNav>
                    <a href="#projects">my projects</a>
                    {/* <a href="#about">about</a> */}
                </RightNav>

            </Links>


        </NavWrapper>
    )
}

export default Navbar
