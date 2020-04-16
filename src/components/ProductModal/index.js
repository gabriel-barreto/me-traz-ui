import React, { useState } from 'react';

import { Close } from '../../styles/icons.styles';

import AdditionalItem from './AdditionalItem';
import AddToCartForm from './AddToCardForm';
import ItemsGroup from './ItemsGroup';
import IngredientItem from './IngredientItem';
import * as S from './styled';

function ProductModal() {
  const title = 'Strogonoff de Frango';
  const description =
    'Porção individual. Strogonoff de Frango num molho cremoso a base' +
    ' de creme de leite e tempero especial com arroz e batata palha num' +
    ' pacote separado.';
  const photo =
    'https://portal-amb-imgs.clubedaana.com.br/2018/07/estrogonofe-de-frango-2-1920x1080.jpg';
  const price = 23.99;

  const ingredients = [
    { label: 'Arroz', required: true, selected: true },
    { label: 'Batata Palha', required: false, selected: true },
    { label: 'Champignom', required: false, selected: true },
  ];
  const additional = [
    { label: 'Coca-Cola Lata (350mL)', price: 4 },
    { label: 'Coca-Cola 500mL', price: 7 },
    { label: 'Coca-Cola 1.5L', price: 8 },
    { label: 'Coca-Cola 2L', price: 9 },
  ];

  const [state, setState] = useState({
    additional,
    ingredients,
    total: price,
    addedAdditional: [],
  });

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

    const additionalTotal = addedAdditional.reduce(
      (prev, curr) => prev + curr.itemPrice * curr.qtt,
      0,
    );
    setState((prev) => ({
      ...prev,
      addedAdditional,
      total: price + additionalTotal,
    }));
  }

  return (
    <S.ProductModalWrapper>
      <S.ModalDialog>
        <S.ModalDialogHeader>
          <S.HeaderBackground alt={title} title={title} src={photo} />
          <S.HeaderTitleContainer>
            <S.HeaderTitle>{title}</S.HeaderTitle>
            <S.HeaderDescriptions>{description}</S.HeaderDescriptions>
          </S.HeaderTitleContainer>

          <S.ModalCloseButton title="Fechar" alt="Fechar">
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
          <AddToCartForm total={state.total} />
        </S.ModalDialogFooter>
      </S.ModalDialog>
    </S.ProductModalWrapper>
  );
}

export default ProductModal;
