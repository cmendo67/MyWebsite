import React, {Component} from 'react';
import {Image} from 'react-bootstrap';

class Projects extends Component{
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                         <h className="fontspotifytitle">SPOTIFY API</h>
                         <p className="spotifyparagraph">
                             Command Line Application that interacts with the
                             Spotify API. Allows a User to perform a search and  
                             fetch of deatailed via the commmand line.The CLI 
                             accepts a user's input of a search keyword or term and this 
                             keyword or term should be used to perform a search using the 
                             spotify API. The CLI displays the search results and also 
                             allows a user to select from the searh results list. The CLI 
                             then goes back to the API again and performs a get/fetch to 
                             be able to display more details about the item selected and
                             then those details should be displayed on the console for the user to view.<br></br>
                             •	Used Visual Studio Code, JavaScript, Node.js, CLIs, APIs, and Node Modules 
                         </p>
                         <div className="row">
                            <Image className="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"  rounded height="60px"/>
                            <Image className="images" src="https://th.bing.com/th/id/Ra717eafa290bf333c4dd1c86076c5b9e?rik=fFJCfFtWcnz4IQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-png-node-js-logo-nodejs-javascript-source-code-nodejs-logo-vector-png-960.png&ehk=kzThm0KlLIhlxWlizmO9RJ7AD1cqjJh%2bmqGqGOTNHPc%3d&risl=&pid=ImgRaw"  rounded height="60px"/>
                            <Image className="images" src="https://cdn-images-1.medium.com/max/1200/1*lAR9Uh_gJ7dp23e0vhy5Hg.png"  rounded height="80px"/>
                            <Image className="images" src="https://www.tomsquest.com/img/posts/2018-10-02-better-npm-ing/npm_logo.png" rounded height="80px" />
                            <Image className="images" src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png" rounded height="60px" />
                            <Image className="images" src="https://1.bp.blogspot.com/-xtFG2HxsdKc/XHkuICL5ePI/AAAAAAAAIPs/-FBy2Apa3qUxBF1WNOzB_dF4_KUuLJrygCK4BGAYYCw/s1600/spotify%2Bicon%2B.png" rounded height="60px" />
                         </div>
                    </div>
                    <div class="col-sm-4">
                         <h className="fontaws">AWS PROJECT</h>
                         <p className="spotifyparagraph">
                             Developing a framework using the AWS cloud platform
                             and a templating engine that allows for the
                             generation of Commonwealth Insurance Company Documents.<br></br>
                             • Used eclipse, Java, MySQL, Pebble templating engine, Maven Spring boot,
                             AWS S3, AWS RDS, and AWS EC2.
                             <div className="row">
                                <Image className="images" src="https://cdn.freebiesupply.com/logos/large/2x/eclipse-11-logo-png-transparent.png" rounded height="60px" />
                                <Image className="images" src="https://contentsquare.com/wp-content/uploads/2019/01/AWS_Logo@3x-8-1200x1200.png" rounded height="60px" />
                                <Image className="images" src="https://avatars3.githubusercontent.com/u/17010790?s=200&v=4" rounded height="60px" />
                                <Image className="images" src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png" rounded height="60px" />
                                <Image className="images" src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" rounded height="80px" />
                                <Image className="images" src="https://image.flaticon.com/icons/png/512/226/226777.png" rounded height="80px" />
                                <Image className="images" src="https://cdn-images-1.medium.com/max/1200/1*CIolkR8u5UuZp5aJRPVzBg.png" rounded height="80px" />
                                <Image className="images" src="https://s3-us-west-2.amazonaws.com/azuqua-static/designer/icons-pirsq/ec2.png" rounded height="80px" />
                                <Image className="images" src="https://www.optimalbitsoftware.com/wp-content/themes/optimalbitsoftware/assets/dist/img/tools/aws-rds-logo.png" rounded height="80px" />
                            </div>
                         </p>
                    </div>
                    <div class="col-sm-4">
                        <h className="fontfusion">Fusion Colors Auto Body Repair <br></br> Database Management</h>
                        <p className="spotifyparagraph">
                        •	Database, where the user can register incoming car parts.<br></br>
                        •	User can create a new car part, modify, add images, and see the whole database of Fusion Colors.<br></br>
                        •	Used IntelliJ Idea, Java FX, linked list, and Object Oriented Programming.

                        <div className="row">
                                <Image className="images" src="https://image.flaticon.com/icons/png/512/226/226777.png" rounded height="80px" />
                                <Image className="images" src="https://cdn.freebiesupply.com/logos/large/2x/intellij-idea-1-logo-png-transparent.png" rounded height="80px" />
                                <Image className="images" src="https://upload.wikimedia.org/wikipedia/en/c/cc/JavaFX_Logo.png" rounded height="70px" />
                            </div>
                        </p>
                    </div>
                    <div class="col-sm-4">
                    
                     </div>
                </div>
            </div>            
        )
    }
}

export default Projects;