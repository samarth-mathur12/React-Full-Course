import PropTypes from "prop-types";

function UserGreeting({isLoggedIn= false, username = "Guest"}){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }else{
    //     return <h2>Please Log in to continue</h2>
    // }

    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please Log in to continue</h2>

    return (isLoggedIn ? welcomeMessage : loginPrompt);
}


UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username:"Guest",
}



export default UserGreeting;