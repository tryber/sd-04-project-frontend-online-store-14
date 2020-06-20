export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((categories) => categories.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
