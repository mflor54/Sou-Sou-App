import React, { Component } from 'react';
import axios from 'axios';
import Done from './Done';
// import { stripeSecretKey, clientID, stripePublishableKey } from '../../secret'
import { Switch, Link, Route, Redirect } from 'react-router-dom'

class Token extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount () {
        const param = this.props.location.search;
        const regex = /code=([^&]+)/;
        const val = String(param.match(regex));
        const slice = val.slice(5);
        console.log('THIS IS SLICE => ' + slice);
        axios.get('http://localhost:3100/users/stripe/token')
        .then((data) => {
            console.log('STRIPE DATA => ' + data);
        })
        .catch((err) => {
            console.log('STRIPE ERR => ' + err);
            return;
        })
    }

    render() {
        console.log(this.props);
        return (
            <Redirect to={"/users/done"} component={Done}/>
        )
    }
}

export default Token;