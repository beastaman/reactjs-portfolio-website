import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="M.Tech Mechanical Engineering" where="Osmaina University" from="July 2018" to="July 2022"/>
            <Widecard title="SSLC | HSC" where="Little Tulips High School" from="2011" to="2016"/>
            </div>
            )
        }
    }
    
export default Education
    