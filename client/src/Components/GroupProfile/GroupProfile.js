import React, { Component } from 'react';


import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Article from 'grommet/components/Article';
import Image from 'grommet/components/Image';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Pulse from 'grommet/components/icons/Pulse';
import Down from 'grommet/components/icons/base/Down';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Label from 'grommet/components/Label';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Columns from 'grommet/components/Columns';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Nav from '../Nav/Nav';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';


import { Jumbotron, Col, Grid, Row, Panel, Glyphicon } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { Button} from 'mdbreact';
import axios from 'axios'


import Join from '../Join/Join';
import './GroupProfile.css';

var logo = require('../images/Logo/OwoLogoNWGroupGR.png');
var car =require('../images/groupImages/auto-automobile-automotive-358208.jpg');
let groupID = JSON.parse(localStorage.getItem('groupID')) || [];
var Jason= require("../images/crew/jason.jpg");

var randomImages = [
    require('../images/groupImages/activity-adventure-blur-297642.jpg'),
    require('../images/groupImages/action-architecture-automobile-174752.jpg'),
    require('../images/groupImages/architecture-art-beautiful-415708.jpg'),
    require('../images/groupImages/architecture-art-business-191429.jpg'),
    require('../images/groupImages/auto-automobile-automotive-358208.jpg'),
    require('../images/groupImages/business-conference-learning-7095.jpg'),
];

// import { Jumbotron, Col, Grid, Row, Panel, Glyphicon } from 'react-bootstrap';
// import { Link, Route, Switch } from 'react-router-dom';
// import { ModalContainer, ModalRoute } from 'react-router-modal';
// import { Button} from 'mdbreact';

