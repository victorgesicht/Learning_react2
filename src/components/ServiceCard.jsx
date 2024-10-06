
import PropTypes from 'prop-types';
import  cardImage from '../assets/vintage.jpeg'


function ServiceCard (props){

    return(
        <div className="card">
            <img  className="image" src={cardImage}></img>
            <h3 className="card-title">Title: {props.heading}</h3>
            <p className="card-slug">skills: {props.skills}</p>
            <br/>

        </div>


    );

}

ServiceCard.PropTypes={
    heading:PropTypes.string,
    skills:PropTypes.string,
};


export default ServiceCard