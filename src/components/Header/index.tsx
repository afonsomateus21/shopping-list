import { Text } from "react-native";
import { Container, ShoppingCount, Title } from "./styles";
import { useProducts } from "../../hooks/useProducts";

export function Header(props: any) {
  const { products } = useProducts();

  function countChecked(): number {
    let count = 0;

    products.map((product) => {
      if (product.checked) {
        count ++;
      }
    })

    return count;
  }
  
  return (
    <Container>
      <Title>Lista de compras</Title>
      <ShoppingCount>{ `${countChecked()}/${products.length}` }</ShoppingCount>
    </Container>
  );
}