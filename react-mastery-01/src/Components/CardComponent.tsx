import './CardComponent.css'

function CardComponent(props:any){
    return(
        <>
            
           <div className="card">
                <img src={props.src} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </>
    )
}

export default CardComponent;