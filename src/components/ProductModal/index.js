import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Close } from '../../styles/icons.styles';

import AdditionalItem from './AdditionalItem';
import AddToCartForm from './AddToCardForm';
import ItemsGroup from './ItemsGroup';
import IngredientItem from './IngredientItem';
import * as S from './styled';

function ProductModal({
  additional,
  description,
  ingredients,
  photo,
  price,
  onClose,
  title,
  visible,
}) {
  const [state, setState] = useState({
    additional,
    ingredients: ingredients.map((each) => ({ ...each, selected: true })),
    qtt: 1,
    total: price,
    addedAdditional: [],
  });

  function sumAdditional(addedAdditional = state.addedAdditional) {
    return addedAdditional.reduce(
      (prev, curr) => prev + curr.itemPrice * curr.qtt,
      0,
    );
  }

  function sumOrder(qtt = state.qtt, addedAdditional = state.addedAdditional) {
    const additionalTotal = sumAdditional(addedAdditional);
    return price * qtt + additionalTotal;
  }

  function onQttChange(qtt) {
    return setState((prev) => ({ ...prev, qtt, total: sumOrder(qtt) }));
  }

  function onIngredientToggle({ label, selected }) {
    const { ingredients: updated } = state;
    const ingredient = ingredients.find((each) => each.label === label);
    const index = ingredients.findIndex((each) => each.label === label);
    const payload = { ...ingredient, selected };

    updated.splice(index, 1, payload);
    return setState((prev) => ({ ...prev, ingredients: updated }));
  }

  function onAdditionalChanges({ item, itemPrice, qtt }) {
    const { addedAdditional } = state;
    const foundIndex = addedAdditional.findIndex((each) => each.item === item);

    if (foundIndex > -1)
      addedAdditional.splice(foundIndex, 1, { item, itemPrice, qtt });
    else addedAdditional.push({ item, itemPrice, qtt });

    setState((prev) => ({
      ...prev,
      addedAdditional,
      total: sumOrder(state.qtt, addedAdditional),
    }));
  }

  return (
    <S.ProductModalWrapper className={`${visible ? '--visible' : ''}`}>
      <S.ProductModalOverlay onClick={onClose} />
      <S.ModalDialog>
        <S.ModalDialogHeader>
          <S.HeaderBackground alt={title} title={title} src={photo.url} />
          <S.HeaderTitleContainer>
            <S.HeaderTitle>{title}</S.HeaderTitle>
            <S.HeaderDescriptions>{description}</S.HeaderDescriptions>
          </S.HeaderTitleContainer>

          <S.ModalCloseButton title="Fechar" alt="Fechar" onClick={onClose}>
            <Close size={24} />
          </S.ModalCloseButton>
        </S.ModalDialogHeader>
        <S.ModalDialogBody>
          <ItemsGroup title="Ingredients">
            {ingredients.map(({ label, required, selected }, i) => (
              <IngredientItem
                key={i}
                label={label}
                locked={required}
                state={selected}
                onClick={onIngredientToggle}
              />
            ))}
          </ItemsGroup>
          <ItemsGroup title="Bora turbinar esse pedido?">
            {additional.map(({ label, price: itemPrice }, i) => (
              <AdditionalItem
                key={i}
                label={label}
                price={itemPrice}
                onChange={(qtt) =>
                  onAdditionalChanges({ item: label, itemPrice, qtt })
                }
              />
            ))}
          </ItemsGroup>
        </S.ModalDialogBody>
        <S.ModalDialogFooter>
          <AddToCartForm total={state.total} onQttChange={onQttChange} />
        </S.ModalDialogFooter>
      </S.ModalDialog>
    </S.ProductModalWrapper>
  );
}

ProductModal.defaultProps = {
  additional: [],
  ingredients: [],
  visible: false,
  photo: { url: '' },
};
ProductModal.propTypes = {
  additional: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
    }),
  ),
  photo: PropTypes.shape({ url: PropTypes.string }),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

export default ProductModal;
