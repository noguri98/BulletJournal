
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Client.css';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import Diary from './routes/Diary';
import Finance from './routes/Finance';

function ToolBar() {

    const navigate = useNavigate();

    return (

        <button className='toolbar-list01' onClick={() => navigate('/')}> Home </button>
    )
}

function Body() {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/finance" element={<Finance />} />
        </Routes>
    )
}

const Client = () => {

    return (

        <Router>
            <div className='client'>
                <div className='toolbar'>
                    <ToolBar />
                </div>
                <div className='body'>
                    <Body />
                </div>
            </div>
        </Router>
    )
}

export default Client;