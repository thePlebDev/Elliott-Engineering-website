import React from "react";
import SupportImage from "../../Resources/supporter.png"


 

const aboutPageInfo = [
    {
        id:0,
        status:true,
        title:"Support",
        image:SupportImage,
        details:"You will receive weekly updates about the current and future plans of this project",
        price:"$5",
        per:"/Month",
        buttonText:"Sign up"
    },
    {
        id:1,
        status:false,
        title:"Farmer",
        image:SupportImage,
        details:"You have all previous rewards, plus access to all of our current and future software products",
        price:"$25",
        per:"/Month",
        buttonText:"Sign up"
    },
    {
        id:2,
        status:false,
        title:"Partner",
        image:SupportImage,
        details:"You have all previous rewards, plus access to our APIs and access to our data project",
        price:"$100",
        per:"/Month",
        buttonText:"Sign up"

    }
    
]



export default aboutPageInfo