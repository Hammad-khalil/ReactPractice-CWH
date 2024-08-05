import "./Card.css"
import PropTypes from 'prop-types';
const Card = (props) => {
    return (
        <div className="card">
            <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="coding image" width={170} style={{ border: "2px solid black" }} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>

        </div>
    )
};
Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Card
