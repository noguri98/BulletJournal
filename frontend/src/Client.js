
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Client.css';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import Diary from './routes/Diary';
import Finance from './routes/Finance';

function UserDropDown() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function pageNavigation(path) {

        navigate(path);
        setIsOpen(false);
    }

    return (

        <>
        <button className='user-dropdown' onClick={() => setIsOpen(!isOpen)}>
            사용자 옵션
        </button>
        {isOpen && (
            <div className='user-content'>
                <p onClick={() => pageNavigation('/')}> 홈 </p>
                <p onClick={() => pageNavigation('/dashboard')}> 대시보드 </p>
                <p onClick={() => pageNavigation('/diary')}> 일기 </p>
                <p onClick={() => pageNavigation('/finance')}> 가계부 </p>
            </div>
        )}
        </>
    )

}

const Client = () => {

    return (

        <Router>
            <div className='client'>
                <div className='toolbar'>
                    <div className='user'>
                        <UserDropDown />
                    </div>
                </div>
                <div className='body'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/diary" element={<Diary />} />
                    <Route path="/finance" element={<Finance />} />
                </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Client;