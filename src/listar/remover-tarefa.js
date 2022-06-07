import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function RemoverTarefas(props){

    const [exibirModal, setExibirModal] = useState(false);

    function handleAbrirModal (event){
        event.preventDefault();
        setExibirModal(true);
    }

    function handleFecharModal(){
        setExibirModal(false);
    }

    function handleRemoverTarefa(event){
        event.preventDefault();
        const tarefasDb = localStorage['tarefas'];
        let tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
        tarefas = tarefas.filter(tarefa => tarefa.id !== props.tarefa.id)
        localStorage['tarefas'] = JSON.stringify(tarefas);
        setExibirModal(false);
        props.recarregarTarefas(true);
    }

    return(
        <span>
            <Button variant='danger' className='btn-sm' onClick={handleAbrirModal} data-testid='btn-abrir-modal'>
                <FontAwesomeIcon icon={faTrashAlt} />
            </Button>

            <Modal show={exibirModal} onHide={handleFecharModal} data-testid='modal'>
                <Modal.Header closeButton> 
                    <Modal.Title>Remover tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente remover a seguinte tarefa?
                    <br/>
                    <strong> {props.tarefa.nome}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleRemoverTarefa} data-testid='btn-remover'>
                        Sim
                    </Button>
                    <Button variant ='ligth' onClick={handleFecharModal}>
                        Não
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );

}

RemoverTarefas.propTypes = {
    tarefa: PropTypes.object.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
}

export default RemoverTarefas;