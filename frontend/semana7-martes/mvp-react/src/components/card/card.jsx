
//CARD COMPONENT:

export//Cards Creation:
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
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          <CardDetail detail={list}></CardDetail>
        </ul>
      </div>
    </article>
  );
}
//Card Detail:
function CardDetail(props) {
    return props.detail.map((details) => <li>{details}</li>);
  }