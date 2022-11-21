import React from "react";
import { useRef } from "react";

import "./postform.css"
const PostForm = () => {

    const fileInputElement = useRef();
    const fileNameTextBox = useRef();
    const inputBase64data = useRef();

    const handleBrowseClick = () => {
        fileInputElement.current.click();
    }
    const handleFileOnChange = ()=>{
        const reader = new FileReader();
        if(fileInputElement.current.files.length){
            fileNameTextBox.current.value = fileInputElement.current.files[0].name;
            // console.log(fileInputElement.current.files);
            reader.onload = ()=>{
                // console.log(reader.result);
                inputBase64data.current.value = reader.result;
            }
            reader.readAsDataURL(fileInputElement.current.files[0]);
            
        }
        else{
            console.log('No File Selected')
        }
    }

    return (
        <div id="postform-container">
        <form id="postform-form" action="http://localhost:3001/user/new-post" method="POST">
            <div className="file_input_div">
                <input ref= {fileNameTextBox} type="text" className="file_input_textbox" readOnly="readOnly" placeholder='No File Selected'></input>
                <input type="button" onClick={handleBrowseClick} value="Browse"  className="file_input_button" />
                <input ref={fileInputElement} type="file" onChange={handleFileOnChange} name="uploaded_file" className="file_input_hidden" />
                <input ref= {inputBase64data} type="text" name="filedata" readOnly="readOnly" className="file_input_hidden"></input>
            </div>
            {/* <div className="postform-input-author-location">
                <input id="postform-author" type={"text"} name="author" placeholder="Author"></input>
                <input id="postform-location" type={"text"} name="location" placeholder="Location"></input>
            </div> */}
            <div className="postform-input">
                <input id="postform-description" type={"text"} name="description" placeholder="Description"></input>
            </div>
            <div className="postform-input">
                <input id="postform-description" type={"text"} name=" available_quantity" placeholder="Available Quantity"></input>
            </div>
            <div className="postform-input">
                <input id="postform-description" type={"text"} name="weight" placeholder="Weight"></input>
            </div>
            <div className="postform-input">
                <input id="postform-description" type={"text"} name="v_weight" placeholder="Volumetric Weight"></input>
            </div>
            <div className="postform-input">
                <input id="postform-description" type={"text"} name="price" placeholder="Price"></input>
            </div>
            <button id="btn-post" type="submit">Submit</button>
        </form>
        </div>
    );
}

export default PostForm;