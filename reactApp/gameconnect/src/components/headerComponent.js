import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,Button,
    NavbarText,Offcanvas,OffcanvasHeader,OffcanvasBody} from 'reactstrap';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isOffCanvasOpen: false
        };
        this.toggleOffCanvas = this.toggleOffCanvas.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    
    toggleOffCanvas() {
        this.setState({
            isOffCanvasOpen: !this.state.isOffCanvasOpen
        });
    }

    render(){
        const dataObjects = this.props.dataObjects;
        const renderOffCanvas = (renderObject) => {
            let imagePath = renderObject.image;
            return(
                <div key={renderObject.id}>
                    <a href={renderObject.pathURL}>
                        <img className="bodyGameIcon" width="100%" src={imagePath} alt="Game Screenshot"/>
                    </a>
                    <div className="mt-3"><h5>{renderObject.name}</h5></div>
                    <div><small>{renderObject.genreName}</small></div>
                    <hr className="visible"></hr>
                </div>
            );
        }
        const offCanvasContents = dataObjects.map(renderObject => {
            return(
                <div key={renderObject.id} className="row">
                    {renderOffCanvas(renderObject)}
                </div>
            );
        });

        return(
            <div>
                <Navbar
                    color="dark"
                    container
                    dark
                    expand="sm"
                    fixed="top"
                >
                    <NavbarBrand className = "ms-auto" href="">
                    <i className="fa fa-gamepad" aria-hidden="true"></i> GameConnect
                    </NavbarBrand>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Button 
                            color="primary"
                            onClick={this.toggleOffCanvas}>
                                <i className="fa fa-user-circle" aria-hidden="true"></i> Play Now
                            </Button>
                        </NavItem>
                    </Nav>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <NavbarText className="ms-auto">
                        <a href="https://kuijunming93.github.io/myWebpage/site2/"
                        style={{textDecoration: "none", color: "lightblue"}}>
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> GoTo GrandFlix</a>
                    </NavbarText>
                    </Collapse>
                </Navbar>
                <Offcanvas
                    scrollable
                    isOpen={this.state.isOffCanvasOpen}
                    toggle={this.toggleOffCanvas}
                    autoFocus={true}>
                    <OffcanvasHeader toggle={this.toggleOffCanvas}>
                    <i className="fa fa-gamepad" aria-hidden="true"></i> Game List
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <div className="container">
                        {offCanvasContents}
                        <strong>
                        Stay tuned for more to come..
                        </strong>
                        </div>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        );
    }
}

export default Header;