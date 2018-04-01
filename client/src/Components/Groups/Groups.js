import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, PageHeader } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

import GroupProfile from '../GroupProfile/GroupProfile';
import ProfilePage from '../ProfilePage/ProfilePage';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';



const avatarStyle = {
  height: '50px',
  width: '50px',
  marginRight: '5px'
}

class Groups extends Component {
  constructor(){
    super();
    this.state = {
      groups: []
    }
  }

  getAllGroups = () => {
    fetch("/groups")
    .then(res => res.json())
    .then(groups => {
      console.log(groups.data[0]);
      let data = groups.data
      this.setState({
        groups: data
      });
    });
  }

  componentDidMount(){
    this.getAllGroups();
  }

  showGroupMembers(total_members){
    let owlstr = [];
    for(var i = 0; i < total_members; i++){

      owlstr.push("https://image.flaticon.com/icons/svg/12/12324.svg");

    }
    console.log(owlstr);
    return owlstr.map((owl)=> <img src={owl} style={avatarStyle} alt="username"/>);
  }

  renderGroupsList=()=>{
    const { groups } = this.state;
    console.log("this is groups from state", groups);
  return(  <div>
      <Nav />
      <PageHeader bsClass="groups-header">
        Example page header <small>Subtext for header</small>
      </PageHeader>

      <ListGroup bsClass="groups-list-group">
        {groups.map((group) =>
          <ListGroupItem header={group.description} href={`/groupProfile/${group.id}`}>
            <Row>
              <Col md={4}>
                <p>{group.frequency} pay-in of <strong>$ {group.total_amount}</strong></p>
              </Col>
              <Col md={4}>
                <p>Savings Goal: <strong>$ {group.payout}</strong></p>
              </Col>
              <Col md={4}>
                {this.showGroupMembers(group.total_members)}
              </Col>
            </Row>
          </ListGroupItem>
        )}
      </ListGroup>
    </div>

  )
  }

  render(){
    let groupList = this.state.groups
    console.log(groupList)
    return(

<div>

<Switch>
      <Route exact path="/groups" component={this.renderGroupsList} />
      <Route path="/groups/groupProfile" component={GroupProfile} />
      <Route path="/users/profile" component={ProfilePage}/>
      <Route path="/" component={Landing} />
</Switch>

      </div>
    )
  }

}



export default Groups;
