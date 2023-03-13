import React, { Children } from 'react';

const Profile= ({FullName,Bio,Profession,handlefunc,imgSrc})=>{
    const callhandle=()=>{
        handlefunc(FullName);
    }
return(
<div>
    <img src={imgSrc} width="360 px" ></img>
<h1><a onClick={callhandle}> {FullName}</a></h1>
<h2>{Bio}</h2>
<h3>{Profession}</h3>

</div>
)}
Profile.defaultProps={
    FullName :"name",
    Bio: "bio",
    Profession:"profession"   
}
Profile.propTypes={
    FullName: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string
}
export default Profile;
