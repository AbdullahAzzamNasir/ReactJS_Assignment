import CardComponent from "../Components/CardComponent";
import employeeJohn from "../assets/img_avatar.png";
import employeeJane from "../assets/img_avatar2.png";

function Home() {
  return (
    <>
      <h1>This is Home Page</h1>

      <h1>Employees Card</h1>
      <div className="parentCard">
        <CardComponent item={{
              title: "John Doe",
              description: "Architect & Engineer",
              image: employeeJohn,
              altText: "Employee Picture",
              height: "100%",
              width: "100%"
        }} />
        <CardComponent
          item={{
            title: "Jane Doe",
            description: "Interior Designer",
            image: employeeJane,
            altText: "Employee Picture",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </>
  );
}

export default Home;
