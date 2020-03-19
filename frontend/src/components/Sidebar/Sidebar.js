/* ----------------------------------------------------
React.js / Sidebar component

Updated: 03/17/2020
Author: Daria Vodzinskaia
Website: www.dariacode.dev
-------------------------------------------------------  */

import React from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth-context';

import './Sidebar.css';

const sidebar = props => {
    return (
        <AuthContext.Consumer>
            {context => {
                return (
                    <div className="main-sidebar">
                        <div className="main-bar__items">
                            <ul>
                                {context.token && (
                                    <React.Fragment>
                                        <li>
                                            <Link to="/sendings">Sendings</Link>
                                        </li>
                                    </React.Fragment>
                                )}
                                <li>
                                    <Link to="/tasks">Tasks</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            }}
        </AuthContext.Consumer>
    )
}

export default sidebar;