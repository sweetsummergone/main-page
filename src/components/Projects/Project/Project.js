export default function Project(props) {
    return (
        <div className="project">
            <img onClick={() => window.open(props.link, '_blank', 'noopener,noreferrer')} className="project__gif" src={props.src} alt={props.alt}/>
            <h2 className="project__title">{props.header}</h2>
            <p className="project__desc">{props.desc}</p>
        </div>
    )
}