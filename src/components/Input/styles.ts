import styled from "styled-components/native";

export const Container = styled.TextInput`
  flex: 1;
  height: 40px;
  color: ${ ({ theme }) => theme.COLORS.GRAY };
  background-color: ${ ({ theme }) => theme.COLORS.WHITE };
  padding: 0 16px;
`