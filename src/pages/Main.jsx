import React from 'react';
import '../style/style.css'
import { useNavigate } from "react-router-dom";


import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'


function Main(props) {
    let navigate = useNavigate();
    React.useEffect(() => {
        if (localStorage.getItem('login') !== 'true') {
            return navigate('/login')
        }
    })

    const handleLogout = () => {
        localStorage.removeItem('login');
        navigate('/login')
    }

    return (
        <div className='wrapper'>
            <div className="topnav"><small>Back</small><small onClick={(e)=>handleLogout(e)}>Logout</small></div>
            <div className="header">City News</div>
            <div className="body">
                <Card1 />
                <Card2 />
                <Card3 />
                <Card2 />
                <Card3 />
            </div>
            <a href="#" className='post-news'>POSTNEWS</a>
        </div>
    );
}

export default Main;