const capFirstLetter=(string)=>{
  return string.charAt[0].toUpperCase() + string.slice(0)
}


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
      groupID:this.props.match.params.groupID,
      group:[],
      groupinfo: props.groupInfo,
      member: false,
      groupOpen: true,
      currentMembers: 3,
      maxMembers: 5,
      showMessage: false,
      resOne:[],
      resTwo:[],
      resThree:[],
      resFour:[],

    }
  }



  // getInitialState: function () {
  //   return JSON.parse(localStorage.getItem('ticker') || '{}');
  // },
  // componentDidMount: function () {
  //   var self = this;
  //   setInterval(function () {
  //     this.setState({
  //       ticks: this.state.ticks + 1
  //     });
  //     localStorage.setItem('ticker', JSON.stringify(this.state));
  //   }, 1000);
  // },

  getGroupMembers = (id) => {
    fetch(`/groups/${id}/members`)
    .then(res => {
      return res.json();
    })
    .then(info => console.log(info))
    .cath(err => console.log("get members err", err))
  }

  checkGroupStatus = () => {
    const {group} = this.state;
    let groupID = group.id;
    //const { groupID } = this.state;

    fetch(`/groups/${groupID}/check`)
    .then(res =>
      res.json()
    )
    .then(group => {
      console.log("++--> check status:", group.data);
      let data = group.data[0];
      //console.log(data.maxMembers);
      /*
      if(group.data[0].currentMembers !== undefined){
        let currentMembers = parseInt(data.currentMembers);
        let maxMembers = data.maxMembers;
        console.log(currentMembers, maxMembers);

        if(currentMembers >= maxMembers) {
          this.setState({
            groupOpen: false
          });
        }
      }
      */

    })
    // console.log("checking status");
  }


  mockUser = ()=>{
    fetch('https://randomuser.me/api/?results=4')
    .then(res=> res.json())
    .then(mocks => {
let one = mocks.results[0]["picture"]["thumbnail"]
let two = mocks.results[1]["picture"]["thumbnail"]
let three = mocks.results[2]["picture"]["thumbnail"]
let four = mocks.results[3]["picture"]["thumbnail"]

  this.setState({
    resOne:one,
    resTwo:two,
    resThree:three,
    resFour:four,


  })



    })
  }

  //Gets one group from the database and udpates the state of group to that fetched group
  getGroup = () => {
    console.log(this.props.groupinfo);
    console.log(this.state.groupinfo);
    console.log(this.state.groupID);
    const {groupID} =this.state
    // let groupID = this.props.match.params.groupID;
    console.log(groupID);
    fetch(`/groups/${groupID}`)
    .then(res => res.json())
    .then(group => {
      console.log("=====>", group.data);
      let data = group.data;
      this.setState({
        group: data
      });
    })
    // .then(
    //   this.getGroupMembers()
    // )
  }

  handleJoinSubmit = e => {
    console.log("///clicking submit");
    //get group id and send to back end via axios post request
    let groupID = this.state.group.id;
    let userID = 4;
    console.log("this is this.state.groupID:", groupID);
    //
    //post request to userJoinGroup

    axios.post(`/groups/${groupID}/join/${userID}`, {
      groupID: groupID
    })
    .then(res => {
      console.log("***handleJoinSubmit response: ",res);
      this.setState({
        member: true
      })
    });
  };



  componentDidMount(){
    let groupID = this.props.match.params.groupID;
    localStorage.setItem('groupID', JSON.stringify(groupID));
    this.setState({ groupID: groupID });
    this.getGroup();
    this.checkGroupStatus();
    this.mockUser();
    //this.getGroupMembers();

  }


  showGroupMembers(total_members){
    let owlstr = [];
    for(var i = 0; i < total_members; i++){

      owlstr.push("https://image.flaticon.com/icons/svg/12/12324.svg");

    }
    //console.log(owlstr);
    return owlstr.map((owl)=> <img src={owl} style={avatarStyle} alt="username"/>);
  }

  paymentOnClick = () => {
    let groupID = this.props.match.params.groupID
    console.log(groupID);
    axios.post(`/groups/${this.state.groupID}/charge`)
    .then((data) => {
      console.log('onClick data ==> ' + JSON.stringify(data));
    })
    .catch((err) => {
      console.log(err)
    })
  }

  ShowMessage = () => {
    console.log("clicking");
    const { showMessage } = this.state;
    this.setState({
      showMessage: !showMessage
    });
  }

  render() {
    let joinClose = () => this.setState({ showjoin: false });
    const { group, member, groupOpen, showMessage, resFour,resThree, resTwo, resOne } = this.state;

//     let one = mockResults.map(pic => console.log(pic.picture))
//     let onePic = mockResults["0"]
//     let go = Object.entries(mockResults["0"])
// console.log(go)
//     console.log(onePic);

// console.log("Mock images", one);

    console.log("**member from state =>", member);
    if(!member){
      return(
        <div>
          <Hero
            background={<Image src={car}
            fit='cover'
            full={true} />}
            backgroundColorIndex='dark'
          >
            <Box
              direction='row'
              justify='center'
              align='center'
            >
              <Box
                basis='1/2'
                align='end'
                pad='medium'
              />
              <Box
                basis='1/2'
                align='start'
                pad='medium'
              >
                <Headline
                  margin='none'
                  size='large'>
                  {group.group_name}
                </Headline>
                {/* <button onClick={this.paymentOnClick}>PAY HERE</button> */}
                <Headline
                    size='small'
                    strong={false}
                    id='headline'>
                            {group.frequency} payments of ${group.pay_in_amount}
                </Headline>

              </Box>
            </Box>
          </Hero>
          <Section
            pad='small'
            justify='center'
            align='center'
            className="groups-header"
          >

          </Section>
          <Section
            pad='large'
            justify='center'
          >
            <Headline>Group Info</Headline>
            <Headline
              size='small'
              strong={false}
              id='headline'
            >
              {group.description_}
            </Headline>
            <Headline
              size='small'
              strong={false}
            >
              <strong>Group Creator: </strong>{" "}<img
                              className="img-circle"
                              src={resFour}
                              alt="user-avatar"
                             /> CamOne
            </Headline>
            <Headline
              size='small'
              strong={false}
              id='headline'>
                {group.frequency} payments of ${group.pay_in_amount}
            </Headline>

          </Section>
          <Section
            pad='large'
            justify='center'
          >
            <Headline>Group Updates:</Headline>
            <Headline
              size='small'
              strong={false}
              id='headline'
            >
              Next Payout of <strong>${group.pay_out_amount}</strong> scheduled for (Standby)
            </Headline>
            <Headline
              size='small'
              strong={false}
            >
              <div>
              <img
                              className="img-circle"
                              src={resFour}
                              alt="user-avatar"
                             />{" "}
                             <img
                                             className="img-circle"
                                             src={resThree}
                                             alt="user-avatar"
                                            />{" "}<img
                                                            className="img-circle"
                                                            src={resTwo}
                                                            alt="user-avatar"
                                                           />{' '}<img
                                                                           className="img-circle"
                                                                           src={resOne}
                                                                           alt="user-avatar"
                                                                          />{' '}<img
                                                                                          className="img-circle"
                                                                                          src={"https://image.flaticon.com/icons/svg/12/12324.svg"}
                                                                                          alt="user-avatar"
                                                                                         />
              </div>
            </Headline>
            <Section>
              <Join groupID={this.state.groupID} submit={this.handleJoinSubmit}/>
            </Section>
          </Section>

        </div>
      )
    } else {
      return(
        <Article scrollStep={false}>
        <Hero
          background={<Image src={car}
          fit='cover'
          full={true} />}
          backgroundColorIndex='dark'
        >
          <Box
            direction='row'
            justify='center'
            align='center'
          >
            <Box
              basis='1/2'
              align='end'
              pad='medium'
            />
            <Box basis='1/2'
              align='start'
              pad='medium'
            >
              <Headline
                margin='none'
                size='large'
              >
                {group.group_name}
              </Headline>

            </Box>
          </Box>
        </Hero>
        <Section pad='small'
          justify='center'
          align='center'
          className="groups-header"
          >

          </Section>
          <Section
            pad='large'
            justify='center'
          >
            <Headline>Group Info</Headline>
            <Headline
              size='small'
              strong={false}
              id='headline'>
              {group.description_}
            </Headline>
            <Headline
              size='small'
              strong={false}
            >
              Group Creator: <img
                              className="img-circle"
                              src={resFour}
                              alt="user-avatar"
                            />
            </Headline>
            <Headline
              size='small'
              strong={false}
              id='headline'
            >
              {group.frequency} payments of ${group.pay_in_amount}
            </Headline>

          </Section>
          <Section
            pad='large'
            justify='center'
          >
            <Headline>Group Updates:</Headline>
              <Headline
                size='small'
                strong={false}
                id='headline'
              >
                Next Payout of <strong>${group.pay_out_amount}</strong> scheduled for April 20, 2018
              </Headline>
              <Headline
                size='small'
                strong={false}
              >
                <div>
                <img
                                className="img-circle"
                                src={resFour}
                                alt="user-avatar"
                               />{" "}
                               <img
                                               className="img-circle"
                                               src={resThree}
                                               alt="user-avatar"
                                              />{" "}<img
                                                              className="img-circle"
                                                              src={resTwo}
                                                              alt="user-avatar"
                                                             />{' '}<img
                                                                             className="img-circle"
                                                                             src={resOne}
                                                                             alt="user-avatar"
                                                                            />{' '}<img
                                                                                            className="img-circle"
                                                                                            src={Jason}
                                                                                            alt="user-avatar"
                                                                                           />                </div>
              </Headline>
                <Section>
                  <Button disabled className="btn-custom" color="secondary-color-dark"> Group Full</Button>
                </Section>
              </Section>

              <Section
                pad='large'
                justify='center'
              >
                <Headline >ChatBoard</Headline>
                <List>
                  <ListItem
                    justify='between'
                    separator='horizontal'
                  >

                    <span >
                    <img className="img-circle" src={resOne} alt="user-avatar"  />
                    </span>

                    <span >

                      <strong>CamOne</strong>
                    </span>

                    <span className='secondary' >

                    <span id="text-align" className="pull-right" id="verticalLine">
                          Heyyyy guys, Welcome to our awesome savings club... Lets save some money 🤑💪🏽
                      </span>
                    </span>
                      <small className="pull-right" >
                        <span className="glyphicon glyphicon-time"></span>
                        <span>
                        {" "}20min ago
                        </span>
                      </small>
                  </ListItem>
                  <ListItem
                    justify='between'
                    separator='horizontal'
                  >

                    <span pad='small'>
                    <img className="img-circle" src={resTwo} alt="user-avatar"  />
                    </span>

                    <span pad='small' id="space">
                      <strong>Skylark46</strong>
                    </span>

                    <span className='secondary' id="verticalLine">

                    <span>
                          I am new to OWO... I am excited to be in my first savings pool, goodluck everyone 😁
                      </span>
                    </span>
                      <small className="pull-right" >
                        <span className="glyphicon glyphicon-time"></span>
                        <span>
                        {" "}17min ago
                        </span>
                      </small>
                  </ListItem>
                  <ListItem justify='between'
                    separator='horizontal'
                    >

                    <span pad='small'>
                    <img className="img-circle" src={resThree} alt="user-avatar"  />
                    </span>

                    <span pad='small' id="space">

                      <strong>AlexDex</strong>
                    </span>


                    <span className='secondary' id="verticalLine">

                    <span>
                          OMG!! Nice to meet everyone... we are going to accompish so much together 🤴🏽👸🏽💅🏽
                      </span>
                    </span>
                      <small className="pull-right" >
                        <span className="glyphicon glyphicon-time"></span>
                        <span>
                        {" "}10min ago
                        </span>
                      </small>


                  </ListItem>
                  <ListItem
                    justify='between'
                    separator='horizontal'
                  >

                    <span pad='small'>
                    <img className="img-circle" src={resFour} alt="user-avatar"  />
                    </span>

                    <span pad='small' id="space">

                      <strong>AngelOnEarth</strong>
                    </span>


                    <span className='secondary' id="verticalLine">

                    <span>
                          This is awesome, I am meeting so many new people and saving so much. I 💜 OWO Yay!
                      </span>
                    </span>
                      <small className="pull-right" >
                        <span className="glyphicon glyphicon-time"></span>
                        <span>
                        {" "}5min ago
                        </span>
                      </small>


                  </ListItem>

                  {!showMessage ?
                    <ListItem
                      justify='between'
                      separator='horizontal'
                    >
                      <span> </span>
                    </ListItem>
                    :
                    <ListItem
                      justify='between'
                      separator='horizontal'
                    >
                      <span pad='small'>
                        <img className="img-circle" src={Jason} alt="user-avatar"  />
                      </span>

                      <span pad='small' id="space">

                        <strong>Jason</strong>
                      </span>


                      <span className='secondary' id="verticalLine">

                      <span>
                          Hey I'm new to OWO also! So excited to start saving money with my new w.o.e.s!!!
                      </span>
                      </span>
                      <small className="pull-right" >
                        <span className="glyphicon glyphicon-time"></span>
                        <span>
                        {" "}0min ago
                        </span>
                      </small>
                      </ListItem>
                    }

                </List>


                <div className="input-group">

                <FormField  pad='medium' size='large' type="text" className="form-control" label="type your message here....">
                  <TextInput  />
                </FormField>

                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button" onClick={this.ShowMessage}>Send</button>
                  </span>
                </div>
            </Section>
            <Section
              pad='large'
              justify='center'
              align='center'>
            </Section>

      </Article>
    )}
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
