import './CardComponent.css'

type Props ={
    item:{
        title: string,
        description: string,
        image: string
        height: string,
        width: string,
        altText: string,
    }
}

function CardComponent(props:Props){
    return(
        <>
            
           <div className="card">
                <img src={props.item.image} alt={props.item.altText} height={props.item.height} width={props.item.width}/>
                <h2>{props.item.title}</h2>
                <p>{props.item.description}</p>
            </div>
        </>
    )
}

export default CardComponent;