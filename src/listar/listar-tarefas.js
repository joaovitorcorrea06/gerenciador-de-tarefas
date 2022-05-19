import { Link } from "react-router-dom";

function ListarTarefas () {
    return(
        <Link to='/cadastro' className="btn btn-success btn-sm">
            Nova tarefa
        </Link>   
    ); 
}

export default ListarTarefas;