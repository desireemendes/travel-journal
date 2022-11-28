import './Entry.css'

function Entry (props) {
return (
    <section className="journal-entry">
        <p>{props.googleMapsUrl}</p>
        <p>{props.location}</p>
        <img src={props.imageUrl} alt="" className="travel-photo" />
        <span>{props.startDate} - {props.endDate}</span>
        <p>{props.title}</p>
        <p>{props.description}</p>
       
    </section>
)
}

export default Entry;