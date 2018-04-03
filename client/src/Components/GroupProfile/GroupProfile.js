import React, { Component } from 'react';
import { Jumbotron, Col, Grid, Row, Panel, Glyphicon } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { Button} from 'mdbreact';

import ModalJoin from '../Join/Join';
import './GroupProfile.css';

const avatarStyle = {
  height: '50px',
  width: '50px',
  marginRight: '5px'
}

let disable_toggle = false;
class GroupProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showJoin: false,
      group:[], 
      groupID: ''
    }
  }
  

  //Gets one group from the database and udpates the state of group to that fetched group
  getGroup = () => {
    let groupID = this.props.match.params.groupID;
    //console.log(groupID);
    fetch(`/groups/${groupID}`)
    .then(res => res.json())
    .then(group => {
      console.log("=====>", group.data.id);
      let data = group.data;
      this.setState({
        group: data, 
        groupID: data.id
      });
    });
  }
  
  componentDidMount(){
    this.getGroup();
  }
  showGroupMembers(total_members){
    let owlstr = [];
    for(var i = 0; i < total_members; i++){

      owlstr.push("https://image.flaticon.com/icons/svg/12/12324.svg");

    }
    //console.log(owlstr);
    return owlstr.map((owl)=> <img src={owl} style={avatarStyle} alt="username"/>);
  }

  render() {
    let joinClose = () => this.setState({ showjoin: false });
    const { group, groupID } = this.state;
    console.log("group from state =>", group);
    console.log("groupID from state =>", groupID);
    
    return(
      <div>
        navbar
        <div>
          <Grid>
            
            <Row className="show-grid">
              <Col md={12}> 
                <h1 className="gp-title">{group.group_name}</h1>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={6}>
                <p>{group.description_}</p>
                <p>Group Creator: {group.creator} (i would prefer the group creator's avatar to be here</p>
                <p>{group.frequency} payments of ${group.pay_in_amount}</p>
                
              </Col>
              <Col md={6}>
                <p>Next Payout of <strong>${group.pay_out_amount}</strong> scheduled for April 1, 2018</p>
                <p></p>
                <div className="">
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                </div>
                <div>
                  {this.showGroupMembers(group.total_members)}
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={6}>
                <div className="modButtons">
                  <ModalJoin groupID={groupID}/>
                  {/* <Switch>

                  <ModalRoute path='/test' component={ModalJoin} />

                  </Switch>

                  <ModalJoin 
                    show={this.state.showJoin} 
                    onHide={joinClose}
                  />
                  <ModalContainer /> */}
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <Panel>
          <Panel.Heading>
            Message Board
          </Panel.Heading>
          <Panel.Body>
            <ul className="chat">
              <li className="left clearfix">
                <span className="chat-img pull-left">
                  <img className="img-circle" src="http://placehold.it/50/A430A8/fff&text=C" alt="user-avatar"  />
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="pull-left">Crystal</strong> 
                    <small className="pull-right">
                      <span className="glyphicon glyphicon-time"></span>
                      20min ago
                    </small>
                  </div>
                  <p className="chat-message pull-left">Is this going to show up where I want it to?</p>
                </div>
              </li>
              <li className="left clearfix">
                <span className="chat-img pull-left">
                  <img className="img-circle" src="http://placehold.it/50/08CEC7/fff&text=M" alt="user-avatar"  />
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="pull-left">Mike</strong> 
                    <small className="pull-right">
                      <span className="glyphicon glyphicon-time"></span>
                      20min ago
                    </small>
                  </div>
                  <p className="chat-message pull-left">Is this going to show up where I want it to?</p>
                </div>
              </li>
              <li className="left clearfix">
                <span className="chat-img pull-left">
                  <img className="img-circle" src="http://placehold.it/50/29D9F4/fff&text=K" alt="user-avatar"  />
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="pull-left">Krystal</strong> 
                    <small className="pull-right">
                      <span className="glyphicon glyphicon-time"></span>
                      20min ago
                    </small>
                  </div>
                  <p className="chat-message pull-left">Is this going to show up where I want it to? What happens if I put a shit ton of text in here because I'm angry! Arrrrarrrrrrrrrrrhahshshghghshshghg</p>
                </div>
              </li>
              <li className="left clearfix">
                <span className="chat-img pull-left">
                  <img className="img-circle" src="http://placehold.it/50/25283D/fff&text=R" alt="user-avatar"  />
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="pull-left">Rachel</strong> 
                    <small className="pull-right">
                      <span className="glyphicon glyphicon-time"></span>
                      20min ago
                    </small>
                  </div>
                  <p className="chat-message pull-left">Is this going to show up where I want it to?</p>
                </div>
              </li>
              <li className="left clearfix">
                <span className="chat-img pull-left">
                  <img className="img-circle" src="http://placehold.it/50/29D9F4/fff&text=K" alt="user-avatar"  />
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="pull-left">Krystal</strong> 
                    <small className="pull-right">
                      <span className="glyphicon glyphicon-time"></span>
                      20min ago
                    </small>
                  </div>
                  <p className="chat-message pull-left">Is this going to show up where I want it to?</p>
                </div>
              </li>
            </ul>
          </Panel.Body>

          <Panel.Footer>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="type your message here...."/>
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">Send</button>
              </span>
            </div>
          </Panel.Footer>
          
        </Panel>
            
        
      </div>
    )
  }
}


export default GroupProfile;

/*
<Panel.Footer>
  <div className="input-group">
    <input id="chat-input" type="text" className="form-control" placeholder="type message here...."/>
    <span className="input-group-addon" id=""></span>
  </div>
</Panel.Footer>
*/