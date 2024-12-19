import React from "react";
import { useEffect } from "react";
import { createContext } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProduct(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
