import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import { ListGroup, ListGroupItem, Row, Col, PageHeader } from 'react-bootstrap';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Article from 'grommet/components/Article';
import Image from 'grommet/components/Image';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Pulse from 'grommet/components/icons/Pulse';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Columns from 'grommet/components/Columns';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Select from 'grommet/components/Select';
import Paragraph from 'grommet/components/Paragraph';


import GroupProfile from '../GroupProfile/GroupProfile';
import ProfilePage from '../ProfilePage/ProfilePage';
import FooterUser from '../Footer/Footer';

import Landing from '../Landing/Landing';
import Navagation from '../Nav/Nav';
import './Groups.css'

var pic = require('../images/groupImages/architecture-art-business-191429.jpg');
var logo = require('../images/Logo/OwoLogoNWGroupGR.png');
var randomImages = [
    require('../images/groupImages/architecture-boat-buildings-208701.jpg'),
    require('../images/groupImages/backlit-clouds-dusk-853168.jpg'),
    require('../images/groupImages/bay-beach-beautiful-531602.jpg'),
    require('../images/groupImages/beach-cave-cavo-greco-371588.jpg'),
    require('../images/groupImages/celebration-coloured-crowd-889545.jpg'),
    require('../images/groupImages/book-chair-chat-711009.jpg'),
    require('../images/groupImages/activity-adventure-blur-297642.jpg'),
    require('../images/groupImages/action-architecture-automobile-174752.jpg'),
    require('../images/groupImages/architecture-art-beautiful-415708.jpg'),
    require('../images/groupImages/architecture-art-business-191429.jpg'),
    require('../images/groupImages/auto-automobile-automotive-358208.jpg'),
    require('../images/groupImages/business-conference-learning-7095.jpg'),
];



class Groups extends Component {
  constructor(){
    super();
    this.state = {
      groups: [],
      search:''
    }

    this.renderGroupsList = this.renderGroupsList.bind(this)


  }


  getAllGroups = () => {
    fetch("/groups")
    .then(res => res.json())
    .then(groups => {
      console.log(groups.data.username);
      let data = groups.data
      this.setState({
        groups: data,
        mockPics:[],
        mockResults:[]
      });
    });
  }

mockUser = ()=>{
  fetch('https://randomuser.me/api/?results=20')
  .then(res=> res.json())
  .then(mocks => {
    console.log(mocks.results)
let mockResults =mocks.results
    // console.log('holder :', holder );
    let mockpic = mockResults.map(pic =>{this.setState({ mockPics:pic.picture.thumbnail})})
    console.log(mockpic);
    // let mockpic = mockResults.map(pic =>{console.log(pic.picture.thumbnail)})


  })
}


  componentDidMount(){
    this.getAllGroups();
    this.mockUser();
  }

  showGroupMembers(total_members){
  const {mockPics} = this.state
    let owlstr = [];
    // console.log(owlstr);
    for(var i = 0; i < total_members; i++){

  owlstr.push('{mockPics}');

    }
    console.log(owlstr);
    return owlstr.map((owl)=> <div id="inner"><img src={owl} className="avatarStyle" alt="username"/></div>);
  }

//   showGroupMembers(total_members){
//   const {mockPics} = this.state
// mockPics.forEach(el =>{
//   console.log(el);
// })
// }

  handleSearch(e) {
    const {search}=this.state
    console.log('value');
    this.setState({
      search:e.target.value
    })
  }


  renderGroupsList(){
    const { groups, mockPics } = this.state;
    console.log(mockPics);
    console.log("this is groups from state", groups);

  let payList=  groups.map((group)=>{
      console.log(group.pay_out_amount);

    })


    let filteredGroups = groups
  return(
<Article

scrollStep={false}>

      <Section
        justify='center'
        align='center'
        className='background-header'
        colorIndex={'#25283D'}
        pad='medium'
        >


                <Headline>How Will You Save Today?</Headline>


                <Section
                pad='medium'
                  justify='center'
                  align='center'>

                            <Box flex={true}
                              justify='end'
                              direction='row'
                              responsive={false}
                              size='large'>

                                  <Search inline={true}
                                        colorIndex='light-2'
                                        value={this.state.search}
                                        required autoFocus
                                        onDOMChange={this.handleSearch.bind(this)}
                                        fill={true}
                                        size='large'
                                        placeHolder='Search Groups'
                                        dropAlign={{"right": "right"}} />
                                  </Box>

                  </Section>
                  </Section>


                <Section
pad='small'
                  justify='center'
                  align='center'
                  margin='none'>
                  <Box flex={true}
                    justify='end'
                    direction='row'
                    responsive={false}
                    size='large'
                    pad='medium'>

                    <Select
                            pad='small'
                            fill={true}
                            size='large'
                            placeHolder='Sort by Pay Out'
                            inline={false}
                            multiple={false}
                            colorIndex='light-2'
                            options={['$50', '$100', '$200']}
                            value={this.state.search}
                            onChange={this.handleSearch.bind(this)} />

                </Box>
                      <Tiles fill={true}
                        flush={true}
                        selectable={true}
                        justify='center'
                        align='center'
                        pad='small'
                        >
                        {filteredGroups.map((group)=>(
                              <Tile>
                                       <Link to={`/groups/${group.group_name}`} groupinfo={group.creator}><Card id='thumbnail'
                                       full='true'
                                       thumbnail={randomImages[Math.floor(Math.random()*randomImages.length)]}

                                        heading={group.group_name.toUpperCase()}
                                        label={`Group Creator: ${group.username}`}

                                        />
                                          <Heading
                                          id='headingfont'
                                                strong={false}
                                                uppercase={false}
                                                truncate={false}
                                                align='start'
                                                margin='none'>
                                                <strong>Description:<br /></strong>
                                              {`${group.description_}`}
                                              </Heading>
                                    <Paragraph
                                        id='headingfont'
                                        margin='small'
                                        pad='small'>

                                          {`Payout Amount: ${group.pay_out_amount}`}<br />
                                          {`Payin Amount: ${group.pay_in_amount}`}<br/>
                                          {`Frequency: ${group.frequency}`}


                                        </Paragraph>
                                            <div className="avatar">
                                                    <div className="avatarList">
                                                          {this.showGroupMembers(group.total_members)}
                                                    </div>
                                            </div>
                                      </Link>
                              </Tile>
                          ))}
                    </Tiles>

            </Section>

  </Article>



  )
  }

  render(){
    let groupList = this.state.groups
    return(

<div>
<Navagation />

<Switch>
      <Route exact path="/groups" component={this.renderGroupsList} />
      <Route path="/groups/:groupID" component={GroupProfile} groupinfo={groupList}/>
      <Route path="/users/profile/:userID" component={ProfilePage} groupinfo={groupList}/>
      <Route path="/" component={Landing} />
</Switch>
  <FooterUser />
      </div>
    )
  }

}


export default Groups;
