import { useNavigate } from "react-router-dom";
import "../components/card.css"
import 'bootstrap/dist/css/bootstrap.min.css'





function ComunasCard({ comuna }) {
  const navigate = useNavigate();

  return (
    

    <div>
      
      <br />
      <div
        class="card bg-success bg-gradient text-light card-body"
        onClick={() => navigate(`/comunas/${comuna.id}/edit`)}
      >


        <h3 className="cardTitulo">{comuna.comuna}</h3>
        <p>{comuna.generacion} Kwh/Kwp * Año.</p>
        <p>{comuna.costocombustiblepeaje} costo de combustible de Peaje.</p>
        <p>{comuna.valorventaenergia} Valor de venta de Energia.</p>

      </div>
    </div>
  );
}

export default ComunasCard;
