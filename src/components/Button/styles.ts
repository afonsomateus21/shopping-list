import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${ ({ theme }) => theme.COLORS.WHITE };
`

export const ButtonTitle = styled.Text`
  font-size: 16px;
  color: ${ ({ theme }) => theme.COLORS.BLUE };
`