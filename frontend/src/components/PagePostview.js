
import React from 'react';
import { Postview } from './Postview';
import { Header } from './Header';
import { useState, useEffect } from 'react';

import "./PagePostview.css"

const PageNumber = ({ page, activePage, setActivePage }) => {

    return (
        <div onClick={() => { setActivePage(page) }} className={page === activePage ?
            "PagePostview-page-navigator-num-active" :
            "PagePostview-page-navigator-num"}>{page}</div>
    )
}


function PagePostview(Props) {
    const pageLen =3;
    const [isLoaded, setLoaded] = useState(false);
    const [allUserData, setAllUserData] = useState([]);
    const [currentPageData, setCurrentPageData] = useState([]);
    const [allPages, setAllPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        // setLoaded(false)
        // setCurrentPage(0);
        fetch('https://dineshborse-instaclone-server.herokuapp.com/user/all-posts')   //api for the get request
        // fetch('http://localhost:3001/user/all-posts')   //api for the get request
            .then(response => response.json())
            .then((data) => {
                setAllUserData(data);
                let len = Math.ceil((data.length / pageLen));
                let temp = [];
                for (let i = 0; i < len; i++) {
                    temp.push(i + 1);
                }
                setAllPages(temp)
                setCurrentPage(1);
                setLoaded(true)
            });
    }, [])

    useEffect(() => {
        if (currentPage) {
            let pageData = allUserData.slice((currentPage-1) * pageLen, currentPage * pageLen);
            setCurrentPageData(pageData);
        }
        // if (currentPage===allPages.length) {
        //     let pageData = allUserData.slice(currentPage - 1, currentPage * pageLen);
        //     setCurrentPageData(pageData);
        // }
        else {
            setCurrentPageData([])
        }
    }, [currentPage])

    const handlePrevPageClick = () => {
        // console.log(allPages)

        if (currentPage > 1) {
            setCurrentPage((prev) => { return prev - 1 })
        }
    }
    const handleNextPageClick = () => {
        // console.log(allPages)
        if (currentPage < allPages.length) {
            setCurrentPage((prev) => { return prev + 1 })
        }
    }

    const rightArrow = ">"
    const leftArrow = "<"
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
                    {currentPageData.map((user, i) => { return <Postview user_data={user} key={user._id.toString()} /> })}
                    {/* <PageNumberBox allPages={allPages} currentPage={currentPage}/> */}
                    <div className="PagePostview-page-navigator-container">
                        <div className={currentPage > 1 ? "PagePostview-page-navigator-arrow-box-prev" :
                            "PagePostview-page-navigator-arrow-box-prev2"} onClick={handlePrevPageClick}>{leftArrow}
                        </div>
                        {allPages.map((ele) => { return <PageNumber key={ele+currentPage} page={ele} activePage={currentPage} setActivePage={setCurrentPage} /> })}
                        <div className={currentPage < allPages.length ? "PagePostview-page-navigator-arrow-box-next" :
                            "PagePostview-page-navigator-arrow-box-next2"} onClick={handleNextPageClick}>{rightArrow}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PagePostview;
