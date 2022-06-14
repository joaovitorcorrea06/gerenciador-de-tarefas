import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSort, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from 'prop-types';

function Ordenacao(props){

    function handleAscDesc(){
        return (props.ordenarAsc || props.ordenasDesc) ? 'hidden' : '';
    }

    function handleAsc(){
        return props.ordenarAsc ? '' : 'hidden';
    } 

    function handleDesc(){
        return props.ordenarDesc ? '' : 'hidden';
    }

    return (
        <span>
            <FontAwesomeIcon icon={faSort} className={handleAscDesc()} data-testis='faSort'/>
            <FontAwesomeIcon icon={faSortUp} className={handleAsc()} data-testid='faSortUp'/>
            <FontAwesomeIcon icon={faSortDown} className={handleDesc()} data-testid='faSortDown'/>
        </span>
    )

};

Ordenacao.propTypes = {
    ordenarAsc: PropTypes.bool.isRequired,
    ordenasDesc: PropTypes.bool.isRequired
}

export default Ordenacao;
