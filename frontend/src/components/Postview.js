import { React, useState } from 'react';


import './postview.css'
function Postview(props) {

  const [userLikes,setUserLikes] = useState(parseInt(props.user_data.likes));
  // console.log(props.user_data);


  const handleLikesClick = (e) => {
    // console.log(e.target,props.user_data._id.toString())
    const payload = {
      postId: props.user_data._id.toString()
    }
    fetch("https://dineshborse-instaclone-server.herokuapp.com/user/postlikes", {//'http://localhost:3001/user/postlikes'
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data)=>data.json()).then((res) => {
      // console.log(res);
      setUserLikes(parseInt(res.likes));
    }).catch((err) => {
      console.log(err)
    })
  };

  // console.log(props.user_data)

  return (
    <div className='postview-container'>
      <div className='postview-div-1'>
        <div className='postview-name-div'>
          <p className='postview-name-p'>{props.user_data.name}</p>
          <p className='postview-location-p'>{props.user_data.location}</p>
        </div>
        <img className='img-tripleDot' src='../../menu.png' alt='menu'></img>
      </div>
      <div className='postview-div-2'>
        <img className='image' src={"https://dineshborse-instaclone-server.herokuapp.com/" + props.user_data.PostImage} alt="not found"></img>
      </div>
      <div className='postview-div-3'>
        <div className='postview-div-likes'>
          <div className='postview-div-3-images'>
            <img className='postview-img-likes' onClick={handleLikesClick} src='../../heart.png' alt='heart icon'></img>
            <img className='postview-img-send' src='../../send.png' alt='send icon'></img>
          </div>
          <p className='postview-likes-p' >{userLikes} likes</p>
        </div>
        <p className='postview-date-p'>{props.user_data.date}</p>
      </div>
      <div className='postview-div-4'>

        <p className='postview-discription-p'><b>{props.user_data.description}</b></p>
      </div>

    </div>
  );

  //<h2>postview Page</h2>;
}
export { Postview }