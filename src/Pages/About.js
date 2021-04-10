import React, {Component} from 'react';
import styled from 'styled-components';
import {Jumbotron, Container, Image} from 'react-bootstrap';

const Styles = styled.div`
    .jumbo{
        background: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e35d8d33-b328-4a99-abc6-72115f6ba1c6/de894ev-532ae2c5-fd3d-453c-9213-a43c59bc18f1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTM1ZDhkMzMtYjMyOC00YTk5LWFiYzYtNzIxMTVmNmJhMWM2XC9kZTg5NGV2LTUzMmFlMmM1LWZkM2QtNDUzYy05MjEzLWE0M2M1OWJjMThmMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.MB_BDnWE2Gg4L4yGYXOKfUi4kRgwWWceQmpdCtFTrBI")no-repeat fixed bottom;
        z-index:-2;
        padding-bottom:1rem;
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
    .paragraph{
        font-size:1.5em;
        text-align: center;
        position:center;
        color:#e3f2fd;
    }
    .fonth{
        font-size: 4em;
        text-align: center;
        color:#d50000 ;
    }
`;

class About extends Component{
    render(){
        return(
          <Styles>
              <div>
                <h2 className="fonth">About Me</h2>
                <p className="paragraph">Im a first generation college student from my family that is seeking a Bachelor's Degree <br></br>in Computer Science at California State University of Los Angeles. Im expecting to graduate in June of 2021.<br></br>
                The first Computer Science course that I took in CSULA was CS 4222 Database on MYSQL.<br></br>
                My main programming language is Java and the skills that I listed below, I have used / worked with them throughout my joureny as a student at college.
                </p>                
              </div>
              <div className="row">
                    <div className="col">
                        <Image className="images" src="https://i.redd.it/u1w50iwx3it51.png" rounded height="200px" />
                    </div>
                    <div className="col">
                    <Image className="images" src="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-4.png"  rounded height="200px"/>
                    </div>
                    <div className="col">
                    <Image className="images" src="https://legalbooksdistributing.com/product_images/uploaded_images/csula.png"  rounded height="200px"/>
                    </div>
                    <div className="col">
                    <Image className="images" src="https://preview.redd.it/76glbq4o1sn51.png?width=440&format=png&auto=webp&s=a22610bfbd735d024448389fd80009b255c33524"  rounded height="200px"/>
                    </div>
                    <div className="col">
                    <Image className="images" src="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-4.png"  rounded height="200px"/>
                    </div>
                    {/* https://i.pinimg.com/originals/0f/94/10/0f94108094f6a9cfc64ddf60c32dc1c6.gif */}
                </div>
                 <Jumbotron fluid className="jumbo">
                  <div className="overlay"/>
                  <div className="container">
                  <h className="fonth">Skills</h>
                <div className="row">
                    <div className="col">
                        <Image className="images" src="https://image.flaticon.com/icons/png/512/226/226777.png" rounded height="100px" />
                    </div>
                    <div className="col">
                    <Image className="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"  rounded height="100px"/>
                    </div>
                    <div className="col">
                    <Image className="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"  rounded height="100px"/>
                    </div>
                    <div className="col">
                    <Image className="images" src="https://i0.wp.com/www.paragonnamibia.com/wp-content/uploads/2016/03/css-logo.png?fit=500%2C500&ssl=1&w=640"  rounded height="100px"/>
                    </div>
                    <div className="col">
                        <Image className="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png" rounded height="100px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" rounded height="100px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png" rounded height="100px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" rounded height="100px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" rounded height="100px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://th.bing.com/th/id/Ra717eafa290bf333c4dd1c86076c5b9e?rik=fFJCfFtWcnz4IQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-png-node-js-logo-nodejs-javascript-source-code-nodejs-logo-vector-png-960.png&ehk=kzThm0KlLIhlxWlizmO9RJ7AD1cqjJh%2bmqGqGOTNHPc%3d&risl=&pid=ImgRaw" rounded height="100px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://th.bing.com/th/id/R09ce136f901aeb1e8c66b927edea8086?rik=r8GZM4o2Ch1tHQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fLINUX-LOGO.png&ehk=5m0lBvAd%2bzhvGg%2fu4i3%2f4EEHhF4N0PuzR%2fBmC1lFzfw%3d&risl=&pid=ImgRaw" rounded height="100px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://www.tomsquest.com/img/posts/2018-10-02-better-npm-ing/npm_logo.png" rounded height="100px" />
                    </div>
                </div>
              </div>
                </Jumbotron>
          </Styles>

        )
    }
}
export default About;