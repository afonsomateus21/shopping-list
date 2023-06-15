import styled from "styled-components/native"


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${ ({ theme }) => theme.COLORS.WHITE};
  font-family: ${ ({ theme }) => theme.FONTS.REGULAR};
`

export const ShoppingCount = styled.Text`
  font-size: 16px;
  color: ${ ({ theme }) => theme.COLORS.WHITE};
`