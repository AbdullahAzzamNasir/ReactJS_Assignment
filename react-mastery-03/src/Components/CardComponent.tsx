import './CardComponent.css'

type Props ={
    item:{
        title: string,
        description: string,
        image: string
        height: string,
        width: string,
        altText: string,
        saleText: string,
        wishlistLink: string,
        wishlistIcon: string,
        wishlistText: string,
        cartLink: string,
        cartIcon: string,
        cartText: string,
        quickViewLink: string,
        quickViewIcon: string,
        quickViewText: string,
        ratingIcon: string,
        ratingIconText: string,
        ratingNumber: number
        detail: string,
        downloadIcon: string,
        downloadIconText: string,
        totalSale: number,
        origianlPrice: number,
        salePrice: number,
        btnLink: string,
        btntext: string,
    }
}

function CardComponent(props:Props){
    return(
        <>
            <div className="productCardSection marginTop align-items-normal">
                <div className="productCard">
                    <div className="dental">
                        <div className="productImage">
                            <img src={props.item.image} alt={props.item.altText} height={props.item.height} width={props.item.width}/>
                            <div className="saletag">
                                    <span>{props.item.saleText}</span>
                            </div>
                            <div className="productFeatureBtn">
                                <a href={props.item.wishlistLink}>
                                    <img src={props.item.wishlistIcon} alt={props.item.wishlistText} />
                                </a>
                                <a href={props.item.cartLink}>
                                    <img src={props.item.cartIcon} alt={props.item.cartText} />
                                </a>
                                <a href={props.item.quickViewLink}>
                                    <img src={props.item.quickViewIcon} alt={props.item.quickViewText} />
                                </a>
                            </div>
                        </div>
                        <div className="productContent">
                            <div className="row">
                                <div className="departName">
                                    <h3>{props.item.title}</h3>
                                </div>
                                <div className="rating">
                                    <span>
                                        <img src={props.item.ratingIcon} alt={props.item.ratingIconText} />
                                        <span>{props.item.ratingNumber}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="productText">
                                <h3>{props.item.description}</h3>
                                <p>
                                    {props.item.detail}
                                </p>
                                <p>
                                    <span>
                                        <img src={props.item.downloadIcon} alt={props.item.downloadIconText} />
                                        {props.item.totalSale} Sales
                                    </span>
                                </p>
                                <p>
                                    <span>$ {props.item.origianlPrice}</span>
                                    <span>$ {props.item.salePrice}</span>
                                </p>
                                <div className="productDetailBtn">
                                    <a href={props.item.btnLink}>
                                        {props.item.btntext}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                    <p></p>
                </div>
            </div>
          
        </>
    )
}

export default CardComponent;