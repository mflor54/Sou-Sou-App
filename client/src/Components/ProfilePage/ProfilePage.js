
import React, { Component } from 'react';
// import ModalLogin from '../Login/Login';
// import ModalRegister from '../Register/Register';

import { Grid, Row, Col,Jumbotron, Button, Popover,
  Tooltip, Modal,OverlayTrigger, ButtonToolbar, Navbar,
  Nav, NavItem, NavDropdown, MenuItem, Image, Thumbnail,
  Media, ListGroup,ListGroupItem } from 'react-bootstrap';



class ProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: false,
      showReg:false
    }
  }


  render(){
   let loginClose = () => this.setState({ showLogin: false });
   let regClose = () => this.setState({ showReg: false });
  return(

  <div>
    <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">OWO</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>

    <Navbar.Collapse>
    <Navbar.Text>
      Signed in as: Jason Otto
    </Navbar.Text>
    </Navbar.Collapse>

    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Groups
      </NavItem>
      <NavItem eventKey={2} href="#">
        Home
      </NavItem>

      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>

    </Nav>
  </Navbar.Collapse>

  <Jumbotron>

<Media>
    <Media.Left>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" circle />
    </Media.Left>
    <Media.Body>
      <h1><Media.Heading>Jason Otto</Media.Heading></h1>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque

      </p>
    </Media.Body>
  </Media>

</Jumbotron>


</Navbar>



<Navbar>
  <Navbar.Header>
  <Navbar.Brand>
      <a href="#groups">My Awesome Groups</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Text pullRight> Create a Group!</Navbar.Text>
  </Navbar.Collapse>

  <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>

</Navbar>



<ListGroup>

<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#groups">Suggested Groups</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>


    <Navbar.Text pullRight>Join a Group</Navbar.Text>
  </Navbar.Collapse>


  <ListGroupItem header="Heading 1">Join a Group</ListGroupItem>
  <ListGroupItem header="Heading 2" href="#">
    Linked item
  </ListGroupItem>
  <ListGroupItem header="Heading 3" bsStyle="danger">
    Danger styling
  </ListGroupItem>

  </Navbar>
 </ListGroup>

  </div>
    )
  }
}

export default ProfilePage;
        
