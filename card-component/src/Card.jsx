import profilePic from './assets/ITM logo.png'

function Card() {


    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Samarth Mathur</h2>
            <p className="card-text"> I am a computer major student!</p>

        </div>
    );

}


export default Card;