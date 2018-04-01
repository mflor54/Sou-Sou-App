import React, { Component } from 'react'
import './ProfilePic.css'

export default class ProfilePic extends Component {
    render() {
        return (
            <div className="profilepic">
                <img src={this.props.src}/>
            </div>
        )
    }
}
