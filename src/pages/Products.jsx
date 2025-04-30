import { useSessionCache } from "../utils/useSessionCache";
import { DUMMY_PRODUCTS } from "./Dummy_products";

function fetchProducts() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(DUMMY_PRODUCTS);
      }, 2000);
    });
  }

export function Products() {

  const { data, isLoading, error } = useSessionCache(
    "products",
    fetchProducts
  );
  console.log(data);
  
  return (
    <>
      <h1>Products</h1>
      {error && <h3>Error! {error} </h3>}
      {isLoading && <h3>Is loading ....</h3>}
      <ul>
         {data.map((product) => {
          return (
            <li key={product.id}>
              {product.name} : {product.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}
