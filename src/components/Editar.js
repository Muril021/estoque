import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Input from "./Input";
import Botao from "./Botao";
import Mensagem from "./Mensagem";

const Editar = () => {
  const { id } = useParams();

  const [inputNome, setInputNome] = useState('');
  const [inputQtd, setInputQtd] = useState(0);
  const [mensagem, setMensagem] = useState('');
  const [tipo, setTipo] = useState('');
  const [valido, setValido] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3030/itens/${id}`)
      .then(resp => {
        setInputNome(resp.data.nome);
        setInputQtd(resp.data.qtd);
      })
      .catch(err => {
        console.log(err);
      })
  }, [id]);

  useEffect(() => {
    setValido(inputQtd > 0);
  }, [inputQtd]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // atualiza o estado com base no nome do input
    if (name === 'nome') {
      setInputNome(value);
    } else if (name === 'qtd') {
      setInputQtd(value);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!valido) {
      setMensagem('A quantidade não pode ser menor ou igual a zero!');
      setTipo('erro');
      return;
    }

    axios.put(`http://localhost:3030/itens/${id}`, {nome: inputNome, qtd: inputQtd})
      .then(resp => {
        console.log(resp);
        // redirecionar para outra página
        setMensagem('Dados atualizados com sucesso!');
        setTipo('sucesso');
      })
      .catch(err => {
        console.log(err);
        setMensagem('Erro! Não foi possível atualizar os dados.');
        setTipo('erro');
      })
  }

  return (
    <>
      {mensagem && <Mensagem tipo={tipo} msg={mensagem} />}
      <h1>Editar item</h1>
      <form onSubmit={handleSubmit}>
        <Input  
          type='text'
          name='nome'
          value={inputNome}
          placeholder='Digite o nome do item'
          onChange={handleChange}
        />
        <Input 
          type='number'
          name='qtd'
          value={inputQtd}
          placeholder='Digite a quantidade' 
          onChange={handleChange}
        />
        <Botao 
          type='submit' 
          text='Salvar'
        />
      </form>
    </>
  );
}

export default Editar;