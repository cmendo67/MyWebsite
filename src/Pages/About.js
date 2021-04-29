import React, {Component} from 'react';
import styled from 'styled-components';
import {Jumbotron as Jumbo, Container, Image, Row, ProgressBar, Col, Figure} from 'react-bootstrap';
import Footer from '../Components/Footer.js';
import './about.css';
import carlos from '../Components/images/git_hub.jpg';
import Typical from 'react-typical'

const About = () =>{
        return(
            <div className="backgroundimage">

                <div>
                    {/* <h1 className="pagetitle">Bienvenidos</h1> */}
                    <p > 
                    {''}
                    <Typical className="pagetitle"
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                        'Welcome!!', 
                         2000,
                         'Bienvenido!!', 
                         2000
                        ]}

                    />
                    </p>
                    <p className="introtext">My name is <span id ="namecolor">Carlos Mendoza</span> and welcome to My Website.</p>
                </div>
                <Jumbo className="aboutbotron">
                    <Container className="aboutcontainer">
                        <Image roundedCircle id="carlosimage" src={carlos}/>
                        <p id="aboutparagraph">Im a first generation college student from my family that is seeking a Bachelor's Degree in Computer Science at California State University of Los Angeles. Im expecting to graduate in June of 2021.
                        The first Computer Science course that I took in CSULA was CS 4222 Database on MYSQL.
                        My main programming language is Java and the skills that I listed below, I have used / worked with them throughout my joureny as a student at college.</p>
                        <p id="aboutparagraph">Bachelors of Science in Computer Science 2021 from <span id="highlightcsula">California State University of Los Angeles.</span> </p>
                    </Container>
                </Jumbo>

                <Jumbo className="jumbotron_configuration">
                    <Container>
                     <p id="jumbotrontitle">Programming Skills</p>
                    <Row className="programmingrow1">
                    <Col className='figure-container' sm>
                        <div className='flip-figure'>
                            <div className='flip-figure-inner'>
                            <div className='flip-figure-front'>
                                <Figure className="members-container">
                                <Figure.Image
                                    className="members-img"
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                     src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png"
                                />
                               
                             </Figure>
                             </div>
                            <div className='flip-figure-back'>
                                <div className='flip-figure-back-content'>
                                    
                                    <p className='flip-figure-back-text '>Java is my main programming language</p>
                                    <i class="fas fa-laugh-beam fa-5x"></i>
                                </div>
                             </div>
                            </div>
                        </div>
                    </Col>

                    <Col className='figure-container' sm>
                        <div className='flip-figure'>
                            <div className='flip-figure-inner'>
                            <div className='flip-figure-front'>
                                <Figure className="members-container">
                                <Figure.Image
                                    className="members-img"
                                    width={100}
                                    height={80}
                                    alt="171x180"
                                     src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                />
                               
                             </Figure>
                             </div>
                            <div className='flip-figure-back'>
                                <div className='flip-figure-back-content'>
                                    
                                    <p className='flip-figure-back-text '>JavaScript is a scripting language</p>
                                    <i class="fas fa-laugh-beam fa-5x"></i>
                                </div>
                             </div>
                            </div>
                        </div>
                    </Col>

                    <Col className='figure-container' sm>
                        <div className='flip-figure'>
                            <div className='flip-figure-inner'>
                            <div className='flip-figure-front'>
                                <Figure className="members-container">
                                <Figure.Image
                                    className="members-img"
                                    width={100}
                                    height={90}
                                    alt="171x180"
                                     src="http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
                                />
                               
                             </Figure>
                             </div>
                            <div className='flip-figure-back'>
                                <div className='flip-figure-back-content'>
                                    
                                    <p className='flip-figure-back-text '>High-Level-Programming language</p>
                                    <i class="fas fa-laugh-beam fa-5x"></i>
                                </div>
                             </div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    
                    <Row className="programmingrow2">
                    <Col className='figure-container' sm>
                        <div className='flip-figure'>
                            <div className='flip-figure-inner'>
                            <div className='flip-figure-front'>
                                <Figure className="members-container">
                                <Figure.Image
                                    className="members-img"
                                    width={100}
                                    height={90}
                                    alt="171x180"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
                                />
                               
                             </Figure>
                             </div>
                            <div className='flip-figure-back'>
                                <div className='flip-figure-back-content'>
                                    
                                    <p className='flip-figure-back-text '>Powerful general-purpose programming language</p>
                                    <i class="fas fa-laugh-beam fa-5x"></i>
                                </div>
                             </div>
                            </div>
                        </div>
                    </Col>

                    <Col className='figure-container' sm>
                        <div className='flip-figure'>
                            <div className='flip-figure-inner'>
                            <div className='flip-figure-front'>
                                <Figure className="members-container">
                                <Figure.Image
                                    className="members-img"
                                    width={130}
                                    height={100}
                                    alt="171x180"
                                     src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
                                />
                               
                             </Figure>
                             </div>
                            <div className='flip-figure-back'>
                                <div className='flip-figure-back-content'>
                                    
                                    <p className='flip-figure-back-text '>Hyper Text Markup Language</p>
                                    <i class="fas fa-laugh-beam fa-5x"></i>
                                </div>
                             </div>
                            </div>
                        </div>
                    </Col>

                    <Col className='figure-container' sm>

                        <div className='flip-figure'>
                            <div className='flip-figure-inner'>
                            <div className='flip-figure-front'>
                                <Figure className="members-container">
                                <Figure.Image
                                    className="members-img"
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                     src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png"
                                />
                               
                             </Figure>
                             </div>
                            <div className='flip-figure-back'>
                                <div className='flip-figure-back-content'>
                                    
                                    <p className='flip-figure-back-text '>Cascading Style Sheets</p>
                                    <i class="fas fa-laugh-beam fa-5x"></i>
                                </div>
                             </div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    </Container>

                </Jumbo>

                <Jumbo className="techbotron">
                    <Container >
                        <p id="jumbotrontitle">Technologies Used</p>
                        <Row className="techicons">
                        <span id="npmcolor">
                            <i class="fab fa-npm fa-10x"></i>
                        </span>

                        <span id="nodejscolor">
                            <i class="fab fa-node fa-10x"></i>
                        </span>

                        <span id="linux color">
                            <i class="fab fa-linux fa-10x"></i>
                        </span>
                        </Row>
                        <Row className="techicons">
                        <span id="awscolor">
                            <i class="fab fa-aws fa-10x"></i>
                        </span>

                        <Image src="https://logodownload.org/wp-content/uploads/2016/10/mysql-logo.png" height="150x" width="200px"/>
                        <Image src="https://th.bing.com/th/id/R17d502cf086bde53ea08f064a31f273c?rik=A2Cq8N9S0uORPg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-0T-xa8wffLU%2fU_-eoMjIo9I%2fAAAAAAAAEVY%2f6Fn5-9QAcmI%2fs1600%2fspring-boot-project-logo.png&ehk=utqU5gHAmkTtXlwIGpqItzRWZ7qY2xT8LgGTExmio%2bI%3d&risl=&pid=ImgRaw" height="150x" width="150px"/>
                        </Row>
                    </Container>
                </Jumbo>
                    <Footer/>
                </div>
        )
    }
export default About;