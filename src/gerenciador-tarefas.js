import './gerenciador-tarefas.css';
import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefa from './cadastrar/cadastrar-tarefa';
import AtualizarTarefa from './atualizar/atualizar-tarefa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// const routes = {
//   '/': ()=> <ListarTarefas/>,
//   '/cadastrar': ()=> <CadastrarTarefa/>,
//   '/atualizar/:id': ({id})=> <AtualizarTarefa id={id} /> 
// };

function GerenciadorTarefas() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Lista</Link>
        </li>
        <li>
          <Link to='/cadastro'>Cadastro</Link>
        </li>
        <li>
          <Link to='/atualizar'>Atualizar</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<ListarTarefas/>} />
        <Route path="/cadastro" element={<CadastrarTarefa/>}/>
        <Route path="/atualizar"element={<AtualizarTarefa/>}/>
      </Routes>
    </Router>
  );
}

export default GerenciadorTarefas;
