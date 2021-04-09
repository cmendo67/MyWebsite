import React, {Component} from 'react';
import {Jumbotron,Image} from 'react-bootstrap';

class LandingPage extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Image className="images" src="https://cdn4.iconfinder.com/data/icons/web-and-seo-21/65/1010-512.png" rounded height="200px" />
                    </div>
                    <div className="col">
                    <Image className="images" src="https://cdn3.iconfinder.com/data/icons/roles-computer-it/128/programmer-2-512.png"  rounded height="200px"/>
                    </div>
                    <div className="col">
                    <Image className="images" src="https://cdn3.iconfinder.com/data/icons/roles-computer-it/128/programmer_v2-2-512.png"  rounded height="200px"/>
                    </div>
                    <div className="col">
                    <Image className="images" src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-glyph-vol-1/64/web-development-glyph-04-512.png"  rounded height="200px"/>
                    </div>
                    <div className="col">
                        <Image className="images" src="https://iconape.com/wp-content/files/js/350929/svg/npm-seeklogo.com.svg" rounded height="200px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://www.tomsquest.com/img/posts/2018-10-02-better-npm-ing/npm_logo.png" rounded height="200px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://th.bing.com/th/id/R5861abf4e97e814076c629464632857b?rik=9yq2rBTsbmPC%2bQ&riu=http%3a%2f%2fshijuvarghese.com%2fwp-content%2fuploads%2f2018%2f03%2fgit-logo.png&ehk=VWHGBElU11qLS1iA3Hj5fiF6IBQKP7Dd99ln5g2aT6g%3d&risl=&pid=ImgRaw" rounded height="200px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://contentsquare.com/wp-content/uploads/2019/01/AWS_Logo@3x-8-1200x1200.png" rounded height="200px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://cdn1.iconfinder.com/data/icons/deisgn-and-development-8/64/vector_784_03-512.png" rounded height="200px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo.wine.png" rounded height="200px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://cdn.freebiesupply.com/logos/large/2x/eclipse-11-logo-png-transparent.png" rounded height="150px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://cdn.freebiesupply.com/logos/large/2x/intellij-idea-1-logo-png-transparent.png" rounded height="150px" />
                    </div>
                    <div className="col">
                        <Image className="images" src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png" rounded height="150px" />
                    </div>
                </div>
              </div>
        )
    }
}

export default LandingPage;