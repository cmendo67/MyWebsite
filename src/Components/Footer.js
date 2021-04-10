import React from 'react';
import './footer.css';
function Footer() {
    return(
        <footer className="page-footer">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 max-auto mb-4" id="footer-col1">
                        <h6 className="text-uppercase font-weight-bold" id="footer-header">Contact</h6> 
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width:"125px", height:"2px", backgroundColor:"#0d47a1"}} />
                        <ul className="list-unstyled">
                            <li className="my-2"><i className="fas fa-phone" style={{color: "white"}}></i> (661) 450-7603</li>
                            <li className="my-2"><i className="fas fa-envelope" style={{color: "white"}}></i> carlosmendo04@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mx-auto mb-4" id="footer-col2">
                        <h6 className="text-uppercase font-weight-bold" id="footer-header">You can find me at</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto " style={{width:"215px", height:"2px" , backgroundColor:"#0d47a1"}} />
                        <ul className="list-unstyled">
                            <li className="my-2">
                                <a href="https://www.linkedin.com/in/carlosmendo04/"><i className="fab fa-linkedin fa-5x" style={{color: "white", paddingRight: "50px"}}></i></a>
                                <a href="https://github.com/cmendo67"><i className="fab fa-github-square fa-5x" style={{color: "white"}}></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 offset-md-3 py-3" id="footer-header">
                <p>&copy; copyright</p>
                <p>Designed by Carlos Mendoza</p>
            </div>
        </footer>
    )
}
export default Footer;