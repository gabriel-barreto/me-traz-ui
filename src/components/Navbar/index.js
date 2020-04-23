import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import brand from '../../assets/brand-sm.png';

import { useProductsContext } from '../../contexts';
import {
  ChevronLeft,
  Close,
  Search,
  Whatsapp,
} from '../../styles/icons.styles';

import SearchForm from '../SearchForm';

import * as S from './styled';

function SearchActionIcon({ isVisible }) {
  return isVisible ? <Close size={24} /> : <Search size={24} />;
}

function Navbar() {
  const [state, setState] = useState({ searchFormVisible: false });
  const { setSearch } = useProductsContext();
  const { pathname } = useLocation();

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
      <S.NavBrandWrapper>
        {pathname !== '/' ? (
          <S.NavGoBackLink alt="Voltar" title="Voltar" to="/">
            <ChevronLeft size={32} />
          </S.NavGoBackLink>
        ) : null}
        <S.NavBrand src={brand} tilte="Me Traz" alt="Me Traz" />
      </S.NavBrandWrapper>

      <S.NavActions>
        {!pathname.includes('sacola') ? (
          <>
            <S.NavSearchFormContainer
              className={`${state.searchFormVisible ? '--visible' : ''}`}
            >
              <SearchForm />
            </S.NavSearchFormContainer>

            <S.NavSearchFormToggler
              alt={searchTogglerTitle}
              title={searchTogglerTitle}
              onClick={toggleSearchForm}
            >
              <SearchActionIcon isVisible={state.searchFormVisible} />
            </S.NavSearchFormToggler>
          </>
        ) : null}

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

SearchActionIcon.defaultProps = { isVisible: false };
SearchActionIcon.propTypes = { isVisible: PropTypes.bool };

export default Navbar;
