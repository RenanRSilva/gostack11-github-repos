import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (

    <>
    <Header>
      <img src={logoImg} alt="Github Explorer" />
      <Link to="/dashboard">
        <FiChevronLeft size={16}/>
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
      <Header>
        <img src="" alt="RenanUrso" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>descrição do repositório</p>
        </div>
      </Header>
      <ul>
        <li>
          <strong>1808</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>48</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>67</strong>
          <span>Issues Abertas</span>
        </li>
      </ul>
    </RepositoryInfo>

      <Issues>
      <Link
      to='./'>
            <div>
              <strong>asdasd</strong>
              <p>asdasd</p>
          </div>
          <FiChevronRight size={20}/>
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
