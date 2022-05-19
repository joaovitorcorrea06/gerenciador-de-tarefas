import { useState } from 'react';
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap'
import { Link, Navigate, Redirect, useNavigate } from 'react-router-dom';


function CadastrarTarefa(){

    const [tarefa, setTarefa] = useState('');
    const [formValidado, setFormValidado] = useState(false);
    const [exibirModal, setExibirModal] = useState (false);

    function cadastrar(event){

    }

    function handleTxtTarefa(event){
        setTarefa(event.target.value);
    }

    function handleFecharModal(){
        <Navigate to="/" replace={true} />
    }

    return (
        <div>
            <h3 className='text-center'> Cadastrar </h3>
            <Jumbotron>
                <Form
                validated={formValidado}
                noValidate
                onSubmit={cadastrar}
                >
                    <Form.Group>
                        <Form.Label> Tarefa</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder='Digite a tarefa'
                        minLength={5}
                        maxLength="100"
                        required
                        value={tarefa}
                        onChange ={handleTxtTarefa}
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            A tarefa deve conter ao menos 5 caracteres
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='text-center'>
                        <Button
                        variant='success'
                        type = ' submit'
                        >Cadastrar</Button>
                        &nbsp;
                        <Link to='/' className='btn btn-light'> Voltar </Link>
                    </Form.Group>
                </Form>
                <Modal show={true} onHide={handleFecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sucesso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tarefa adicionada com sucesso!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                        variant='success'
                        onClick={handleFecharModal}
                        >
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>
        </div>

    );
}

export default CadastrarTarefa;