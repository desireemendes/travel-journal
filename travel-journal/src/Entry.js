function Entry (props) {
return (
    <section className="journal-entry">
        <p>{props.googleMapsUrl}</p>
        <img src={props.imageUrl} alt="" className="travel-photo" />
       <div>
        <span>{props.startDate} - {props.endDate}</span>
        <p>{props.title}</p>
        <p>{props.location}</p>
        <p>{props.description}</p>
       </div>
    </section>
)
}

export default Entry;