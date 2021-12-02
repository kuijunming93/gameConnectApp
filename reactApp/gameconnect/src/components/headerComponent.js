import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,Button,
    NavbarText,Offcanvas,OffcanvasHeader,OffcanvasBody,Carousel,
    CarouselIndicators,CarouselItem,CarouselCaption,CarouselControl,UncontrolledCarousel} from 'reactstrap';

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
        return(
            <div>
                <Navbar
                    color="dark"
                    container
                    dark
                    expand="md"
                    fixed="top"
                >
                    <NavbarBrand href="/">
                    reactstrap
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Button 
                            color="primary"
                            onClick={this.toggleOffCanvas}>
                                <i class="fa fa-user-circle" aria-hidden="true"></i> Play Now
                            </Button>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                    </Collapse>
                </Navbar>
                <Offcanvas
                    scrollable
                    isOpen={this.state.isOffCanvasOpen}
                    toggle={this.toggleOffCanvas}
                    autoFocus={true}>
                    <OffcanvasHeader toggle={this.toggleOffCanvas}>
                    Offcanvas
                    </OffcanvasHeader>
                    <OffcanvasBody>
                    <strong>
                        This is the Offcanvas body.
                    </strong>
                    </OffcanvasBody>
                </Offcanvas>
                <UncontrolledCarousel
                items={[
                    {
                    altText: '',
                    caption: 'test',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                    altText: '',
                    caption: '',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                    altText: '',
                    caption: '',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}/>
            </div>
        );
    }
}

export default Header;