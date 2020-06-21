export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query === '') {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((response) => response.json());
  }
  if (query && categoryId === '') {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((response) => response.json());
  }
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
}
