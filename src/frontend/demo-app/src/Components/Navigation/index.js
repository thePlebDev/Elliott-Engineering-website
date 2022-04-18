import React,{useState} from 'react'

import Header from "../Header";
import MobileNavigation from "../MobileNavigation";


const Navigation = ()=>{
    const [clicked,setClicked] = useState(false)

    return(
        <>
            <Header clicked={clicked} setClicked={setClicked}/>
            <MobileNavigation clicked={clicked}/> 
        </>
    )
}

export default Navigation