import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepostories] = useState([]);

  function handleAddRepository() {
    console.log(newRepo)
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o nome do repositório aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
          src=""
          alt="RENAN URSO" />
        <div>
          <strong>Renan ursao</strong>
          <p>Easy Peasy Highly scalable ReactJS & React Native Forms!</p>
        </div>

        <FiChevronRight size={20}/>
        </a>

      </Repositories>
    </>
    );
};

export default Dashboard
