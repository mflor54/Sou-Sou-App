import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, PageHeader } from 'react-bootstrap';


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
    .then((groups) => {
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
      // console.log(total_members);
      owlstr.push("https://image.flaticon.com/icons/svg/12/12324.svg");
      // owlstr += <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
    }
    console.log(owlstr);
    return owlstr.forEach((owl)=> <img src={owl}/>);
    // return owlstr;
    // <img style={avatarStyle} src={owlstr} alt="username"/>;
    // <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
  }
  render(){
    const { groups } = this.state;
    console.log("this is groups from state", groups);
    return(
      <div>
        Nav Bar will be above page header
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
                  <p>{group.total_members}</p>
                  {this.showGroupMembers(group.total_members)}
                  {/* {this.showGroupMembers(group.total_members).forEach(img => <img src={img} style={avatarStyle} alt="username" />)} */}


                  {/* <img src={this.showGroupMembers(group.total_members)} />
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/> */}
                </Col>
              </Row>
            </ListGroupItem>
          )}
        </ListGroup>
        
          
        {/* <Grid> */}
          <ListGroup bsClass="groups-list-group">
            <ListGroupItem header="Debt Payoff Club" href="#">
              <Row>
                <Col md={4}>
                  <p>Savings Goal: $1000</p>
                </Col>
                <Col md={4}>
                  <p>Group description (cuts off after x-amount of characters)</p>
                </Col>
                <Col md={4}>
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                  <img style={avatarStyle} alt="username" src="https://image.flaticon.com/icons/svg/12/12324.svg"/>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
          
      </div>
    )
  }

} 
 


export default Groups;