import React, {Component} from 'react'
import {Col, Grid, NavDropdown, Row} from 'react-bootstrap';
import './MyGroup.css'
import FA from 'react-fontawesome'
const groups = [
    {
        ID: 1,
        group_name: 'Robert Baratheon',
        total_members: 5,
        creator: 'Robert Baratheon',
        pay_in_amount: 23443,
        pay_out_amount: 2213,
        description_: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i' +
                'ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru' +
                'd exercitation',
        frequency: 1,
        date_created: '11.12.2018',
        end_date: null,
        user_id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Robert_Baratheon-Mark_Addy.' +
                'jpg/220px-Robert_Baratheon-Mark_Addy.jpg'
    }, {
        ID: 1,
        group_name: 'Jaime Lannister',
        total_members: 9,
        creator: 'Jaime Lannister',
        pay_in_amount: 100,
        pay_out_amount: 900,
        description_: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i' +
                'ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru' +
                'd exercitation',
        frequency: 1,
        date_created: '11.12.2018',
        end_date: null,
        user_id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Jaime_Lannister-Nikolaj_Cos' +
                'ter-Waldau.jpg/220px-Jaime_Lannister-Nikolaj_Coster-Waldau.jpg'
    }, {
        ID: 1,
        group_name: 'Catelyn Stark',
        total_members: 5,
        creator: 'Catelyn Stark',
        pay_in_amount: 200,
        pay_out_amount: 1000,
        description_: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i' +
                'ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru' +
                'd exercitation',
        frequency: 1,
        date_created: '11.12.2018',
        end_date: null,
        user_id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Catelyn_Stark-Michelle_Fair' +
                'ley_S3.jpg/220px-Catelyn_Stark-Michelle_Fairley_S3.jpg'
    }, {
        ID: 1,
        group_name: 'Ned Stark',
        total_members: 9,
        creator: 'Ned Stark',
        pay_in_amount: 50,
        pay_out_amount: 450,
        description_: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i' +
                'ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru' +
                'd exercitation',
        frequency: 1,
        date_created: '11.12.2018',
        end_date: null,
        user_id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ned_Stark-Sean_Bean.jpg/220' +
                'px-Ned_Stark-Sean_Bean.jpg'
    }, {
        ID: 1,
        group_name: 'Cersei Lannister',
        total_members: 5,
        creator: 'Cersei Lannister',
        pay_in_amount: 150,
        pay_out_amount: 750,
        description_: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i' +
                'ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru' +
                'd exercitation',
        frequency: 1,
        date_created: '11.12.2018',
        end_date: null,
        user_id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Cersei_Lannister-Lena_Heade' +
                'y.jpg/220px-Cersei_Lannister-Lena_Headey.jpg'
    }
];

export default class MyGroups extends Component {
    render_group(group) {
        return (
            <Col xs={12} sm={6} lg={4}>
                <div className="my-grp-item">
                    <div
                        className="my-grp-image"
                        style={{
                        backgroundImage: 'url(' + group.image + ')'
                    }}></div>
                    <div className="my-grp-footer">
                        <div className="my-grp-transfer"><FA name='exchange' rotate={90}/> {group.pay_out_amount}
                            / {group.pay_in_amount}</div>
                        <h1>{group.group_name}</h1>
                        <p className="my-grp-desc">{group.description_}</p>
                        <span className="my-grp-date">{group.date_created}</span>
                    </div>
                </div>
            </Col>
        )
    }
    render() {
        return groups.map(g => this.render_group(g))
    }
}
