import React from 'react';
import { Jumbotron as Jumbo,Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo{
        background: url("https://getwallpapers.com/wallpaper/full/7/c/a/359043.jpg") no-repeat fixed bottom;
        color:white;
        position:relative;
        z-index:-2;
        padding-bottom:5rem;
        margin-bottom: 0px;
    }
    .overlay{
        background-color:#000;
        opacity:0.6;
        position:absolute;
        top:0;
        bottom:0;
        right:0;
        z-index:-1;
    }
    .fontp{
        font-size: 2em;
        text-align: center;
        color: #e3f2fd;
    }
    .fonth{
        font-size: 4em;
        text-align: center;
        color:#e3f2fd ;
    }
`;
export const NavBackground = () =>(
    
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"/>
            <Container>
                <h1 className="fonth">Welcome</h1>
                <p className="fontp">My name is Carlos Mendoza</p>
            </Container>
            
        </Jumbo>
    </Styles>
)