import React, { Component } from 'react';
import ModalLogin from '../Login/Login';
import ModalRegister from '../Register/Register';
import Groups from '../Groups/Groups';
import { Grid, Row, Col,Jumbotron} from 'react-bootstrap';
import { Button} from 'mdbreact';
import './Ltwo.css';
import { Link, Route, Switch } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import Users from '../Users/Users';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

var logo = require('../images/Logo/OwoLogoNWGroup3LG.png');

// var bgFixed = require('../images/groupImages/audience-band-celebration-196652.jpg');


//import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';




class Ltwo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: false,
      showReg:false,
      show:true
    }
  }

  handleBackClick=()=> {
  this.setState({ show: false });
}



   renderLandingPage=()=>{
    let loginClose = () => this.setState({ showLogin: false });
    let regClose = () => this.setState({ showReg: false });
   return(
     <main>
     <div className="cd-scrolling-bg cd-scrolling-bg--color-1">
			<div className="cd-scrolling-bg__content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore incidunt suscipit similique, dolor corrupti cumque qui consectetur autem laborum fuga quas ipsam doloribus sequi, mollitia, repellendus sapiente repudiandae labore rerum amet culpa inventore, modi non. Quo nisi veritatis vitae nam, labore fugit. Inventore culpa iusto, officia exercitationem. Voluptates quibusdam odit odio incidunt consequatur, consectetur aspernatur optio vitae molestias, quas repellendus fugit ullam culpa, eligendi et dignissimos voluptatibus illum? Molestias aliquam nostrum quasi ipsa culpa, iusto explicabo ut error, consequuntur enim temporibus, adipisci tempora voluptate, id consequatur mollitia eveniet blanditiis. Illo quod repellendus alias? Cum rem doloremque adipisci accusantium? Saepe, necessitatibus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore incidunt suscipit similique, dolor corrupti cumque qui consectetur autem laborum fuga quas ipsam doloribus sequi, mollitia, repellendus sapiente repudiandae labore rerum amet culpa inventore, modi non. Quo nisi veritatis vitae nam, labore fugit. Inventore culpa iusto, officia exercitationem. Voluptates quibusdam odit odio incidunt consequatur, consectetur aspernatur optio vitae molestias, quas repellendus fugit ullam culpa, eligendi et dignissimos voluptatibus illum? Molestias aliquam nostrum quasi ipsa culpa, iusto explicabo ut error, consequuntur enim temporibus, adipisci tempora voluptate, id consequatur mollitia eveniet blanditiis. Illo quod repellendus alias? Cum rem doloremque adipisci accusantium? Saepe, necessitatibus!
				</p>
			</div>
		</div>


     <div className="cd-fixed-bg cd-fixed-bg--1">
  			<div className="cd-fixed-bg__content">
  				<h1>Alternate Fixed &amp; Scroll Backgrounds</h1>
  				<a className="cd-nugget-info" href="https://codyhouse.co/gem/alternate-fixed-scroll-backgrounds/">


  				</a>
  			</div>
  		</div>

  		<div className="cd-scrolling-bg cd-scrolling-bg--color-2">
  			<div className="cd-scrolling-bg__content">
  				<p>
  					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore incidunt suscipit similique, dolor corrupti cumque qui consectetur autem laborum fuga quas ipsam doloribus sequi, mollitia, repellendus sapiente repudiandae labore rerum amet culpa inventore, modi non. Quo nisi veritatis vitae nam, labore fugit. Inventore culpa iusto, officia exercitationem. Voluptates quibusdam odit odio incidunt consequatur, consectetur aspernatur optio vitae molestias, quas repellendus fugit ullam culpa, eligendi et dignissimos voluptatibus illum? Molestias aliquam nostrum quasi ipsa culpa, iusto explicabo ut error, consequuntur enim temporibus, adipisci tempora voluptate, id consequatur mollitia eveniet blanditiis. Illo quod repellendus alias? Cum rem doloremque adipisci accusantium? Saepe, necessitatibus!
  				</p>
  			</div>
  		</div>
      </main>

     )
  }

  render(){
    let loginClose = () => this.setState({ showLogin: false });
    let regClose = () => this.setState({ showReg: false });
  return(

  <div>
    <Switch>
      <Route exact path="/" component={this.renderLandingPage} />
      <Route path="/users" component={Users} />
      <Route path="/groups" component={Groups} />
    </Switch>
  </div>
    )
  }
}



export default Ltwo;
