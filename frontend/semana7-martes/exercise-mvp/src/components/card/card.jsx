export function Card(cardproperties) {
    const  {
        imagen,
        titulo,
        descripcion,
        costo,
        tiempo,
    } = cardproperties

  return (
    <div className="card-content">
      <img className="card-image" src={imagen} alt="" />
      <h2>{titulo}</h2>
      <p>
        {descripcion}
      </p>
      <ul>
          <li>{costo}</li>
          <li>{tiempo}</li>
      </ul>
    </div>
  );
}
