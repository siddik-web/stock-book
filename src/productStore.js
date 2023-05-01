export const products = [
  {
    id: 1,
    title: "Coffee",
    price: 4.99,
  },
  {
    id: 2,
    title: "Mac Book Pro",
    price: 2400.99,
  },
  {
    id: 3,
    title: "iPhone 14",
    price: 1100.99,
  },
  {
    id: 4,
    title: "Camera",
    price: 400.99,
  },
];

export function getProductById(id) {
  let productData = products.find((product) => product.id === id);

  if (productData === undefined) {
    return undefined;
  }

  return productData;
}
