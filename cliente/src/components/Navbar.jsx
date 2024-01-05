import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ButtonAppBar() {
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg" >
      <Link to="/comuna">
        <h1 className="navbar-brand">Comuna</h1>
      </Link>



      {location.pathname === "/comuna/new" || location.pathname.includes('/comunas/') ? (
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => navigate("/comuna")}
        >
          Go back
        </button>

      ) : (
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => navigate("/comuna/new")}
        >
          Add Comuna
        </button>
      )}

      <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={() => navigate("/")}
      >
        Cerrar seccion
      </button>
    </nav>
  );
}
