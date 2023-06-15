import { Alert, BackHandler, FlatList, Text, View } from "react-native";
import { Body, BottomBar, Container, DefaultText, DefaultTextContainer } from "./styles";
import { Input } from "../src/components/Input";
import { Button } from "../src/components/Button";
import { ProductCard } from "../src/components/ProductCard";
import { useProducts } from "../src/hooks/useProducts";
import { useEffect, useState } from "react";
import { generateUUID } from "../src/utils/uuid";
import * as SecureStore from 'expo-secure-store';
import { Product } from "../src/types/product";

export default function App() {
  const { products, addProduct } = useProducts();
  const [ productName, setProductName ] = useState<string>('');

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Sair do aplicativo',
        'Deseja sair do aplicativo?',
        [
          {
            text: 'Cancelar',
            onPress: () => null,
            style: 'cancel'
          },
          {
            text: 'Sair',
            onPress: () => {
              SecureStore.setItemAsync('products', JSON.stringify(products))
                .then(() => {
                  BackHandler.exitApp();
                });
            }
          }
        ],
        { cancelable: false }
      );

      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const handleItemPress = (item: Product) => {};

  function renderItem({ item }) {
    return (
      <ProductCard 
        key={ item.id }
        productCard={ item }
        onCheckBoxChange={() => {}}
        onItemPress={handleItemPress}
      />
    )
  }

  function handleInputChange() {
    if (productName === '') {
      return;
    }

    const product: Product = {
      id: generateUUID(),
      productName: productName,
      checked: false
    }

    addProduct(product);

    setProductName('')
  }

  return (
    <Container>
      <Body>
        { products.length === 0 ? 
          <DefaultTextContainer>
            <DefaultText>
              Nenhum item na lista
            </DefaultText>
          </DefaultTextContainer> 
          : 
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ () => <View style={{ height: 10 }} /> }
          />
        }
      </Body>

      <BottomBar>
        <Input
          placeholder="Novo item na lista"
          placeholderTextColor={'#6E6E6E'}
          onChangeText={setProductName}
          value={productName}
        />

        <Button
          onPress={handleInputChange}
        >
          <Text>+</Text>
        </Button>
      </BottomBar>
    </Container>
  )
}
