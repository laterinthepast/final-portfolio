import React, { useState } from 'react'
import styled from 'styled-components';
import mummy from '../images/svgs/mummy.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const NavWrapper = styled.div`
    padding: 1rem;
    background: #000;
    position: relative;
    display: ${props => props.visibility ? 'block' : 'none'};
    
    
    .closeB {
        position: relative;
        border-bottom: 1px dotted black;
    }
    .closeB .closeBB {
        visibility: hidden;
        background-color: black;
        color: red;
        font-weight: 900;
        text-align: center;
        border: 2px solid red;
        padding: 0.5rem;
        position: absolute;
        z-index: 1;
        right: 5px;
        opacity: 0;
        transition: opacity 0.5s;
    }
    .closeB:hover .closeBB {
        visibility: visible;
        opacity: 1;
    }
    .closebutton {
        color: #fff;
        position: absolute;
        right: 0;
        top: 0;
        &:hover {
            cursor: pointer;
        }
    }
    
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
    color: #fff;
    img {
        width: 100px;
    }
`
const RightNav = styled.div`
    a {
      text-decoration:none; 
      color: #fff ;
      padding: 1rem;
      font-weight: 700;
    }
    
`

const Navbar = () => {

    const [toggle, setToggle] = useState(true)
    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <NavWrapper visibility={toggle}>
            <div className="closeB">
                <span className="closeBB">DO NOT CLICK!!!</span>
                <FontAwesomeIcon onClick={handleToggle} icon={faWindowClose} className="closebutton" />
            </div>


            <Links>
                <LeftNav>
                    <img src={mummy} alt="mummy" />
                    <p>lookmummyicancode@gmail.com</p>
                </LeftNav>
                <RightNav>
                    <a href="#work">work</a>
                    <a href="#about">about</a>
                </RightNav>

            </Links>
        </NavWrapper>
    )
}

export default Navbar
