import { useState } from "react";

import axios from "axios";
import Input from "./Input";
import Botao from "./Botao";
import Mensagem from "./Mensagem";

const CadastrarItem = () => {
  const [data, setData] = useState({
    nome: '',
    qtd: 0,
  });
  const [mensagem, setMensagem] = useState('');
  const [tipo, setTipo] = useState('');

  const handleChange = (e) => setData({...data, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3030/itens', data)
      .then(resp => {
        setMensagem('Cadastro feito com sucesso!');
        setTipo('sucesso');
        console.log(resp.data);
      })
      .catch(err => {
        setMensagem('Erro! Não foi possível realizar o cadastro.');
        setTipo('erro');
        console.log(err);
      })
  }

  return (
    <div>
      {mensagem && <Mensagem tipo={tipo} msg={mensagem} />}
      <h1>Cadastrar item</h1>
      <form onSubmit={handleSubmit}>
        <Input  
          type='text'
          name='nome'
          placeholder='Digite o nome do item'
          onChange={handleChange}
        />
        <Input 
          type='number'
          name='qtd'
          placeholder='Digite a quantidade' 
          onChange={handleChange}
        />
        <Botao 
          type='submit' 
          text='Cadastrar'
        />
      </form>
    </div>
  );
}

export default CadastrarItem;