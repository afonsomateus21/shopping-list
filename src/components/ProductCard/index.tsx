import { TouchableOpacity, View, Text, Button, TextInput } from "react-native";
import { ButtonTitle, CloseModalButton, Container, Content, ModalContainer, ModalContent, ModalInputContainer, ModalRow, ProductName, SaveProductButton } from "./styles";
import Checkbox from "expo-checkbox";
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Audio } from 'expo-av';
import { Product } from "../../types/product";
import Modal from "react-native-modal";

interface ProductCardProps {
  productCard: Product;
  onCheckBoxChange: ( product: Product ) => void;
  onItemPress: ( product: Product ) => void;
}

export function ProductCard({ productCard, onCheckBoxChange, onItemPress }: ProductCardProps) {
  const [ isChecked, setIsChecked ] = useState(productCard.checked);
  const { products, setProducts } = useProducts();
  const [sound, setSound] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newProductName, setNewProductName] = useState('');

  function toggleModal() {
    setModalVisible(!isModalVisible);
  };

  function handleCheckBoxChange() {
    setIsChecked(!isChecked);
    playSound();
    onCheckBoxChange(productCard);

    checkProduct(productCard);
  }

  function handleCardPress() {
    onItemPress(productCard);
    editProductName(productCard);
  }

  function editProductName(productCard: Product) {
    if (newProductName !== '') {
      const updatedProducts = products.map(productItem => {
        if (productItem.id === productCard.id) {
          return { 
            ...productItem, 
            productName: newProductName 
          }
        }
  
        return productItem;
      })  
  
      setProducts(updatedProducts);
    }
    
    toggleModal();
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('../../assets/confirmation-tone.mp3'));
    setSound(sound);

    await sound.playAsync();
  }

  function checkProduct(productCard: Product) {
    const updatedProducts = products.map(productItem => {
      if (productItem.id === productCard.id) {
        return { 
          ...productItem, 
          checked: !isChecked 
        }
      }

      return productItem;
    })  

    setProducts(updatedProducts);
  }

  function deleteProduct(productCard: Product) {
    const updatedProducts = products.filter((product) => product.id !== productCard.id);

    setProducts(updatedProducts);
  }

  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <ModalContainer>
          <ModalContent>
            <ModalInputContainer>
              <TextInput 
                placeholder="Nome do produto..." 
                onChangeText={setNewProductName}
                value={newProductName}
              />
            </ModalInputContainer>

            <ModalRow>
              <CloseModalButton onPress={toggleModal}>
                <ButtonTitle>Cancelar</ButtonTitle>
              </CloseModalButton>

              <SaveProductButton onPress={handleCardPress}>
                <ButtonTitle>Salvar</ButtonTitle>
              </SaveProductButton>
            </ModalRow>
          </ModalContent>
        </ModalContainer>
      </Modal>

      <Container isSelected={isChecked}>
        <Checkbox
          value={isChecked}
          onValueChange={handleCheckBoxChange}
          color={'#3FAF47'}
        />

        <Content>
          <TouchableOpacity onPress={() => {
            toggleModal();
          }}>
            <ProductName isSelected={isChecked}>
              { productCard.productName }
            </ProductName>
          </TouchableOpacity> 

          <TouchableOpacity
            onPress={() => {
              deleteProduct(productCard)
            }}
          >
            <Ionicons name="close-circle-sharp" size={25} color="#FF8888" />
          </TouchableOpacity>
        </Content>
      </Container>
    </View>
  );
}