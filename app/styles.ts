import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
`
export const DefaultText = styled.Text`
  font-size: 16px;
  font-family: ${ ({ theme }) => theme.FONTS.BOLD};
  color: ${ ({ theme }) => theme.COLORS.GRAY};
  font-weight: 500;
`

export const DefaultTextContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const Body = styled.View`
  flex: 6;
  width: 100%;
  padding: 10px;
`

export const BottomBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: ${ ({ theme }) => theme.COLORS.BLUE};
  width: 100%;
  
  padding: 10px;
`