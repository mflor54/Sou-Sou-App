import React, {Component} from 'react';
// import ModalLogin from '../Login/Login'; import ModalRegister from
// '../Register/Register';
import {withRouter} from 'react-router';
import {Col, Grid, NavDropdown, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import {Button, Input} from 'mdbreact';
import FA from 'react-fontawesome';
import ReactFileReader from 'react-file-reader';

import Groups from '../Groups/Groups';
import Landing from '../Landing/Landing';
// import '../Landing/Landing.css';
import ProfileActions from '../../Actions/profile';
import OwoNavbar from '../Navbar';
import ProfilePic from './ProfilePic';
import MyGroups from './MyGroups';

import './ProfilePage.css';

class ProfilePage extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props)
        this.state = {
            showLogin: false,
            showReg: false,
            showUpload: false,
            user: {
                amount: 100,
                email: "tbabekrys@gamil.com",
                first_name: "",
                id: 1,
                last_name: "",
                password_digest: "",
                profile_pic: "https://png.icons8.com/windows/1600/owl.png",
                rating: null,
                salt: null,
                stripe_id: null,
                username: "Krys All Day"
            }
        };
        this.renderProfilePage = this.renderProfilePage.bind(this);
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handleNameSave = this.handleNameSave.bind(this);
        this.handleUndoNameSave = this.handleUndoNameSave.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }
    componentDidMount() {
        ProfileActions.get((res) => {
            this.setState({
                user: res.data.data[0],
                user_bkp: res.data.data[0]
            })
            
        }, () => {
            this.props.history.push('/');
        })
    }
    handleUserInputChange(e) {
        let change = {}
        change[e.target.name] = e.target.value;
        this.setState({
            user: {
                ...this.state.user,
                ...change
                }
        })
    }
    handleNameSave(){
        ProfileActions.update({
            first_name: this.state.user.first_name,
            last_name: this.state.user.last_name,
        }, (data) => {
            console.log(data)
            this.setState({
                editingName: false,
                user: {...this.state.user, ...data.data}
            })
        })
    }
    handleUndoNameSave() {
        this.setState({
            editingName: false,
            user: this.state.user_bkp,
        })
    }
    handleFile = (files) => {
        console.log(files.base64)
        this.setState({
            showUpload: true,
            user: {
                ...this.state.user,
                profile_pic: files.base64
            }
        })
    }
    handleUploadFile = (files) => {
        ProfileActions.uploadProfilePic({
            image_: this.state.user.profile_pic
        }, ()=>{
            this.setState({
                showUpload: false,
            })
        }, ()=>{
            alert('upload failed')
        })
    }
    renderNameEditor() {
        return(
            <div>
                <div className="d-flex">
                    <div className="col-6 no-padding">
                        <Input
                            color="indigo"
                            size="sm"
                            label="First Name"
                            name="first_name"
                            autoFocus
                            onChange={this.handleUserInputChange}
                            defaultValue={this.state.user.first_name}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            size="sm"
                            label="Last Name"
                            name="last_name"
                            onChange={this.handleUserInputChange}
                            defaultValue={this.state.user.last_name}
                        />
                    </div>
                </div>
            </div>
        )
    }
    renderProfilePage() {
        const display_name = (
            <h2><i>Welcome </i> <strong>{this.state.user.first_name} {this.state.user.last_name}</strong></h2>
        )
        const user = this.state.user
        const uploadBtnClass = ["uploadBtn", (this.state.showUpload)? "": "d-none" ].join(' ')
        return (
            <Grid>
                <Row className="show-grid top-gutter">
                    <Col xs={6} md={4} id="sec1">
                        
                        <ProfilePic src={user.profile_pic}/>
                        <ReactFileReader fileTypes={[".jpg",".png"]} base64={true} handleFiles={this.handleFile}>
                                <Button color="primary" className={(this.state.showUpload)?"d-none":""} size="sm"><FA name="pencil"/></Button>
                        </ReactFileReader>
                        <Button color="indigo" className={uploadBtnClass} size="sm" onClick={this.handleUploadFile} >Upload</Button>
                    </Col>
                    <Col xs={12} md={8} id="sec2" className="d-flex flex-column">
                        <div className="col-12 profile-info-box">
                            <div className="d-flex nameBox">
                                <div style={{overflow: 'hidden'}} className="col">
                                { (this.state.editingName && this.renderNameEditor()) || display_name }
                                </div>
                                <div className="col col-auto">
                                { 
                                    (!this.state.editingName && 
                                    <Button size="sm" color="indigo" className="pull-right editButton" onClick={() => this.setState({editingName: true})}><FA name="pencil"/></Button>) || 
                                    (
                                        <div>
                                            <Button size="sm" color="indigo" className="pull-right" onClick={this.handleUndoNameSave}><FA name="undo"/></Button>
                                            <Button size="sm" color="primary" className="pull-right" onClick={this.handleNameSave}><FA name="check"/></Button>
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                            <div className="d-flex">
                                <strong className="col-6">Rating:</strong>
                                <strong className="col-6">Gold</strong>
                            </div>
                            <div className="d-flex">
                                <strong className="col-6">Memeber Since:</strong>
                                <strong className="col-6">2017</strong>
                            </div>
                            <div className="d-flex">
                                <strong className="col-6">Savings to date:</strong>
                                <strong className="col-6">${user.amount}</strong>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="show-grid2">
                    <Col xs={12} lg={12}>
                        <h2 className="panel-headding"> My Groups
                            <Button className="pull-right btn-outline-dark">+ Group</Button>
                        </h2>
                        <Row className="show-grid2">
                            <MyGroups/>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
    render() {
        let loginClose = () => this.setState({showLogin: false});
        let regClose = () => this.setState({showReg: false});
        return (
            <Router>
                <div>
                    <OwoNavbar/>
                    <Route exact path="/users/profile" component={this.renderProfilePage}/>
                    <Route exact path="/groups" component={Groups}/>
                    <Route exact path="/" component={Landing}/>
                </div>
            </Router>
        )
    }
}

export default withRouter(ProfilePage);
