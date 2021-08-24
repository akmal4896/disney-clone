import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.6435-9/182643595_4690069857686729_3700737937295371354_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGEHSWxMfQbnh5dEHnrgnxIKg-6foWo56YqD7p-hajnpnyOYxdkVws-v9InMjC8q5k8FhLjTeSaFfdSaQrHW9qZ&_nc_ohc=ePYARKZa5C8AX8MvoP6&_nc_oc=AQkoNWx8nYhcj8-fniXXj27NrmtPMTE5Dh3WKIKfDKtaV92tdQ96g7VeetYtE5KezCM&tn=zvnWqbVAjl1_CSJb&_nc_ht=scontent.fmkz1-1.fna&oh=e17dc8acf2e415a116a3e13a257708e4&oe=6148DE30"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
