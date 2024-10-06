import  cardImage from '../assets/vintage.jpeg'

function ServiceCard (){

    return(
        <div className="card">

        <img  className="image" src={cardImage}></img>
        <title className="card-title">web dev</title>
        <p className="card-title">I am getting better everyday at web dev, both front end and back end.Interested in a continuous learning environment</p>
        <br/>
        <br/>
        <p className="card-title">CYBER SECURITY, WEB DEV, BACK_END</p>
        </div>


    );

}

export default ServiceCard