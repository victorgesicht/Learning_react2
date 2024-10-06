
import PropTypes from 'prop-types';
import  cardImage from '../assets/vintage.jpeg'


function ServiceCard (props){

    return(
        <div className="card">

            <img  className="image" src={cardImage}></img>
            <title className="card-title">title:{props.head}</title>
            <p className="card-slug">Skills:{props.skills}</p>
            <br/>

        </div>


    );

}

ServiceCard.PropTypes={
    head:PropTypes.string,
    skills:PropTypes.string,
};


export default ServiceCard