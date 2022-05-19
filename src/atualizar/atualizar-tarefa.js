import { useParams } from "react-router-dom";

function AtualizarTarefa (){

    let {id} = useParams

    return <h1>Atualizar tarefa</h1>
}

export default AtualizarTarefa;