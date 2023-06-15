import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  
  ${
    Platform.OS === "android" &&
      `
        elevation: 3;
      `
  }
  
  ${
    Platform.OS === "ios" &&
      `
        shadow-color: #333;
        shadow-offset: 1px 1px;
        shadow-opacity: 0.3;
        shadow-radius: 2px;
      `
  }

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 15px;

  ${(props: ContainerProps) =>
    props.isSelected &&
    css`
      background-color: ${ ({ theme }) => theme.COLORS.GREEN_100 };
      font-weight: bold;
    `};
`

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProductName = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY};

  ${(props: ContainerProps) =>
    props.isSelected &&
    css`
      text-decoration-line: line-through;
    `};
`

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.View`
  width: 80%;
  height: 200px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const ModalRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`

export const ModalInputContainer = styled.View`
  border-radius: 10px;
  border: 1px solid #6E6E6E;
  height: 50px;
  width: 80%;
  padding: 15px;
`

export const CloseModalButton = styled.TouchableOpacity`
  width: 70px;
  height: 30px;
  background-color: ${({ theme }) => theme.COLORS.RED};
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`

export const SaveProductButton = styled.TouchableOpacity`
  width: 70px;
  height: 30px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`

export const ButtonTitle = styled.Text`
  color: ${ ({ theme }) => theme.COLORS.WHITE };
  font-family: ${ ({ theme }) => theme.FONTS.BOLD};
`