import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

interface ProductsProviderProps {
  children: ReactNode
}

interface Product {
  id: string;
  productName: string;
  checked: boolean;
}

interface ProductsContextData {
  products: Product[];
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  setProducts: (product: Product[]) => void;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async () => {
      const products = await SecureStore.getItemAsync('products');

      if (products !== null) {
        setProducts(JSON.parse(products));
      }
    }
  }, []);

  function addProduct(product: Product) {
    setProducts([...products, product]);
  }

  function editProduct(product: Product) {
    const updatedProducts = products.map(productItem => {
      if (productItem.id === product.id) {
        return { 
          ...productItem, 
          checked: !product.checked 
        }
      }
    })  

    setProducts(updatedProducts)
  }

  return (
    <ProductsContext.Provider value={{ products, addProduct, editProduct, setProducts }}>
      { children }
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}