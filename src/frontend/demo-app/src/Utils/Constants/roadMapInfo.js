import React from "react";
import RoadMapImage from "../../Resources/roadMap.png"




const roadMapInfo = [
    {
        id:0,
        status:false,
        title:"Phase 1",
        image:RoadMapImage,
        phase:[{first:"Launch Android app",second:"Launch website",third:"5$ subscription",}],
        buttonText:"Current"
    },
    {
        id:1,
        status:false,
        title:"Phase 2",
        image:RoadMapImage,
        phase:[{first:"Version 2 Android app",second:"Web version",third:"25$ subscription",}],
        buttonText:"Upcoming"
    },
    {
        id:1,
        status:false,
        title:"Phase 3",
        image:RoadMapImage,
        phase:[{first:"Launch data project",second:"Launch Apple app",third:"100$ subscription",}],
        buttonText:"Upcoming"
    }
    
]



export default roadMapInfo