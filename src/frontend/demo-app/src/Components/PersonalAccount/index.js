import React,{useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import LoggedIn from "./loggedIn";
import NotLoggedIn from "./notLoggedIn";

const Container = styled.div`
    
    width:80%;
    margin:2rem auto;
    text-align:center;

    box-shadow: 0 2px 4px rgb(0 0 0 / 7%), 0 4px 5px rgb(0 0 0 / 6%), 0 1px 10px rgb(0 0 0 / 10%);
`




const PersonalAccount =()=>{
    const [authenticated, setAuthenticated] = useState(true)

    useEffect(()=>{
        const authorization = sessionStorage.authorization
        axios.get("/api/v1/user/auth",{headers:{
            "Authorization":authorization
        }})
        .then(function(){
            setAuthenticated(true)
        })
        .catch(function(error){
            setAuthenticated(false)
        })

    },[authenticated,setAuthenticated])
    return(
        <Container>
            {
                authenticated
                    ?
                <LoggedIn/>
                    :
                <NotLoggedIn/>

            }
            
        </Container>
    )
}

export default PersonalAccount