
import React from 'react';
import { Postview } from './Postview';
import { Header } from './Header';
import { useState, useEffect } from 'react';
function PagePostview(Props) {

    const [isLoaded, setLoaded] = useState(false);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        // fetch('https://dineshborse-instaclone-server.herokuapp.com/user/all-posts')           //api for the get request
        fetch('https://dineshborse-instaclone-server.herokuapp.com/user/all-posts')           //api for the get request
            .then(response => response.json())
            .then((data) => {
                setUserData(data);
                setLoaded(true)
            });
    }, [])


    if (!isLoaded) {
        return (
            <><Header /></>
        );
    }
    else {
        return (
            <>
                <Header />
                <div className='app-body-div'>
                    {userData.map((user, i) => { return <Postview user_data={user} key = {user._id.toString()} /> })}
                </div>
            </>
        );
    }
}

export default PagePostview;
