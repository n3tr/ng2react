
import React from 'react';
import Dashboard from './Dashboard';

export default () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <h1 className="headline">
                        <a href="/">
                            <span>Awesome</span>
                            <span className="tb">Angular</span>
                        </a>
                    </h1>
                </div>
            </div>
            <Dashboard />
        </div>
    )
}