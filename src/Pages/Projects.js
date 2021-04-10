import React, {Component} from 'react';
import {Jumbotron as Jumbo, Image, Row, Column, Container, Card, CardDeck} from 'react-bootstrap';
import Footer from '../Components/Footer.js';
import './projects.css';
const Projects = () =>{
        return(
          
            <>
            <div className="projectbg" >
                <Jumbo fluid className="botroncolor" >
                <Container>
                    {/* <Image className="botronimage" src="https://getwallpapers.com/wallpaper/full/7/c/a/359043.jpg" /> */}
                    <h1 className="fonth">Welcome to my Projects</h1>
                    <Row className="projecticons">
                    <span id="eatcolor">
                    <i  class="fas fa-utensils fa-5x"></i>
                    <p id="icontext">eat<span id="eatcolor">()</span>;</p>
                    </span>
                    <span id="sleepcolor">
                    <i class="fas fa-bed fa-5x"></i>
                    <p id="icontext">sleep<span id="sleepcolor">()</span>;</p>
                    </span>
                    <span id="codecolor">
                    <i class="fas fa-code fa-5x"></i>
                    <p id="icontext">code<span id="codecolor">()</span>;</p>
                    </span>
                    <span id="repeatcolor">
                    <i class="fas fa-redo-alt fa-5x"></i>
                    <p id="icontext">repeat<span id="repeatcolor">()</span>;</p>
                    </span>
                    </Row>
                 </Container>
                </Jumbo>

                <CardDeck className="projectcardecks">
                    {/* Spotify CARD */}
                    <Card className="cardcolor carddimension" >
                        <Card.Img variant="top" className="cardimage" src="https://logosmarcas.net/wp-content/uploads/2020/09/Spotify-Logo.png" />
                            <Card.Body>
                                <Card.Title className="fonth" style={{color:"#31ee2a"}}>SPOTIFY API</Card.Title>
                                <Card.Text className="cardparagraph">
                                Command Line Application that interacts with the
                                Spotify API. Allows a User to perform a search and  
                                fetch of deatailed via the commmand line.The CLI 
                                accepts a user's input of a search keyword or term and this 
                                keyword or term should be used to perform a search using the 
                                spotify API. The CLI displays the search results and also 
                                allows a user to select from the searh results list.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Row className="projecticons">
                                <span className="spotifycolor">
                                <i  class="fab fa-js fa-2x"></i>
                                </span>
                                <span className="spotifycolor">
                                <i class="fab fa-node fa-2x"></i>
                                </span>
                                <span className="spotifycolor">
                                <i class="fab fa-npm fa-2x"></i>
                                </span>
                                <span className="spotifycolor">
                                <i class="fab fa-spotify fa-2x"></i>
                                </span>
                                <span className="spotifycolor">
                                    <i class="fab fa-github-square fa-2x"></i>
                                </span>
                                </Row>
                            </Card.Footer>
                    </Card>
                    {/* AWS CARD */}
                    <Card className="cardcolor2 carddimension">
                        <Card.Img variant="top" className="cardimage" src="https://logos-download.com/wp-content/uploads/2016/12/Amazon_Web_Services_logo_AWS.png" />
                            <Card.Body>
                                <Card.Title className="fonth" style={{color:"orange"}}>AWS PROJECT</Card.Title>
                                <Card.Text className="cardparagraph">
                                Developing a framework using the AWS cloud platform
                                and a templating engine that allows for the
                                generation of Commonwealth Insurance Company Documents.<br></br> 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Row className="projecticons">

                                <span className="awscolor">
                                <i class="fab fa-aws fa-2x"></i>                        
                                </span> 

                                <span className="awscolor">
                                <i class="fas fa-database fa-2x"></i>
                                </span>

                                <span className="awscolor">
                                <i class="fab fa-java fa-2x"></i>
                                 </span>

                                <span className="awscolor">
                                    <i class="fab fa-github-square fa-2x"></i>
                                </span>
                                </Row>
                            </Card.Footer>
                    </Card>
                </CardDeck>

                <CardDeck className="projectcardecks">
                {/* Fusion colors card */}
                    <Card className="cardcolor3 carddimension">
                        <Card.Img variant="top" className="cardimage" src="http://fusioncolorsautobody.com/images/FusionColorsLogo.png" />
                            <Card.Body>
                                <Card.Title className="fonth"  style={{color:"green", fontSize:"30px"}}>Fusion Colors Auto Body Repair Database Management</Card.Title>
                                <Card.Text className="cardparagraph">
                                •	Database, where the user can register incoming car parts.<br></br>
                                •	User can create a new car part, modify, add images, and see the whole database of Fusion Colors.<br></br>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Row className="projecticons">

                                <span className="fusioncolor">
                                <i class="fas fa-database fa-2x"></i>
                                </span>

                                <span className="fusioncolor">
                                <i class="fab fa-java fa-2x"></i>
                                 </span>

                                <span className="fusioncolor">
                                    <i class="fab fa-github-square fa-2x"></i>
                                </span>
                                </Row>
                            </Card.Footer>
                        </Card>

                        <Card className="cardcolor2 carddimension">
                        <Card.Img variant="top" className="cardimage" src="https://www.asapdevelopers.com/wp-content/uploads/2017/11/react-native-banner-1024x300-e1510060053599-1.png" />
                            <Card.Body>
                                <Card.Title className="fonth" style={{color:"#0eb8e2"}}>Odassy Notes App</Card.Title>
                                <Card.Text className="cardparagraph ">
                                •	Database, where the user can register incoming car parts.<br></br>
                                •	User can create a new car part, modify, add images, and see the whole database of Fusion Colors.<br></br>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Row className="projecticons">

                                <span className="odassycolor">
                                <i class="fab fa-react fa-2x"></i>                               
                                 </span>

                                <span className="odassycolor">
                                <i  class="fab fa-js fa-2x"></i>
                                 </span>

                                <span className="odassycolor">
                                <i class="fab fa-npm fa-2x"></i>
                                </span>
                                </Row>
                            </Card.Footer>
                        </Card>
                </CardDeck>
            </div>     
            <Footer/>
            </>   
        )
}

export default Projects;
