import React, {Component} from 'react';
import styled from 'styled-components';
import {Jumbotron as Jumbo, Container, Image, Row, Spinner, ProgressBar} from 'react-bootstrap';
import Footer from '../Components/Footer.js';
import './about.css';
import carlos from '../Components/images/git_hub.jpg';
const About = () =>{
        return(
            <div className="backgroundimage">
                <Jumbo className="aboutbotron">
                    <Container className="aboutcontainer">
                        <Image roundedCircle id="carlosimage" src={carlos}/>
                        <p id="aboutparagraph">Im a first generation college student from my family that is seeking a Bachelor's Degree in Computer Science at California State University of Los Angeles. Im expecting to graduate in June of 2021.
                        The first Computer Science course that I took in CSULA was CS 4222 Database on MYSQL.
                        My main programming language is Java and the skills that I listed below, I have used / worked with them throughout my joureny as a student at college.</p>
                        <p id="aboutparagraph">Bachelors of Science in Computer Science 2021 from <span id="highlightcsula">California State University of Los Angeles.</span> </p>
                    </Container>
                </Jumbo>

                <Jumbo className="jumbotron">
                    <Container>
                    <p id="jumbotrontitle">Programming languages</p>
                    <span id="iconcolor">
                    <p className="paragraphskills">Java <i class="fab fa-java fa-2x"></i> </p>
                    </span>
                    <ProgressBar className="aboutprogressbar "  animated now={90} />

                    <span id="iconcolor">
                    <p className="paragraphskills">Javascript <i class="fab fa-js fa-2x"></i></p>                
                    </span>
                    <ProgressBar className="aboutprogressbar" animated now={70} />

                    <span id="iconcolor">
                    <p className="paragraphskills">Python <i class="fab fa-python fa-2x"></i></p>   
                    </span>
                    <ProgressBar className="aboutprogressbar" animated now={40} />

                    <span id="iconcolor">
                    <p className="paragraphskills">C++ <i class="fab fa-python fa-2x"></i></p>   
                    </span>
                    <ProgressBar  className="aboutprogressbar" animated now={40} />


                    <span id="iconcolor">
                    <p className="paragraphskills">html5 <i class="fab fa-html5 fa-2x"></i></p>                   
                    </span>
                    <ProgressBar className="aboutprogressbar" animated now={90} />

                    <span id="iconcolor">
                    <p className="paragraphskills">css <i class="fab fa-css3-alt fa-2x"></i></p>
                    </span>
                    <ProgressBar className="aboutprogressbar" animated now={90} />

                    
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