import './Entry.css'

function Entry (props) {
return (
    <section className="journal-entry">
        <div className="img-box">
        <img className="travel-photo" src={props.imageUrl} alt={props.title} />
        </div>
        <div className="location">
        <a className="location-url" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        <p id="title">{props.location}</p>
        </div>
        <span>{props.startDate} - {props.endDate}</span>
        <p>{props.title}</p>
        <p>{props.description}</p>
       
    </section>
)
}

export default Entry;