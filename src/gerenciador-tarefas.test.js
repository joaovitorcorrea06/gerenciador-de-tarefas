import { render, screen } from '@testing-library/react';
import GerenciadorTarefas from './gerenciador-tarefas';

test('renders learn react link', () => {
  const div= document.createElement('div');
  ReactDOM.render(<GerenciadorTarefas/>,div);
  ReactDOM.unmountComponentAtNode(div);
});
