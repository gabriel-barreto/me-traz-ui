function mountPayload(items) {
  return items.map(({ _id, addedAdditional, ingredients, qtt }) => ({
    qtt,
    item: _id,
    additional: addedAdditional,
    ingredients: ingredients
      .filter((each) => !each.selected)
      .map(({ label }) => `Sem ${label}`),
  }));
}

export default { mountPayload };
