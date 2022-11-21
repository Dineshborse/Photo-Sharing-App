const express = require("express");
const router = express.Router();
const userData = require("./modals/user-modal");
const userImageData = require("./modals/post-img-data-modal");
const inventoryInfo = require('./modals/inventory')
const imageDataURI = require("image-data-uri");
const fs = require("fs");

router.post("/new-post", (req, res) => {
    // console.log(req.body);
    const tempDate = new Date();
    let fileName = tempDate.toISOString().split(".").join("");
    // console.log(typeof (fileName))
    imageDataURI.outputFile(req.body.filedata, `${__dirname}/Post_Images/${fileName}`).then((result) => {
        // console.log(result);
        fileName = result.split(`/Post_Images/`)[1];
        const dateArr = tempDate.toDateString().split(" ");
        inventoryInfo.create({
            image_name: fileName,
            image: req.body.filedata,
            name: req.body.name,
            description: req.body.description,
            date: `${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`,
            available_quantity: req.body.available_quantity,
            weight: req.body.weight,
           y: req.body.v_weight,
            price: req.body.price,
        }).then(val=>{
            // console.log(val);
        }).catch((err)=>{console.log(err)});

        // userData.create({
        //     name: req.body.author,
        //     location: req.body.location,
        //     description: req.body.description,
        //     PostImage: fileName,
        //     date: `${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`

        // }).then((val) => {
        //     // console.log(val)
        // }).catch((err) => { console.log(err) });
    })
        .catch((err) => { console.log(err) });


    res.status(200).redirect(req.headers.referer+"postview");
});


router.get("/all-posts", (req, res) => {
    userData.find().then((postdata)=>{
        if(postdata.length){
            // console.log(postdata);
            res.status(200).send(postdata.reverse());
        }
    })
});

router.post("/postlikes",(req,res)=>{
    // console.log(req.body);
    userData.find({_id:req.body.postId}).then((postfound)=>{
        if(postfound.length){
            userData.updateOne({_id:req.body.postId},{$set:{likes:postfound[0].likes+1}}).then((val)=>{
                // console.log(val);
                res.status(200).send({"status":"success","likes": (postfound[0].likes+1).toString()});
                
            })
        }
        else{
            res.status(400).send("fail");
        }
    })
    
});


module.exports = router;