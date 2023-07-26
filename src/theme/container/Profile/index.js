import React, { useEffect } from "react";
    
const Profile = () => {
    useEffect(()=>{
        alert("Hii")
    },[])
    return <h1 style={{ textAlign: "center" }}>Profile Page</h1>
};
export default Profile;
    