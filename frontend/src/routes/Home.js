
import { useEffect, useState } from 'react';
import './Home.css';

function HomeData() {

    const [homeData, setHomeData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/home')
            .then(response => response.json())
            .then(data => setHomeData(data));
    }, []);

    return homeData;
}

const Home = () => {

    const homeData = HomeData();


    return (

        <div className="home">
            <div className="home-head">

            </div>
            <div className="home-body">
                <div className='home-left'>
                    <div className='home-left-list01'>
                        <div className='home-widget01'>
                            - Monthly 위치 -
                        </div>
                        <div className='home-widget02'>
                            - Graph 위치 -
                        </div>
                    </div>
                    <div className='home-left-list02'>
                        <div className='list-content'>
                            {homeData && homeData.map((item, index) => (
                            <div key={index} className='diary-card'>
                                <div className='diary-date'>{item.Date}</div>
                                <div className='diary-title'>{item.Title}</div>
                                <div className='diary-feel'>{item.Feel}</div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className='home-right'>
                  
                </div>
            </div>
        </div>
    )
}

export default Home;