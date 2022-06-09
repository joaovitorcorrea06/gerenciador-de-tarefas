import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import ItensListaTarefas from "./itens-lista-tarefas";
import Paginacao from "./paginacao";

function ListarTarefas () {

    const ITENS_POR_PAG = 3;

    const [tarefas, setTarefas] = useState([]);
    const [carregarTarefas, setCarregarTarefas] = useState(true);
    const [totalitems, setTotalItems] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [ordenarAsc, setordenarAsc] = useState(false);
    const [ordenarDesc, setOrdenarDesc] = useState(false);


    useEffect(() => {
        function obterTarefas() {
            const tarefasDb = localStorage['tarefas'];
            let listaTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
            // ordenar
            if(ordenarAsc){
                listaTarefas.sort((t1,t2) => (t1.nome.toLowerCase() > t2.nome.toLowerCase()) ? 1 : -1);
            } else if (ordenarDesc){
                listaTarefas.sort((t1,t2) => (t1.nome.toLowerCase() < t2.nome.toLowerCase()) ? 1 : -1);
            }
            // paginar
            setTotalItems(listaTarefas.length);
            setTarefas(listaTarefas.splice((paginaAtual-1) * ITENS_POR_PAG, ITENS_POR_PAG));
        }
        if (carregarTarefas){
            obterTarefas();
            setCarregarTarefas(false);
        }
    }, [carregarTarefas,paginaAtual,ordenarAsc,ordenarDesc]);

    function handleMudarPagina(pagina){
        setPaginaAtual(pagina);
        setCarregarTarefas(true);
    }

    function handleOrdenar(event){
        event.preventDefault();
        if (!ordenarAsc && !ordenarDesc){
            setordenarAsc(true);
            setOrdenarDesc(false);
        } else if(ordenarAsc) {
            setordenarAsc(false);
            setOrdenarDesc(true);
        } else {
            setordenarAsc(false);
            setOrdenarDesc(false);
        }    
        setCarregarTarefas(true);
        }

    return(
        <div className="text-center">
            <h3>Tarefas a fazer</h3>
            <Table striped bordered hover responsive data-testid="tabela">
                <thead>
                    <tr>
                        <th>
                            <a href='/' onClick={handleOrdenar}>
                            Tarefa
                            </a>
                        </th>
                        <th>
                        <Link to='/cadastro' className="btn btn-success btn-sm" data-testid="btn-nova-tarefa">
                            <FontAwesomeIcon icon={faPlus} />
                            &nbsp;
                            Nova tarefa
                        </Link>  
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ItensListaTarefas 
                        tarefas={tarefas}
                        recarregarTarefas={setCarregarTarefas}
                        />

                </tbody>
            </Table> 
            <Paginacao 
            totalItems={totalitems}
            itensPorPagina={ITENS_POR_PAG}
            paginaAtual={paginaAtual}
            mudarPagina={handleMudarPagina} />
        </div>
    ); 
}

export default ListarTarefas;