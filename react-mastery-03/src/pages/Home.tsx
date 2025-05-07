import CardComponent from "../Components/CardComponent";
import employeeJohn from "../assets/img_avatar.png";
import employeeJane from "../assets/img_avatar2.png";
import employeeWood from "../assets/image-01.webp";
import employeeKayle from "../assets/image-02.webp";
import CEO from "../assets/image-04.avif";
import heartIcon from "../assets/heart.png"
import cartIcon from "../assets/cart.png"
import eyeIcon from "../assets/eye.png"
import staricon from "../assets/rating-star.png"
import downloadIcon from "../assets/download.webp"

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="heading" style={{ paddingLeft: "20px" }}>
            Employees Card
          </h1>
          <div className="parentCard">
            <CardComponent
              item={{
                title: "Mark Tyson",
                description: "Cheif Executive Officer",
                image: CEO,
                altText: "Employee Picture",
                height: "100%",
                width: "100%",
                saleText: "Sale",
                wishlistLink: "#!",
                wishlistIcon: heartIcon,
                wishlistText: "WishList",
                cartLink: "#!",
                cartIcon: cartIcon,
                cartText: "Shoppig Basket",
                quickViewLink: "#!",
                quickViewIcon: eyeIcon,
                quickViewText: "Quick View",
                ratingIcon: staricon,
                ratingIconText: "Product Rating",
                ratingNumber: 4.9,
                detail: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                downloadIcon: downloadIcon,
                downloadIconText: "Total Sales",
                totalSale: 15,
                origianlPrice: 16.48,
                salePrice: 14.48,
                btnLink: "#!",
                btntext: "Learn More",
              }}
            />
           
           <CardComponent
              item={{
                title: "John Doe",
                description: "Architect & Engineer",
                image: employeeJohn,
                altText: "Employee Picture",
                height: "100%",
                width: "100%",
                saleText: "Sale",
                wishlistLink: "#!",
                wishlistIcon: heartIcon,
                wishlistText: "WishList",
                cartLink: "#!",
                cartIcon: cartIcon,
                cartText: "Shoppig Basket",
                quickViewLink: "#!",
                quickViewIcon: eyeIcon,
                quickViewText: "Quick View",
                ratingIcon: staricon,
                ratingIconText: "Product Rating",
                ratingNumber: 4.5,
                detail: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                downloadIcon: downloadIcon,
                downloadIconText: "Total Sales",
                totalSale: 13,
                origianlPrice: 15.48,
                salePrice: 12.48,
                btnLink: "#!",
                btntext: "Learn More",
              }}
            />

            <CardComponent
              item={{
                title: "Jane Doe",
                description: "Interior Designer",
                image: employeeJane,
                altText: "Employee Picture",
                height: "100%",
                width: "100%",
                saleText: "Sale",
                wishlistLink: "#!",
                wishlistIcon: heartIcon,
                wishlistText: "WishList",
                cartLink: "#!",
                cartIcon: cartIcon,
                cartText: "Shoppig Basket",
                quickViewLink: "#!",
                quickViewIcon: eyeIcon,
                quickViewText: "Quick View",
                ratingIcon: staricon,
                ratingIconText: "Product Rating",
                ratingNumber: 4.2,
                detail: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                downloadIcon: downloadIcon,
                downloadIconText: "Total Sales",
                totalSale: 11,
                origianlPrice: 14.48,
                salePrice: 11.48,
                btnLink: "#!",
                btntext: "Learn More",
              }}
            />

            <CardComponent
              item={{
                title: "Mark Wood",
                description: "Product Designer",
                image: employeeWood,
                altText: "Employee Picture",
                height: "100%",
                width: "100%",
                saleText: "Sale",
                wishlistLink: "#!",
                wishlistIcon: heartIcon,
                wishlistText: "WishList",
                cartLink: "#!",
                cartIcon: cartIcon,
                cartText: "Shoppig Basket",
                quickViewLink: "#!",
                quickViewIcon: eyeIcon,
                quickViewText: "Quick View",
                ratingIcon: staricon,
                ratingIconText: "Product Rating",
                ratingNumber: 4.0,
                detail: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                downloadIcon: downloadIcon,
                downloadIconText: "Total Sales",
                totalSale: 10,
                origianlPrice: 12.48,
                salePrice: 10.48,
                btnLink: "#!",
                btntext: "Learn More",
              }}
            />

            <CardComponent
              item={{
                title: "Kayle Johnson",
                description: "Senior Developer",
                image: employeeKayle,
                altText: "Employee Picture",
                height: "100%",
                width: "100%",
                saleText: "Sale",
                wishlistLink: "#!",
                wishlistIcon: heartIcon,
                wishlistText: "WishList",
                cartLink: "#!",
                cartIcon: cartIcon,
                cartText: "Shoppig Basket",
                quickViewLink: "#!",
                quickViewIcon: eyeIcon,
                quickViewText: "Quick View",
                ratingIcon: staricon,
                ratingIconText: "Product Rating",
                ratingNumber: 3.8,
                detail: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                downloadIcon: downloadIcon,
                downloadIconText: "Total Sales",
                totalSale: 12,
                origianlPrice: 11.48,
                salePrice: 19.48,
                btnLink: "#!",
                btntext: "Learn More",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
