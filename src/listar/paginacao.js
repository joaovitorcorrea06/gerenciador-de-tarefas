import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

function Pagincao(props) {

    function gerarPrimeiroItem(){
        return(
            <Pagination.First
            key='pagFirst'
            onClick={()=> props.mudarPagina(1)}
            disabled={props.paginaAtual === 1}/>
        );  
    }

    function gerarItemAnterior(){
        return(
            <Pagination.Prev
            key="pagPrev"
            onClick={()=> props.mudarPagina(props.paginaAtual - 1)}
            disabled={props.paginaAtual=== 1}/>
        )
    }

    function obterPaginacao(){
        let items = [];
        items.push(gerarPrimeiroItem());
        items.push(gerarItemAnterior());

        return items;
    }
    
    return( 
        <Pagination data-testid='paginacao'>
            {obterPaginacao()}
        </Pagination>
    );
}

Pagincao.propTypes = {
    totalItems: PropTypes.number.isRequired,
    itemsPorPagina: PropTypes.number.isRequired,
    paginaAtual: PropTypes.number.isRequired,
    mudarPagina: PropTypes.func.isRequired

}

export default Pagincao ;