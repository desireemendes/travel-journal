import './Entry.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Entry (props) {
return (
    <section className="journal-entry">
        <div className="img-box">
        <img className="travel-photo" src={props.imageUrl} alt={props.title} />
        </div>
        <div className="location">
        <FontAwesomeIcon icon={faLocationDot} className="entry-location-icon" />
        <h2 className="entry-location">{props.location}</h2>
        <a className="location-url" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        </div>
        <h3 className="entry-title">{props.title}</h3>
        <p className='entry-date'>{props.startDate} - {props.endDate}</p>
        <p className='entry-desc'>{props.description}</p>
       
    </section>
)
}

export default Entry;