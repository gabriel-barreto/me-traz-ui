import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

function SearchForm({ className }) {
  function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <S.SearchForm className={className} onSubmit={onSubmitHandler}>
      <S.SearchField
        placeholder="O que posso levar para você hoje?"
        type="text"
        required
      />
    </S.SearchForm>
  );
}

SearchForm.defaultProps = { className: '' };
SearchForm.propTypes = { className: PropTypes.string };

export default SearchForm;
