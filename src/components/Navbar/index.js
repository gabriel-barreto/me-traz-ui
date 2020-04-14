import React, { useState } from 'react';

import brand from '../../assets/brand-sm.png';

import { useProductsContext } from '../../contexts';
import { Close, Search, Whatsapp } from '../../styles/icons.styles';

import SearchForm from '../SearchForm';

import * as S from './styled';

function Navbar() {
  const [state, setState] = useState({ searchFormVisible: false });
  const { setSearch } = useProductsContext();

  function toggleSearchForm() {
    const searchFormVisible = !state.searchFormVisible;

    setSearch('');
    setState((prev) => ({ ...prev, searchFormVisible }));
  }

  const searchTogglerTitle = state.searchFormVisible
    ? 'Pesquisar Items'
    : 'Fechar pesquisa';

  return (
    <S.Navbar>
      <S.NavBrand src={brand} tilte="Me Traz" alt="Me Traz" />

      <S.NavSearchFormContainer
        className={`${state.searchFormVisible ? '--visible' : ''}`}
      >
        <SearchForm />
      </S.NavSearchFormContainer>

      <S.NavActions>
        <S.NavSearchFormToggler
          onClick={toggleSearchForm}
          alt={searchTogglerTitle}
          title={searchTogglerTitle}
        >
          {state.searchFormVisible ? <Close size={24} /> : <Search size={24} />}
        </S.NavSearchFormToggler>
        <S.NavChatLink
          href="#"
          alt="Entrar em Contato pelo WhatsApp"
          title="Entrar em Contato pelo WhatsApp"
        >
          <S.NavChatLinkIcon>
            <Whatsapp size={24} />
          </S.NavChatLinkIcon>
          <S.NavChatLinkLabel>Entrar em Contato</S.NavChatLinkLabel>
        </S.NavChatLink>
      </S.NavActions>
    </S.Navbar>
  );
}

export default Navbar;
