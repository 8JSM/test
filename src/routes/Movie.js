import PropTypes from "prop-types"
import {Link} from "react-router-dom"
function Movie({id, medium_cover_image,title}) {
    return <div>
        <img src={medium_cover_image} alt={title}></img>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        </div>
}
Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}
export default Movie;