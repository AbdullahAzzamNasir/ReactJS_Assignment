import CardComponent from "../Components/CardComponent";
import employeeJohn from '../assets/img_avatar.png'
import employeeJane from '../assets/img_avatar2.png'

function Home(){
    return(
        <>
            <h1>This is Home Page</h1>

            <h1>Employees Card</h1>
           <div className="parentCard">
           <CardComponent title="John Doe" description="Architect & Engineer" src={employeeJohn}/>
           <CardComponent title="Jane Doe" description="Interior Designer" src={employeeJane}/>
           </div>
        </>
    )
}

export default Home;