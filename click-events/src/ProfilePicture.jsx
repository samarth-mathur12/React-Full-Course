function ProfilePicture(){

    const imageurl= "./src/assets/ITM logo.png";

    const handleClick = (e) =>{
        e.target.style.display = "none";
    }

    return(
        <>
            <img  onClick={(e) => handleClick(e)} src={imageurl}></img>  
            
        </>
    );

}

export default ProfilePicture;