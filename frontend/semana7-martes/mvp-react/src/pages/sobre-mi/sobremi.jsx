import { Card } from "../../components/card/card";
import { useSelector,useDispatch } from "react-redux";
//DATA:
//Data of Card Features:
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
  
export function PageSobremi() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
        <div className="page-sobremi">
            <h1>Lista de Cartillas: {count}</h1>
            <button style={{width:"200px",height:"200px"}} onClick={()=>dispatch({
        type: "INCREMENT",
      })}>INCREMENTAR</button>
      <button style={{width:"200px",height:"200px"}} onClick={()=>dispatch({
        type: "DECREMENT",
      })}>DECREMENTAR</button>
      <div className="main-cards">
      {
        features.map((feature)=>
        <Card
        image={feature.image}
          title={feature.title}
          description={feature.description}
          list={feature.list}
          
        >
        </Card>
        )
      }
      </div>
        </div>
    )
}