import PropTypes from 'prop-types';
import React from 'react';

import { useProductsContext } from '../../contexts';

import * as S from './styled';

function SearchForm({ className }) {
  const { search, setSearch } = useProductsContext();

  function onChangeHandler({ target }) {
    const { value } = target;
    setSearch(value);
  }

  return (
    <S.SearchForm className={className}>
      <S.SearchField
        id="search"
        name="search"
        placeholder="O que posso levar para você hoje?"
        type="text"
        value={search}
        onChange={onChangeHandler}
        required
      />
    </S.SearchForm>
  );
}

SearchForm.defaultProps = { className: '' };
SearchForm.propTypes = { className: PropTypes.string };

export default SearchForm;
