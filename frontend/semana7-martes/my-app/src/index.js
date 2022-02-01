import React from "react";
import ReactDOM from "react-dom";

//Constant features of the cards.
const features = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
    title: "Titulo1",
    description: "Lorem",
    list: ["Titulo1.1", "Titulo1.2", "Titulo1.3", "Titulo1.4"],
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
    title: "Titulo2",
    description: "Lorem2",
    list: ["Titulo2.1", "Titulo2.2", "Titulo2.3", "Titulo2.4"],
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
    title: "Titulo3",
    description: "Lorem3",
    list: ["Titulo3.1", "Titulo3.2", "Titulo3.3", "Titulo3.4"],
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
    title: "PRUEBA",
    description: "Lorem3",
    list: ["Titulo3.1", "Titulo3.2", "Titulo3.3", "Titulo3.4"],
  },
];

//Test of Hello function and property
function Hello(property) {
  return <h1>Hello {property.name}</h1>;
}
//test of mapping an array and listing values through the creation of a list.
function CardDetail(props) {
  return props.detail.map((details) => <li>{details}</li>);
}

//Test of creation of Card element with dummy data and an existing array with the features of the cards.
function Card(cardproperty) {
  const {
    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
    title = "dummy value",
    description = "Lorem",
    list = ["test", "test"],
  } = cardproperty;

  return (
    <article>
      <img width="100" height="100" src={image}></img>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          <CardDetail detail={list}></CardDetail>
        </ul>
      </div>
    </article>
  );
}
//Function containing all elements.
function App() {
  return (
    <div>
      <Hello name="world"></Hello>
      <Hello name="music"></Hello>
      <Hello name="people"></Hello>
      <Card
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg"
        title="F"
        description="lOREM"
        list={["HOLA", "EFE", "OLA"]}
      ></Card>
      {features.map((feature) => (
        <Card
          image={feature.image}
          title={feature.title}
          description={feature.description}
          list={feature.list}
        ></Card>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
